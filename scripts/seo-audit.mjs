import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, extname, join } from "node:path";

const root = process.cwd();

// Netlify builds on Linux, where paths are case-sensitive, but this audit is
// usually run from Windows, where existsSync() matches regardless of case. Walk
// the tree once and compare against the real spelling so a case mismatch fails
// here instead of in the deploy.
function collectAssets(dir, prefix = "") {
  const found = new Set();
  for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      for (const nested of collectAssets(join(dir, entry.name), rel)) found.add(nested);
    } else {
      found.add(rel);
    }
  }
  return found;
}

const assetPaths = collectAssets(".");
const assetPathsLower = new Map([...assetPaths].map((p) => [p.toLowerCase(), p]));
const origin = "https://www.menshealthlongisland.com";
const htmlFiles = readdirSync(root)
  .filter((file) => extname(file).toLowerCase() === ".html")
  .sort();
const htmlBySlug = new Map(
  htmlFiles.map((file) => [file === "index.html" ? "" : basename(file, ".html"), file]),
);
const errors = [];

function report(file, message) {
  errors.push(`${file}: ${message}`);
}

// JSON.parse silently keeps the last of two identical keys, so duplicates in
// JSON-LD (e.g. two "sameAs" arrays on one Physician) only show up by scanning
// the raw text. Returns the paths of keys repeated within the same object.
function findDuplicateKeys(text) {
  const duplicates = [];
  const stack = []; // one entry per open container: { keys: Set|null, path }
  let i = 0;
  let pendingKey = null;
  const skipWs = () => {
    while (i < text.length && /\s/.test(text[i])) i++;
  };
  const readString = () => {
    let out = "";
    i++; // opening quote
    while (i < text.length && text[i] !== '"') {
      if (text[i] === "\\") {
        out += text.slice(i, i + 2);
        i += 2;
      } else {
        out += text[i++];
      }
    }
    i++; // closing quote
    return out;
  };
  while (i < text.length) {
    skipWs();
    const ch = text[i];
    if (ch === "{" || ch === "[") {
      const top = stack[stack.length - 1];
      const path = top ? `${top.path}.${pendingKey ?? top.index++}` : "$";
      stack.push({ keys: ch === "{" ? new Set() : null, path, index: 0 });
      pendingKey = null;
      i++;
    } else if (ch === "}" || ch === "]") {
      stack.pop();
      pendingKey = null;
      i++;
    } else if (ch === '"') {
      const value = readString();
      skipWs();
      const top = stack[stack.length - 1];
      if (text[i] === ":" && top?.keys) {
        if (top.keys.has(value)) duplicates.push(`${top.path}.${value}`);
        top.keys.add(value);
        pendingKey = value;
        i++;
      } else {
        pendingKey = null;
        if (top && !top.keys) top.index++;
      }
    } else {
      if (ch === "," || ch === ":") pendingKey = ch === ":" ? pendingKey : null;
      i++;
    }
  }
  return duplicates;
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

function normalizeUrl(value) {
  const url = new URL(value, `${origin}/`);
  url.hash = "";
  url.search = "";
  return url.href;
}

const pages = new Map();

for (const file of htmlFiles) {
  const html = readFileSync(join(root, file), "utf8");
  const title = firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = firstMatch(
    html,
    /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i,
  );
  const canonical = firstMatch(
    html,
    /<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
  );
  const robots = firstMatch(
    html,
    /<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i,
  );
  const indexable = !/\bnoindex\b/i.test(robots);
  const expectedSlug = file === "index.html" ? "" : basename(file, ".html");
  const expectedCanonical = `${origin}/${expectedSlug}`;
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;

  if (!title) report(file, "missing <title>");
  if (!description) report(file, "missing meta description");
  if (!canonical) {
    report(file, "missing canonical URL");
  } else if (normalizeUrl(canonical) !== normalizeUrl(expectedCanonical)) {
    report(file, `canonical does not match its published file URL (${canonical})`);
  }
  if (indexable && h1Count !== 1) {
    report(file, `expected exactly one <h1>, found ${h1Count}`);
  }

  if (indexable) {
    let previousLevel = 0;
    for (const match of html.matchAll(/<h([1-6])/gi)) {
      const level = Number(match[1]);
      if (previousLevel && level > previousLevel + 1) {
        report(file, `skipped heading level (<h${previousLevel}> followed by <h${level}>)`);
      }
      previousLevel = level;
    }
  }

  const hreflangs = new Map();
  for (const match of html.matchAll(
    /<link\s+[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
  )) {
    hreflangs.set(match[1].toLowerCase(), normalizeUrl(match[2]));
  }
  if (indexable && (!hreflangs.has("en") || !hreflangs.has("es"))) {
    report(file, "indexable page must declare both English and Spanish hreflang URLs");
  }

  for (const match of html.matchAll(
    /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      JSON.parse(match[1]);
      for (const path of findDuplicateKeys(match[1])) {
        report(file, `duplicate JSON-LD key ${path}`);
      }
    } catch (error) {
      report(file, `invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/\b(?:href|src)=["'](\/[^"'#?]*)[^"']*["']/gi)) {
    const path = match[1].replace(/^\/+|\/+$/g, "");
    if (!path) continue;
    if (/^(images|css|js)\//.test(path) || path === "favicon.ico" || path.endsWith(".pdf")) {
      if (!assetPaths.has(path)) {
        const actual = assetPathsLower.get(path.toLowerCase());
        report(
          file,
          actual
            ? `asset /${path} only differs by case from /${actual} — this resolves on Windows but 404s on Netlify`
            : `missing local asset /${path}`,
        );
      }
      continue;
    }
    const slug = path.endsWith(".html") ? basename(path, ".html") : path;
    if (!htmlBySlug.has(slug)) report(file, `broken internal link /${path}`);
  }

  pages.set(normalizeUrl(expectedCanonical), { file, hreflangs, indexable });
}

for (const [canonical, page] of pages) {
  for (const [language, alternate] of page.hreflangs) {
    const alternatePage = pages.get(alternate);
    if (!alternatePage) {
      report(page.file, `${language} hreflang points to a non-canonical or missing page (${alternate})`);
      continue;
    }
    if (!alternatePage.hreflangs.has("en") || !alternatePage.hreflangs.has("es")) continue;
    if (![...alternatePage.hreflangs.values()].includes(canonical)) {
      report(page.file, `${language} hreflang is not reciprocal with ${alternatePage.file}`);
    }
  }
}

const sitemapPath = join(root, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  report("sitemap.xml", "file is missing");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) =>
    normalizeUrl(match[1]),
  );
  const sitemapSet = new Set(sitemapUrls);
  const expectedSet = new Set(
    [...pages.entries()].filter(([, page]) => page.indexable).map(([url]) => url),
  );

  for (const url of expectedSet) {
    if (!sitemapSet.has(url)) report("sitemap.xml", `missing indexable canonical ${url}`);
  }
  for (const url of sitemapSet) {
    if (!expectedSet.has(url)) report("sitemap.xml", `contains non-canonical or non-indexable URL ${url}`);
  }
  if (sitemapUrls.length !== sitemapSet.size) report("sitemap.xml", "contains duplicate URLs");
}

if (errors.length) {
  console.error(`SEO audit failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `SEO audit passed: ${htmlFiles.length} HTML pages, canonical URLs, hreflang pairs, JSON-LD, internal links, assets, headings, and sitemap coverage are valid.`,
);

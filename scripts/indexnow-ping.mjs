import { execSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

// Pings IndexNow (api.indexnow.org, fanning out to Bing/Yandex/Seznam/etc.) with
// the canonical URLs of pages that changed in this deploy, so search engines
// pick up edits without waiting for their next crawl. Runs after the SEO audit
// in netlify.toml's build command. Never fails the build — a ping is a nice-to-have,
// not a deploy gate.

const root = process.cwd();
const host = "www.menshealthlongisland.com";
const origin = `https://${host}`;

function findKeyFile() {
  const candidates = readdirSync(root).filter(
    (f) => /^[0-9a-f]{32}\.txt$/i.test(f),
  );
  for (const file of candidates) {
    const key = readFileSync(join(root, file), "utf8").trim();
    if (key.toLowerCase() === basename(file, ".txt").toLowerCase()) {
      return { key, file };
    }
  }
  return null;
}

function slugToUrl(htmlFile) {
  const slug = htmlFile === "index.html" ? "" : basename(htmlFile, ".html");
  return `${origin}/${slug}`;
}

function isIndexable(htmlFile) {
  const html = readFileSync(join(root, htmlFile), "utf8");
  const robots = html.match(
    /<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i,
  )?.[1];
  return !robots || !/\bnoindex\b/i.test(robots);
}

function changedHtmlFiles() {
  const from = process.env.CACHED_COMMIT_REF;
  const to = process.env.COMMIT_REF || "HEAD";
  if (!from) return null;
  try {
    const out = execSync(`git diff --name-only ${from} ${to} -- "*.html"`, {
      cwd: root,
      encoding: "utf8",
    });
    return out
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((path) => basename(path));
  } catch {
    return null;
  }
}

async function main() {
  const keyInfo = findKeyFile();
  if (!keyInfo) {
    console.warn("IndexNow: no key file found at site root, skipping ping.");
    return;
  }

  const isNetlifyProd = process.env.NETLIFY && process.env.CONTEXT === "production";
  if (!isNetlifyProd) {
    console.log("IndexNow: not a Netlify production build, skipping ping.");
    return;
  }

  const changed = changedHtmlFiles();
  const targetFiles = (
    changed && changed.length
      ? changed.filter((f) => f.endsWith(".html"))
      : readdirSync(root).filter((f) => f.endsWith(".html"))
  ).filter((f) => {
    try {
      return isIndexable(f);
    } catch {
      return false;
    }
  });

  if (!targetFiles.length) {
    console.log("IndexNow: no changed indexable pages, skipping ping.");
    return;
  }

  const urlList = [...new Set(targetFiles.map(slugToUrl))];

  const body = {
    host,
    key: keyInfo.key,
    keyLocation: `${origin}/${keyInfo.file}`,
    urlList,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    console.log(
      `IndexNow: pinged ${urlList.length} URL(s), status ${response.status}.`,
    );
    if (!response.ok) {
      console.warn(`IndexNow: non-OK response body: ${await response.text()}`);
    }
  } catch (error) {
    console.warn(`IndexNow: ping failed, continuing deploy. (${error.message})`);
  }
}

await main();

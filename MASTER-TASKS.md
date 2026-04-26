# Men's Health Long Island — Master Task List
_Last updated: 2026-04-26 | Add new tasks at the bottom of their priority section_

---

## HIGH PRIORITY — You Do

- [ ] **1. Deploy to Netlify** — `git add ... && git commit -m "..." && git push` (auto-deploys in ~30 sec)
- [ ] **2. GSC: Request Indexing (4 pages)** — search.google.com/search-console → paste each URL → "Request Indexing"
  - https://www.menshealthlongisland.com/hematuria
  - https://www.menshealthlongisland.com/elevated-psa
  - https://www.menshealthlongisland.com/hematuria-es
  - https://www.menshealthlongisland.com/psa-elevado
- [ ] **3. GSC: Resubmit Sitemap** — GSC → Sitemaps → click sitemap.xml → Resubmit
- [ ] **4. Bing Webmaster Tools** — bingwebmaster.com → Add Site → verify ownership → submit sitemap URL
- [ ] **5. Google Business Profile** — business.google.com → update:
  - Add services: "PSA Evaluation," "Hematuria Evaluation," "Erectile Dysfunction," "Penile Implant," "Vasectomy," "Low Testosterone"
  - Languages: mark "Spanish" as spoken
  - Website URL: confirm https://www.menshealthlongisland.com (no trailing slash)
  - Post an update (2x/month minimum)
  - Send review link to patients after positive visits
- [ ] **6. Hospital Directory Links** — Email Sinai Flushing / Northwell / NYU Langone web teams: "Can you add menshealthlongisland.com to my provider directory listing?" (one link from a hospital .org = 50 patient directory links worth of authority)
- [ ] **11. Microsoft Clarity** — clarity.microsoft.com → New Project → copy the 10-char Project ID → give to Claude → 5-min install on all pages

---

## HIGH PRIORITY — Claude Does

- [ ] **A. Fix Accessibility / Schema Errors** — Clarify which one:
  - ADA accessibility (missing alt text, contrast, ARIA labels, keyboard nav)
  - JSON-LD rich result errors (Google Rich Results Test failures)
  - hreflang mismatches (GSC warnings on EN/ES page pairs)
  - GA4 event tracking (form submissions, phone clicks not showing in dashboard)
- [ ] **B. Patient-tone update on remaining pages** — same framework as hematuria + PSA:
  - ed.html + disfuncion-erectil.html
  - peyronies.html + enfermedad-peyronie.html
  - low-testosterone.html + testosterona-baja.html
  - bph.html + prostata-agrandada.html
  - oab.html + vejiga-hiperactiva.html
  - vasectomy.html + vasectomia.html
  - premature-ejaculation.html + eyaculacion-precoz.html

---

## MEDIUM PRIORITY — You Do

- [ ] **7. Bing Places** — bingplaces.com → claim/create listing → NAP must match GBP letter-for-letter
- [ ] **8. Apple Maps Connect** — mapsconnect.apple.com → claim/verify → update URL + services (iPhone Siri/Maps traffic)
- [ ] **9. Medical Society Directories** — confirm menshealthlongisland.com URL is listed at:
  - Long Island Urological Society
  - NY State Medical Society
  - American Urological Association member directory
  - Healthgrades, Doximity, Zocdoc, US News Health, Vitals, RateMDs
- [ ] **10. GSC Email Alerts** — GSC → Settings (gear) → Notifications → enable "Coverage issues detected" + "Manual actions"

---

## MEDIUM PRIORITY — You Provide, Claude Builds

- [ ] **Video Embeds (Dwell Time hack)** — Provide YouTube video IDs (the part after `?v=`) for each service topic → Claude embeds on respective pages (ed.html, low-testosterone.html, peyronies.html, etc.)
- [ ] **AEO H2 Rewrites** — For ed.html and low-testosterone.html: tell Claude your top 2–3 patient questions → Claude writes 40-word answers formatted for AI search engines
- [ ] **Blog Posts** — Dictate a Q&A on ED, Low T, or vasectomy → Claude builds the full article with schema
- [ ] **AggregateRating Update** — Check current Google review count and star average → give Claude the numbers → updated on all pages

---

## MEDIUM PRIORITY — Claude Does

- [ ] **C. FAQ Schema on remaining pages** — ed.html, low-testosterone.html, peyronies.html + Spanish counterparts (expands rich snippet footprint in search results)
- [ ] **D. E-E-A-T Schema Improvements** — Board certification, fellowship, residency → Physician JSON-LD; author schema on article pages; research publication structured data
- [ ] **E. Internal Linking Audit** — Every page links to 2–3 related pages (hematuria ↔ elevated-psa, psa-elevado ↔ prostata-agrandada, etc.)
- [ ] **F. Spanish Article FAQ Schema** — No content needed from you, Claude can build anytime

---

## LOW PRIORITY — You Do

- [ ] **12. Patient Reviews (ongoing)** — After each positive visit, send Google review link. Goal: 50+ reviews at 4.5+ stars. This is the single biggest local pack ranking factor.
- [ ] **13. Spanish Community Outreach** — Post in Nassau County Spanish-language Facebook groups (1x/month, zero cost, high-intent patients)
- [ ] **14. Local Media Pitch** — Newsday, Long Island Business News, local health column → cold pitch to health reporter (one article = high-authority backlink + referral traffic)

---

## LOW PRIORITY — Claude Does

- [ ] **G. Core Web Vitals Optimization** — Audit LCP, CLS, INP; defer non-critical scripts, compress images, reduce render-blocking CSS
- [ ] **H. Open Graph Image Audit** — Add og:image tags where missing (controls the image shown when links are shared on social/iMessage)
- [ ] **I. Urologo-nassau page** — New Spanish location page for Nassau County

---

## COMPLETED ✅

### April 2026

- [x] **hematuria.html** — Patient-tone update: hero, intro, stats, badges, causes, workup, FAQ (visible + JSON-LD), CTA
- [x] **hematuria-es.html** — Same in Spanish; bladder cancer card changed from highlight-card to regular card
- [x] **elevated-psa.html** — Patient-tone update: stats, badges, step labels, FAQ, CTA
- [x] **psa-elevado.html** — Same in Spanish; all FAQ visible text, JSON-LD Q2 answer, CTA heading + paragraph
- [x] **sitemap.xml** — lastmod updated to 2026-04-26 for all 4 updated pages
- [x] **urologist-rockville-centre.html / urologist-carle-place.html** — Real Google Maps pin, geo coords, community strip, mobile drawer nav fully wired
- [x] **urologo-rockville-centre.html / urologo-carle-place.html** — Same in Spanish; ENG button correct in drawer and desktop nav
- [x] **All 34 pages** — Full 95-town areaServed canonical list standardized (index.html lines 44–140 is canonical source)
- [x] **GitHub → Netlify** — Auto-deploy pipeline active
- [x] **Google Search Console** — Sitemap submitted
- [x] **netlify.toml** — Clean URLs (no .html extensions in browser)
- [x] **Nav & Footer links** — Fixed (no .html, Home → `/`)

### Earlier

- [x] Home page `<title>` and `<h1>` updated (Rockville Centre / Carle Place priority)
- [x] Medical Specialty: Urology schema markup added to index.html
- [x] Education articles audited for human-first language (E-E-A-T)

---

_To add a task: paste it under the correct priority section with `- [ ]`. To mark done: change to `- [x]` and move to Completed._

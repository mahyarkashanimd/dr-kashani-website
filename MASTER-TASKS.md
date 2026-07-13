# Men's Health Long Island — Master Task List
_Last updated: 2026-06-21 | Add new tasks at the bottom of their priority section_

---

## HIGH PRIORITY — You Do

- [ ] **2. GSC: Request Indexing (key pages)** — search.google.com/search-console → URL Inspection → paste each URL → "Request Indexing" (~10/day limit, do highest-priority first)
  - https://www.menshealthlongisland.com/ed
  - https://www.menshealthlongisland.com/low-testosterone
  - https://www.menshealthlongisland.com/penile-implant
  - https://www.menshealthlongisland.com/about
  - https://www.menshealthlongisland.com/inicio
  - https://www.menshealthlongisland.com/hematuria
  - https://www.menshealthlongisland.com/elevated-psa
  - https://www.menshealthlongisland.com/hematuria-es
  - https://www.menshealthlongisland.com/psa-elevado
- [ ] **4. Bing Webmaster Tools** — bingwebmaster.com → Add Site → verify ownership → submit sitemap URL → use "Import from Google Search Console" to pull all GSC settings instantly
- [ ] **5. Google Business Profile** — business.google.com → update:
  - Add services: "PSA Evaluation," "Hematuria Evaluation," "Erectile Dysfunction," "Penile Implant," "Vasectomy," "Low Testosterone"
  - Languages: mark "Spanish" as spoken
  - Website URL: confirm https://www.menshealthlongisland.com (no trailing slash)
  - Post an update (2x/month minimum)
  - Send review link to patients after positive visits
- [ ] **6. Hospital Directory Links** — Email Sinai Flushing / Northwell / NYU Langone web teams: "Can you add menshealthlongisland.com to my provider directory listing?" (one link from a hospital .org = 50 patient directory links worth of authority)
- [ ] **11. Microsoft Clarity** — clarity.microsoft.com → New Project → copy the 10-char Project ID → give to Claude → 5-min install on all pages
- [x] **12. Priapism wording decision** — Resolved 2026-07-12: unified to "beyond 4 hours" on both pages (HTML + FAQ schema).
- [ ] **13. New-page photos** — penile-doppler + penile-injections currently reuse the ED page's two stock photos (erectile-dysfunction-consultation + mens-sexual-health-specialist). Dr. Kashani reviewing page content first; will select images after.
- [ ] **14. See [SEO-ROADMAP.md](SEO-ROADMAP.md)** — full #1-ranking strategy added 2026-07-11 (entity schema done; next: Answer Blocks, GBP cadence, content clusters).

---

## HIGH PRIORITY — Claude Does

- [x] **A. Twitter/X Card meta tags** — Added to 59 pages (4 skipped — no OG tags: privacy-policy, politica-privacidad, success, success-es).
- [x] **B. og:image:width + og:image:height tags** — Added 1200×630 to all 59 pages with OG tags.
- [x] **P2a. /penile-doppler page created** — Full service page: 5 schema blocks (Physician 95-town, MedicalProcedure, BreadcrumbList, WebPage/speakable, FAQPage 10 Q&As), ADA-compliant, mobile drawer, sitemap entry added. **AWAITING USER REVIEW before nav rollout.**
- [x] **P5. low-testosterone.html FAQ expanded** — 6 → 10 Q&As. Added: Can low T cause ED, Can younger men have low T, Urologist vs. Low T clinic, What happens if I stop TRT. JSON-LD FAQPage schema also updated. **AWAITING USER REVIEW.**
- [x] **P6. Create /penile-injections page** — New service page for penile injection therapy (Trimix, Bimix, Alprostadil). Same full structure as penile-doppler.html: 5 schemas, FAQ, mobile drawer, ADA-compliant. Spanish equivalent (`/inyecciones-peneanas` or similar) to follow once English is approved. Cross-link from ed.html, penile-doppler.html, penile-implant.html.
- [ ] **P2b. Nav rollout for /penile-doppler** — Once page is approved: update mega-dropdown on all ~60 HTML pages to add `/penile-doppler` under "Erectile Dysfunction" (between ED Overview and Penile Implants). Also update Spanish pages' mobile drawer sub-panel.
- [ ] **P2d. Spanish version of /penile-doppler** — Once English page is approved, create `/doppler-peneano` (or confirm preferred slug). Mirror all content, schemas, and FAQ in Spanish. Add hreflang pair to both pages, update EN/ES URL pair table in CLAUDE.md, add ESP↔ENG buttons, add to sitemap.xml, and update nav on all Spanish pages.
- [ ] **P6b. Spanish version of /penile-injections** — Once English page approved, create `/inyecciones-peneanas` (or confirm preferred slug). Mirror all content, schemas, FAQ in Spanish. Add hreflang pair, ESP↔ENG buttons, nav on all Spanish pages, sitemap entry.
- [ ] **P5b. Mirror Low T FAQ expansion into testosterona-baja.html** — Once low-testosterone.html FAQ is approved, translate the 4 new Q&As into Spanish and add them to both the HTML faq-list and the JSON-LD FAQPage schema in `testosterona-baja.html`.
- [ ] **P2c. Cross-links for /penile-doppler** — Once page is approved, add contextual links on:
  - **ed.html**: In the "treatment options" section, add a link from the "Penile Doppler Ultrasound" treatment card to `/penile-doppler`
  - **penile-implant.html**: In the pre-surgical evaluation content, add a sentence linking to `/penile-doppler`
  - **peyronies.html**: In the diagnosis section, mention Doppler is used for Peyronie's evaluation with a link to `/penile-doppler`
  - **disfuncion-erectil.html** (Spanish ED): Same as ed.html but in Spanish
- [ ] **C. Patient-tone update on remaining pages** — same framework as hematuria + PSA:
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
- [ ] **8. Apple Maps Connect** — mapsconnect.apple.com → claim/verify → update URL + services (iPhone/Siri/Maps traffic). Also go to business.apple.com → claim listing → fill in address, phone (516-390-2850), hours, specialties
- [ ] **9. Facebook Business Page** — business.facebook.com → create page → add website URL, phone, hours, both office addresses. Once created, give Claude the page URL to add to schema `sameAs` array on all pages.
- [ ] **10. Medical Society Directories** — confirm menshealthlongisland.com URL is listed at:
  - Long Island Urological Society
  - NY State Medical Society
  - American Urological Association member directory
  - Healthgrades, Doximity, Zocdoc, US News Health, Vitals, RateMDs
- [ ] **GSC Email Alerts** — GSC → Settings (gear) → Notifications → enable "Coverage issues detected" + "Manual actions"

---

## MEDIUM PRIORITY — You Provide, Claude Builds

- [ ] **og:image Landscape Version** — The current og:image is a portrait headshot; Facebook/X need 1200×630px landscape for proper card preview. Provide a landscape photo of Dr. Kashani (or hero image crop) → Claude updates og:image tags sitewide.
- [ ] **Video Embeds (Dwell Time hack)** — Provide YouTube video IDs (the part after `?v=`) for each service topic → Claude embeds on respective pages (ed.html, low-testosterone.html, peyronies.html, etc.)
- [ ] **AEO H2 Rewrites** — For ed.html and low-testosterone.html: tell Claude your top 2–3 patient questions → Claude writes 40-word answers formatted for AI search engines
- [ ] **Blog Posts** — Dictate a Q&A on ED, Low T, or vasectomy → Claude builds the full article with schema
- [ ] **AggregateRating Update** — Check current Google review count and star average → give Claude the numbers → updated on all pages

---

## MEDIUM PRIORITY — Claude Does

- [ ] **P9. Update sitemap.xml lastmod dates** — Most pages still show `2026-05-06`. Update to reflect actual last-edit dates for all recently changed pages (penile-doppler, low-testosterone, elevated-psa, hematuria, etc.).
- [ ] **D. FAQ Schema on remaining pages** — ed.html, low-testosterone.html, peyronies.html + Spanish counterparts (expands rich snippet footprint in search results)
- [ ] **E. E-E-A-T Schema Improvements** — Board certification, fellowship, residency → Physician JSON-LD; author schema on article pages; research publication structured data
- [ ] **F. Internal Linking Audit** — Every page links to 2–3 related pages (hematuria ↔ elevated-psa, psa-elevado ↔ prostata-agrandada, etc.)
- [ ] **G. Spanish Article FAQ Schema** — No content needed from you, Claude can build anytime
- [ ] **H. sameAs Links Update** — Once Facebook/Instagram/LinkedIn pages are created, add profile URLs to Physician schema `sameAs` array on all pages

---

## LOW PRIORITY — You Do

- [ ] **12. Patient Reviews (ongoing)** — After each positive visit, send Google review link. Goal: 50+ reviews at 4.5+ stars. This is the single biggest local pack ranking factor.
- [ ] **13. Spanish Community Outreach** — Post in Nassau County Spanish-language Facebook groups (1x/month, zero cost, high-intent patients)
- [ ] **14. Local Media Pitch** — Newsday, Long Island Business News, local health column → cold pitch to health reporter (one article = high-authority backlink + referral traffic)

---

## LOW PRIORITY — Claude Does

- [ ] **I. Core Web Vitals Optimization** — Audit LCP, CLS, INP; defer non-critical scripts, compress images, reduce render-blocking CSS
- [ ] **J. Urologo-nassau page** — New Spanish location page for Nassau County

---

## FUTURE / VERY LOW PRIORITY — Only if redesigning or doing major updates

- [ ] **K. CSS/JS Consolidation** — Move all inline `<style>` blocks (drawer, reveal animations) into `style.css` and all inline `<script>` blocks (drawer logic) into `main.js`. Eliminates ~37,000 lines of duplication across 63 files. Only worth doing if: (a) global style needs to change, or (b) site is being rebuilt. Risk: high — requires touching every HTML file.
- [ ] **L. Office Address / Phone Find-Replace** — If office location changes, do a global find-and-replace in all 63 HTML files for the old address → new address, and old phone → new phone. Schema + footer + header all need updating. (Note: do this when needed, not in advance.)

---

## COMPLETED ✅

### June 2026

- [x] **SEO Audit (Priority 1 & 3 — already done)** — Confirmed penile-implant.html already had MedicalProcedure + FAQPage schema; urologist-rockville-centre.html and urologist-carle-place.html already had full MedicalBusiness schema with geo, hasMap, aggregateRating, openingHours, parentOrganization. No changes needed.
- [x] **/penile-doppler page created** — New service page for penile Doppler ultrasound. ADA-compliant, all schemas, 10-item FAQ, sitemap.xml updated. Pending user review before nav/cross-link rollout.
- [x] **low-testosterone.html FAQ expanded** — 6 → 10 Q&As (added: low T + ED, younger men, urologist vs. Low T clinic, stopping TRT). Pending user review.

### May 2026

- [x] **netlify.toml redirect loop fixed** — Removed conflicting `/*.html → /:splat` redirect and explicit non-www→www redirect rule; `pretty_urls = true` handles clean URLs; Netlify dashboard set to `www` as primary domain handles the non-www redirect natively
- [x] **Google Search Console** — Sitemap re-submitted and confirmed working (status: Success)

### April 2026

- [x] **hematuria.html** — Patient-tone update: hero, intro, stats, badges, causes, workup, FAQ (visible + JSON-LD), CTA
- [x] **hematuria-es.html** — Same in Spanish; bladder cancer card changed from highlight-card to regular card
- [x] **elevated-psa.html** — Patient-tone update: stats, badges, step labels, FAQ, CTA
- [x] **psa-elevado.html** — Same in Spanish; all FAQ visible text, JSON-LD Q2 answer, CTA heading + paragraph
- [x] **sitemap.xml** — lastmod updated for all pages; www canonical URLs throughout
- [x] **urologist-rockville-centre.html / urologist-carle-place.html** — Real Google Maps pin, geo coords, community strip, mobile drawer nav fully wired
- [x] **urologo-rockville-centre.html / urologo-carle-place.html** — Same in Spanish; ENG button correct in drawer and desktop nav
- [x] **All 34 pages** — Full 95-town areaServed canonical list standardized (index.html lines 44–140 is canonical source)
- [x] **GitHub → Netlify** — Auto-deploy pipeline active
- [x] **Google Search Console** — Sitemap first submitted
- [x] **netlify.toml** — Clean URLs (no .html extensions in browser)
- [x] **Nav & Footer links** — Fixed (no .html, Home → `/`)
- [x] **nav-eng-item class** — Added to all 25 Spanish pages missing it; ESP button hidden on mobile via CSS
- [x] **Services mega dropdown** — Fixed on 6 pages that had old flat format (quiz, contact, success, cuestionario, contacto, success-es)
- [x] **Spanish schema** — MedicalCondition + BreadcrumbList + MedicalWebPage + FAQPage added to all 12 Spanish condition pages
- [x] **Image optimization** — Doctor photos renamed to SEO filenames; all service images renamed; alt text updated across 24 pages; width/height attributes on all 107 img tags; loading="lazy" on all missing img tags
- [x] **Internal linking** — article-injections-step-by-step.html ↔ article-penile-injection-trimix.html (EN + ES)

### Earlier

- [x] Home page `<title>` and `<h1>` updated (Rockville Centre / Carle Place priority)
- [x] Medical Specialty: Urology schema markup added to index.html
- [x] Education articles audited for human-first language (E-E-A-T)

---

_To add a task: paste it under the correct priority section with `- [ ]`. To mark done: change to `- [x]` and move to Completed._

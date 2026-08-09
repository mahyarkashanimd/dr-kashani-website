# Road to #1 — Urology & Men's Health on Long Island
_Master SEO / AEO / GEO strategy for menshealthlongisland.com_
_Created: 2026-07-11 · Last full audit: 2026-08-09 · Companion to [MASTER-TASKS.md](MASTER-TASKS.md) (tactical checklist). This file is the strategy; MASTER-TASKS is the queue._

---

## The Three Battles

To be the #1 result for "urologist Long Island" / "best men's health doctor Long Island," the site has to win in three places at once:

1. **Traditional SEO** — Google's classic blue links (rankings, backlinks, Core Web Vitals)
2. **AI Overviews / SGE** — being the cited source inside Google's AI summaries
3. **Answer Engines (AEO/GEO)** — being the recommendation when someone asks ChatGPT, Perplexity, or SearchGPT "who's the best TRT doctor on Long Island?"

All three reward the same underlying thing: **one unambiguous, verifiable entity** (Dr. Mahyar Kashani = NPI 1568953925 = 2 GBP listings = these social accounts = this website) plus **extractable, fact-dense answers** on every page.

---

## Current State (audited 2026-08-09)

**Already strong — do not rebuild:**
- 66 HTML pages total; 64 are indexable and represented in the sitemap
- Physician JSON-LD with 95-town areaServed on every service page
- MedicalBusiness schema with geo, hasMap, per-location hours on all 4 location pages
- Full head stack sitewide: canonical, hreflang EN↔ES, OG + Twitter cards, GA4
- FAQPage, BreadcrumbList, speakable, MedicalProcedure/MedicalCondition blocks on service pages
- Bilingual parity across ~30 page pairs — a moat almost no competing practice has
- ADA/WCAG program (contrast-safe colors, alt text, labeled forms)
- sameAs entity web on the homepage: socials + Mount Sinai + Healthgrades + US News + **NPI registry** + both Google Maps listings
- Unique titles and meta descriptions on every page
- No missing local assets or image alt text; all JSON-LD blocks parse successfully
- Live homepage is indexed, visually polished, and produced no browser-console errors during the audit

**Fixed in the 2026-08-09 technical pass:**
- Consolidated the injection step-by-step article on `/article-injections-step-by-step`; its former canonical URL returned a live Netlify 404
- Consolidated the Xiaflex article on `/article-peyronies`; its former canonical URL also did not map to a source file
- Added permanent 301 redirects from `/penile-injections-step-by-step` and `/peyronies-xiaflex`
- Synchronized canonicals, Open Graph URLs, reciprocal English/Spanish hreflang tags, internal links, and sitemap entries
- Fixed the one confirmed broken internal article link
- Added the missing H1 headings to `/quiz` and `/cuestionario` while preserving their visual styling
- Updated sitemap `lastmod` only for pages substantively changed in this pass
- Added `scripts/seo-audit.mjs` and made it a Netlify pre-deploy check; it validates all 66 pages for canonical alignment, hreflang reciprocity, JSON-LD, H1 count, internal links, local assets, and sitemap coverage

**Fixed in the 2026-07-11 pass (historical):**
- `@id: #physician` + full canonical sameAs list added to every Physician schema that lacked it (21 pages: all 6 English articles, research, and 14 Spanish service pages) — every page now feeds ONE entity instead of orphan duplicates
- about.html + sobre-el-doctor.html Physician schema enriched with **NPI identifier, alumniOf (SUNY Downstate MD + residency, Lenox Hill fellowship), memberOf Mount Sinai** — the E-E-A-T core the AI engines look for
- All 4 location pages: added sameAs linking each office to its own Google Maps/GBP listing + socials
- sitemap.xml: added the 4 location pages (they were missing entirely — critical for local rankings)
- penile-injections.html: fixed HTML entity inside JSON-LD name

**Fixed in the 2026-07-12 follow-up pass:**
- Priapism threshold unified to **4 hours** everywhere (penile-doppler.html HTML + FAQ schema now match penile-injections.html)
- Deleted `Difference.html` (stale scratch file, not in sitemap, broken favicon ref)
- Removed the ambiguous single `openingHours` field from the 16 pages using the shared sitewide Physician block — it only ever reflected RVC's schedule and misrepresented Carle Place (different hours). The two location pages already carry correct, distinct per-office hours and remain the authoritative source; a single Physician entity spanning two addresses with different hours can't honestly carry one flat hours list.

**Current opportunities, in priority order:**
1. Use GSC query and CTR data to shorten and sharpen priority titles. The audit found 43 titles over 70 characters; this is a click-through/readability opportunity, not a blanket penalty.
2. Tune priority meta descriptions from GSC evidence. The audit found 52 over 180 characters; Google may truncate or replace them, so do not mechanically rewrite all 52.
3. Replace the generic social preview image used by 62 pages with relevant 1200×630 images for major services and articles.
4. Add `max-image-preview:large` to indexable content and provide strong landscape images for social sharing and Google Discover eligibility.
5. Add visible “written and medically reviewed by Dr. Kashani” information plus `dateModified` and `lastReviewed` to articles when they receive a substantive physician review.
6. Use Search Console's Core Web Vitals report and PageSpeed Insights before making performance changes; the code audit alone cannot substitute for field data.
7. Continue strengthening high-intent clusters—especially penile implant, Peyronie's disease, and erectile dysfunction—rather than publishing generic posts for freshness.

---

## Phase 1 — Technical Foundation (code; this week)

| # | Item | Status |
|---|------|--------|
| 1.1 | Entity unification: one `#physician` @id + sameAs on every page | ✅ Done 2026-07-11 |
| 1.2 | Credentials in schema (NPI, alumniOf, fellowship) on about pages | ✅ Done 2026-07-11 |
| 1.3 | Location pages in sitemap + GBP sameAs | ✅ Done 2026-07-11 |
| 1.4 | Approve the 2 new pages → nav rollout on all ~60 pages (P2b) | Pending your review |
| 1.5 | Resolve priapism wording (4h) | ✅ Done 2026-07-12 |
| 1.6 | Canonical/redirect repair for the two article aliases | ✅ Done locally 2026-08-09 |
| 1.7 | Quiz H1 repair + honest sitemap dates | ✅ Done locally 2026-08-09 |
| 1.8 | Sitewide deploy-time SEO audit | ✅ Done locally 2026-08-09 |
| 1.9 | Commit + push + deploy to Netlify, then GSC “Request Indexing” on changed article URLs | Next |

## Phase 2 — GEO: Answer-First Page Structure (code; weeks 1–3)

AI engines don't read pages — they extract. Each priority service page gets an **Answer Block** directly under the H1/hero:

- 2–3 sentence direct answer to the page's core question ("What is the best treatment for ED that doesn't respond to pills?"), naming **Dr. Kashani, the service, and the locations** in extractable plain text
- A compact fact table (procedure time, anesthesia, recovery, insurance, locations) — tables are the single most-extracted format
- Keep existing FAQPage schema in sync with visible FAQ text (already true — maintain it)

Rollout order (highest-intent money pages first):
1. `/penile-implant` + `/implante-peneano` (IPP is the flagship)
2. `/ed` + `/disfuncion-erectil`
3. `/low-testosterone` + `/testosterona-baja`
4. `/peyronies` + `/enfermedad-peyronie`
5. `/vasectomy`, `/vasectomy-reversal`, `/bph` + Spanish pairs

Rule: every fact in an Answer Block must be specific and verifiable (numbers, names, places) — AI engines score density of attributable facts, not adjectives.

## Phase 3 — Local Dominance / AEO (mostly Dr. Kashani; ongoing)

The location pages + GBP listings are what win "near me" and "best urologist in ___" queries.

- **GBP is 70% of local.** Weekly: post an update, answer Q&A, request reviews with the direct link. Keep services list synced to the site's service pages (add "Penile Doppler Ultrasound" and "Penile Injection Therapy" as GBP services once pages go live in nav).
- **NAP discipline:** RVC = 2 Lincoln Ave Suite 102 / 516-390-2850 · CP = 393-401 Old Country Rd / 516-877-0977 — letter-for-letter identical on GBP, Bing Places, Apple Maps, Healthgrades, Vitals, Zocdoc, WebMD, CastleConnolly.
- **Location pages get Answer Blocks too:** "Looking for a urologist in Rockville Centre?" → direct 3-sentence answer + parking/train directions (LIRR stops are hyper-local gold: "2 blocks from the Rockville Centre LIRR station").
- Consider one town-level paragraph per surrounding town on location pages (Oceanside, Lynbrook, Garden City…) — NOT doorway pages, just genuine "patients from X" content.

## Phase 4 — Content Clusters & E-E-A-T (code + content; months 1–3)

Two clusters prove topical authority for the money keywords:

**Peyronie's cluster** — pillar: `/peyronies`
- Existing: article-peyronies (Xiaflex), penile-doppler (plaque mapping section)
- Add: "Peyronie's traction therapy at home," "Peyronie's surgery: plication vs. grafting vs. implant," "Is my curvature normal?" self-assessment
- Every spoke links up to the pillar and sideways to one other spoke; pillar links down to all

**IPP cluster** — pillar: `/penile-implant`
- Existing: ed, penile-doppler (pre-surgical), penile-injections (when injections stop working)
- Add: "IPP surgery: what recovery actually looks like week by week" (Experience signal — this is what E-E-A-T's first E means), "Malleable vs. inflatable implants," "Penile implant satisfaction rates: what studies show," IPP patient-journey FAQ
- Author byline block on every article: photo, "Fellowship-trained, Lenox Hill Hospital," link to /about — plus `author` → `#physician` @id in Article schema (already the pattern)

**YMYL trust page:** an editorial-policy blurb on /about ("All content written and medically reviewed by Dr. Mahyar Kashani, MD") + `lastReviewed` dates on articles.

## Phase 5 — The Social Flywheel & Authority (Dr. Kashani; ongoing)

- Record 60-second answers to exact patient questions already answered on the site (for example, “Does a penile Doppler hurt?”). Embed each video on its matching service page with a transcript and VideoObject schema added by Codex.
- TikTok/IG clips of the same content; all profiles link to the site (already in sameAs — the loop is closed).
- **Backlink targets that actually move medical rankings:** Mount Sinai profile → site link (done), hospital directory pages (MASTER-TASKS #6), local press ("Long Island Herald men's health Q&A"), Nassau County Medical Society, podcast guesting (already did Road to Resilience — get the site linked in show notes).
- Request genuine reviews for both GBP listings without incentives or suggested wording; respond professionally without disclosing patient information.

### Monthly article-to-social package

One medically reviewed topic should produce a coordinated package instead of unrelated posts:

1. One substantial English article based on GSC demand and real patient questions
2. One genuinely localized Spanish version after medical review
3. One 3–5 minute YouTube outline and transcript
4. Three 30–60 second Reels/TikToks/Shorts scripts
5. One Google Business Profile update
6. One carousel or FAQ graphic brief
7. Internal links from the pillar service page and related articles
8. Page-specific metadata, social image, and VideoObject schema when the video is published

**Recommended first package:** “Penile Implant Recovery: What to Expect Week by Week.” It supports the highest-intent implant page and provides useful first-hand clinical context that generic competitor content cannot easily reproduce.

---

## Division of Labor

| Codex handles in the repository | Dr. Kashani / staff handles externally |
|---|---|
| Technical audits, redirects, schema, sitemap, canonical and hreflang maintenance | Medical review and final approval of all patient-facing clinical content |
| Internal linking, Answer Blocks, metadata, and content-cluster architecture | Google Business Profile information, services, posts, Q&A, and privacy-safe review replies |
| English article drafts and Spanish localization | Record videos and supply original office/physician imagery |
| Social captions, video scripts, GBP post drafts, and graphic briefs | Publish social/GBP content and engage with the audience personally |
| Video embeds, transcripts, and VideoObject schema | Provide YouTube URLs after publication |
| GSC/GA4 analysis after exports are placed in the project | Export GSC queries/pages and GA4 landing-page conversions monthly |
| Core Web Vitals code improvements after field data identifies affected templates | Monitor both GBP listings and report current review count/rating |
| Keep sitemap `lastmod` honest for substantive changes | Request genuine reviews without incentives or scripted keywords |
| Prepare backlink target lists and outreach drafts | Contact Mount Sinai, associations, directories, podcasts, and local media |

---

## Recurring Tasks & Automation Candidates

SEO is an operating process, not a one-time build. Use the cadence below to keep technical health, content quality, local visibility, and measurement moving together.

| Task | Cadence | Who | Automatable? |
|---|---|---|---|
| GBP/social content pack draft | Weekly | Codex drafts; Dr. Kashani approves/publishes | Drafting: yes; publishing: no |
| Respond to new GBP reviews | Weekly | Dr. Kashani | No — patient-facing, needs a real reply |
| Send review-request link to recent patients | Weekly | Dr. Kashani / staff | No — requires patient contact information and human oversight |
| GBP Q&A monitoring (answer new questions) | Weekly | Dr. Kashani | No |
| Canonical, hreflang, JSON-LD, H1, link, asset, and sitemap audit | Every Netlify build | `scripts/seo-audit.mjs` | **Yes — active locally as of 2026-08-09** |
| NAP consistency spot-check (GBP, Bing, Apple Maps, directories match site) | Monthly | Dr. Kashani / staff | No unless account access is connected |
| GSC query/impression and GA4 conversion exports | Monthly | Dr. Kashani exports; Codex analyzes | Partially |
| AI-answer visibility spot-check | Monthly | Codex | Yes, but treat as directional rather than precise rank tracking |
| New review count/rating check against visible site claims and schema | Monthly | Dr. Kashani reports; Codex updates | Partially |
| Backlink outreach (hospital directories, press, podcasts) | Quarterly | Dr. Kashani | No |
| One content-cluster article plus social package | Monthly | Codex drafts; Dr. Kashani medically reviews | Drafting: yes; medical sign-off/publishing: no |
| Refresh one existing article/service page from GSC evidence | Monthly | Codex + Dr. Kashani | Partially |
| Full technical, content, competitor, and conversion audit | Quarterly | Codex + Dr. Kashani | Partially |
| Medical accuracy review and `lastReviewed` update | Twice yearly or after material guidance changes | Dr. Kashani + Codex | Medical decision: no |

### Recommended Codex scheduled tasks

1. **Monthly technical health report — first of each month, 9:00 AM ET.** Run the repository audit, inspect new link/canonical/schema problems, and report findings without publishing or pushing changes.
2. **Monthly editorial opportunity report — first Friday, 9:00 AM ET.** Analyze available GSC/GA4 exports, choose one high-value topic, and prepare an article/social brief.
3. **Quarterly full review — January, April, July, and October.** Review technical health, content decay, competitive coverage, Core Web Vitals data, local-profile consistency, and conversion paths.

The previously documented Claude routine cannot be confirmed from this repository and Dr. Kashani does not recall managing it. Treat it as **status unknown / not relied upon**. Do not assume it is protecting the site. The Netlify build audit is deterministic and active once the 2026-08-09 changes are pushed. A Codex scheduled task can be created separately after the desired cadence is confirmed.

**Automation boundary:** repository audits, briefs, drafts, metadata, schema, and code changes can be automated. Medical approval, patient communication, review requests, external-account publishing, and privacy-sensitive replies remain human-controlled.

---

## Publishing Standards

- Publish for patients, not for an arbitrary word count or “freshness” signal.
- Every medical article must receive Dr. Kashani's substantive review before publication.
- Lead with calm, direct answers; follow the patient-tone rules in `AGENTS.md`.
- Add original clinical perspective, decision factors, recovery expectations, or frequently asked questions instead of merely summarizing other websites.
- Cite professional guidelines or peer-reviewed sources when making clinical claims.
- Keep visible FAQs synchronized with FAQPage schema, while recognizing that valid FAQ schema does not guarantee a rich result.
- Do not mass-produce town pages or small query variations. Add genuinely useful local context to the two real location pages instead.
- Do not change publication or review dates unless the content received a substantive update.
- Never include identifiable patient information, images, or stories without appropriate written authorization.
- Do not automate social replies that could be interpreted as individualized medical advice.

---

## Measurement

- **GSC monthly:** impressions, clicks, CTR, and average position by query and landing page; prioritize “urologist long island,” “penile implant long island,” “trimix long island,” “ED specialist long island,” and Spanish equivalents.
- **GA4 monthly** (G-7XSPQXKJSQ): contact-page visits, phone/appointment actions, and conversions by landing page.
- **GBP monthly:** calls, website clicks, direction requests, review count/rating, and service/profile completeness for each location separately.
- **Core Web Vitals monthly:** affected URL groups and mobile/desktop status from Search Console; target good LCP, INP, and CLS rather than relying on a single lab test.
- **Content monthly:** new pages indexed, pages gaining/losing impressions, internal-link coverage, and article-assisted conversions.
- **Social monthly:** qualified profile visits, video retention, saves/shares, and website clicks—not follower count alone.
- **AI visibility monthly:** run a small, consistent set of prompts and log whether the practice and a supporting page are cited; treat this as directional evidence, not a guaranteed ranking.
- **Quarterly:** compare results with the previous quarter and change the roadmap based on evidence rather than adding more pages by default.

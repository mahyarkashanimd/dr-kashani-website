# Road to #1 — Urology & Men's Health on Long Island
_Master SEO / AEO / GEO strategy for menshealthlongisland.com_
_Created: 2026-07-11 · Companion to [MASTER-TASKS.md](MASTER-TASKS.md) (tactical checklist). This file is the strategy; MASTER-TASKS is the queue._

---

## The Three Battles

To be the #1 result for "urologist Long Island" / "best men's health doctor Long Island," the site has to win in three places at once:

1. **Traditional SEO** — Google's classic blue links (rankings, backlinks, Core Web Vitals)
2. **AI Overviews / SGE** — being the cited source inside Google's AI summaries
3. **Answer Engines (AEO/GEO)** — being the recommendation when someone asks ChatGPT, Perplexity, or SearchGPT "who's the best TRT doctor on Long Island?"

All three reward the same underlying thing: **one unambiguous, verifiable entity** (Dr. Mahyar Kashani = NPI 1568953925 = 2 GBP listings = these social accounts = this website) plus **extractable, fact-dense answers** on every page.

---

## Current State (audited 2026-07-11)

**Already strong — do not rebuild:**
- Physician JSON-LD with 95-town areaServed on every service page
- MedicalBusiness schema with geo, hasMap, per-location hours on all 4 location pages
- Full head stack sitewide: canonical, hreflang EN↔ES, OG + Twitter cards, GA4
- FAQPage, BreadcrumbList, speakable, MedicalProcedure/MedicalCondition blocks on service pages
- Bilingual parity across ~30 page pairs — a moat almost no competing practice has
- ADA/WCAG program (contrast-safe colors, alt text, labeled forms)
- sameAs entity web on the homepage: socials + Mount Sinai + Healthgrades + US News + **NPI registry** + both Google Maps listings

**Fixed in the 2026-07-11 pass (uncommitted, review with `git diff`):**
- `@id: #physician` + full canonical sameAs list added to every Physician schema that lacked it (21 pages: all 6 English articles, research, and 14 Spanish service pages) — every page now feeds ONE entity instead of orphan duplicates
- about.html + sobre-el-doctor.html Physician schema enriched with **NPI identifier, alumniOf (SUNY Downstate MD + residency, Lenox Hill fellowship), memberOf Mount Sinai** — the E-E-A-T core the AI engines look for
- All 4 location pages: added sameAs linking each office to its own Google Maps/GBP listing + socials
- sitemap.xml: added the 4 location pages (they were missing entirely — critical for local rankings)
- penile-injections.html: fixed HTML entity inside JSON-LD name

**Fixed in the 2026-07-12 follow-up pass:**
- Priapism threshold unified to **4 hours** everywhere (penile-doppler.html HTML + FAQ schema now match penile-injections.html)
- Deleted `Difference.html` (stale scratch file, not in sitemap, broken favicon ref)
- Removed the ambiguous single `openingHours` field from the 16 pages using the shared sitewide Physician block — it only ever reflected RVC's schedule and misrepresented Carle Place (different hours). The two location pages already carry correct, distinct per-office hours and remain the authoritative source; a single Physician entity spanning two addresses with different hours can't honestly carry one flat hours list.

**Known gaps (tracked in MASTER-TASKS):**
- /penile-doppler + /penile-injections not in sitewide nav yet (P2b — awaiting your content approval)
- No Spanish versions of the two new pages (P2d, P6b)
- Cross-links from ed.html / penile-implant.html / peyronies.html to the new pages (P2c)
- Both new pages reuse the same two stock photos as the ED page — swap when you have new imagery (you're reviewing content first)

---

## Phase 1 — Technical Foundation (code; this week)

| # | Item | Status |
|---|------|--------|
| 1.1 | Entity unification: one `#physician` @id + sameAs on every page | ✅ Done 2026-07-11 |
| 1.2 | Credentials in schema (NPI, alumniOf, fellowship) on about pages | ✅ Done 2026-07-11 |
| 1.3 | Location pages in sitemap + GBP sameAs | ✅ Done 2026-07-11 |
| 1.4 | Approve the 2 new pages → nav rollout on all ~60 pages (P2b) | Pending your review |
| 1.5 | Resolve priapism wording (4h) | ✅ Done 2026-07-12 |
| 1.6 | Commit + deploy to Netlify, then GSC "Request Indexing" on changed pages | After review |

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

- **YouTube is the #2 search engine and feeds Google directly.** 60-second answers to the exact FAQ questions already on the site ("Does a penile Doppler hurt?"). Embed each video on its matching service page (VideoObject schema — Claude adds).
- TikTok/IG clips of the same content; all profiles link to the site (already in sameAs — the loop is closed).
- **Backlink targets that actually move medical rankings:** Mount Sinai profile → site link (done), hospital directory pages (MASTER-TASKS #6), local press ("Long Island Herald men's health Q&A"), Nassau County Medical Society, podcast guesting (already did Road to Resilience — get the site linked in show notes).
- Reviews: volume + recency + keyword presence ("penile implant," "Trimix," "Dr. Kashani explained…") on BOTH GBP listings.

---

## Division of Labor

| Claude does (in VS Code) | Dr. Kashani does (external) |
|---|---|
| Schema/entity engineering (✅ largely done) | Approve the 2 new pages so nav rollout can ship |
| Nav rollout + cross-links (P2b, P2c) | GBP: weekly posts, Q&A, review requests, services list |
| Spanish versions of new pages (P2d, P6b) | Film 60-sec videos answering site FAQs |
| Answer Blocks on money pages (Phase 2) | Bing Places + Apple Maps claims (MASTER-TASKS #7, #8) |
| New cluster articles (Phase 4) with your medical review | Medical review of every article before it ships |
| VideoObject schema when videos exist | Email hospital web teams for directory links |
| Meta/title tuning from GSC query data | GSC: Request Indexing after each deploy; send Claude the query report monthly |
| Microsoft Clarity install (needs Project ID) | Create Clarity project, send ID (MASTER-TASKS #11) |
| Keep sitemap/lastmod honest on every change | Decide priapism 3h vs 4h wording |

---

## Recurring Tasks & Automation Candidates

SEO isn't a one-time build — it decays without upkeep. Below is every recurring task, its real cadence, who does it, and whether it can be automated today.

| Task | Cadence | Who | Automatable? |
|---|---|---|---|
| GBP post (offer, tip, or update) | Weekly | Dr. Kashani | No — needs human judgment/content, but Claude can draft the post text each week if asked |
| Respond to new GBP reviews | Weekly | Dr. Kashani | No — patient-facing, needs a real reply |
| Send review-request link to recent patients | Weekly | Dr. Kashani / staff | No — requires patient contact info, outside Claude's reach |
| GBP Q&A monitoring (answer new questions) | Weekly | Dr. Kashani | No |
| sitemap.xml `lastmod` accuracy check | On every content change | Claude | **Yes** — Claude already does this per edit; could add a pre-commit check that flags stale `lastmod` vs. git file mtime |
| JSON-LD validation sitewide (0 invalid blocks) | On every content change | Claude | **Yes** — the Python validator used today (`json.loads` over every `ld+json` block) could become a git pre-commit hook |
| NAP consistency spot-check (GBP, Bing, Apple Maps, directories match site) | Monthly | Dr. Kashani (Claude can't see those listings) | No — Claude has no access to those external profiles |
| GSC query/impression report pull | Monthly | Dr. Kashani exports → sends to Claude | **Partially** — export step needs a human (no GSC API access without OAuth setup); once you paste/upload the export, Claude can analyze it and suggest title/meta changes |
| AI-answer spot-check ("best urologist Rockville Centre" on ChatGPT/Perplexity) | Monthly | Claude, if asked | **Yes** — Claude can run these via WebSearch/WebFetch and log results into this file each month if you run `/loop` or ask for it |
| Broken-link / broken-image sweep sitewide | Monthly | Claude | **Yes** — same pattern as today's image-reference audit, easy to re-run on request |
| New review count / rating sanity check vs. schema `aggregateRating` | Monthly | Dr. Kashani reports current count → Claude updates schema | **Partially** — Claude can't read GBP live, but updating the ~40 pages once you give the new number takes seconds |
| Backlink outreach (hospital directories, press, podcasts) | Quarterly | Dr. Kashani | No |
| New content-cluster article (Phase 4) | Monthly–Quarterly | Claude drafts, Dr. Kashani medically reviews | **Yes** to drafting, **No** to medical sign-off |
| Full technical/schema audit (like today's) | Quarterly | Claude, if asked | **Yes** — this entire session is reproducible as a single prompt |

**Bottom line on automation:** everything that touches *this codebase* (schema validation, sitemap hygiene, broken-link sweeps, AI-answer spot-checks, drafting posts/articles) can be scheduled and run without you in the loop — Claude Code supports this via the `/loop` skill (recurring interval) or a scheduled cloud agent (`/schedule`, cron-based). Everything that touches *external accounts* (GBP, Bing Places, review requests, patient outreach, publishing to social) requires you, because Claude has no login access to those systems.

**✅ Live since 2026-07-12:** a scheduled cloud routine, "MHLI Biweekly SEO Health Check," runs on the 1st and 15th of each month at 9am ET against this GitHub repo. It's read-only — validates all JSON-LD, checks sitemap completeness, scans for broken internal links/images, and spot-checks 3 AI-search queries for whether the practice is named — then reports back without ever committing or pushing. Manage it at claude.ai/code/routines (id `trig_01GVAuDMv8bsGx3oPj2bsEp6`). Note: cron can't express a literal "every 14 days," so 1st/15th is the standard approximation.

---

## Measurement

- **GSC**: impressions/clicks for "urologist long island," "penile implant long island," "trimix long island," per-page — monthly snapshot into this repo
- **GA4** (G-7XSPQXKJSQ): contact-page conversions by landing page
- **AI spot-checks** (monthly, manual): ask ChatGPT/Perplexity "best penile implant surgeon Long Island," "urologist Rockville Centre" — log whether Dr. Kashani is named and which URL is cited
- **Rank checks**: GBP map-pack position for "urologist near me" from RVC and Carle Place zip codes

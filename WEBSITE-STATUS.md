# Dr. Kashani Website — Status & Roadmap

**Last updated:** April 22, 2026  
**Site:** menshealthlongisland.com (Netlify, GitHub repo)  
**Stack:** Static HTML/CSS/JS, deployed via Netlify

---

## ✅ COMPLETED (This Session)

### Bug Fixes — article-low-testosterone.html
- Removed duplicate `<meta name="viewport">` tag
- Fixed canonical URL: was pointing to `/low-testosterone` (service page), now correctly `/article-low-testosterone`
- Added hreflang pair (en ↔ es)
- Fixed desktop ESP nav button: was `/testosterona-baja`, now `/articulo-testosterona-baja`
- Replaced old simple mobile drawer (hid entire header) with new sub-panel drawer architecture

### New File — articulo-testosterona-baja.html
- Full Spanish translation of the low testosterone article
- Correct canonical, hreflang, Article JSON-LD with `inLanguage: "es"`
- Full mobile sub-panel drawer (ENG button → `/article-low-testosterone`)
- FAQ prefix uses "P" (Spanish convention, not "Q")

### Rebuilt — articulo-inyecciones-paso-a-paso.html
- Was missing 4 of 9 steps, all step images, and had outdated flat mobile nav
- Now fully matches `article-injections-step-by-step.html` in structure
- All 9 step-cards with 2-column grid + images (step-1.png through step-9.png)
- Fixed hreflang: was pointing to `/penile-injections-step-by-step`, now `/article-injections-step-by-step`
- PDF download box, pull quote, safety rules, FAQ, doctor bio, CTA all present

### Mobile Nav — Duplicate Language Button Fix
- `articulo-testosterona-baja.html` — added CSS to hide ENG `<li>` on mobile (topbar has it)
- `articulo-inyecciones-paso-a-paso.html` — same fix added
- `articulo-peyronie-xiaflex.html` — fixed missing leading `/` on topbar ENG link
- **Rule:** All Spanish article pages must include `.nav-links > li:has(> a[title="View in English"]) { display: none !important; }` in the mobile drawer CSS block

### sitemap.xml
- Added `<lastmod>2026-04-22</lastmod>` to every URL entry
- Added `articulo-testosterona-baja` entry in Spanish Articles section

### education.html
- Added article card for `article-low-testosterone` after the Peyronie's card

### educacion.html
- Added article card for `articulo-testosterona-baja` after the Peyronie's card

### index.html + inicio.html
- Added `aggregateRating` to Physician JSON-LD (5.0 stars, 233 combined reviews from both offices)
- 2 Lincoln Ave: 175 reviews | Carle Place: 58 reviews = 233 total

---

## 🔲 PENDING / TO DO

### High Priority

1. **Bing Webmaster Tools submission**
   - Add Bing verification meta tag to `<head>` of `index.html` and `inicio.html`
   - Submit sitemap at bing.com/webmasters
   - This gets the site indexed on Bing → Perplexity AI and Copilot pick it up
   - Steps: bing.com/webmasters → Add Site → verify with meta tag → Submit Sitemap → paste `https://www.menshealthlongisland.com/sitemap.xml`

2. **Google Search Console — re-request indexing**
   - After any major content update, go to GSC → URL Inspection → Request Indexing for key pages
   - Especially: `article-low-testosterone`, `articulo-testosterona-baja`, `index`, `inicio`

3. **article-low-testosterone.html — check English article pages for duplicate ESP button**
   - English pages use `class="nav-esp-item"` on the ESP `<li>` — verify this is hidden on mobile via CSS
   - If not, apply the same fix pattern: `.nav-links > li:has(> a[title="Ver en Español"]) { display: none !important; }`

### Medium Priority

4. **AEO (Answer Engine Optimization) — convert H2s to patient questions**
   - Target: `article-low-testosterone.html`, `articulo-testosterona-baja.html`
   - Rewrite H2 headings as questions ("What are the symptoms of low testosterone?")
   - Follow each with a 40–60 word direct-answer paragraph
   - Google featured snippets and ChatGPT/Perplexity pull from these
   - Already done on injections and Peyronie articles — replicate pattern

5. **aggregateRating — Elfsight widget alignment**
   - JSON-LD now shows 233 reviews / 5 stars
   - Make sure Elfsight widget pulls from the same two Google locations
   - If either location's count changes, update `reviewCount` in both `index.html` and `inicio.html`

6. **New article ideas (SEO gaps)**
   - `article-vasectomy-recovery.html` — "what to expect after vasectomy" gets high search volume
   - `article-bph-treatment-options.html` — "enlarged prostate treatment" is high intent
   - `article-testosterone-therapy-types.html` — "injections vs pellets vs gel" decision article
   - `article-penile-implant-what-to-expect.html` — "IPP surgery recovery" is underserved

7. **Spanish service pages — hreflang audit**
   - Most Spanish service pages (testosterona-baja, disfuncion-erectil, etc.) need to be checked for hreflang pairs pointing to the correct English counterparts
   - Run a quick grep: `grep -l "hreflang" *.html` to see which pages are missing it entirely

8. **Quiz page (quiz.html / cuestionario.html)**
   - Add Article or Quiz JSON-LD schema to improve SEO
   - Currently has no structured data

### Lower Priority / Future

9. **Local SEO — Google Business Profile**
   - Ensure both locations (Rockville Centre, Carle Place) have identical NAP (Name/Address/Phone)
   - Add all services as GBP service offerings
   - Post monthly updates to keep GBP active

10. **Page speed — image optimization**
    - Step images in injections article (step-1.png through step-9.png) should be WebP format
    - Run through Squoosh or similar before next deploy if images are large

11. **Canonical audit for service pages**
    - Spot-check: `/low-testosterone`, `/ed`, `/peyronies` etc. for correct canonical and hreflang
    - Several were not reviewed this session

---

## Mobile Drawer — Template Reference

When creating new article pages, use this checklist:

### Spanish article pages (`articulo-*.html`)
- [ ] Desktop nav ENG `<li>`: `title="View in English"` attribute required
- [ ] CSS block includes: `.nav-links > li:has(> a[title="View in English"]) { display: none !important; }`
- [ ] Topbar ENG link: `href='/article-[name]'` (leading slash required)
- [ ] Topbar brand link: `href='/inicio'`
- [ ] Back button text: `"Atrás"`
- [ ] `showParentLink` triggers on `/servicios`

### English article pages (`article-*.html`)
- [ ] Desktop nav ESP `<li>`: `class="nav-esp-item"` and `title="Ver en Español"` required
- [ ] Verify mobile CSS hides `.nav-esp-item` on mobile
- [ ] Topbar ESP link: `href='/articulo-[name]'` (leading slash required)
- [ ] Topbar brand link: `href='/'`
- [ ] Back button text: `"Back"`
- [ ] `showParentLink` triggers on `/services`

---

## Key File Reference

| File | Purpose | Paired with |
|------|---------|-------------|
| `index.html` | English home | `inicio.html` |
| `article-low-testosterone.html` | EN low-T article | `articulo-testosterona-baja.html` |
| `article-injections-step-by-step.html` | EN injections guide | `articulo-inyecciones-paso-a-paso.html` |
| `article-peyronies.html` | EN Peyronie's article | `articulo-peyronie-xiaflex.html` |
| `article-penile-injection-trimix.html` | EN Trimix article | `articulo-inyeccion-peneana-trimix.html` |
| `article-oral-PDE5i-inhibitors-ed.html` | EN PDE5i article | `articulo-inhibidores-pde5-oral-de.html` |
| `article-welcome.html` | EN welcome article | `articulo-bienvenida.html` |
| `education.html` | EN article index | `educacion.html` |
| `sitemap.xml` | All URLs + lastmod | — |

---

## Schema Deployed

| Page | Schema Types |
|------|-------------|
| index.html | Physician + aggregateRating (233 reviews, 5★) |
| inicio.html | Physician + aggregateRating (233 reviews, 5★) |
| article-*.html | Article + FAQPage + HowTo (step articles) |
| articulo-*.html | Article + FAQPage + HowTo (step articles) |
| education.html | CollectionPage |
| educacion.html | CollectionPage |

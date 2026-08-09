# Dr. Kashani Website — Claude Instructions

## Project Overview

**Site:** menshealthlongisland.com — bilingual (EN/ES) urology practice for Dr. Mahyar Kashani, MD  
**GA4 ID:** G-7XSPQXKJSQ  
**Phone:** 516-390-2850  
**Locations:** 2 Lincoln Ave Suite 102, Rockville Centre NY 11570 | 393-401 Old Country Road, Carle Place NY 11514  
**Hours — RVC:** Tue–Wed 8:30–16:00, Thu 8:30–17:00, Fri 9:00–13:00  
**Hours — CP:** Thu 9:00–17:00, Fri 9:00–13:00  
**Canonical areaServed source:** index.html lines 44–140 (95 towns — always copy from there)

---

## Patient Tone Guidelines (CRITICAL)

- Lead with **reassurance**, not alarm
- Avoid specific scary statistics (e.g. "X% are cancer")
- Use plain language — avoid clinical jargon in patient-facing text
- Stats bar numbers should be **positive/reassuring**
- Warning boxes: "worth checking" — NOT "do not ignore" or "don't wait"
- FAQ answers: concise and calming, not exhaustive with clinical thresholds
- **Never use:** "always warrants," "workup," "gold standard," "systematic," "don't wait," "one episode is enough," "nothing is missed," "requires a proper evaluation," "clean bill of health"

---

## HEAD SECTION (exact order)

1. `<meta charset="UTF-8">`
2. **Critical inline CSS** (prevents flash of unstyled dark background):
   `html{background:#0f172a}body{margin:0;background:#fff}header{background:rgba(255,255,255,.8);position:sticky;top:0;z-index:1000}.nav-links{display:flex;gap:12px;align-items:center}.menu-toggle{display:none}.dropdown{display:none}.page-hero{background:linear-gradient(rgba(15,23,42,.8),rgba(15,23,42,.8)),url(/images/hero-bg.jpg);background-size:cover;background-position:center;padding:120px 0 60px;text-align:center;color:#fff}`
3. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
4. `<meta name="description" ...>`
5. `<meta name="keywords" ...>`
6. `<meta name="author" content="Dr. Mahyar Kashani">`
7. `<link rel="canonical" href="https://www.menshealthlongisland.com/[slug]">`
8. `<link rel="alternate" hreflang="en" href="...">` AND `<link rel="alternate" hreflang="es" href="...">`
9. `<link rel="icon" type="image/png" href="/images/favicon-96x96.png">`
10. **Google Analytics GA4** async script (ID: G-7XSPQXKJSQ)
11. OG meta tags: og:title, og:description, og:type="article", og:url, og:image
12. `<title>`
13. `<link rel="stylesheet" href="/css/style.css">`
14. **Google Fonts:** Lato (300,400,700) + Playfair Display (400,700)
15. **Font Awesome** 6.0.0

---

## JSON-LD Schema Rules

### EVERY page must have the Physician schema with the full 95-town areaServed list
Never use a short town list. Always copy the full canonical list from `index.html` lines 44–140.

**Schema blocks by page type:**

| Page type | Required schema blocks (in order) |
|-----------|----------------------------------|
| Service pages | 1. Physician (95-town) · 2. MedicalCondition or MedicalProcedure · 3. BreadcrumbList · 4. WebPage with speakable · 5. FAQPage |
| Article pages | 1. Article or HowTo (with HowToStep) · 2. Physician (95-town) |
| Home pages | Physician (full: areaServed + aggregateRating + sameAs + memberOf + openingHours) · WebPage with speakable |
| Location pages | MedicalBusiness @type (not Physician) · geo · hasMap · openingHours · aggregateRating · parentOrganization (Mount Sinai) |
| Education/Research/Quiz | CollectionPage/ProfilePage/MedicalWebPage + standalone Physician block |
| contact.html / contacto.html | MedicalClinic (NOT Physician) |
| privacy-policy, success pages | No schema needed |

**Canonical schema sources:**
- Full 95-town areaServed: `index.html` lines 44–140
- RVC MedicalBusiness: `urologist-rockville-centre.html`
- CP MedicalBusiness: `urologist-carle-place.html`
- Article schema pattern: `article-welcome.html`
- HowTo schema pattern: `article-injections-step-by-step.html`

---

## BODY STRUCTURE (exact order)

### 1. Header
```html
<header>
  <div class="container nav-container">
    <a href="/" class="logo">Men's Health <span class="sub-logo">Long Island</span></a>
    <div class="menu-toggle"><i class="fas fa-bars"></i></div>
    <nav>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Meet Dr. Kashani</a></li>   <!-- has dropdown -->
        <li><a href="/services">Services</a></li>         <!-- mega dropdown -->
        <li><a href="/education">Patient Education</a></li>
        <!-- ESP button — DESKTOP ONLY, hidden on mobile via .nav-esp-item CSS -->
        <li class="nav-esp-item">
          <a href="/[spanish-slug]" style="font-size:0.85rem;color:var(--accent);font-weight:700;letter-spacing:1px;border:1px solid var(--accent);padding:6px 14px;text-decoration:none;" title="Ver en Español">🇪🇸 ESP</a>
        </li>
        <!-- Book Appointment MUST be last -->
        <li><a href="/contact" class="btn-appointment">Book Appointment</a></li>
      </ul>
    </nav>
  </div>
</header>
```
**Spanish pages:** logo href → `/inicio` | btn-appointment → `/contacto` text "Reservar Cita" | ESP li → ENG li with class `nav-eng-item`

### 2. Page Hero
```html
<section class="page-hero">
  <div class="container">
    <h1>[Topic] Specialist on Long Island</h1>
    <p>[Subtitle]</p>
  </div>
</section>
```

### 3. Content Sections
Alternate `.content-section` and `.content-section.alt-bg`. Patterns:
- **Two-col intro:** `.two-col` — text + `.lead-text` left, `.content-image` right (or reversed)
- **Cause cards:** `.causes-grid` with `.cause-card` (icon + h3 + p)
- **Step cards:** `.treatment-grid` with `.treatment-card` (`.step-badge` + h3 + p + `.dr-note`)
- **Highlight card:** `.treatment-card.highlight-card` for one featured step (dark bg) — use sparingly, never for alarming content
- **Callout boxes:** `.warning-box` (gold), `.info-box` (blue), `.related-box` (links to other pages)

### 4. Stats Bar
```html
<div class="stats-bar">
  <div class="container">
    <div class="stats-inner">
      <div class="stat-item">
        <span class="stat-number">[Value]</span>
        <span class="stat-label">[Label]</span>
      </div>
      <!-- 4 total stat items — frame positively, not alarmingly -->
    </div>
  </div>
</div>
```

### 5. FAQ Section
```html
<section class="content-section [alt-bg]">
  <div class="container">
    <h2>Frequently Asked Questions — [Topic]</h2>
    <div class="faq-list">
      <div class="faq-item"><h3>[Question]</h3><p>[Answer]</p></div>
    </div>
  </div>
</section>
```
Spanish pages: `.faq-item h3::before { content: "P"; }` (not "Q")

### 6. Why Dr. Kashani Section
Two-col: text left (h2, p, `.benefit-list` ul, `.related-box` links), Dr. Kashani photo right.

### 7. CTA Box
```html
<section style="background: #fff; padding: 80px 0;">
  <div class="container">
    <div class="cta-box">
      <h2>[Inviting, calm heading]</h2>
      <p>[Reassuring copy]</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn-primary">Book a Consultation</a>
      </div>
    </div>
  </div>
</section>
```
Spanish: link → `/contacto`

### 8. Footer
3-column grid: Brand + social icons | Quick Links | Locations (RVC + CP with addresses + phones)  
Footer bottom: disclaimer + copyright 2026  
**Spanish pages:** all location links use `/urologo-*` not `/urologist-*`; logo → `/inicio`

### 9. Floating CTA (always last before `</body>`)
```html
<div class="floating-cta">
  <a href="/contact"><i class="fas fa-calendar-check"></i> Book Consultation</a>
</div>
```
Spanish: href → `/contacto`, text → "Reservar Consulta"

---

## Scripts (bottom of body, in order)

1. `<script src="/js/main.js"></script>`
2. **Reveal animation script** — IntersectionObserver applies `.revealed` to `.reveal-up`, `.reveal-left`, `.reveal-right`; also handles header scroll shrink
3. **Mobile drawer nav script** (see below)

---

## ENG/ESP Button — 3 Required Placements

| # | Location | How |
|---|----------|-----|
| 1 | Desktop nav | `<li class="nav-esp-item">` (English) or `<li class="nav-eng-item">` (Spanish) |
| 2 | Mobile drawer topbar | Inside `topbar.innerHTML` JS string as `.drawer-esp-btn` or `.drawer-eng-btn` |
| 3 | CSS hide rule | `.nav-esp-item { display: none !important; }` inside `@media (max-width: 768px)` |

**EN ↔ ES URL pairs:**
- `/ed` ↔ `/disfuncion-erectil`
- `/elevated-psa` ↔ `/psa-elevado`
- `/hematuria` ↔ `/hematuria-es`
- `/bph` ↔ `/prostata-agrandada`
- `/low-testosterone` ↔ `/testosterona-baja`
- `/peyronies` ↔ `/enfermedad-peyronie`
- `/premature-ejaculation` ↔ `/eyaculacion-precoz`
- `/vasectomy` ↔ `/vasectomia`
- `/vasectomy-reversal` ↔ `/reversal-vasectomia`
- `/penile-implant` ↔ `/implante-peneano`
- `/circumcision` ↔ `/circuncision`
- `/hydrocele` ↔ `/hidrocele-es`
- `/kidney-stones` ↔ `/calculos-renales`
- `/oab` ↔ `/vejiga-hiperactiva`
- `/contact` ↔ `/contacto`
- `/about` ↔ `/sobre-el-doctor`

---

## Mobile Drawer Nav — CRITICAL

The drawer is built entirely by JavaScript injected into the DOM. Do NOT use `<details>/<summary>`, CSS-only toggles, or simple show/hide.

**Required elements:**
- `topbar` div: brand link left + topbar-right (language btn + close btn) right
- `panelWrap` with `mainPanel` + `subPanel` (side-slide sub-menu for dropdowns)
- `backdrop` div appended to `document.body`
- Functions: `openDrawer()`, `closeDrawer()`, `openSubPanel()`, `closeSubPanel()`
- Triggers: menuToggle click, backdrop click, close button click, ESC key
- Services link uses `showParentLink = true` → shows "Tap to view all →" hint

### English Page Checklist

1. `@media (max-width: 768px)` → `.nav-esp-item { display: none !important; }`
2. ESP `<li>` has `class="nav-esp-item"`
3. Drawer topbar JS: `"<a href='/spanish-slug' class='drawer-esp-btn' title='Ver en Español'>🇪🇸 ESP</a>"`
4. CSS `.drawer-esp-btn` styled (accent color, border, nowrap)
5. Drawer brand links to `/` (English homepage)
6. `showParentLink` check uses `=== '/services'`

### Spanish Page Checklist

1. `@media (max-width: 768px)` → `.nav-eng-item { display: none !important; }`
2. ENG `<li>` has `class="nav-eng-item"`
3. Drawer topbar JS: `"<a href='/english-slug' class='drawer-eng-btn' title='View in English'>🇺🇸 ENG</a>"`
4. CSS uses **combined selector** `.drawer-esp-btn, .drawer-eng-btn { ... }` — critical, JS generates `drawer-eng-btn` on Spanish pages
5. Drawer brand links to `/inicio` (Spanish homepage — NOT `/`)
6. `showParentLink` check uses `=== '/servicios'`
7. Back button text: `'‹ &nbsp;Atrás'` (not "Back")
8. Sub-panel hint: `'Ver todos →'` (not "Tap to view all →")
9. Header logo href → `/inicio`
10. Footer logo href → `/inicio`
11. Footer location links → `/urologo-rockville-centre` and `/urologo-carle-place`
12. FAQ marker: `.faq-item h3::before { content: "P"; }`
13. Floating CTA → `/contacto`, text "Reservar Consulta"
14. Appointment button → `/contacto`, text "Reservar Cita"

---

## CSS Classes Required on Every Page

**Layout:** `.stats-bar`, `.stat-item`, `.stat-number`, `.stat-label`, `.content-section`, `.content-section.alt-bg`, `.lead-text`, `.two-col`, `.content-image`

**Callout boxes:** `.warning-box`, `.info-box`, `.related-box`

**Cards:** `.causes-grid`, `.cause-card`, `.cause-icon`, `.section-divider`, `.treatment-grid`, `.treatment-card`, `.step-badge`, `.dr-note`, `.highlight-card`

**FAQ + CTA:** `.faq-list`, `.faq-item`, `.cta-box`, `.btn-primary`

**Animations (all 4):** `.reveal-up`, `.reveal-left`, `.reveal-right`, `.revealed`

**Mobile drawer CSS** — copy exactly from ed.html (canonical reference). Do NOT invent or simplify.

**Footer CSS** — identical on all pages, copy exactly from reference.

**Floating CTA:** `.floating-cta` and responsive variant.

---

## Lazy Loading

All `<img>` tags: `loading="lazy"`. Hero uses CSS `background-image`, not `<img>`, so no lazy attribute there.

---

## ADA / WCAG 2.1 Compliance Rules (CRITICAL — apply to every new page)

All pages must pass WAVE (wave.webaim.org) with **0 Errors and 0 Contrast Errors**. Only Errors (red X) and Contrast Errors (red C) are required for compliance — Alerts/Features/Structure/ARIA counts do not matter.

### Contrast ratios required
- Normal text (< 18pt or < 14pt bold): **4.5:1 minimum**
- Large text (≥ 18pt / 24px, or ≥ 14pt bold / 18.67px): **3:1 minimum**

### Known failing colors — never use these on white/light backgrounds
| Color | Hex | Ratio on white | Status |
|-------|-----|----------------|--------|
| `--accent` gold | `#c0a062` | ~2.5:1 | FAILS |
| Slate gray | `#94a3b8` | ~2.5:1 | FAILS |
| Slate gray | `#64748b` | ~4.5:1 | borderline — avoid for small text |

### Safe replacement colors
| Use case | Color | Ratio on white |
|----------|-------|----------------|
| Gold text on white/light bg | `var(--accent-dark)` / `#7d5c1d` | ~6.3:1 ✓ |
| Secondary gray text | `#475569` | ~5.9:1 ✓ |
| Muted gray text | `#555555` | ~7.5:1 ✓ |
| Links on white | `#1a56db` | ~6:1 ✓ |

### Rules by element type
- **All gold text on white/light backgrounds** → use `var(--accent-dark)` not `var(--accent)`
- **Article date/author** → `color: #475569` (not `#94a3b8`)
- **Inline links inside `.dr-note`** → inherit `accent-dark` (sitewide rule in style.css)
- **`.edu-card-tag`** → `accent-dark` (sitewide rule in style.css)
- **`.svc-card .card-link-hint`** → `accent-dark` (sitewide rule in style.css)
- **`.step-label` in treatment steps** → `accent-dark` (sitewide rule in style.css)
- **`.step-number` watermarks** → `display: none !important` — opacity:0.3 cannot pass 3:1 at any color
- **Nav chevrons** → `opacity: 1 !important` (removing 0.7 opacity that drops below threshold)
- **Stats bar** must have a dark background (`#1a1a2e` or `var(--primary)`) applied via the correct CSS class matching the HTML class name
- **`rgba()` text colors** — alpha blending reduces effective contrast; verify the rendered result passes, or use solid colors

### `opacity` / `rgba` — alpha blending warning
`opacity` reduces effective contrast by blending toward the background. At `opacity: 0.3` on white, NO color passes even 3:1. Always verify the alpha-blended result:
- `rgba(255,255,255,0.5)` on `#0f172a` → effective ~`#878b95` → ~4.9:1 (passes, barely)
- Any gold/accent at opacity < 0.8 on white → likely fails

### `aria-hidden` does NOT suppress WAVE contrast checks
WAVE checks visually rendered elements regardless of `aria-hidden`. Only `display: none`, `visibility: hidden`, or `opacity: 0` suppresses WAVE contrast evaluation.

### WAVE evaluates at mobile viewport width
WAVE's iframe is narrow enough to trigger `@media (max-width: 768px)`. Mobile CSS overrides are evaluated. Check that mobile-specific styles (drawer nav, responsive overrides) do not introduce contrast failures.

### Third-party widgets (Elfsight)
CSS overrides for the Elfsight Google Reviews widget must go in the page `<style>` block (not style.css, since the widget loads after). Current overrides in `index.html`:
```css
.es-header-rating-reviews-count { color: #555555 !important; }
.es-review-info-date { color: #555555 !important; }
.es-read-more { color: #1a56db !important; }
.eapps-widget-powered-by-link,
.eapps-link,
.es-review-info-platform,
.es-review-source { color: #555555 !important; }
```

### Checklist before deploying a new page
- [ ] No gold (`--accent` / `#c0a062`) text on white or light background
- [ ] No `#94a3b8` or lighter gray on white for any body text
- [ ] Article date/author use `#475569`
- [ ] All `<img>` have `alt` attributes (non-decorative must be descriptive)
- [ ] All form inputs have associated `<label>` elements
- [ ] Page has a `<h1>`, headings are in logical order (no skipped levels)
- [ ] Stats bar CSS class in HTML matches the CSS selector in style.css
- [ ] Step-number watermarks use `display: none` (not just `aria-hidden`)
- [ ] Run WAVE and confirm 0 Errors + 0 Contrast Errors before merging

---

## Task List

See [MASTER-TASKS.md](MASTER-TASKS.md) for the full prioritized to-do list.

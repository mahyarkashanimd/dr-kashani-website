
******************

SITES:

1. Stitch - design
2. Fiver server -- run Java within Terminal
3. Sqoosh - fix picture sizes

*******************

To Do: 

1. Update picture titles
2. Confirm sizes are all minimized
3. Make sure all pictures of Mt Sinai are off
4. Update SiteMap before launcing
6. Update SEO for AI --> the 3 things that are on "Optimize Site For AI Search" on google AI and that Tik Tok
7. Update Site w/ Gorin sheet + Sinai Media page
8. Google --> incorporate questions into a top 10 questions for ED for SEO etc
9. Bus Ticket
10. AI animations
11. Step-by-step spanish site needs to be fixed...
12. Low Testosterone English --> needs a spanish site

*******************

SOCIAL MEDIA: 
1. Make sure all accounts 


4.21.2026

Handoff Summary — Dr. Kashani / Men's Health Long Island
c:\Users\M804143.MSNYUHEALTH\Downloads\dr-kashani-website | Branch: main | Deployed: Netlify

Key Technical Facts (unchanged)
Working reference template: ed.html — gold standard for all English pages
Every page must have exactly 2 </style> tags: one critical inline on line 5, one merged main block
Critical inline CSS (line 5): html{background:#0f172a} — do not touch
Floating CTA pattern: <section style="background:#fff;padding:80px 0"><div class="container"><div class="cta-box"> — required so CTA floats above footer
Line endings: Windows CRLF. No BOMs on working pages.
Nav/drawer: JS-injected, not hardcoded
What Was Done — This Session (not yet committed)
Fix	Files
Remove BOM	contact.html
Remove "Se Habla Español" pill	contact.html
Add padding-top: 60px; padding-bottom: 80px to contact grid section	contact.html
Add floating navy CTA above footer ("Ready to Take the Next Step?")	quiz.html
Hero buttons flex-wrap: nowrap on desktop, restore wrap on mobile ≤768px	inicio.html
Remove gold "Reserve una Consulta" box from quiz results (keep blue section below)	cuestionario.html
Rename nav item DE — Visión General → Disfunción Eréctil under Servicios	all 27 Spanish pages
Still Needed / Open Items
Not committed — user controls commit timing (per standing rule)
User to verify contact.html formatting looks correct after deploy
User to verify inicio.html hero buttons render on one line at all desktop breakpoints
Any additional pages the user identifies as having issues after live verification
Do Not Commit Without Asking First.




# 🩺 Men's Health Long Island - Growth Roadmap

## 🛑 Phase 1: Technical Foundation (CURRENT)
*Goal: Fix the "pipes" so Google can crawl the site perfectly.*

- [x] Connect GitHub to Netlify for automatic deploys.
- [x] Setup Google Search Console (GSC).
- [x] Submit `sitemap.xml` to GSC (Status: SUCCESS).
- [x] Create `netlify.toml` for Clean URLs (No more ).
- [x] Update Nav & Footer links to remove `` and fix Home link to `/`.
- [x] Verify links work on the live site.

## 🚀 Phase 2: Search Authority (On-Page SEO)
*Goal: Tell Google you are a "Urologist" in specific LI towns.*

- [x] Update Home Page `<title>` and `<h1>` (Priority: Rockville Centre/Carle Place).
- [ ] Optimize Service Pages (ED, Low T, IPP) with specialty keywords.
- [x] Add "Medical Specialty: Urology" Schema markup to `index`.
- [x] Audit "Education" articles for human-first language (E-E-A-T).

## 📍 Phase 3: Local Presence (Google Business Profile)
*Goal: Win the "Map Pack" so local patients call you directly.*

- [ ] Update GBP appointment link to point to `menshealthlongisland.com/contact`.
- [ ] Add 10 new photos to GBP (Office, Exam Rooms, Professional Headshots).
- [ ] Setup a weekly "Google Post" schedule (reuse social media content).
- [ ] List specific LI service areas in GBP (Garden City, Oceanside, etc.).

## 🇪🇸 Phase 4: The Spanish Gateway
*Goal: Capture the massive underserved Spanish-speaking demographic on LI.*

- [ ] Create `urologo-nassau`.
- [ ] Record/Sub-title 1 "Welcome" video in Spanish.
- [ ] Create high-intent Spanish CTA for ED & Vasectomy.

## 🎥 Phase 5: Video & Social Multiplier
*Goal: Build trust via video before they even meet you.*

- [ ] Upload Cyrano videos to a dedicated YouTube Channel.
- [ ] Embed service-specific videos onto their respective pages (Dwell Time hack).
- [ ] Start TikTok/IG series: "30 Seconds with Dr. Kashani" (FAQ style).

## 💰 Phase 6: Monetization & Conversion
*Goal: Turn traffic into revenue and high-value patients.*

- [ ] Add "Fast-Track Call" button to `quiz` results.
- [ ] Set up Amazon Storefront for recommended supplements/devices.
- [ ] (Future) Explore "Concierge Men's Health" subscription tier.

---
### 📝 Notes & Random Thoughts
*   *Idea:* Do a "Vasectomy Day" promotion for March Madness?
*   *Thought:* Target "Freeport" specifically for the Spanish page?
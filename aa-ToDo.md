To Do List

Stich -- to help with design
Five Server -- to jun JAVA within terminal
sqoosh
Need to update picture titles
Should also minimze the door pic on sqoosh
Minimizeed the picture w/ patient --> need to change and update name
***When clicking menshealthlong island on the hamberger .. should go to home as well. 
***Picture --> need to update my headshot w/out Mt Sinai
*** Carle Place Link needs to be updated -- https://www.google.com/maps/place/Mahyar+Kashani,+MD/@40.7460869,-73.6054759,17z/data=!3m2!4b1!5s0x89c2877bdf6f2b19:0x46793c13e54a5aed!4m6!3m5!1s0x89c2873ef478808f:0x70bacee24e8e017c!8m2!3d40.746087!4d-73.600605!16s%2Fg%2F11ltr_pt1z?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D
***Google Maps footer links -- both offices (2 Lincoln Ave + 393 Old Country Rd) should link to the EXACT address pin, not just "Mahyar Kashani" search. Need correct direct Google Maps URLs for each.

***When you hit back onto a page on mobile.... I want it to stay where you went, not go to the top of the screen
***Update sitemap

****HAVE to make sure I come up on chatgpt and other AI sites

***THe last edit --> i feel like it changed some of the formating and still has the issue where when you click on it it goes to white screen first

****************
FOR TOMORROW:

Session Summary — ED Page Fix
The Problem
The English ED page (and other English pages) had a white flash on load — unstyled nav text appeared briefly before the page rendered correctly. Spanish pages like disfuncion-erectil.html worked fine.

Root Cause (finally identified)
Previous fix attempts had added a mobile media query directly into the first-paint critical CSS on line 5:


@media(max-width:768px){.nav-links{display:none!important}nav{transform:translateX(110%)!important;...}}
This pushed the nav off-screen at the very first paint — before the drawer JavaScript had run — causing a visible flash/reflow. The Spanish page's line 5 had none of this; just 5 bare-minimum rules.

The Fix
Rebuilt ed.html from scratch using disfuncion-erectil.html as the structural template:

Line 5 critical CSS: now matches the minimal Spanish version (no mobile overrides)
All CSS (animations, drawer, footer) in one merged <style> block after the <link> tags
English nav, English content, English footer — same JS drawer system
This session also:

Removed the "Our Locations" section from the bottom of ed.html
Changed the CTA to float in white space (matching penile-implant.html)
Tomorrow's work — if ed.html is confirmed fixed, the same rebuild approach should be applied to the other broken English pages: bph.html, low-testosterone.html, peyronies.html, etc. Each one follows the same pattern: take the working Spanish equivalent as the structural base, swap in the English content.




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
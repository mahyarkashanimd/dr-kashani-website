# Website Clearance To Do

Last updated: August 10, 2026

## Purpose

This file is the handoff record for reviewing `menshealthlongisland.com` before requesting permission from Mount Sinai Health System for Dr. Mahyar Kashani's personal professional website. Resume the review from this file on another computer.

The review should continue in small batches of two or three items. Do not make further judgment-based wording changes until Dr. Kashani approves each batch.

## Source material reviewed

- `MSHS-Social-Media-and-Digital-Comms-Policy (1).pdf`
- `HS-MicrositeCompliance (2).pdf`
- `Kashani_Website_Compliance_Review.docx`
- Prior AI notes and prior email language supplied by Dr. Kashani
- The local website source code (not merely the live website)
- Comparator physician websites listed below

The central institutional issue is that an independent clinical/professional website should be submitted to the appropriate Mount Sinai Digital Marketing/Branding or website-governance team for explicit review and permission. The goal is not to imply that the website is already approved.

## Decisions already made

### Keep as-is

- Keep the live Elfsight Google Reviews widget. It displays live Google reviews and is not a set of manually written patient testimonials.
- Keep the visible `5/5 Average Rating based on 200+ Patient Reviews` statement, assuming it remains accurate.
- Keep the existing hidden `aggregateRating` schema for now. Exact values currently include 233 overall, 175 for Rockville Centre, and 58 for Carle Place. We discussed removing it because exact values can become stale and self-serving review schema generally provides little Google rich-result benefit, but Dr. Kashani elected to leave it.
- Keep accurate Mount Sinai affiliation references and the link to Dr. Kashani's official Mount Sinai profile in structured metadata. These are accurate disclosures, not visible Mount Sinai branding.
- Keep links to official Mount Sinai appointment/profile systems.
- Keep the Netlify appointment forms. They send notifications to Dr. Kashani's Mount Sinai email. The forms prominently instruct visitors not to submit sensitive medical information.
- No Mount Sinai logo or Mount Sinai imagery is being added.

## Completed website changes

### 1. Site-wide footer disclaimer

The footer disclaimer was replaced on all 66 HTML pages (33 English and 33 Spanish).

English:

> This is a personal professional website and is not an official Mount Sinai Health System website. The views expressed here are my own and do not represent those of the Mount Sinai Health System. The content is for general educational purposes only, is not medical advice, and does not create a doctor-patient relationship. The appointment request form collects basic contact and scheduling information as described in the Privacy Policy; please do not submit sensitive medical information through the form.

Spanish:

> Este es un sitio web profesional personal y no es un sitio web oficial del Mount Sinai Health System. Las opiniones aquí expresadas son propias y no representan al Mount Sinai Health System. El contenido es únicamente para fines educativos, no constituye asesoramiento médico y no crea una relación médico-paciente. El formulario de solicitud de cita recopila información básica de contacto y programación según se describe en la Política de Privacidad; no envíe información médica confidencial a través del formulario.

### 2. Google Analytics privacy restrictions

All 66 pages retain ordinary GA4 page-traffic measurement, but the configuration now explicitly contains:

```js
'allow_google_signals': false,
'allow_ad_personalization_signals': false
```

No Google Ads ID, remarketing, custom form events, user IDs, quiz-response tracking, or appointment-form-content tracking was found in the code.

### 3. Privacy Policy corrections

The English and Spanish privacy pages were updated to:

- Remove the incomplete, practice-style `HIPAA Notice of Privacy Practices` section.
- State that the personal website is not a patient portal and is not intended for submitting protected health information.
- Clarify that medical information submitted through official Mount Sinai systems or during clinical care is governed by the applicable Mount Sinai Notice of Privacy Practices.
- Disclose that Netlify processes and stores appointment requests and delivers them to a designated Mount Sinai email address.
- Explain that submissions can remain accessible in the Netlify Forms dashboard until deleted.
- Link to Netlify's Privacy Statement.
- Replace the overly absolute Spanish claim that no information is shared with third parties.
- Replace inaccurate `anonymous Google Analytics/no PII` wording with a precise GA4 disclosure.
- Explain the `_ga` first-party analytics cookie and that advertising personalization is disabled.
- Remove the unsupported promise that form information is not placed in a medical record until someone becomes an active patient.
- Replace the statement that a doctor-patient relationship can arise only through an in-person visit with a neutral statement covering an appropriate clinical encounter.
- Remove `HIPAA Notice` from the English and Spanish search descriptions because the page no longer purports to be a formal HIPAA notice.

Short Netlify privacy notices were also added below both appointment forms.

### 4. Penile implant promotional wording already approved

English and Spanish wording was revised consistently across the implant pages, ED pages, home pages, service summaries, related links, metadata, and structured FAQ content:

- `Best device available` was replaced with a factual statement that Coloplast Titan is Dr. Kashani's preferred inflatable penile prosthesis based on design, reliability, and suitability for appropriate patients.
- `Permanent ED resolution/permanent solution` was changed to `long-term surgical option` or the Spanish equivalent.
- `Highest-satisfaction treatment`, `most men wish they had done it sooner`, and similar unsupported comparative language were replaced with a statement that published studies generally report high satisfaction while individual experiences and outcomes vary.
- The fixed `15+ year average lifespan` and `industry-leading/comprehensive warranty` claims were replaced with a statement that implants are designed for long-term use, longevity varies, revision or replacement may eventually be needed, and warranty coverage is subject to current manufacturer terms.

## Start here next time: three pending implant questions

These three items were presented but **not yet approved or changed**:

### A. Absolute sexual-function language

Current wording includes `no effect whatsoever`, says postoperative sexual experience is the same or better, and says performance anxiety is `completely eliminated`.

Proposed replacement:

> Penile implants are designed to restore rigidity and generally do not directly change orgasm, ejaculation, or sexual sensation. Individual experiences vary, and Dr. Kashani will review factors relevant to you.

### B. Exact infection-rate claim

Current wording states infection occurs in `less than 1%` of cases using the No-Touch Technique. This can read as a promised personal complication rate when individual risk varies.

Proposed replacement:

> Infection is an uncommon but important risk of penile implant surgery. Individual risk varies based on health history and surgical factors. Measures such as appropriate preparation, surgical technique, and device coatings are used to reduce risk and will be discussed before surgery.

### C. Comparative experience/outcome claims

Current wording includes `far more experience than a typical urologist`, `one of the few`, and says surgical volume translates directly into better outcomes and lower complication rates.

Proposed factual replacement:

> Dr. Kashani completed dedicated fellowship training in Male Sexual Health and Reproductive Medicine at Lenox Hill Hospital, including training in prosthetic urology, and regularly evaluates patients considering penile implant surgery.

## Remaining review queue after the three questions above

Review these in batches of two or three. These are review candidates, not predetermined deletions.

1. Search the remaining English and Spanish pages for absolute, guarantee-like, or superiority claims. Examples already observed include `gold standard`, `best`, `no one can tell`, `completely`, `far more experience`, `better outcomes`, and precise success/complication percentages without nearby sourcing.
2. Review the penile implant page's other absolute FAQ wording, including claims that nerves are not touched, orgasm/ejaculation are unaffected in every case, and anxiety is completely eliminated.
3. Review the ED pages' comparative claim that Dr. Kashani has far more experience than a typical urologist and treats ED every day.
4. Review `one of the few urologists on Long Island` and similar scarcity claims. Retain only if objectively supportable.
5. Review exact clinical outcome statistics across BPH, Peyronie's disease, hydrocele, kidney stones, penile implants, and vasectomy reversal. Decide whether to retain with sources, qualify, or generalize.
6. Review `gold standard` and `most durable/most effective` treatment comparisons for clinical accuracy and tone. The project instructions specifically discourage `gold standard` in patient-facing language.
7. Correct the elevated-PSA phrase `always warrants evaluation` in visible content and JSON-LD; project tone instructions prohibit that phrase. Use calmer wording such as `is worth discussing with a urologist in context`.
8. Review claims that an implant or treatment `fully restores` sexual function or provides a natural result in every case.
9. Review insurance statements such as `Medicare covers` or `the team will verify benefits` to ensure they match the actual Mount Sinai workflow and avoid guarantees.
10. Consider adding a short embedded-services disclosure for the Elfsight/Google Reviews widget because it loads third-party content. This is optional and was not yet discussed.
11. Perform a dedicated accessibility/WCAG audit. The site is designed to be accessible, but the SEO audit is not a complete ADA/WCAG certification.
12. Recheck all credentials, fellowship descriptions, publication counts, office hours, addresses, telephone numbers, and procedure availability for factual accuracy before submission.
13. Recheck the current Google review count and rating before deployment or sending the permission email.

## Netlify administrative follow-up

- At the time of review, the Netlify Forms dashboard showed 13 stored English `appointment` submissions and no Spanish `appointment-es` submissions.
- Confirm each legitimate request was received at the designated Mount Sinai email.
- Delete test entries and completed scheduling requests that no longer need to remain in Netlify.
- Check Netlify approximately monthly (quarterly is acceptable at very low volume) and routinely delete completed submissions.
- Keep Form Detection enabled, or the appointment forms will stop working.
- Verify the Mount Sinai email under Netlify's Form Notifications settings.
- Do not place screenshots containing patient names, emails, phone numbers, or messages into this repository or future AI chats.

## Comparator websites and precedent

Websites supplied by Dr. Kashani:

- Dr. Rajiv Datta: https://rajivdattamd.com/contact
- Dr. Philippa Cheetham: https://www.drcheetham.com/
- Dr. Ash Tewari/Center for Prostate Cancer: https://prostatecancercenternyc.com/
- Dr. Alan Garely: https://www.drgarely.com/

Relevant observations:

- These sites openly reference Mount Sinai or Mount Sinai South Nassau, in some cases much more prominently than `menshealthlongisland.com`.
- Dr. Datta and Dr. Garely have public contact/appointment forms.
- Dr. Garely's privacy policy expressly identifies Netlify as a third-party provider that stores personally identifiable information. This closely supports the Netlify disclosure added to this site.
- Dr. Datta's privacy policy follows the same model but identifies GoDaddy.
- Dr. Cheetham has a contact form and a separate review-submission form.
- Dr. Tewari's site contains strong promotional language, extensive Mount Sinai references, and patient forms.
- Comparator sites are useful evidence for consistent institutional treatment, but their existence does not prove that each site has formal Mount Sinai approval.

Official Mount Sinai precedent supplied by Dr. Kashani:

- Dr. Philippa Cheetham's official Mount Sinai physician profile includes a direct link to her personal professional website: https://profiles.mountsinai.org/philippa-j-cheetham
- This is an official physician-profile link, not a link on the MyMountSinai patient homepage.

## Permission-email points to preserve

The final email should be drafted only after the content review is completed. It should:

- Clearly ask for review and explicit permission under Mount Sinai website governance.
- Describe the site as a bilingual English/Spanish educational resource for men's urological health on Long Island.
- Explain why the site matters professionally: it communicates Dr. Kashani's specific clinical niche and services to patients seeking that expertise in the region.
- State that the site is personal and professional, not an official Mount Sinai website.
- State that it has no advertisements, sponsorships, affiliate links, paid content, products, or other revenue-generating activity.
- State that no Mount Sinai logo or branding is used.
- State that it is not a patient portal or clinical-management platform and instructs users not to submit sensitive medical information.
- Explain the limited appointment form accurately: basic contact/scheduling information, processed through Netlify, delivered to a Mount Sinai email, with routine deletion planned.
- State that no patient stories or identifiable patient information are published and no proprietary Mount Sinai material is disclosed.
- Note that links direct users to official Mount Sinai systems/profiles for booking or authoritative information.
- State that affiliation references are accurate and link to the official Mount Sinai profile.
- Mention comparable personal professional websites and contact forms maintained by other physicians in the Mount Sinai/Mount Sinai South Nassau network.
- Use careful consistency language rather than `if they have it, why can't I`:

> Comparable personal professional websites and patient contact forms are currently maintained by other physicians within the Mount Sinai and Mount Sinai South Nassau network. I am seeking consistent review and approval of my site under the same institutional framework.

- Ask that, if the site is approved, `menshealthlongisland.com` receive the same consideration as Dr. Cheetham's site and be linked from Dr. Kashani's official Mount Sinai physician profile:

> I also note that Mount Sinai's official physician profile for Dr. Philippa Cheetham includes a direct link to her personal professional website. If my website is approved, I would appreciate the same consideration: adding a link to menshealthlongisland.com from my official Mount Sinai physician profile.

- Offer to make any changes requested by Digital Marketing/Branding.

## Verification status at this handoff

- There are 66 local HTML pages.
- The bundled SEO audit passes for all 66 pages, including canonical URLs, hreflang pairs, JSON-LD syntax, internal links, assets, headings, and sitemap coverage.
- `git diff --check` passes.
- The audit does not substitute for legal review, Mount Sinai approval, medical-claim substantiation, a live deployment check, or a complete accessibility audit.

## Resume checklist

1. Pull the latest `main` branch from GitHub.
2. Read this file and the repository `AGENTS.md` before editing.
3. Begin with pending questions A-C above.
4. Continue in batches of two or three, documenting each keep/change decision here.
5. Run `node scripts/seo-audit.mjs` and `git diff --check` after each approved batch.
6. When content review is complete, draft the final Mount Sinai permission email and a concise list of operational commitments.

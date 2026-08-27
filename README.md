# Kids Care Rehab Centre — Website

Redesign of [kidscarerehabcenter.in](https://www.kidscarerehabcenter.in). React 19 + Vite 8 + TypeScript + Tailwind 4.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview  # serve the build locally
```

---

## How content works

**All copy lives in `src/content/` as typed data — not in components.** To change wording, edit the data file. You should not need to touch a component.

| File | Holds | Source |
|---|---|---|
| `site.ts` | Phone, email, hours, stats, trust registrations | Trust docs + live site |
| `services.ts` | 7 services | `SERVICES WEBSITE.docx` (verbatim) |
| `conditions.ts` | 10 conditions | `CONDITIONS WEBSITE.docx` (verbatim) |
| `about.ts` | About, director bio, adult physio, books | `ABOUT US.docx` + live site |
| `programs.ts` | 6 programs | Live site |
| `branches.ts` | Royapettah + Madipakkam | Trust docs + live site |
| `placeholders.ts` | ⚠️ **Everything not yet approved** | Drafted / dummy |

Services and conditions cross-link each other automatically via the `conditions` and `services` arrays on each record. Adding a service to a condition's list makes it appear on that condition's page and vice versa — no markup changes needed.

Seventeen pages (7 services + 10 conditions) are generated from two templates.

---

## ⚠️ Blocked on client input — must resolve before launch

### 1. Photo consent — blocks the Gallery page

`GALLERY.docx` contains 91 photographs. A large share show **identifiable children in a therapy setting**, which is health data about minors. Under India's DPDP Act 2023 this requires verifiable parental consent, and publishing on a public site is a materially higher exposure than a private album.

**The Gallery page is deliberately empty** and set to `noindex`. Nothing will be added until the client confirms written consent per photograph, or approves a facility-and-events-only selection.

Several photos also show banners with phone numbers and email addresses that may be outdated — crop or exclude those regardless.

### 2. Testimonials — page is dummy content

`/testimonials` renders three visibly-marked placeholder cards and is set to `noindex`. Needs 6–10 real testimonials with written permission from each family. Keep wording to *progress described*, never anything resembling a cure or guarantee.

### 3. Logo

The header, footer and favicon currently use an **interim typographic lockup** built in `components/layout/Logo.tsx`. Replace the inline `<svg>` with the real artwork when supplied — the layout around it won't need to change. Request the original as **SVG**.

### 4. Contact-detail inconsistencies found on the live site — ✅ resolved 2026-08-27

Client confirmed the correct values:

| Item | Resolution |
|---|---|
| Royapettah landline | `044 2835 3136` (already matched the homepage version — no change needed) |
| Royapettah mobile | `+91 87785 67900` (already present as the WhatsApp/mobile number) |
| Royapettah address (public/contact) | `No. 52/3, Gowdiamutt Road, Ganapathy Colony, Royapettah` — client chose this over the Form 10AC trust-paper address (`52/2, Old No. 97`), **even though the client's own 2026 event banner prints the 52/2 version**. Client should double-check this is still intentional. |
| Registered office (Trust page only) | Left as `New No. 52/2 (Old No. 97), Gowdia Mutt Road` — kept matching the Form 10AC filing for 12A/80G legal verification, deliberately different from the public contact address above. |
| Email (contact widget) | Already correct in this build: `kidscarerehabcenter@gmail.com` — no typo, no wrong TLD. |

Updated in `src/content/branches.ts` and `src/components/layout/Seo.tsx`.

### 5. Statistics

The original mockup proposed "10,000+ children empowered" and "20+ programmes". **Neither is supported by any supplied document**, so neither is used. The site currently shows only verifiable figures: 16+ years, 20+ years director experience, 7 disciplines, 2 locations. Supply evidence if the larger figures should appear.

---

## Still needed from the client

1. **Logo** — original SVG (or AI/EPS), plus a square mark for the favicon
2. **Confirmed contact sheet** — resolving the four conflicts above, plus opening hours per branch
3. **Photo consent confirmation** — written, per photograph intended for publication
4. **Testimonials** — 6–10, with family permission
5. **Team roster** — names, qualifications, photos, and consent for therapists to be featured
6. **FAQ review** — nine drafted answers need approval; two are unanswered (languages offered, fees policy)
7. **Verification of statistics** — if the larger figures are to be used
8. **Vocational Training Centre** — NCVRT/TN/2492/VTC appears on centre banners but nowhere in the sitemap. Confirm whether it should have a page, and supply scope and courses
9. **Higher-resolution facility photography** — ideally a short reshoot of therapy rooms, reception and equipment with no children present, which sidesteps the consent problem entirely
10. **Domain, hosting, analytics access** — for DNS cutover, Google Analytics and Search Console
11. **Donation pathway decision** — the Trust holds 80G and CSR registration but there is no Donate page. Payment gateway and receipting would be separate scope
12. **Tamil language decision** — two of the Director's three books are in Tamil and the podcast is bilingual, so a Tamil site would widen reach considerably. Retrofitting i18n later is expensive; decide now

---

## Decisions taken during the build

- **Children *and* adults.** The new copy supplied was exclusively paediatric, but the live site has a substantial Adult Physio Care service and the vocational centre serves adults. Rather than silently dropping a real service line, Adult Physio Care is retained at `/adult-physio-care` and linked from Services, the footer, and the Royapettah branch page.
- **"Conditions We Support" added to the sitemap.** The client supplied finished copy for ten conditions, but the page was absent from the original 10-page proposal. It is the strongest SEO surface in the whole content set, so it became a hub plus ten detail pages.
- **Charitable Trust page restored** at `/trust`, with the CSR, 12A and 80G registration numbers published for verification.
- **No stock photography.** Rather than fill the site with generic stock images of children, the hero uses an illustrative panel that states plainly that real photography is pending consent. Stock photos of other people's children on a disability clinic's website would be worse than no photo.

---

## SEO

- Unique `<title>` and meta description per route, via `components/layout/Seo.tsx` (React 19 hoists these natively — no helmet library).
- `MedicalClinic` structured data on the homepage; `FAQPage` on `/faq`.
- **`public/_redirects` maps all 13 old Wix URLs to their new equivalents (301)** so existing search rankings carry over. This is Netlify format — if hosting elsewhere, port these to that platform's redirect mechanism.
- `robots.txt` disallows `/gallery` and `/testimonials` while they hold placeholder content.
- **`sitemap.xml` is not yet generated** — add it once the final URL list is locked.

---

## Deployment (Netlify)

The enquiry form uses Netlify Forms — `data-netlify="true"` with a honeypot field, so no backend is required. In development the form short-circuits to the success state instead of posting.

Build command `npm run build`, publish directory `dist`. `_redirects` includes the SPA fallback and must stay last.

After deploying, confirm form submissions arrive before launch.

---

## Accessibility

Verified: no missing alt text, no unnamed controls, no duplicate IDs, no heading-level skips, single `<h1>` per page, visible focus rings, `prefers-reduced-motion` respected, no horizontal overflow at 375px, mobile action-bar targets 125×62px.

Not yet done: screen-reader pass with a real AT, and colour-contrast verification of the marigold accent in every context it is used.

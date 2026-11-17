# KCR Special School & Kids Care Rehab Centre — Website

Website for **KCR Special School** and **Kids Care Rehab Centre**, Royapettah, Chennai — a unit of Kids Rehab Charitable Trust.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS 4 · React Router 7 · Framer Motion

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev       # local dev server → http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

## Project structure

```
public/                 Static files served as-is
  gallery-photos/       Event and centre photographs
  documents/            School registration certificate (PDF + preview)
  video/                Intro video and poster
  _redirects            Netlify redirects (old URLs → new, SPA fallback)
  sitemap.xml, robots.txt
src/
  content/              All site text and data — edit here to change wording
  components/
    layout/             Header, footer, SEO, mobile action bar
    sections/           Reusable page sections (School.tsx = KCR Special School)
    ui/                 Buttons, cards, icons and other primitives
  pages/                Route pages
```

## Editing content

All text lives in `src/content/` as typed data, so most updates need no component changes.

| File | Contains |
|---|---|
| `site.ts` | Phone, email, WhatsApp, hours, admission form link, school registration, trust registrations, stats |
| `branches.ts` | Royapettah and Madipakkam addresses, phones, map links |
| `services.ts` | Therapy services (one page each) |
| `conditions.ts` | Conditions supported (one page each) |
| `programs.ts` | Programmes |
| `about.ts` | About page, founder profile, journey timeline, books |
| `faqs.ts` | FAQ page |
| `gallery.ts` | Gallery photo list and categories |

Common updates:

- **Admission form link** — `admissionFormUrl` in `site.ts`
- **Phone / WhatsApp** — `phoneDisplay`, `phoneHref`, `whatsapp` in `site.ts`
- **New photos** — add the file to `public/gallery-photos/` (max ~1400px wide), then list it in `gallery.ts`
- **Events (Minister visit, Diwali)** — `src/components/sections/School.tsx`

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- The contact enquiry form uses **Netlify Forms** (`public/forms.html` lets Netlify detect it). After the first deploy, send a test enquiry and confirm it arrives under *Forms* in the Netlify dashboard.
- `public/_redirects` maps the old site's URLs to the new pages and includes the SPA fallback (must stay last).

## SEO

- Unique title and description per page (`src/components/layout/Seo.tsx`)
- `MedicalClinic` structured data on the homepage, `FAQPage` on `/faq`
- `public/sitemap.xml` — submit in Google Search Console after launch

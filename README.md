# DiGi Trend Website

A complete frontend-only agency website built with Next.js 16, TypeScript and Tailwind CSS 4.

## Included

- Premium responsive homepage with all planned sections
- Sticky header, desktop mega menu and mobile navigation
- About, Services, Work, Case Studies, Pricing, Insights, Contact, Book Demo, Careers and legal pages
- 10 static SEO service landing pages
- 3 detailed case studies and 6 insight article routes
- Frontend-only inquiry and consultation forms with success state
- WhatsApp, call and mobile sticky conversion actions
- Lead capture popup
- Page metadata, canonical URLs, Open Graph, sitemap, robots, manifest and JSON-LD
- Accessible interactions and reduced-motion support
- Local SVG artwork; no external image dependency

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Important before launch

The forms are intentionally frontend-only. Connect `components/lead-form.tsx` to your CRM, email provider, form service or API before production. Replace placeholder social URLs, legal text, case-study claims and portfolio content with approved final information. Verify the production domain in `data/site.ts`.

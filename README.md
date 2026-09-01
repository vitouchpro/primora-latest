# PRIMORA Interiors — Website

A premium, SEO/AEO/GEO-optimised marketing website for PRIMORA, a luxury
residential interior design studio in Chennai. Built with Vite, React,
TypeScript, Tailwind CSS, and prerendered per-route with `vite-react-ssg`.

See [`docs/superpowers/specs/2026-09-01-primora-website-design.md`](docs/superpowers/specs/2026-09-01-primora-website-design.md)
for the full design spec (competitive analysis, sitemap, design system,
technical architecture).

## Getting started

```bash
npm install
npm run dev       # local dev server (Vite, CSR)
npm run build     # type-check + prerender every route to static HTML
npm run preview   # preview the production build locally
```

## ⚠️ Before launch — replace placeholder content

Everything in this site is real, working code, but the **content is
placeholder** so the full structure could be built and reviewed before real
assets exist. Before going live, update:

1. **`src/data/site.ts`** — real phone number, WhatsApp number, email,
   studio address, Google Maps embed URL, social links, business hours.
2. **`public/favicon.svg`, `public/og-cover.svg`** — replace with PRIMORA's
   real logo mark and a real 1200×630 social-share image (JPG/PNG — some
   platforms don't preview SVG `og:image`).
3. **`src/components/ui/PlaceholderImage.tsx`** usages throughout — swap
   for real `<img>`/`<picture>` tags once project and studio photography is
   available. The placeholder component is intentionally centralised, so
   this can be done incrementally, page by page.
4. **`src/data/*.ts`** (services, projects, blog, reviews, team) — replace
   with PRIMORA's real project case studies, team bios, and reviews.
5. **`src/pages/Contact.tsx`** — the enquiry form currently hands off to a
   pre-filled WhatsApp message (no backend required, works out of the box).
   Swap in a real form backend (e.g. Formspree) if you'd rather receive
   enquiries by email — the TODO is marked in that file.
6. **`vite.config.ts`** — `SITE.url` (via `src/data/site.ts`) must be the
   real production domain before deploying, since it feeds the sitemap,
   canonical URLs, and structured data.

## Architecture notes

- **Prerendering**: every route (including dynamic `/services/:slug`,
  `/projects/:slug`, `/blog/:slug`) is rendered to real static HTML at
  build time via `vite-react-ssg`, so search engines and AI answer engines
  see full content — not an empty SPA shell.
- **SEO**: per-route `<title>`/description/canonical/Open Graph via
  `src/components/Seo.tsx`.
- **AEO** (structured data): JSON-LD for LocalBusiness, Service, Article,
  FAQPage, Review/AggregateRating, and BreadcrumbList — see `Seo.tsx`.
- **GEO**: `llms.txt`, `sitemap.xml`, and `robots.txt` are generated at
  build time in `vite.config.ts`'s `onFinished` hook.
- **Chatbot**: a rule-based, scripted lead-qualifying assistant
  (`src/components/layout/Chatbot.tsx`, flow defined in
  `src/data/chatbotFlow.ts`) — no external LLM API or cost. It can be
  swapped for a real LLM-backed assistant later without touching the rest
  of the site.
- **WhatsApp**: floating button + contact form + chatbot all deep-link to
  `wa.me` with a pre-filled, context-aware message.

## Deployment

This is a static site (`npm run build` outputs to `dist/`) — deploy it to
any static host (Vercel, Netlify, Cloudflare Pages, etc.). No server or
database required.

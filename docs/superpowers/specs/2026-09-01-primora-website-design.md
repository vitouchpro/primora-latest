# PRIMORA Interior Design Website — Design Spec

Date: 2026-09-01
Status: Approved by user — proceeding to implementation

## Context

PRIMORA is a new premium/luxury residential interior design brand competing in
Chennai against incumbents like Tint Tone & Shade (tinttoneandshade.com). This
spec covers the marketing website: content, SEO/AEO/GEO, UI/UX, and the React
implementation.

## Competitive analysis (Tint Tone & Shade)

**Strengths observed:** clear value prop + trust stats on homepage, broad
service taxonomy (10 services, each own URL), multi-city landing pages
(Chennai/Hyderabad/Bangalore/Dubai), extra topic pages (`/process`,
`/cost-calculator`, `/wardrobe-designers`, `/modular-kitchen`), sitewide
WhatsApp button, named client reviews with project context, homepage FAQ
block (AEO signal).

**Gaps identified:** built on Framer (templated, generic motion), thin
structural SEO (single H1, no visible schema/JSON-LD), no AI chatbot (only a
static WhatsApp link), no pricing transparency, thin portfolio media, no
process timeline or team/designer bios, no certifications/press/warranty
surfaced, no multilingual support, likely mediocre Core Web Vitals from a
page-builder export.

**PRIMORA's differentiation:** distinctive premium art direction, real
motion/interaction design (not template defaults), structured SEO/schema,
an AI lead-qualifying chatbot, deeper trust content (Process + Team pages),
transparent warranty/process communication — while matching the
competitor's structural breadth (services, portfolio, blog, FAQ).

## Decisions (confirmed with user)

- **Market**: Chennai only for this phase (no multi-city pages yet).
- **Positioning**: Ultra-premium / luxury residential.
- **Content assets**: Placeholder copy/images/logo everywhere, clearly
  structured as content collections so real assets can be swapped in later
  without touching component code.
- **Chatbot**: Rule-based lead-qualifying assistant (quick replies, captures
  name/phone/interest, hands off to WhatsApp). No external LLM API/cost.
- **Stack**: Vite + React + TypeScript + Tailwind CSS, static SPA prerendered
  per route (not a Next.js migration).
- **Visual style**: Warm minimalist luxury — ivory/charcoal base, warm gold
  accent, serif display + sans body, generous whitespace.
- **Animation**: Subtle premium — scroll reveals, gentle parallax, animated
  counters, refined hover states. Respects `prefers-reduced-motion`.
- **Extra pages**: Process (how we work) and Team (designers), in addition
  to Home/About/Services/Projects/Reviews/Contact/Blog.

## Sitemap

```
/                          Home
/about                     About Us
/services                  Services (index)
/services/:slug            10 service detail pages
/projects                  Projects (filterable grid)
/projects/:slug            Case studies
/process                   How We Work
/team                      Team / Designers
/reviews                   Reviews
/blog                      Blog (index)
/blog/:slug                Blog article
/contact                   Contact
/privacy-policy /terms     Legal
404
```

## Design system

- Palette: ivory `#F8F4EC`, charcoal `#231F1A`, warm gold accent `#B9925A`,
  terracotta secondary accent `#A9583F`.
- Type: serif display for headings, geometric sans for body/UI.
- Motion: Framer Motion — scroll reveals, hero/portfolio parallax, animated
  stat counters, shrinking sticky header, hover states, page transitions.

## Page sections

See chat transcript for full page-by-page section breakdown (Home, About,
Services index + detail, Projects index + case study, Process, Team,
Reviews, Blog index + article, Contact). Summary:

- **Home**: hero, trust stats, about teaser, services grid, featured
  projects, process teaser, why-PRIMORA features, testimonials, blog teaser,
  FAQ (AEO), CTA banner.
- **Services**: index grid → 10 detail pages (hero, description, inclusions,
  mini-process, gallery, related projects, CTA).
- **Projects**: filterable grid (BHK/locality/style) → case study (hero
  gallery, stats, narrative, before/after, testimonial, related projects).
- **Process**: consultation → concept/3D design → material selection →
  execution/PM → handover → post-project care (10-yr warranty).
- **Team**: founder + designer bios, philosophy.
- **Reviews**: full testimonial wall, filterable, aggregate rating.
- **Blog**: index with categories/search; article with related posts, share.
- **Contact**: form, embedded map, address/phone/email, hours, WhatsApp CTA.

Sitewide: sticky header with services mega-menu, footer sitemap, floating
WhatsApp button, floating chatbot bubble, scroll-to-top.

## Technical architecture

- Vite + React 18 + TypeScript + Tailwind + React Router + Framer Motion.
- **Prerendering**: `vite-react-ssg` renders real static HTML per route at
  build time so crawlers/AI answer engines see full content, not an empty
  SPA shell.
- **SEO**: unique title/description per route, semantic heading hierarchy,
  sitemap.xml + robots.txt at build, descriptive slugs, image alt text,
  lazy-loading, code-split routes, font preloading.
- **AEO (structured data)**: JSON-LD for `HomeAndConstructionBusiness`
  (sitewide), `Service` (per service page), `Article` (blog), `FAQPage`
  (home), `Review`/`AggregateRating` (reviews), `BreadcrumbList`.
- **GEO**: `llms.txt` at site root summarizing PRIMORA for AI crawlers;
  consistent NAP facts repeated across pages; no JS-gated content.
- **Chatbot**: local rule-based React component, quick-reply flow, ends in a
  WhatsApp deep link handoff.
- **WhatsApp**: floating `wa.me` button with placeholder number and
  page-aware prefilled message.
- **Forms**: client-validated, wired to a placeholder submission endpoint
  (Formspree-style) marked with a TODO for the real endpoint/number/email.
- **Content**: JSON/TS content collections per domain (services, projects,
  blog, reviews, team) — editable without touching components.
- **Deploy target**: static hosting (Vercel/Netlify).

## Build phases

1. Design system + layout shell (header/nav/footer/WhatsApp/chatbot) + Home.
2. About, Services (index + 10 details), Process, Team.
3. Projects (index + case studies), Reviews.
4. Blog (index + article template + sample posts).
5. Contact, forms, chatbot, WhatsApp integration.
6. SEO/schema pass, sitemap/robots/llms.txt, responsive + performance QA.

All content is placeholder, clearly swappable, per user instruction to
implement now and review once built.

import { Head } from 'vite-react-ssg'
import { SITE } from '../data/site'

interface SeoProps {
  title: string
  description: string
  path: string
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
}

/**
 * Per-route SEO: unique title/description, canonical URL, Open Graph +
 * Twitter cards, and optional JSON-LD structured data (AEO/GEO signal).
 */
export function Seo({ title, description, path, image, jsonLd, noindex }: SeoProps) {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`
  const url = `${SITE.url}${path}`
  // TODO: replace with a real branded JPG/PNG (1200x630) once PRIMORA
  // supplies photography — some social crawlers (e.g. Facebook) don't
  // render SVG og:image previews, so this placeholder won't preview
  // everywhere, though it's harmless.
  const ogImage = image ?? `${SITE.url}/og-cover.svg`
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  )
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: SITE.fullName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address,
      addressLocality: SITE.city,
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    areaServed: SITE.serviceAreas.map((a) => `${a}, ${SITE.city}`),
    sameAs: Object.values(SITE.social),
    openingHours: 'Mo-Sa 10:00-19:00',
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

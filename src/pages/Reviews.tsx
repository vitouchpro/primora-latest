import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { REVIEWS, averageRating } from '../data/reviews'
import { SITE } from '../data/site'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5 12.6 7l6 .8-4.4 4.2 1 6-5.2-2.8-5.2 2.8 1-6L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: SITE.fullName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating(),
      reviewCount: REVIEWS.length,
    },
    review: REVIEWS.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating },
      reviewBody: r.text,
    })),
  }

  return (
    <>
      <Seo
        title="Client Reviews"
        description={`${REVIEWS.length}+ reviews from PRIMORA homeowners across Chennai — read what clients say about our design and execution.`}
        path="/reviews"
        jsonLd={[reviewSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }])]}
      />
      <PageHeader
        eyebrow="Clients' Words"
        title={`Rated ${averageRating()} / 5 by PRIMORA homeowners`}
        description="Every project ends with a conversation about what worked and what we could do better. Here's what our clients told us."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
      />

      <section className="py-20">
        <Container>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.name} delay={(i % 6) * 0.06} className="mb-6 break-inside-avoid rounded-2xl bg-ivory-dim p-6">
                <Stars count={review.rating} />
                <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">"{review.text}"</p>
                <div className="mt-5">
                  <p className="font-display text-base text-charcoal">{review.name}</p>
                  <p className="text-xs text-charcoal-soft">
                    {review.role} · {review.city}
                    {review.project ? ` · ${review.project}` : ''}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}

import { Link } from 'react-router-dom'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { BLOG_POSTS } from '../data/blog'

export default function BlogIndex() {
  return (
    <>
      <Seo
        title="Interior Design Blog & Guides"
        description="Design guides, cost breakdowns, and trend reports from the PRIMORA team — practical advice for planning your Chennai home interior."
        path="/blog"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])}
      />
      <PageHeader
        eyebrow="The Journal"
        title="Design guides, cost breakdowns & trends"
        description="Practical, no-fluff advice from our design team — the same guidance we give clients in consultation, written down."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 6) * 0.06}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <PlaceholderImage label={post.category} hue={post.hue} ratio="landscape" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">{post.category}</p>
                  <h2 className="mt-1 font-display text-xl leading-snug text-charcoal group-hover:text-terracotta">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{post.excerpt}</p>
                  <p className="mt-3 text-xs text-charcoal-soft">
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {post.readTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}

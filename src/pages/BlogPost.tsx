import { Navigate, useParams, Link } from 'react-router-dom'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { getPostBySlug, relatedPosts } from '../data/blog'
import { SITE, whatsappLink } from '../data/site'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug ?? '')
  if (!post) return <Navigate to="/blog" replace />

  const related = relatedPosts(post.slug)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: SITE.fullName },
    datePublished: post.date,
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={[
          articleSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: post.category }]}
      >
        <p className="mt-4 text-sm text-charcoal-soft">
          By {post.author} ·{' '}
          {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.readTime}
        </p>
      </PageHeader>

      <article className="py-16">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <PlaceholderImage label={post.title} hue={post.hue} ratio="wide" className="rounded-3xl" />
          </Reveal>

          <Reveal delay={0.1} className="prose-none mt-10 space-y-6">
            {post.content.map((para) => (
              <p key={para} className="text-lg leading-relaxed text-charcoal-soft">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ivory-dim p-6">
            <p className="text-sm text-charcoal-soft">Have a question about your own project?</p>
            <a
              href={whatsappLink(`Hi PRIMORA, I read "${post.title}" and had a question.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Ask on WhatsApp
            </a>
          </Reveal>
        </Container>
      </article>

      <section className="bg-ivory-dim py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl text-forest md:text-3xl">More from the journal</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/blog/${p.slug}`} className="group block">
                  <PlaceholderImage
                    label={p.category}
                    hue={p.hue}
                    ratio="landscape"
                    className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <p className="mt-3 font-display text-base leading-snug text-forest group-hover:text-terracotta">{p.title}</p>
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

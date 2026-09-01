import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { BLOG_POSTS } from '../../data/blog'

export function BlogTeaser() {
  const posts = BLOG_POSTS.slice(0, 3)
  return (
    <section className="py-24">
      <Container>
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <Eyebrow>From the Journal</Eyebrow>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">Design guides & insights</h2>
          </div>
          <Button to="/blog" variant="ghost">
            Visit the blog →
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    <PlaceholderImage label={post.category} hue={post.hue} ratio="landscape" />
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">{post.category}</p>
                <h3 className="mt-1 font-display text-lg leading-snug text-charcoal group-hover:text-terracotta">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-charcoal-soft">{post.readTime}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

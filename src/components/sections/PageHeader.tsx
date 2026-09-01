import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

interface Crumb {
  label: string
  to?: string
}

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string
  title: string
  description?: string
  crumbs: Crumb[]
  children?: ReactNode
}) {
  return (
    <section className="border-b border-line bg-ivory-dim pt-10 pb-16 md:pt-14 md:pb-20">
      <Container>
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-charcoal-soft">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1">
              {i > 0 && <span className="text-charcoal/30">/</span>}
              {c.to ? (
                <Link to={c.to} className="hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className="text-charcoal">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-6 bg-gold" />
            {eyebrow}
          </span>
          <h1 className="max-w-3xl font-display text-4xl text-charcoal md:text-5xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-soft">{description}</p>}
          {children}
        </Reveal>
      </Container>
    </section>
  )
}

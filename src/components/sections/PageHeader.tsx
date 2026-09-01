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
    <section className="relative overflow-hidden border-b border-line bg-ivory-dim pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,var(--color-sage-tint),transparent_65%)] opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} aria-hidden="true" />
      <Container className="relative">
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-charcoal-soft">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1">
              {i > 0 && <span className="text-forest/30">/</span>}
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-gold-deep">
                  {c.label}
                </Link>
              ) : (
                <span className="text-forest">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            <span className="h-px w-6" style={{ background: 'var(--gradient-gold)' }} />
            {eyebrow}
          </span>
          <h1 className="max-w-3xl font-display text-4xl text-forest md:text-5xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-soft">{description}</p>}
          {children}
        </Reveal>
      </Container>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { ServiceIcon } from '../ui/ServiceIcon'
import { SERVICES } from '../../data/services'

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-ivory-dim py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
        aria-hidden="true"
      />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="font-display text-3xl text-forest md:text-4xl">Interior design services, end to end</h2>
          <p className="mt-4 text-charcoal-soft">
            Ten specialised services, delivered individually or together as one seamless
            turnkey experience.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 5) * 0.06}>
              <Link
                to={`/services/${service.slug}`}
                className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ivory p-6 hover:border-gold/60"
              >
                {/* Sage wash rises from the base of the card on hover. */}
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sage-tint to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-forest text-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-gold group-hover:text-forest">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="relative font-display text-lg text-forest">{service.shortTitle}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-charcoal-soft">{service.summary}</p>
                <span className="relative mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  )
}

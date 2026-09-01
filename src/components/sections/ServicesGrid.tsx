import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { ServiceIcon } from '../ui/ServiceIcon'
import { SERVICES } from '../../data/services'

export function ServicesGrid() {
  return (
    <section className="bg-ivory-dim py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Interior design services, end to end</h2>
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
                className="group flex h-full flex-col rounded-2xl border border-line bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-charcoal/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-display text-lg text-charcoal">{service.shortTitle}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-soft">{service.summary}</p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">Learn more →</span>
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

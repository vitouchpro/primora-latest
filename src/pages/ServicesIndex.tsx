import { Link } from 'react-router-dom'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { ServiceIcon } from '../components/ui/ServiceIcon'
import { SERVICES } from '../data/services'

export default function ServicesIndex() {
  return (
    <>
      <Seo
        title="Interior Design Services in Chennai"
        description="Explore PRIMORA's full range of interior design services in Chennai — residential design, space planning, custom furniture, lighting design, and more."
        path="/services"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])}
      />
      <PageHeader
        eyebrow="What We Do"
        title="Interior design services, tailored end to end."
        description="From a single design consultation to a fully managed, turnkey home transformation — every service is delivered with the same standard of craft."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-forest/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ivory-dim text-terracotta transition-colors group-hover:bg-gold group-hover:text-forest">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h2 className="font-display text-xl text-forest">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">{service.summary}</p>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-gold">Explore service →</span>
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

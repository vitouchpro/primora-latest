import { Navigate, useParams, Link } from 'react-router-dom'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { ServiceIcon } from '../components/ui/ServiceIcon'
import { Button } from '../components/ui/Button'
import { getServiceBySlug, SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import { SITE } from '../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug ?? '')
  if (!service) return <Navigate to="/services" replace />

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)
  const relatedProjects = PROJECTS.slice(0, 3)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: { '@type': 'HomeAndConstructionBusiness', name: SITE.fullName },
    areaServed: SITE.city,
    description: service.description,
  }

  return (
    <>
      <Seo
        title={`${service.title} in ${SITE.city}`}
        description={service.summary}
        path={`/services/${service.slug}`}
        jsonLd={[
          serviceSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.description}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.shortTitle }]}
      >
        <div className="mt-8">
          <Button to="/contact" variant="primary">
            Enquire About This Service
          </Button>
        </div>
      </PageHeader>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <PlaceholderImage label={`${service.title} — PRIMORA`} hue={service.hue} ratio="landscape" className="rounded-3xl" />

            <div className="mt-10 grid grid-cols-2 gap-4">
              <PlaceholderImage label="Detail View" hue={service.hue + 6} ratio="square" className="rounded-2xl" />
              <PlaceholderImage label="Material Close-up" hue={service.hue - 6} ratio="square" className="rounded-2xl" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold">
                <ServiceIcon name={service.icon} />
              </div>
              <h2 className="font-display text-2xl text-forest">What's included</h2>
              <ul className="mt-5 space-y-3">
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal-soft">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h2 className="font-display text-2xl text-forest">How it works</h2>
              <ol className="mt-5 space-y-4">
                {service.process.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ivory-dim text-xs font-semibold text-terracotta">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-charcoal-soft">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ivory-dim py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl text-forest md:text-3xl">Related projects</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relatedProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <PlaceholderImage
                    label={project.title}
                    hue={project.hue}
                    ratio="square"
                    className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <p className="mt-3 font-display text-base text-forest">{project.title}</p>
                  <p className="text-xs text-charcoal-soft">{project.location}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl text-forest md:text-3xl">Other services you may need</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-forest hover:border-gold hover:text-gold"
              >
                {s.shortTitle}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}

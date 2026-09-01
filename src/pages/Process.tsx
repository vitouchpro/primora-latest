import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PROCESS_STEPS } from '../data/process'
import { SITE } from '../data/site'

export default function Process() {
  return (
    <>
      <Seo
        title="Our Design Process"
        description="From first consultation to post-project care — how PRIMORA designs and delivers a fully customised interior project in Chennai, step by step."
        path="/process"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Process', path: '/process' }])}
      />
      <PageHeader
        eyebrow="How We Work"
        title="A stress-free process, from first call to final key handover."
        description="Six clear stages, transparent at every step, so you always know exactly what's happening with your home."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Process' }]}
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative flex gap-8 pb-14 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg text-gold">
                    {step.number}
                  </span>
                  {i < PROCESS_STEPS.length - 1 && <span className="mt-2 w-px flex-1 bg-line" />}
                </div>
                <div className="pt-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="font-display text-2xl text-forest">{step.title}</h2>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold">{step.duration}</span>
                  </div>
                  <p className="mt-3 max-w-xl leading-relaxed text-charcoal-soft">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest py-16 text-ivory">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl">Every project is backed by a {SITE.warrantyYears}-year warranty</h2>
            <p className="mx-auto mt-4 max-w-xl text-ivory/70">
              Our relationship doesn't end at handover. Every PRIMORA project includes
              dedicated after-sales support for craftsmanship and modular work.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}

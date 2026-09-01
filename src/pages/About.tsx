import { Seo, localBusinessSchema, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { StatCounter } from '../components/ui/StatCounter'
import { SITE } from '../data/site'
import { FOUNDERS_QUOTE } from '../data/team'

const MILESTONES = [
  { year: SITE.founded, text: 'PRIMORA founded in Chennai with a single studio and a small, hand-picked design team.' },
  { year: SITE.founded + 3, text: 'Crossed 100 completed homes; opened an in-house furniture workshop for fully bespoke pieces.' },
  { year: SITE.founded + 6, text: 'Built a dedicated project management team, moving to milestone-based, transparent execution.' },
  { year: new Date().getFullYear(), text: `${SITE.stats.homes}+ homes delivered and a ${SITE.warrantyYears}-year warranty on every project.` },
]

export default function About() {
  return (
    <>
      <Seo
        title="About PRIMORA — Luxury Interior Design Studio in Chennai"
        description="PRIMORA is a Chennai-based luxury interior design studio crafting fully customised, architect-led homes with fine craftsmanship and a 10-year warranty."
        path="/about"
        jsonLd={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />
      <PageHeader
        eyebrow="About PRIMORA"
        title="Designing homes people actually live in — not just photograph."
        description="We're a Chennai-based studio of designers, project managers, and craftsmen who believe luxury should feel personal, not performative."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="py-20">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <PlaceholderImage label="PRIMORA Founders in Studio" hue={20} ratio="portrait" className="rounded-3xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl text-forest">Our story</h2>
            <p className="mt-5 leading-relaxed text-charcoal-soft">
              PRIMORA began with a simple frustration: too many "luxury" interior projects in
              Chennai looked interchangeable — the same materials, the same layouts, dressed up
              differently. We started PRIMORA to design homes the way a tailor builds a suit:
              around the person, not a catalogue.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-soft">
              Today, our in-house team covers design, 3D visualisation, sourcing, custom
              furniture manufacturing, and on-site project management — so every home we deliver
              carries one coherent vision from first sketch to final styling.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl text-terracotta">
                  <StatCounter value={SITE.stats.homes} suffix="+" />
                </p>
                <p className="text-sm text-charcoal-soft">Homes delivered</p>
              </div>
              <div>
                <p className="font-display text-3xl text-terracotta">
                  <StatCounter value={SITE.stats.years} suffix="+" />
                </p>
                <p className="text-sm text-charcoal-soft">Years of craft</p>
              </div>
              <div>
                <p className="font-display text-3xl text-terracotta">
                  <StatCounter value={SITE.warrantyYears} />
                </p>
                <p className="text-sm text-charcoal-soft">Year warranty</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-forest py-20 text-ivory">
        <Container className="mx-auto max-w-3xl text-center">
          <Reveal>
            <svg viewBox="0 0 32 24" className="mx-auto mb-6 h-8 w-10 fill-gold">
              <path d="M0 24V13.5C0 6 4.5 1 12 0l1.5 3.5C8 5 5.5 8 5 12h7v12H0Zm18 0V13.5C18 6 22.5 1 30 0l1.5 3.5C26 5 23.5 8 23 12h7v12H18Z" />
            </svg>
            <p className="font-display text-2xl leading-relaxed md:text-3xl">{FOUNDERS_QUOTE.quote}</p>
            <p className="mt-6 text-sm text-ivory/70">
              {FOUNDERS_QUOTE.authors} — {FOUNDERS_QUOTE.role}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-forest md:text-4xl">Our journey</h2>
          </Reveal>
          <div className="mx-auto mt-14 max-w-2xl border-l border-line pl-8">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-gold" />
                <p className="font-display text-xl text-terracotta">{m.year}</p>
                <p className="mt-1 leading-relaxed text-charcoal-soft">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}

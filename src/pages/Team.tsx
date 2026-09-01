import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { TEAM, FOUNDERS_QUOTE } from '../data/team'

export default function Team() {
  return (
    <>
      <Seo
        title="Meet the PRIMORA Design Team"
        description="Meet the founders, designers, and project managers behind PRIMORA's luxury interior design projects in Chennai."
        path="/team"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Team', path: '/team' }])}
      />
      <PageHeader
        eyebrow="Our People"
        title="The team behind every PRIMORA home"
        description="Design, sourcing, craftsmanship, and project management — all in-house, so your home is shaped by one coherent team, not a chain of subcontractors."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Team' }]}
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.08}>
                <PlaceholderImage label={member.name} hue={member.hue} ratio="portrait" className="rounded-2xl" />
                <h2 className="mt-5 font-display text-xl text-forest">{member.name}</h2>
                <p className="text-sm font-semibold text-gold">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory-dim py-20">
        <Container className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-display text-2xl italic leading-relaxed text-forest md:text-3xl">
              "{FOUNDERS_QUOTE.quote}"
            </p>
            <p className="mt-5 text-sm text-charcoal-soft">
              {FOUNDERS_QUOTE.authors} — {FOUNDERS_QUOTE.role}
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}

import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { StatCounter } from '../ui/StatCounter'
import { SITE } from '../../data/site'

const STATS = [
  { value: SITE.stats.homes, suffix: '+', label: 'Homes transformed across Chennai' },
  { value: SITE.stats.years, suffix: '+', label: 'Years of design & execution expertise' },
  { value: SITE.stats.satisfaction, suffix: '%', label: 'Client satisfaction on handover' },
  { value: SITE.warrantyYears, suffix: '-yr', label: 'Craftsmanship warranty, every project' },
]

export function TrustStats() {
  return (
    <section className="border-y border-line bg-ivory-dim py-14">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-4xl text-terracotta md:text-5xl">
              <StatCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm leading-snug text-charcoal-soft">{s.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}

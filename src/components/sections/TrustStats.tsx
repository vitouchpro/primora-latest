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

/**
 * Numbers band. Set on deep forest with metallic-gold numerals — the
 * brand board's signature pairing, and a deliberate dark break between
 * two light sections.
 */
export function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-forest py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, var(--color-gold) 0 1px, transparent 1px 22px)',
        }}
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="group text-center">
            <p className="text-metallic font-display text-4xl md:text-5xl">
              <StatCounter value={s.value} suffix={s.suffix} />
            </p>
            <span
              className="mx-auto mt-3 block h-px w-8 origin-center scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              style={{ background: 'var(--gradient-gold)' }}
              aria-hidden="true"
            />
            <p className="mt-3 text-sm leading-snug text-ivory/70">{s.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}

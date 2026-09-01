import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { PlaceholderImage } from '../ui/PlaceholderImage'

export function AboutTeaser() {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <PlaceholderImage label="PRIMORA Design Studio, Chennai" hue={20} ratio="landscape" className="rounded-3xl" />
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>About PRIMORA</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">
            Your home is a reflection of how you want to live.
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal-soft">
            PRIMORA is a Chennai-based luxury interior design studio built on one belief: every
            home should be 100% designed around the people who live in it — never a template,
            never a showroom copy. We blend architect-led planning, bespoke furniture, and
            fine craftsmanship into spaces that feel effortless, not staged.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal-soft">
            From first consultation to final styling, our team manages every stage in-house —
            so you get one point of contact, transparent costs, and a home delivered exactly
            as designed.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="secondary">
              More About Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

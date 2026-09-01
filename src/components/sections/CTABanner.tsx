import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function CTABanner() {
  return (
    <section className="py-8">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-forest px-8 py-16 text-center text-ivory shadow-deep sm:px-16">
          {/* Layered gold glow + hairline frame, echoing the brand board. */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{ background: 'radial-gradient(circle at 18% 18%, var(--color-gold), transparent 58%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ background: 'radial-gradient(circle at 85% 85%, var(--color-terracotta), transparent 55%)' }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-4 rounded-2xl border border-gold/20" aria-hidden="true" />

          <div className="rule-diamond relative mx-auto mb-6 max-w-xs">
            <span className="rotate-45 text-gold" aria-hidden="true">
              ◆
            </span>
          </div>

          <h2 className="relative font-display text-3xl md:text-4xl">Ready to design a home that feels truly yours?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ivory/70">
            Book a free consultation with a PRIMORA designer — no obligation, just a
            conversation about your space and your story.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="gold">
              Book a Free Consultation
            </Button>
            <Button to="/projects" variant="secondary" className="border-ivory/40 text-ivory hover:bg-ivory hover:text-forest">
              Explore Our Work
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

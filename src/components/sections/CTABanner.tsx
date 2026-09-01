import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function CTABanner() {
  return (
    <section className="py-8">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-16 text-center text-ivory sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ background: 'radial-gradient(circle at 20% 20%, var(--color-gold), transparent 55%)' }}
          />
          <h2 className="relative font-display text-3xl md:text-4xl">Ready to design a home that feels truly yours?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ivory/70">
            Book a free consultation with a PRIMORA designer — no obligation, just a
            conversation about your space and your story.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" className="bg-gold text-charcoal hover:bg-ivory">
              Book a Free Consultation
            </Button>
            <Button to="/projects" variant="secondary" className="border-ivory text-ivory hover:bg-ivory hover:text-charcoal">
              Explore Our Work
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

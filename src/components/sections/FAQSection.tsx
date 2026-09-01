import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Accordion } from '../ui/Accordion'
import { HOME_FAQS } from '../../data/faqs'

export function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2 className="font-display text-3xl text-forest md:text-4xl">Your questions, our answers</h2>
          <p className="mt-4 text-charcoal-soft">
            Can't find what you're looking for? Message us directly on WhatsApp or use the
            chat assistant in the corner of your screen.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={HOME_FAQS} />
        </Reveal>
      </Container>
    </section>
  )
}

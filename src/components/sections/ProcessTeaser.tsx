import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { PROCESS_STEPS } from '../../data/process'

export function ProcessTeaser() {
  const steps = PROCESS_STEPS.slice(0, 4)
  return (
    <section className="bg-charcoal py-24 text-ivory">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl">A stress-free process, start to finish</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <p className="font-display text-4xl text-gold">{step.number}</p>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/process" variant="secondary" className="border-ivory text-ivory hover:bg-ivory hover:text-charcoal">
            See Our Full Process
          </Button>
        </div>
      </Container>
    </section>
  )
}

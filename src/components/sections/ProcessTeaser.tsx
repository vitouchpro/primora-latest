import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { PROCESS_STEPS } from '../../data/process'

export function ProcessTeaser() {
  const steps = PROCESS_STEPS.slice(0, 4)
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-gold) 0 1px, transparent 1px 22px)' }}
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl">A stress-free process, start to finish</h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Hairline rail linking the four stages on wide screens. */}
          <div
            className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px lg:block"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,78,0.45), transparent)' }}
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="group relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-forest font-display text-xl text-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-forest">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-lg transition-colors duration-300 group-hover:text-gold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/process" variant="secondary" className="border-ivory text-ivory hover:bg-ivory hover:text-forest">
            See Our Full Process
          </Button>
        </div>
      </Container>
    </section>
  )
}

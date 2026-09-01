import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { ServiceIcon } from '../ui/ServiceIcon'
import { SITE } from '../../data/site'

const FEATURES = [
  { icon: 'palette', title: 'Tailored for You', text: 'Every design is 100% personalised to your vision, lifestyle, and floor plan — never a template.' },
  { icon: 'clipboard', title: 'Seamless Execution', text: 'One dedicated project manager oversees every stage, from planning to the final touch.' },
  { icon: 'compass', title: 'Expert Guidance', text: 'Insights and recommendations from experienced in-house designers at every decision.' },
  { icon: 'home', title: 'Stress-Free Process', text: 'Transparent, milestone-based project management so you can relax while we build.' },
  { icon: 'sparkles', title: 'Post-Project Care', text: `A ${SITE.warrantyYears}-year craftsmanship warranty — our relationship doesn't end at handover.` },
]

export function WhyPrimora() {
  return (
    <section className="py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Specialities</Eyebrow>
          <h2 className="font-display text-3xl text-forest md:text-4xl">Why you'll love working with PRIMORA</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="group text-center">
              <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                {/* Gold ring expands outward as the icon is approached. */}
                <span
                  className="absolute inset-0 rounded-full border border-gold/0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:border-gold/50"
                  aria-hidden="true"
                />
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-tint text-forest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-forest group-hover:text-gold">
                  <ServiceIcon name={f.icon} />
                </span>
              </div>
              <h3 className="font-display text-lg text-forest">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

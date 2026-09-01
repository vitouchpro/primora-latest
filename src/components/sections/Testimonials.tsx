import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { REVIEWS } from '../../data/reviews'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5 12.6 7l6 .8-4.4 4.2 1 6-5.2-2.8-5.2 2.8 1-6L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const groupSize = 3
  const groups = Math.ceil(REVIEWS.length / groupSize)
  const current = REVIEWS.slice(index * groupSize, index * groupSize + groupSize)

  return (
    <section className="bg-ivory-dim py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Clients' Words</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Reviews from PRIMORA homeowners</h2>
        </Reveal>

        <div className="relative mt-14 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {current.map((review) => (
                <div key={review.name} className="flex flex-col rounded-2xl bg-ivory p-6 shadow-sm">
                  <Stars count={review.rating} />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-soft">"{review.text}"</p>
                  <div className="mt-5">
                    <p className="font-display text-base text-charcoal">{review.name}</p>
                    <p className="text-xs text-charcoal-soft">
                      {review.role} · {review.city}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: groups }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show reviews group ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-gold' : 'w-2 bg-charcoal/20'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

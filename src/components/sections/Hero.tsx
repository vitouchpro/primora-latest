import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { SITE } from '../../data/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            Luxury Interiors · {SITE.city}
          </span>
          <h1 className="font-display text-4xl leading-[1.08] text-charcoal sm:text-5xl md:text-6xl">
            Bespoke interiors, <span className="italic text-terracotta">quietly</span> luxurious.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-soft">
            PRIMORA designs fully customised homes for Chennai families who want their space
            to feel considered, not templated — from first sketch to final styling, with a
            10-year craftsmanship warranty.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/contact" variant="primary">
              Book a Free Consultation
            </Button>
            <Button to="/projects" variant="secondary">
              View Our Projects
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-charcoal-soft">
            <div>
              <p className="font-display text-2xl text-charcoal">{SITE.stats.homes}+</p>
              <p>Homes Transformed</p>
            </div>
            <div className="h-10 w-px bg-line" />
            <div>
              <p className="font-display text-2xl text-charcoal">{SITE.stats.years}+</p>
              <p>Years of Craft</p>
            </div>
            <div className="h-10 w-px bg-line" />
            <div>
              <p className="font-display text-2xl text-charcoal">{SITE.stats.satisfaction}%</p>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative"
        >
          <PlaceholderImage
            label="PRIMORA Signature Living Room — Adyar, Chennai"
            hue={28}
            ratio="portrait"
            className="rounded-3xl shadow-2xl shadow-charcoal/10"
          />
          <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl bg-ivory p-4 shadow-xl md:block">
            <PlaceholderImage label="Custom Furniture Detail" hue={16} ratio="square" className="rounded-xl" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

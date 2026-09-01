import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { StatCounter } from '../ui/StatCounter'
import { SITE } from '../../data/site'
import { EASE_BRAND, fadeUpItem, staggerContainer } from '../../lib/motion'

const container = staggerContainer()
const item = fadeUpItem

const HERO_STATS = [
  { value: SITE.stats.homes, suffix: '+', label: 'Homes Transformed' },
  { value: SITE.stats.years, suffix: '+', label: 'Years of Craft' },
  { value: SITE.stats.satisfaction, suffix: '%', label: 'Client Satisfaction' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Gentle parallax: the imagery drifts slower than the copy as you scroll.
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -20])

  return (
    <section ref={ref} className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28">
      {/* Ambient brand wash — sage and gold bleeding softly behind the fold. */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--color-sage-tint),transparent_65%)] opacity-80" />
        <div className="absolute top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(201,162,78,0.16),transparent_65%)]" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show" style={{ y: copyY }}>
          <motion.span
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Luxury Interiors · {SITE.city}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl leading-[1.08] text-forest sm:text-5xl md:text-6xl"
          >
            Bespoke interiors,{' '}
            <span className="relative inline-block italic text-terracotta">
              quietly
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left"
                style={{ background: 'var(--gradient-gold)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.75, ease: EASE_BRAND }}
              />
            </span>{' '}
            luxurious.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-soft">
            PRIMORA designs fully customised homes for Chennai families who want their space
            to feel considered, not templated — from first sketch to final styling, with a
            {' '}{SITE.warrantyYears}-year craftsmanship warranty.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button to="/contact" variant="primary">
              Book a Free Consultation
            </Button>
            <Button to="/projects" variant="secondary">
              View Our Projects
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-8 text-sm text-charcoal-soft"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <div className="h-10 w-px bg-line" />}
                <div>
                  <p className="font-display text-2xl text-forest">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_BRAND, delay: 0.15 }}
          style={{ y: imageY }}
          className="relative"
        >
          {/* Offset forest frame echoing the logo's architectural linework. */}
          <div
            className="pointer-events-none absolute -top-4 -right-4 h-full w-full rounded-3xl border border-forest/20"
            aria-hidden="true"
          />
          <PlaceholderImage
            label="PRIMORA Signature Living Room — Adyar, Chennai"
            hue={28}
            ratio="portrait"
            className="relative rounded-3xl shadow-deep"
          />
          <motion.div
            className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl border border-line bg-ivory p-4 shadow-lift md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE_BRAND }}
          >
            <PlaceholderImage label="Custom Furniture Detail" hue={16} ratio="square" className="rounded-xl" />
          </motion.div>

          {/* Floating warranty seal — gold on forest, the brand's core pairing. */}
          <motion.div
            className="absolute -top-5 -left-5 hidden h-24 w-24 items-center justify-center rounded-full bg-forest text-center shadow-lift lg:flex"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, type: 'spring', stiffness: 180, damping: 14 }}
          >
            <div className="animate-float">
              <p className="font-display text-2xl leading-none text-gold">{SITE.warrantyYears}</p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-ivory/80">
                Year
                <br />
                Warranty
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

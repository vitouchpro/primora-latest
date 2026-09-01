import type { Variants } from 'framer-motion'

/**
 * The brand's signature easing curve — a soft decelerate shared by every
 * transition in the site (CSS mirrors it via `--ease-brand`). Typed as a
 * fixed tuple so Framer Motion accepts it as a cubic-bezier definition.
 */
export const EASE_BRAND = [0.16, 1, 0.3, 1] as const

/** Parent wrapper that plays its children in sequence rather than together. */
export const staggerContainer = (stagger = 0.09, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
})

/** Standard child of `staggerContainer`: a short fade-and-lift. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_BRAND } },
}

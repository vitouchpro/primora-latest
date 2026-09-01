import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_BRAND } from '../../lib/motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  /** Direction the content travels in from. Defaults to 'up'. */
  from?: Direction
  /** Adds a gentle scale-in alongside the translate, for imagery. */
  scale?: boolean
}

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
}

/** Subtle scroll-reveal wrapper — fades and lifts content into view once. */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  from = 'up',
  scale = false,
}: RevealProps) {
  const dir = OFFSET[from]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: dir.x * y, y: dir.y * y, scale: scale ? 0.97 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE_BRAND }}
    >
      {children}
    </motion.div>
  )
}

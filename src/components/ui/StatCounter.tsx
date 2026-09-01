import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts up to `value` when scrolled into view.
 *
 * Correctness rule: the number on screen must ALWAYS end up as `value`.
 * The count-up is pure decoration layered on top of that guarantee.
 *
 *  - Server/prerender and no-JS: renders `value` directly, so crawlers and
 *    users without JS see "250+", never "0+".
 *  - Reduced motion: stays on `value`, no animation.
 *  - Client: winds back to 0 and animates in, but a belt-and-braces timer
 *    snaps to `value` once the run should be over. requestAnimationFrame is
 *    paused in background tabs (and in headless capture), so rAF alone can
 *    leave the number stranded at 0 — the timer closes that hole.
 */
export function StatCounter({
  value,
  suffix = '',
  duration = 1.6,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(value)
  const animated = useRef(false)

  useEffect(() => {
    if (reduceMotion || animated.current) return

    // Not on screen yet: wind back so there is something to count up from.
    if (!inView) {
      setDisplay(0)
      return
    }

    animated.current = true
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Safety net: whatever rAF did or didn't do, land on the real number.
    const settle = setTimeout(() => setDisplay(value), duration * 1000 + 120)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(settle)
      setDisplay(value)
    }
  }, [inView, value, duration, reduceMotion])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

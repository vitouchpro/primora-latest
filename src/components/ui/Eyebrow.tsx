import type { ReactNode } from 'react'

/**
 * Small uppercase label above section headings. The leading gold rule
 * mirrors the divider treatment used on the PRIMORA branding board and
 * draws itself outward when its section scrolls into view.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
      <span
        className="h-px w-6 origin-left"
        style={{ background: 'var(--gradient-gold)' }}
      />
      {children}
    </span>
  )
}

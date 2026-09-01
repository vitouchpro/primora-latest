import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface BaseProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold'
  className?: string
}

const VARIANTS: Record<NonNullable<BaseProps['variant']>, string> = {
  // Deep Forest is the brand's primary action colour; gold on hover.
  primary: 'btn-sheen bg-forest text-ivory hover:bg-forest-deep hover:text-gold-light shadow-soft hover:shadow-lift',
  // Brushed gold — reserved for CTAs sitting on dark forest surfaces.
  gold: 'btn-sheen bg-gold text-forest-deep hover:bg-gold-light shadow-soft hover:shadow-lift',
  secondary: 'bg-transparent text-forest border border-forest/35 hover:border-forest hover:bg-forest hover:text-ivory',
  ghost: 'bg-transparent text-forest hover:text-gold-deep underline underline-offset-4 decoration-gold/40 hover:decoration-gold',
}

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0'

export function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  onClick,
  type = 'button',
}: BaseProps & { to?: string; href?: string; onClick?: () => void; type?: 'button' | 'submit' }) {
  const cls = `${base} ${VARIANTS[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

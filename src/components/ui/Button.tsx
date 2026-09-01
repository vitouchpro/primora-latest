import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface BaseProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const VARIANTS: Record<NonNullable<BaseProps['variant']>, string> = {
  primary: 'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
  secondary: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory',
  ghost: 'bg-transparent text-charcoal hover:text-gold underline underline-offset-4',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-300'

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

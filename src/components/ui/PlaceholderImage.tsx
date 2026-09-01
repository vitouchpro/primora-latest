interface PlaceholderImageProps {
  label: string
  hue?: number
  className?: string
  ratio?: 'square' | 'portrait' | 'landscape' | 'wide'
}

const RATIO_CLASS: Record<NonNullable<PlaceholderImageProps['ratio']>, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
}

/**
 * Branded placeholder used in place of real photography until PRIMORA
 * supplies project/team images. Renders a warm duotone gradient with a
 * subtle architectural line motif and a caption, so it reads as an
 * intentional "image coming soon" rather than a broken layout.
 */
export function PlaceholderImage({ label, hue = 28, className = '', ratio = 'landscape' }: PlaceholderImageProps) {
  const id = `ph-${hue}-${label.replace(/\W+/g, '')}`
  return (
    <div
      className={`relative overflow-hidden ${RATIO_CLASS[ratio]} ${className}`}
      style={{
        background: `linear-gradient(155deg, hsl(${hue} 38% 92%), hsl(${hue} 30% 78%))`,
      }}
      role="img"
      aria-label={label}
    >
      <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
        <defs>
          <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0" stroke={`hsl(${hue} 25% 40%)`} strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div className="absolute inset-0 flex items-end p-4">
        <span className="rounded-full bg-charcoal/70 px-3 py-1 text-[11px] font-medium tracking-wide text-ivory backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  )
}

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
 * supplies project/team images. Renders a warm duotone gradient tinted
 * toward the brand's sage/forest greens, with a subtle architectural line
 * motif and a caption, so it reads as an intentional "image coming soon"
 * rather than a broken layout.
 */
export function PlaceholderImage({ label, hue = 28, className = '', ratio = 'landscape' }: PlaceholderImageProps) {
  const id = `ph-${hue}-${label.replace(/\W+/g, '')}`
  return (
    <div
      className={`group/ph relative overflow-hidden ${RATIO_CLASS[ratio]} ${className}`}
      style={{
        background: `linear-gradient(155deg, hsl(${hue} 34% 91%), hsl(${hue} 26% 79%))`,
      }}
      role="img"
      aria-label={label}
    >
      {/* Sage veil ties every placeholder back to the brand palette. */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{ background: 'linear-gradient(160deg, rgba(124,143,122,0.30), rgba(31,61,46,0.16))' }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="none">
        <defs>
          <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0" stroke="var(--color-forest)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      {/* Gold sheen drifts across the frame when a parent card is hovered. */}
      <div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,rgba(224,196,137,0.28),transparent)] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-end p-4">
        <span className="rounded-full bg-forest/75 px-3 py-1 text-[11px] font-medium tracking-wide text-ivory backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  )
}

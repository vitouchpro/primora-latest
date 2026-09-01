import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { NAV_LINKS } from '../../data/nav'
import { Button } from '../ui/Button'

/** Hairline gold progress bar showing how far the page has been read. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX, background: 'var(--gradient-gold)' }}
      className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
      aria-hidden="true"
    />
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'border-b border-line/70 bg-ivory/85 shadow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <Link to="/" className="group flex flex-col leading-none" aria-label="PRIMORA — home">
          <span className="font-display text-2xl tracking-[0.12em] text-forest transition-colors duration-300 group-hover:text-forest-deep">
            PRIMORA
          </span>
          <span className="mt-1 flex items-center gap-1.5">
            <span
              className="h-px w-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-8"
              style={{ background: 'var(--gradient-gold)' }}
            />
            <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-gold-deep">
              Interior
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-underline text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-forest' : 'text-charcoal-soft hover:text-forest'
                }`
              }
            >
              {({ isActive }) => (
                <span data-active={isActive} className="nav-underline block">
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary">
            Book Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`h-px w-6 bg-forest transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-forest transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {scrolled && <ScrollProgress />}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-ivory lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-sage-tint text-forest'
                          : 'text-charcoal-soft hover:bg-sage-tint/60 hover:text-forest'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-3">
                <Button to="/contact" variant="primary" className="w-full">
                  Book Consultation
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

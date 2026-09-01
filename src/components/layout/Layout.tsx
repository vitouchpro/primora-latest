import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE_BRAND } from '../../lib/motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { Chatbot } from './Chatbot'
import { ScrollToTopButton } from './ScrollToTopButton'

function ScrollRestoration() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="py-40 text-center text-sm text-forest/50">Loading…</div>}>
          {/*
            Route-level crossfade. Keyed on pathname so each page fades and
            lifts in; `mode="wait"` avoids the two pages overlapping.
          */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE_BRAND }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <ScrollToTopButton />
    </div>
  )
}

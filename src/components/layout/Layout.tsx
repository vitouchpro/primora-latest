import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
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
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="py-40 text-center text-sm text-charcoal/50">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <ScrollToTopButton />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CHAT_FLOW } from '../../data/chatbotFlow'
import { whatsappLink } from '../../data/site'

interface Message {
  from: 'bot' | 'user'
  text: string
}

/**
 * Rule-based, lead-qualifying chatbot. No external LLM API — a scripted
 * decision tree that answers common questions and captures a lead, then
 * hands off to WhatsApp. Swap in a real LLM backend later if needed.
 */
export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [nodeId, setNodeId] = useState('start')
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: CHAT_FLOW.start.bot }])
  const [lead, setLead] = useState({ name: '', phone: '', interest: 'General enquiry' })
  const [submitted, setSubmitted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, nodeId])

  function goTo(id: string, userLabel?: string) {
    setMessages((m) => [
      ...m,
      ...(userLabel ? [{ from: 'user' as const, text: userLabel }] : []),
      { from: 'bot' as const, text: CHAT_FLOW[id].bot },
    ])
    setNodeId(id)
  }

  function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!lead.name || !lead.phone) return
    setSubmitted(true)
    goTo('done', `${lead.name} · ${lead.phone} · ${lead.interest}`)
  }

  const node = CHAT_FLOW[nodeId]

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-ivory shadow-lg shadow-black/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 16 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? (
          <span className="text-xl leading-none">✕</span>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2z" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-40 right-6 z-40 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-line bg-ivory shadow-2xl"
          >
            <div className="flex items-center gap-3 bg-charcoal px-5 py-4 text-ivory">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-display text-charcoal">P</div>
              <div>
                <p className="text-sm font-semibold">PRIMORA Assistant</p>
                <p className="text-xs text-ivory/60">Usually replies instantly</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      m.from === 'user' ? 'bg-gold text-charcoal' : 'bg-white text-charcoal shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {node.form && !submitted && (
                <form onSubmit={handleLeadSubmit} className="space-y-2 rounded-2xl bg-white p-3 shadow-sm">
                  <input
                    required
                    placeholder="Your name"
                    value={lead.name}
                    onChange={(e) => setLead((l) => ({ ...l, name: e.target.value }))}
                    className="w-full rounded-lg border border-line bg-ivory px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                  <input
                    required
                    placeholder="Phone number"
                    value={lead.phone}
                    onChange={(e) => setLead((l) => ({ ...l, phone: e.target.value }))}
                    className="w-full rounded-lg border border-line bg-ivory px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                  <select
                    value={lead.interest}
                    onChange={(e) => setLead((l) => ({ ...l, interest: e.target.value }))}
                    className="w-full rounded-lg border border-line bg-ivory px-3 py-2 text-sm outline-none focus:border-gold"
                  >
                    <option>General enquiry</option>
                    <option>Full home interior design</option>
                    <option>Modular kitchen</option>
                    <option>Renovation</option>
                    <option>Design consultation only</option>
                  </select>
                  <button type="submit" className="w-full rounded-lg bg-charcoal py-2 text-sm font-semibold text-ivory">
                    Send my details
                  </button>
                </form>
              )}
            </div>

            {!node.form && node.options && (
              <div className="flex flex-wrap gap-2 border-t border-line p-3">
                {node.options.map((opt) =>
                  opt.href ? (
                    <Link
                      key={opt.label}
                      to={opt.href}
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-charcoal/20 px-3 py-1.5 text-xs font-medium text-charcoal hover:border-gold hover:text-gold"
                    >
                      {opt.label}
                    </Link>
                  ) : opt.whatsapp ? (
                    <a
                      key={opt.label}
                      href={whatsappLink(`Hi PRIMORA, I just chatted with your website assistant (${lead.interest}) and would like to continue on WhatsApp.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-medium text-white"
                    >
                      {opt.label}
                    </a>
                  ) : (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => goTo(opt.next!, opt.label)}
                      className="rounded-full border border-charcoal/20 px-3 py-1.5 text-xs font-medium text-charcoal hover:border-gold hover:text-gold"
                    >
                      {opt.label}
                    </button>
                  ),
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

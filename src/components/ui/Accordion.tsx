import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-charcoal">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/30 text-lg transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 pr-10 leading-relaxed text-charcoal-soft">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={i === 0} />
      ))}
    </div>
  )
}

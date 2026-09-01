import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE_BRAND } from '../../lib/motion'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="group border-b border-line py-5 transition-colors duration-300 hover:border-gold/50">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-forest transition-colors duration-300 group-hover:text-gold-deep">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'rotate-45 border-gold bg-gold text-forest' : 'border-forest/25 text-forest group-hover:border-gold'}`}
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
            transition={{ duration: 0.35, ease: EASE_BRAND }}
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

import { motion } from 'framer-motion'
import { whatsappLink } from '../../data/site'

export function WhatsAppButton({ offset = false }: { offset?: boolean }) {
  return (
    <motion.a
      href={whatsappLink("Hi PRIMORA, I'd like to talk about an interior design project.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with PRIMORA on WhatsApp"
      className={`fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 ${
        offset ? 'bottom-24' : 'bottom-6'
      } right-6`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.66 4.63 1.9 6.6L4 29l7.55-1.87a12 12 0 0 0 4.47.86h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.75.93 1-3.65-.24-.38a9.87 9.87 0 0 1-1.52-5.24c0-5.46 4.45-9.9 9.94-9.9 2.65 0 5.14 1.04 7.01 2.91a9.85 9.85 0 0 1 2.9 7c0 5.46-4.45 9.93-9.92 9.93zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.08 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </motion.a>
  )
}

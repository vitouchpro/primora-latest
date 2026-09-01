export interface ChatOption {
  label: string
  next?: string
  href?: string
  whatsapp?: boolean
}

export interface ChatNode {
  bot: string
  options?: ChatOption[]
  form?: boolean
}

export const CHAT_FLOW: Record<string, ChatNode> = {
  start: {
    bot: "Hi, I'm the PRIMORA design assistant 👋 How can I help you today?",
    options: [
      { label: 'Explore our services', next: 'services' },
      { label: 'How does the process work?', next: 'process' },
      { label: 'Get a rough budget idea', next: 'budget' },
      { label: 'Book a free consultation', next: 'lead' },
    ],
  },
  services: {
    bot: 'We offer 10 specialised services, from full residential design to custom furniture and lighting design. Want the full list, or to talk to a designer directly?',
    options: [
      { label: 'View all services', href: '/services' },
      { label: 'Talk to a designer', next: 'lead' },
      { label: 'Back', next: 'start' },
    ],
  },
  process: {
    bot: 'Our process has 6 steps: Consultation, Concept & 3D Design, Material Selection, Execution, Styling & Handover, and Post-Project Care — backed by a 10-year warranty.',
    options: [
      { label: 'See the full process', href: '/process' },
      { label: 'Book a consultation', next: 'lead' },
      { label: 'Back', next: 'start' },
    ],
  },
  budget: {
    bot: 'Cost depends on customisation level, materials, and scope. Most full-home Chennai projects range from a modular refresh to a fully bespoke build. A designer can share an exact estimate for your space.',
    options: [
      { label: 'Read our cost guide', href: '/blog/how-much-does-interior-design-cost-in-chennai' },
      { label: 'Get a personalised estimate', next: 'lead' },
      { label: 'Back', next: 'start' },
    ],
  },
  lead: {
    bot: "Tell me a little about you and our team will reach out shortly.",
    form: true,
  },
  done: {
    bot: 'Thank you! Our design team will get back to you within one business day. You can also reach us instantly on WhatsApp.',
    options: [
      { label: 'Chat on WhatsApp now', whatsapp: true },
      { label: 'Start over', next: 'start' },
    ],
  },
}

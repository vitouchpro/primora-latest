export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Process', to: '/process' },
  { label: 'Team', to: '/team' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Blog', to: '/blog' },
] as const

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Process', to: '/process' },
    { label: 'Team', to: '/team' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  services: [
    { label: 'Residential Interior Design', to: '/services/residential-interior-design' },
    { label: 'Space Planning', to: '/services/space-planning' },
    { label: 'Custom Furniture Design', to: '/services/custom-furniture-design' },
    { label: 'Lighting Design', to: '/services/lighting-design' },
    { label: 'All Services', to: '/services' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ],
} as const

// Sitewide constants. Everything marked TODO is placeholder — replace with
// PRIMORA's real business details before launch.

export const SITE = {
  name: 'PRIMORA',
  fullName: 'PRIMORA Interiors',
  tagline: 'Bespoke Interiors, Quietly Luxurious.',
  description:
    'PRIMORA crafts fully customised, architect-led luxury interiors for homes across Chennai — from concept to handover, with a 10-year craftsmanship warranty.',
  url: 'https://www.primorainteriors.com', // TODO: replace with real domain
  city: 'Chennai',
  serviceAreas: [
    'Adyar',
    'Anna Nagar',
    'Besant Nagar',
    'ECR',
    'OMR',
    'Nungambakkam',
    'T. Nagar',
    'Velachery',
  ],
  // TODO: replace all contact details below with PRIMORA's real information
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'hello@primorainteriors.com',
  whatsappNumber: '919876543210', // digits only, country code first
  address: 'No. 24, Habibullah Road, T. Nagar, Chennai, Tamil Nadu 600017',
  mapEmbedSrc:
    'https://www.google.com/maps?q=T.+Nagar,+Chennai,+Tamil+Nadu&output=embed',
  hours: 'Mon – Sat, 10:00 AM – 7:00 PM',
  social: {
    instagram: 'https://instagram.com/primorainteriors',
    facebook: 'https://facebook.com/primorainteriors',
    pinterest: 'https://pinterest.com/primorainteriors',
    linkedin: 'https://linkedin.com/company/primorainteriors',
    youtube: 'https://youtube.com/@primorainteriors',
  },
  founded: 2016,
  stats: {
    homes: 250,
    years: 10,
    satisfaction: 98,
  },
  warrantyYears: 10,
} as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

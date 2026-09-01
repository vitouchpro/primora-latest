export interface Project {
  slug: string
  title: string
  category: 'Apartment' | 'Villa' | 'Duplex' | 'Penthouse'
  type: 'Residential'
  bhk: string
  sqft: number
  location: string
  duration: string
  year: number
  style: string
  hue: number
  summary: string
  narrative: string[]
  testimonial?: { quote: string; author: string }
}

export const PROJECTS: Project[] = [
  {
    slug: 'ashwin-residence-adyar',
    title: 'Ashwin Residence',
    category: 'Apartment',
    type: 'Residential',
    bhk: '3 BHK',
    sqft: 1850,
    location: 'Adyar, Chennai',
    duration: '14 weeks',
    year: 2025,
    style: 'Warm Contemporary',
    hue: 28,
    summary:
      'A calm, light-filled 3 BHK built around a neutral material palette and warm brass accents for a young family who wanted quiet luxury over ornamentation.',
    narrative: [
      'The brief was simple but exacting: a home that felt expensive without ever feeling loud. We stripped the palette back to warm stone, ivory plaster, and walnut veneer, letting light and texture carry the design instead of colour.',
      'Every storage wall was custom-built to the millimetre, so nothing in the apartment reads as an afterthought. The result is a home the family describes as "the calmest room in the city."',
    ],
    testimonial: {
      quote:
        'PRIMORA understood the brief better than we could articulate it ourselves. Every detail, down to the drawer handles, feels intentional.',
      author: 'Ashwin R., Homeowner',
    },
  },
  {
    slug: 'meenal-residence-besant-nagar',
    title: 'Meenal Residence',
    category: 'Villa',
    type: 'Residential',
    bhk: '4 BHK',
    sqft: 3200,
    location: 'Besant Nagar, Chennai',
    duration: '20 weeks',
    year: 2025,
    style: 'Modern Heritage',
    hue: 16,
    summary:
      'An independent villa that blends Chettinad-inspired materials — teak, tan leather, terracotta — with a distinctly modern layout and lighting scheme.',
    narrative: [
      'The homeowners wanted to honour Tamil heritage design cues without building a period home. We reinterpreted traditional materials — teak, terracotta, brass — inside clean, contemporary forms.',
      'A central courtyard-inspired living space became the heart of the villa, with layered lighting that shifts the mood from a bright family morning to an intimate evening gathering.',
    ],
    testimonial: {
      quote:
        'They gave our home a sense of heritage without it feeling like a museum piece. It still feels completely ours.',
      author: 'Meenal K., Homeowner',
    },
  },
  {
    slug: 'rahul-priya-duplex-omr',
    title: 'Rahul & Priya Duplex',
    category: 'Duplex',
    type: 'Residential',
    bhk: '4 BHK Duplex',
    sqft: 2600,
    location: 'OMR, Chennai',
    duration: '18 weeks',
    year: 2024,
    style: 'Minimal Luxury',
    hue: 34,
    summary:
      'A dual-level home for a couple who entertain often — an open social level downstairs, and a hushed, textural private level upstairs.',
    narrative: [
      'We designed the duplex around two distinct moods: an open, sociable ground floor with a show kitchen and generous living area, and a quieter, textured upper floor built for rest.',
      'Custom joinery throughout hides every utility — from the home office to the wet bar — behind a continuous, uninterrupted wall of walnut and fluted glass.',
    ],
  },
  {
    slug: 'kavitha-residence-anna-nagar',
    title: 'Kavitha Residence',
    category: 'Apartment',
    type: 'Residential',
    bhk: '2 BHK',
    sqft: 1250,
    location: 'Anna Nagar, Chennai',
    duration: '10 weeks',
    year: 2024,
    style: 'Compact Luxury',
    hue: 40,
    summary:
      'Proof that a compact apartment can still feel expansive — a 2 BHK reworked with smart storage and a soft, sand-and-sage palette.',
    narrative: [
      'At 1,250 sq ft, every decision had to earn its place. We used multi-function furniture and floor-to-ceiling storage walls to keep every room feeling open rather than cramped.',
      'A soft sand-and-sage palette with warm oak flooring gives the home a resort-like calm, despite its city-centre footprint.',
    ],
    testimonial: {
      quote: 'I did not think a 2 BHK could feel this spacious. PRIMORA made every corner count.',
      author: 'Kavitha S., Homeowner',
    },
  },
  {
    slug: 'srinivasan-penthouse-ecr',
    title: 'Srinivasan Penthouse',
    category: 'Penthouse',
    type: 'Residential',
    bhk: '5 BHK Penthouse',
    sqft: 4100,
    location: 'ECR, Chennai',
    duration: '24 weeks',
    year: 2023,
    style: 'Resort Contemporary',
    hue: 8,
    summary:
      'A sea-facing penthouse designed to feel like a permanent holiday — indoor-outdoor living, natural stone, and an entirely custom furniture programme.',
    narrative: [
      'With uninterrupted sea views on two sides, the design goal was to get out of the view\'s way. Materials stay quiet — limewash walls, natural stone, linen upholstery — so the horizon remains the focal point.',
      'Every piece of furniture, from the dining table to the outdoor daybeds, was custom-designed in-house to suit the scale of the penthouse.',
    ],
    testimonial: {
      quote: 'They designed a home that competes with any 5-star resort we\'ve stayed in — except this one is ours.',
      author: 'Srinivasan M., Homeowner',
    },
  },
  {
    slug: 'divya-residence-nungambakkam',
    title: 'Divya Residence',
    category: 'Apartment',
    type: 'Residential',
    bhk: '3 BHK',
    sqft: 1980,
    location: 'Nungambakkam, Chennai',
    duration: '15 weeks',
    year: 2023,
    style: 'Warm Minimal',
    hue: 20,
    summary:
      'A 3 BHK for a joint family, balancing shared social spaces with private, personalised rooms for three generations.',
    narrative: [
      'Designing for three generations under one roof meant designing for three very different rhythms of life. We zoned the apartment carefully — a shared central living space, and private rooms tailored individually to grandparents, parents, and children.',
      'A single warm material language ties every room together, so the home reads as one considered whole rather than three separate briefs.',
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

export function relatedProjects(slug: string, count = 3) {
  const current = getProjectBySlug(slug)
  return PROJECTS.filter((p) => p.slug !== slug)
    .sort((a) => (a.category === current?.category ? -1 : 1))
    .slice(0, count)
}

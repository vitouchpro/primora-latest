export interface Service {
  slug: string
  title: string
  shortTitle: string
  summary: string
  description: string
  inclusions: string[]
  process: string[]
  icon: string // key into <ServiceIcon>
  hue: number // placeholder image tint
}

export const SERVICES: Service[] = [
  {
    slug: 'residential-interior-design',
    title: 'Residential Interior Design',
    shortTitle: 'Residential Design',
    summary:
      'Tailored design services for private homes — from single-room makeovers to complete home transformations.',
    description:
      'Every home tells a different story. We begin with your lifestyle, not a template — mapping how you actually live, then designing every room around it. The result is a home that looks considered and feels effortless, built entirely around your family, not a showroom brief.',
    inclusions: [
      'Full-home concept & mood boards',
      'Room-by-room layout & material planning',
      '3D visualisation before execution',
      'Turnkey execution with a single point of contact',
    ],
    process: ['Discovery & site visit', 'Concept & 3D design', 'Material & vendor selection', 'Execution & handover'],
    icon: 'home',
    hue: 28,
  },
  {
    slug: 'space-planning',
    title: 'Space Planning',
    shortTitle: 'Space Planning',
    summary: 'Optimising the layout of a space to improve functionality, flow, and everyday ease.',
    description:
      'Good space planning is invisible — you only notice how well a home works, not why. We study circulation, natural light, and daily routines to lay out every square foot with intent, so nothing feels wasted and nothing feels cramped.',
    inclusions: ['Zoning & traffic-flow studies', 'Furniture layout planning', 'Storage & utility optimisation', 'Vastu-sensitive planning on request'],
    process: ['Measure & analyse existing space', 'Draft multiple layout options', 'Refine with client input', 'Finalise construction-ready plan'],
    icon: 'layout',
    hue: 34,
  },
  {
    slug: 'interior-design-consultation',
    title: 'Design Consultation',
    shortTitle: 'Design Consultation',
    summary: 'Professional advice on concepts, colour schemes, and material selection for any space.',
    description:
      'Not every project needs full-scale execution — sometimes you just need an expert eye. Our consultation sessions give you a clear, actionable design direction: palette, materials, and styling guidance you (or your contractor) can run with confidently.',
    inclusions: ['On-site or virtual consultation', 'Colour & material direction', 'Styling recommendations', 'Follow-up design notes'],
    process: ['Book a session', 'Walkthrough & brief', 'Receive design direction', 'Optional follow-up review'],
    icon: 'compass',
    hue: 20,
  },
  {
    slug: 'lighting-design',
    title: 'Lighting Design',
    shortTitle: 'Lighting Design',
    summary: 'Crafting layered lighting solutions that enhance ambience, function, and mood.',
    description:
      'Lighting is the difference between a room that photographs well and a room that feels alive. We design in layers — ambient, task, and accent — so every space transitions naturally from a bright morning kitchen to a warm, dim living room evening.',
    inclusions: ['Layered lighting plans', 'Fixture selection & sourcing', 'Smart lighting integration', 'Electrical coordination'],
    process: ['Study natural light & usage', 'Design lighting layers', 'Select fixtures', 'Coordinate installation'],
    icon: 'lamp',
    hue: 40,
  },
  {
    slug: 'custom-furniture-design',
    title: 'Custom Furniture Design',
    shortTitle: 'Custom Furniture',
    summary: 'Designing and crafting bespoke furniture pieces that perfectly fit your space and style.',
    description:
      'Off-the-shelf furniture rarely fits a custom home. Our in-house design and workshop team builds pieces to your exact dimensions, finish, and function — from a media unit that hides every cable to a bed frame with hidden storage.',
    inclusions: ['Bespoke furniture design', 'Material & finish selection', 'Precision manufacturing', 'Delivery & installation'],
    process: ['Design brief & sketches', '3D modelling & approval', 'Workshop fabrication', 'Delivery & fitting'],
    icon: 'sofa',
    hue: 16,
  },
  {
    slug: 'color-consultation',
    title: 'Colour Consultation',
    shortTitle: 'Colour Consultation',
    summary: 'Helping you choose colour schemes that enhance the mood and aesthetic of every space.',
    description:
      'Colour sets the emotional tone of a home before anything else is even furnished. We build palettes around your natural light, finishes, and personality — tested in real swatches on your actual walls, never guessed from a screen.',
    inclusions: ['Whole-home colour palette', 'Finish & sheen guidance', 'On-site swatch testing', 'Coordination with furnishings'],
    process: ['Understand mood & style', 'Propose palette options', 'Test swatches on-site', 'Finalise & document'],
    icon: 'palette',
    hue: 12,
  },
  {
    slug: 'renovation-and-remodeling',
    title: 'Renovation & Remodeling',
    shortTitle: 'Renovation',
    summary: 'Overhauling existing spaces to modernise functionality, layout, and aesthetics.',
    description:
      'Renovation is design under real-world constraints — existing structure, plumbing, and budget. We manage the whole overhaul, from what to keep and what to strip back, to a finished space that feels like a new build.',
    inclusions: ['Structural & MEP assessment', 'Redesign & permissions support', 'Contractor management', 'Snag-free handover'],
    process: ['Site audit', 'Redesign concept', 'Execution & site management', 'Final walkthrough'],
    icon: 'hammer',
    hue: 24,
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    shortTitle: 'Project Management',
    summary: 'Overseeing every aspect of a design project to keep it on time, on budget, and on brief.',
    description:
      'The best design can still go wrong in execution. Our project managers coordinate every vendor, deadline, and quality check, so you get weekly updates instead of weekly surprises — and a home delivered exactly as designed.',
    inclusions: ['Detailed project scheduling', 'Vendor & contractor coordination', 'Budget tracking', 'Quality checks at every stage'],
    process: ['Define scope & schedule', 'Coordinate execution', 'Track budget & quality', 'Sign-off & handover'],
    icon: 'clipboard',
    hue: 30,
  },
  {
    slug: 'styling-and-staging',
    title: 'Styling & Staging',
    shortTitle: 'Styling & Staging',
    summary: 'Arranging furniture and decor to create a cohesive, photograph-ready finished space.',
    description:
      'The final layer is what makes a house feel finished — the cushions, the art, the way a shelf is styled. We handle final styling and staging, whether for your move-in day or for a real-estate listing that needs to shine.',
    inclusions: ['Final furniture arrangement', 'Decor & accessory styling', 'Photography-ready staging', 'Seasonal refresh option'],
    process: ['Review finished space', 'Curate styling elements', 'Style & arrange', 'Final photography walkthrough'],
    icon: 'sparkles',
    hue: 8,
  },
  {
    slug: 'art-and-accessory-procurement',
    title: 'Art & Accessory Procurement',
    shortTitle: 'Art & Accessories',
    summary: 'Sourcing and selecting art pieces and accessories that complete the overall design.',
    description:
      'The right piece of art or the right vase can finish a room in a way furniture alone cannot. We curate and source art, textiles, and accessories that match your palette and story — from local artisans and trusted global sources alike.',
    inclusions: ['Curated art sourcing', 'Textile & accessory selection', 'Budget-matched curation', 'Installation & placement'],
    process: ['Understand style & budget', 'Curate options', 'Client selection', 'Sourcing & installation'],
    icon: 'frame',
    hue: 36,
  },
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}

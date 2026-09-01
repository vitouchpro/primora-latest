export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  readTime: string
  author: string
  hue: number
  content: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-much-does-interior-design-cost-in-chennai',
    title: 'How Much Does Interior Design Really Cost in Chennai (2026)?',
    excerpt:
      'A transparent breakdown of what drives interior design costs in Chennai — from a 2 BHK refresh to a full villa build — and where your budget actually goes.',
    category: 'Budgeting',
    date: '2026-07-14',
    readTime: '7 min read',
    author: 'PRIMORA Design Team',
    hue: 28,
    content: [
      'One of the first questions every homeowner asks is "what will this actually cost?" — and it is a fair one. Interior design pricing in Chennai varies widely because it depends on far more than square footage.',
      'Three factors move the number most: the level of customisation (modular vs. fully bespoke carpentry), the material grade (laminate vs. veneer vs. natural stone), and the scope of services (design-only vs. full turnkey execution).',
      'As a rough starting range for a full-home interior in Chennai: a 2 BHK apartment typically runs from a modest refresh to a fully custom build; a 3-4 BHK villa scales up accordingly with more surface area and structural work. The only reliable number is the one built from your actual floor plan and material choices — which is exactly what our first consultation is for.',
    ],
  },
  {
    slug: 'modular-vs-custom-furniture-whats-right-for-you',
    title: 'Modular vs. Custom Furniture: What\'s Actually Right for You?',
    excerpt:
      'Modular isn\'t always cheaper, and custom isn\'t always better. Here\'s how to decide which approach fits your home, budget, and timeline.',
    category: 'Design Guide',
    date: '2026-06-02',
    readTime: '5 min read',
    author: 'PRIMORA Design Team',
    hue: 16,
    content: [
      'Modular furniture is manufactured off-site in standard modules and assembled on location — faster, more predictable, and often more budget-friendly for straightforward layouts.',
      'Custom, bespoke furniture is designed and built specifically for your space — ideal for irregular layouts, statement pieces, or when you want something no one else has.',
      'In practice, most PRIMORA homes use both: modular systems for high-repetition elements like wardrobes, and custom pieces for statement furniture like a living room console or a dining table that anchors the whole room.',
    ],
  },
  {
    slug: 'small-apartment-storage-ideas-that-actually-work',
    title: '7 Small-Apartment Storage Ideas That Actually Work',
    excerpt:
      'Real storage strategies from our compact Chennai apartment projects — not Pinterest fantasies, but solutions that survive daily life.',
    category: 'Design Guide',
    date: '2026-04-18',
    readTime: '6 min read',
    author: 'PRIMORA Design Team',
    hue: 40,
    content: [
      'Floor-to-ceiling storage is the single highest-impact change in a compact home — it uses vertical space that\'s almost always wasted above eye level.',
      'Multi-function furniture — a storage ottoman, a bed with hydraulic lift storage, a console that hides a home office — quietly doubles your usable space without adding bulk.',
      'And the most underrated trick: consistent material and colour on storage fronts makes a small room feel larger by removing visual clutter, even when the storage itself is generous.',
    ],
  },
  {
    slug: 'lighting-layers-explained',
    title: 'Ambient, Task, Accent: The Three Lighting Layers Every Room Needs',
    excerpt:
      'Why your home lighting feels flat — and the simple three-layer framework professional designers use to fix it.',
    category: 'Design Guide',
    date: '2026-02-27',
    readTime: '4 min read',
    author: 'PRIMORA Design Team',
    hue: 34,
    content: [
      'Most Indian homes rely on a single ceiling light per room — functional, but flat. Professional lighting design always works in three layers.',
      'Ambient light fills the room generally (ceiling or cove lighting). Task light supports specific activities (under-cabinet kitchen lights, a reading lamp). Accent light adds mood and depth (wall washers, art lighting).',
      'Layer all three with separate switching, and a single room can transform from a bright functional morning space to a warm, atmospheric evening one — without moving a single piece of furniture.',
    ],
  },
  {
    slug: 'chennai-interior-design-trends-2026',
    title: 'Chennai Interior Design Trends We\'re Seeing in 2026',
    excerpt:
      'From warm minimalism to biophilic courtyards — the design directions shaping new Chennai homes this year.',
    category: 'Trends',
    date: '2026-01-09',
    readTime: '5 min read',
    author: 'PRIMORA Design Team',
    hue: 12,
    content: [
      'Warm minimalism continues to dominate Chennai\'s premium homes — neutral palettes, natural materials, and negative space over maximalist statement rooms.',
      'Biophilic elements — internal courtyards, planted balconies, natural stone and timber — are increasingly requested as buyers prioritise wellbeing over pure aesthetics.',
      'And finally: transparent, milestone-based project management is now an expectation, not a bonus. Homeowners want to see exactly what happens between signing and handover.',
    ],
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function relatedPosts(slug: string, count = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count)
}

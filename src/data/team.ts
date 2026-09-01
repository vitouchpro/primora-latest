export interface TeamMember {
  name: string
  role: string
  bio: string
  hue: number
}

export const FOUNDERS_QUOTE = {
  quote:
    'A home is where life\'s most meaningful moments unfold. At PRIMORA, we find purpose in turning your story into a space that feels unmistakably yours — considered, comfortable, and built to last generations.',
  authors: 'Aarav Menon & Kavya Rao',
  role: 'Founders, PRIMORA',
}

export const TEAM: TeamMember[] = [
  {
    name: 'Aarav Menon',
    role: 'Co-Founder & Principal Designer',
    bio: 'With over a decade in residential design across Chennai and Bangalore, Aarav leads every project\'s creative direction — from first sketch to final styling.',
    hue: 28,
  },
  {
    name: 'Kavya Rao',
    role: 'Co-Founder & Head of Operations',
    bio: 'Kavya built PRIMORA\'s project management system from the ground up, ensuring every home is delivered on time, on budget, and exactly to spec.',
    hue: 16,
  },
  {
    name: 'Devika Shankar',
    role: 'Senior Interior Designer',
    bio: 'Devika specialises in warm-minimal residential interiors and has led over 40 full-home transformations across Chennai.',
    hue: 34,
  },
  {
    name: 'Naveen Kumar',
    role: 'Lead 3D Visualisation Artist',
    bio: 'Naveen turns every concept into a photorealistic 3D walkthrough, so clients see their home before a single wall is touched.',
    hue: 40,
  },
  {
    name: 'Priyanka Iyer',
    role: 'Materials & Sourcing Lead',
    bio: 'Priyanka curates every material, finish, and furnishing PRIMORA specifies — balancing durability, aesthetics, and budget on every project.',
    hue: 20,
  },
  {
    name: 'Eswar Prasad',
    role: 'Site & Project Manager',
    bio: 'Eswar manages execution on the ground, coordinating vendors and contractors to keep every project moving without surprises.',
    hue: 12,
  },
]

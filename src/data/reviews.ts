export interface Review {
  name: string
  role: string
  city: string
  project?: string
  rating: number
  text: string
}

export const REVIEWS: Review[] = [
  {
    name: 'Ashwin R.',
    role: 'Homeowner',
    city: 'Adyar, Chennai',
    project: '3 BHK Apartment',
    rating: 5,
    text: 'PRIMORA understood the brief better than we could articulate it ourselves. Every detail, down to the drawer handles, feels intentional. Highly recommend for anyone who wants quiet, considered luxury.',
  },
  {
    name: 'Meenal K.',
    role: 'Homeowner',
    city: 'Besant Nagar, Chennai',
    project: '4 BHK Villa',
    rating: 5,
    text: 'They gave our home a sense of heritage without it feeling like a museum piece. It still feels completely ours. The whole team, from design to execution, was a pleasure to work with.',
  },
  {
    name: 'Kavitha S.',
    role: 'Homeowner',
    city: 'Anna Nagar, Chennai',
    project: '2 BHK Apartment',
    rating: 5,
    text: 'I did not think a 2 BHK could feel this spacious. PRIMORA made every corner count and stayed within our budget the entire way through.',
  },
  {
    name: 'Srinivasan M.',
    role: 'Homeowner',
    city: 'ECR, Chennai',
    project: '5 BHK Penthouse',
    rating: 5,
    text: 'They designed a home that competes with any 5-star resort we\'ve stayed in — except this one is ours. Flawless project management from start to finish.',
  },
  {
    name: 'Divya N.',
    role: 'Homeowner',
    city: 'Nungambakkam, Chennai',
    project: '3 BHK Apartment',
    rating: 5,
    text: 'Designing for three generations under one roof is not easy, but PRIMORA zoned our home perfectly. Everyone in the family feels like the space is truly theirs.',
  },
  {
    name: 'Rahul & Priya',
    role: 'Homeowners',
    city: 'OMR, Chennai',
    project: '4 BHK Duplex',
    rating: 5,
    text: 'We entertain a lot and needed a home that could flex between big gatherings and quiet weekends. PRIMORA nailed the brief on the first concept presentation.',
  },
  {
    name: 'Lakshmi V.',
    role: 'Homeowner',
    city: 'Velachery, Chennai',
    project: 'Kitchen Renovation',
    rating: 5,
    text: 'Our modular kitchen renovation was completed two weeks ahead of schedule with zero surprises on the final bill. That kind of transparency is rare.',
  },
  {
    name: 'Arun & Sneha',
    role: 'Homeowners',
    city: 'T. Nagar, Chennai',
    project: '3 BHK Apartment',
    rating: 5,
    text: 'From the first consultation to handover, communication was excellent. We always knew exactly what stage our project was at.',
  },
]

export function averageRating() {
  return (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1)
}

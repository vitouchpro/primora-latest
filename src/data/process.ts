export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation & Discovery',
    description:
      'We visit your space, understand how you live, and listen to your brief in detail — style, budget, timeline, and non-negotiables.',
    duration: '1 week',
  },
  {
    number: '02',
    title: 'Concept & 3D Design',
    description:
      'Our design team develops a full concept — layout, materials, and palette — visualised in photorealistic 3D so you see your home before it\'s built.',
    duration: '2–3 weeks',
  },
  {
    number: '03',
    title: 'Material & Vendor Selection',
    description:
      'Every material, finish, and fixture is curated and presented for approval, with transparent, itemised costing at every step.',
    duration: '1–2 weeks',
  },
  {
    number: '04',
    title: 'Execution & Project Management',
    description:
      'A dedicated project manager coordinates every vendor and contractor on-site, with weekly progress updates and quality checks.',
    duration: '8–16 weeks',
  },
  {
    number: '05',
    title: 'Styling & Handover',
    description:
      'Final styling, accessorising, and a detailed walkthrough before we hand you the keys to a fully finished home.',
    duration: '1 week',
  },
  {
    number: '06',
    title: 'Post-Project Care',
    description:
      'A 10-year craftsmanship warranty and dedicated after-sales support — our relationship continues well beyond handover.',
    duration: 'Ongoing',
  },
]

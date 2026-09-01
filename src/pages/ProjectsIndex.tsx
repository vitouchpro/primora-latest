import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { PROJECTS } from '../data/projects'

const CATEGORIES = ['All', 'Apartment', 'Villa', 'Duplex', 'Penthouse'] as const

export default function ProjectsIndex() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <Seo
        title="Interior Design Projects & Case Studies"
        description="Browse PRIMORA's portfolio of luxury residential interior design projects across Chennai — apartments, villas, duplexes, and penthouses."
        path="/projects"
        jsonLd={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }])}
      />
      <PageHeader
        eyebrow="Our Portfolio"
        title="Homes we've designed across Chennai"
        description="Every project starts with a different brief and ends in a home that couldn't belong to anyone else."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  filter === cat ? 'border-charcoal bg-charcoal text-ivory' : 'border-line text-charcoal-soft hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 6) * 0.06}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <PlaceholderImage label={project.title} hue={project.hue} ratio="square" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">
                    {project.category} · {project.bhk}
                  </p>
                  <h2 className="mt-1 font-display text-lg text-charcoal">{project.title}</h2>
                  <p className="mt-1 text-sm text-charcoal-soft">
                    {project.location} · {project.sqft.toLocaleString()} sq ft
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}

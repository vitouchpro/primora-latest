import { Navigate, useParams, Link } from 'react-router-dom'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { CTABanner } from '../components/sections/CTABanner'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { getProjectBySlug, relatedProjects } from '../data/projects'
import { SITE } from '../data/site'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug ?? '')
  if (!project) return <Navigate to="/projects" replace />

  const related = relatedProjects(project.slug)
  const stats = [
    { label: 'Location', value: project.location },
    { label: 'Configuration', value: project.bhk },
    { label: 'Area', value: `${project.sqft.toLocaleString()} sq ft` },
    { label: 'Duration', value: project.duration },
    { label: 'Style', value: project.style },
    { label: 'Year', value: String(project.year) },
  ]

  return (
    <>
      <Seo
        title={`${project.title} — ${project.category} Interior Design in ${SITE.city}`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />
      <PageHeader
        eyebrow={`${project.category} · ${project.location}`}
        title={project.title}
        description={project.summary}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects', to: '/projects' }, { label: project.title }]}
      />

      <section className="py-16">
        <Container>
          <Reveal>
            <PlaceholderImage label={`${project.title} — Living Area`} hue={project.hue} ratio="wide" className="rounded-3xl" />
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 rounded-2xl bg-ivory-dim p-8 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">{s.label}</p>
                <p className="mt-1 font-display text-lg text-charcoal">{s.value}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-8">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <PlaceholderImage label="Kitchen" hue={project.hue + 8} ratio="square" className="rounded-2xl" />
              <PlaceholderImage label="Bedroom" hue={project.hue - 8} ratio="square" className="rounded-2xl" />
              <PlaceholderImage label="Dining" hue={project.hue + 4} ratio="square" className="rounded-2xl" />
              <PlaceholderImage label="Custom Storage" hue={project.hue - 4} ratio="square" className="rounded-2xl" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl text-charcoal md:text-3xl">The design story</h2>
            {project.narrative.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-charcoal-soft">
                {p}
              </p>
            ))}

            {project.testimonial && (
              <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-ivory-dim p-6">
                <p className="font-display text-lg italic text-charcoal">"{project.testimonial.quote}"</p>
                <p className="mt-3 text-sm text-charcoal-soft">— {project.testimonial.author}</p>
              </blockquote>
            )}
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory-dim py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl text-charcoal md:text-3xl">More projects</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <PlaceholderImage
                    label={p.title}
                    hue={p.hue}
                    ratio="square"
                    className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <p className="mt-3 font-display text-base text-charcoal">{p.title}</p>
                  <p className="text-xs text-charcoal-soft">{p.location}</p>
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

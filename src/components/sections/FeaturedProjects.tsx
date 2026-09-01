import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { PROJECTS } from '../../data/projects'

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 4)
  return (
    <section className="py-24">
      <Container>
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div>
            <Eyebrow>Our Portfolio</Eyebrow>
            <h2 className="font-display text-3xl text-forest md:text-4xl">Recent projects</h2>
          </div>
          <Button to="/projects" variant="ghost">
            View all projects →
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link to={`/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-3xl shadow-soft transition-shadow duration-500 group-hover:shadow-lift">
                  <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    <PlaceholderImage label={`${project.title} — ${project.location}`} hue={project.hue} ratio="landscape" />
                  </div>
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <span className="pointer-events-none absolute bottom-4 left-4 translate-y-3 text-sm font-semibold tracking-wide text-gold opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    View project →
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                      {project.category} · {project.bhk}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-forest transition-colors duration-300 group-hover:text-gold-deep">{project.title}</h3>
                    <p className="mt-1 text-sm text-charcoal-soft">{project.location}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm text-charcoal-soft">{project.sqft.toLocaleString()} sq ft</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

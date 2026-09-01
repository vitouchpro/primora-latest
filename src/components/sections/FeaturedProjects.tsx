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
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">Recent projects</h2>
          </div>
          <Button to="/projects" variant="ghost">
            View all projects →
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link to={`/projects/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-3xl">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    <PlaceholderImage label={`${project.title} — ${project.location}`} hue={project.hue} ratio="landscape" />
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                      {project.category} · {project.bhk}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-charcoal">{project.title}</h3>
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

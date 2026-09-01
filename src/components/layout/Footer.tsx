import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'
import { FOOTER_LINKS } from '../../data/nav'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-ivory">
      {/* Gold hairline across the top edge, as on the brand board footer bar. */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--gradient-gold)' }} aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(201,162,78,0.12),transparent_65%)]" aria-hidden="true" />
      <Container className="relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="group inline-flex flex-col leading-none" aria-label="PRIMORA — home">
              <span className="font-display text-2xl tracking-[0.12em] text-ivory">PRIMORA</span>
              <span className="mt-1 flex items-center gap-1.5">
                <span
                  className="h-px w-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-8"
                  style={{ background: 'var(--gradient-gold)' }}
                />
                <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-gold">Interior</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">{SITE.description}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
              Designing Spaces. Defining Lifestyles.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-ivory/70">
              <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                Instagram
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noreferrer" className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                Facebook
              </a>
              <a href={SITE.social.pinterest} target="_blank" rel="noreferrer" className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                Pinterest
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">Company</h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">Services</h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>{SITE.address}</li>
              <li>
                <a href={SITE.phoneHref} className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-6 text-xs text-ivory/60 md:flex-row">
          <p>
            © {year} {SITE.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.to} to={l.to} className="inline-block transition-all duration-300 hover:translate-x-0.5 hover:text-gold">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

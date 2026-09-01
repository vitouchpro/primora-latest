import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'
import { FOOTER_LINKS } from '../../data/nav'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-charcoal text-ivory">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl tracking-wide text-ivory">
              PRIMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">{SITE.description}</p>
            <div className="mt-6 flex gap-4 text-sm text-ivory/70">
              <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
                Instagram
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                Facebook
              </a>
              <a href={SITE.social.pinterest} target="_blank" rel="noreferrer" className="hover:text-gold">
                Pinterest
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">Company</h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold">
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
                  <Link to={l.to} className="hover:text-gold">
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
                <a href={SITE.phoneHref} className="hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/60 md:flex-row">
          <p>
            © {year} {SITE.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-gold">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

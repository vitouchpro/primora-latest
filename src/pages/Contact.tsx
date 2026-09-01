import { useState } from 'react'
import { Seo, localBusinessSchema, breadcrumbSchema } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { SITE, whatsappLink } from '../data/site'

const PROJECT_TYPES = ['Full home interior', 'Modular kitchen', 'Renovation', 'Design consultation only', 'Commercial / Other']
const BUDGET_RANGES = ['Under ₹10L', '₹10L – ₹25L', '₹25L – ₹50L', '₹50L+', 'Not sure yet']

// NOTE: There is no form backend wired up yet. On submit, we build a
// pre-filled WhatsApp message from the form fields so enquiries are
// delivered instantly with zero setup. TODO: swap this for a real
// endpoint (e.g. Formspree) once PRIMORA provides one, and/or forward
// to SITE.email via a serverless function.
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[0],
    message: '',
  })
  const [sent, setSent] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = [
      `Hi PRIMORA, I'd like to enquire about a project.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      `Budget range: ${form.budget}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(message), '_blank', 'noreferrer')
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Contact PRIMORA — Book a Free Design Consultation"
        description={`Get in touch with PRIMORA for a free interior design consultation in ${SITE.city}. Call, WhatsApp, or send us your project details.`}
        path="/contact"
        jsonLd={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
      />
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's talk about your home"
        description="Tell us a little about your project and we'll get back to you within one business day — or reach us instantly on WhatsApp."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            {sent ? (
              <div className="rounded-2xl bg-ivory-dim p-8 text-center">
                <h2 className="font-display text-2xl text-charcoal">Thank you, {form.name.split(' ')[0] || 'there'}!</h2>
                <p className="mt-3 text-charcoal-soft">
                  We've opened WhatsApp with your details pre-filled — just hit send and our
                  team will reply shortly. You can also reach us directly at{' '}
                  <a href={`mailto:${SITE.email}`} className="text-gold underline">
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-ivory-dim p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-soft">Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full rounded-lg border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-soft">Phone *</label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full rounded-lg border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-soft">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full rounded-lg border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-soft">Project type</label>
                    <select
                      value={form.projectType}
                      onChange={(e) => update('projectType', e.target.value)}
                      className="w-full rounded-lg border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-soft">Budget range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => update('budget', e.target.value)}
                      className="w-full rounded-lg border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-soft">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full rounded-lg border border-line bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="Tell us about your space, timeline, or anything else..."
                  />
                </div>

                <button type="submit" className="w-full rounded-full bg-charcoal py-3.5 text-sm font-semibold text-ivory hover:bg-gold hover:text-charcoal">
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-charcoal-soft">
                  We'll open WhatsApp with your details ready to send — no account needed.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-charcoal">Contact details</h2>
              <ul className="mt-5 space-y-4 text-charcoal-soft">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold">Studio Address</span>
                  {SITE.address}
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold">Phone</span>
                  <a href={SITE.phoneHref} className="hover:text-gold">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold">Email</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold">Studio Hours</span>
                  {SITE.hours}
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="PRIMORA studio location"
                src={SITE.mapEmbedSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={whatsappLink("Hi PRIMORA, I'd like to talk about an interior design project.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

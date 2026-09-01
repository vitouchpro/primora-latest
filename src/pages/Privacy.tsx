import { Seo } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { Container } from '../components/ui/Container'
import { SITE } from '../data/site'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How PRIMORA collects, uses, and protects your personal information."
        path="/privacy-policy"
        noindex
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
      <section className="py-16">
        <Container className="prose-none mx-auto max-w-2xl space-y-6 text-charcoal-soft">
          <p>
            <em>Placeholder policy — replace with PRIMORA's reviewed legal text before launch.</em>
          </p>
          <p>
            {SITE.fullName} ("we", "us") collects information you voluntarily provide through
            our contact form, chat assistant, and WhatsApp — such as your name, phone number,
            email, and project details — solely to respond to your enquiry and provide our
            design services.
          </p>
          <p>
            We do not sell your personal information. We may share it with trusted service
            providers (e.g. hosting, communication tools) strictly to operate this website and
            respond to you. You may request access to, correction of, or deletion of your data
            at any time by contacting {SITE.email}.
          </p>
          <p>This website may use cookies for basic analytics to help us improve the site experience.</p>
        </Container>
      </section>
    </>
  )
}

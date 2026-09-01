import { Seo } from '../components/Seo'
import { PageHeader } from '../components/sections/PageHeader'
import { Container } from '../components/ui/Container'
import { SITE } from '../data/site'

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Terms and conditions for using the PRIMORA website and engaging our interior design services."
        path="/terms"
        noindex
      />
      <PageHeader eyebrow="Legal" title="Terms & Conditions" crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]} />
      <section className="py-16">
        <Container className="prose-none mx-auto max-w-2xl space-y-6 text-charcoal-soft">
          <p>
            <em>Placeholder terms — replace with PRIMORA's reviewed legal text before launch.</em>
          </p>
          <p>
            By using this website, you agree to use it only for lawful purposes related to
            evaluating or engaging {SITE.fullName}'s interior design services. Content on this
            site — including project photography, text, and design work — is the property of{' '}
            {SITE.fullName} unless otherwise stated, and may not be reproduced without
            permission.
          </p>
          <p>
            Design and execution engagements are governed by a separate signed agreement
            between {SITE.fullName} and the client, which will detail scope, payment
            milestones, timelines, and warranty terms.
          </p>
          <p>For any questions about these terms, contact us at {SITE.email}.</p>
        </Container>
      </section>
    </>
  )
}

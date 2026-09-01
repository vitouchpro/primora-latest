import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" noindex />
      <section className="flex min-h-[60vh] items-center py-24">
        <Container className="text-center">
          <p className="font-display text-7xl text-gold">404</p>
          <h1 className="mt-4 font-display text-3xl text-charcoal">We couldn't find that page</h1>
          <p className="mx-auto mt-3 max-w-md text-charcoal-soft">
            The page you're looking for may have moved. Let's get you back to somewhere useful.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/" variant="primary">
              Back to Home
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

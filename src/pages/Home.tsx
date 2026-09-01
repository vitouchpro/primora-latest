import { Seo, localBusinessSchema, faqSchema } from '../components/Seo'
import { Hero } from '../components/sections/Hero'
import { TrustStats } from '../components/sections/TrustStats'
import { AboutTeaser } from '../components/sections/AboutTeaser'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { ProcessTeaser } from '../components/sections/ProcessTeaser'
import { WhyPrimora } from '../components/sections/WhyPrimora'
import { Testimonials } from '../components/sections/Testimonials'
import { BlogTeaser } from '../components/sections/BlogTeaser'
import { FAQSection } from '../components/sections/FAQSection'
import { CTABanner } from '../components/sections/CTABanner'
import { HOME_FAQS } from '../data/faqs'
import { SITE } from '../data/site'

export default function Home() {
  return (
    <>
      <Seo
        title={`PRIMORA — Luxury Interior Designers in ${SITE.city}`}
        description={SITE.description}
        path="/"
        jsonLd={[localBusinessSchema(), faqSchema(HOME_FAQS)]}
      />
      <Hero />
      <TrustStats />
      <AboutTeaser />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessTeaser />
      <WhyPrimora />
      <Testimonials />
      <BlogTeaser />
      <FAQSection />
      <CTABanner />
    </>
  )
}

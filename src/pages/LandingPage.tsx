import SEO from '@/components/seo/SEO'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import HowItWorks from '@/components/landing/HowItWorks'
import DemoSection from '@/components/demo/DemoSection'
import Architecture from '@/components/landing/Architecture'
import Gossip from '@/components/landing/Gossip'
import FAQ from '@/components/landing/FAQ'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/layout/Footer'

export default function LandingPage() {
  return (
    <>
      <SEO />
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <DemoSection />
      <Architecture />
      <Gossip />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

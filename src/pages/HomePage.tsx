import React from 'react'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CaseStudies from '@/components/sections/CaseStudies'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <CaseStudies />
      <CTA />
      <Footer />
    </div>
  )
}

export default HomePage
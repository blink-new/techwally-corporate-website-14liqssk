import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              About Techwally
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're a leading provider of enterprise IT solutions, helping businesses transform 
              their technology infrastructure and achieve their digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardHeader>
            <CardTitle>About Techwally</CardTitle>
            <CardDescription>Your trusted IT partner since 2009</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Founded in 2009, Techwally began as a small team of passionate technologists 
                with a vision to help businesses harness the power of technology. Over the years, 
                we've grown into a trusted partner for hundreds of organizations across Australia.
              </p>
              <p>
                Our journey has been marked by continuous innovation, unwavering commitment to 
                our clients, and a dedication to staying ahead of the technology curve. Today, 
                we're proud to be recognized as a leading provider of enterprise IT solutions.
              </p>
              <p>
                From cloud migration to cybersecurity, from data center management to business 
                continuity planning, we've helped organizations of all sizes transform their 
                IT infrastructure and achieve their business objectives.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
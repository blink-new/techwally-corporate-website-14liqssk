import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'

const SecureSpacePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Lock className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Space
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Secure workspace solutions for sensitive data and operations with enterprise-grade protection.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-600">
            Detailed information about our secure space solutions will be available soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SecureSpacePage
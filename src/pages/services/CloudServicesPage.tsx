import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Server,
  Database,
  Network,
  Lock
} from 'lucide-react'

const CloudServicesPage = () => {
  const features = [
    {
      icon: Server,
      title: "Scalable Infrastructure",
      description: "Auto-scaling cloud resources that grow with your business needs"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security measures including encryption and access controls"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive backup, recovery, and data governance solutions"
    },
    {
      icon: Network,
      title: "Global Connectivity",
      description: "High-speed, reliable connections across multiple regions"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and reliability with 99.9% uptime guarantee"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Meet industry standards including ISO 27001 and SOC 2"
    }
  ]

  const services = [
    {
      name: "AWS Migration",
      description: "Complete migration to Amazon Web Services with minimal downtime",
      price: "From $5,000"
    },
    {
      name: "Azure Integration",
      description: "Microsoft Azure cloud solutions tailored to your business",
      price: "From $4,500"
    },
    {
      name: "Google Cloud Platform",
      description: "Leverage Google's powerful cloud infrastructure",
      price: "From $4,000"
    },
    {
      name: "Hybrid Cloud Solutions",
      description: "Best of both worlds - on-premise and cloud integration",
      price: "From $8,000"
    }
  ]

  const benefits = [
    "Reduce IT infrastructure costs by up to 40%",
    "Improve system reliability and uptime",
    "Scale resources instantly based on demand",
    "Access your data from anywhere, anytime",
    "Enhanced security and compliance",
    "24/7 monitoring and support"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Cloud className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Transform your business with scalable, secure, and cost-effective cloud solutions. 
              Migrate to the cloud with confidence and unlock new possibilities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive cloud solutions are designed to accelerate your digital transformation 
              while ensuring security, reliability, and cost-effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-techwally-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of cloud services, each tailored to meet 
              specific business requirements and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <Badge className="bg-techwally-secondary text-white">{service.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button className="w-full bg-techwally-primary hover:bg-techwally-secondary">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Business with Cloud Technology
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of businesses that have already made the switch to cloud computing. 
                Experience the benefits of modern, scalable infrastructure.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cloud Infrastructure"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-techwally-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-techwally-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our cloud experts help you design and implement the perfect cloud strategy for your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Free Consultation</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CloudServicesPage
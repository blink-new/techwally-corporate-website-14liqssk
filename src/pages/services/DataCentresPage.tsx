import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Server, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Thermometer,
  Wifi,
  Lock,
  Activity,
  HardDrive,
  Network
} from 'lucide-react'

const DataCentresPage = () => {
  const features = [
    {
      icon: Server,
      title: "Enterprise Infrastructure",
      description: "State-of-the-art servers and hardware with enterprise-grade reliability"
    },
    {
      icon: Zap,
      title: "Redundant Power",
      description: "Multiple power sources with UPS backup ensuring 99.99% uptime"
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Precision cooling systems maintaining optimal operating temperatures"
    },
    {
      icon: Shield,
      title: "Physical Security",
      description: "24/7 security monitoring with biometric access controls"
    },
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description: "Multiple carrier connections with redundant network paths"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of all systems with proactive maintenance"
    }
  ]

  const services = [
    {
      name: "Colocation Services",
      description: "Secure rack space with power, cooling, and connectivity for your equipment",
      price: "From $500/month",
      features: ["Dedicated rack space", "24/7 access", "Remote hands support", "Network connectivity"]
    },
    {
      name: "Managed Hosting",
      description: "Fully managed server hosting with maintenance and support included",
      price: "From $800/month",
      features: ["Server management", "OS updates", "Security patches", "Performance monitoring"]
    },
    {
      name: "Cloud Infrastructure",
      description: "Private cloud solutions with dedicated resources and custom configurations",
      price: "From $1,200/month",
      features: ["Private cloud", "Custom configurations", "Scalable resources", "API access"]
    },
    {
      name: "Disaster Recovery",
      description: "Complete DR solutions with backup data centers and failover capabilities",
      price: "From $2,000/month",
      features: ["Backup data center", "Automated failover", "Data replication", "Recovery testing"]
    }
  ]

  const benefits = [
    "99.99% uptime guarantee with SLA backing",
    "Tier III data center facilities",
    "24/7 on-site technical support",
    "Scalable infrastructure that grows with you",
    "Compliance with industry standards (ISO 27001, SOC 2)",
    "Direct carrier connections for optimal performance",
    "Advanced fire suppression systems",
    "Comprehensive environmental monitoring"
  ]

  const specifications = [
    { label: "Power Density", value: "Up to 20kW per rack" },
    { label: "Cooling", value: "N+1 redundant HVAC systems" },
    { label: "Connectivity", value: "Multiple Tier 1 carriers" },
    { label: "Security", value: "Biometric access + 24/7 guards" },
    { label: "Fire Suppression", value: "Clean agent gas system" },
    { label: "Uptime", value: "99.99% SLA guarantee" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Server className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Centre Solutions
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Enterprise-grade data center infrastructure with guaranteed uptime, advanced security, 
              and scalable solutions. Your mission-critical applications deserve the best foundation.
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
                Schedule Tour
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
              World-Class Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Tier III data centers provide the reliability, security, and performance 
              your business needs to operate without interruption.
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
              Data Center Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From colocation to fully managed hosting, we provide flexible solutions 
              that meet your specific infrastructure requirements.
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
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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

      {/* Specifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our data centers are built to the highest standards with redundant systems 
                and enterprise-grade infrastructure components.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 border-techwally-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{spec.label}</h3>
                    <p className="text-gray-600">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Data Center Infrastructure"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-techwally-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Data Center Operations"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-techwally-primary/10 rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Data Centers?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the peace of mind that comes with enterprise-grade infrastructure, 
                backed by industry-leading SLAs and 24/7 expert support.
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-techwally-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our data center experts help you design the perfect infrastructure solution 
              for your business. Schedule a consultation or tour our facilities today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DataCentresPage
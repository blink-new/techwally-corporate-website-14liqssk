import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Globe, 
  Laptop, 
  Shield, 
  Wifi, 
  CheckCircle, 
  ArrowRight,
  Users,
  Video,
  Cloud,
  Lock,
  Smartphone,
  Monitor
} from 'lucide-react'

const TechwallyAnywherePage = () => {
  const features = [
    {
      icon: Laptop,
      title: "Virtual Desktop Infrastructure",
      description: "Access your full desktop environment from any device, anywhere in the world"
    },
    {
      icon: Shield,
      title: "Secure Remote Access",
      description: "Enterprise-grade security with VPN, multi-factor authentication, and encryption"
    },
    {
      icon: Video,
      title: "Collaboration Tools",
      description: "Integrated video conferencing, chat, and file sharing for seamless teamwork"
    },
    {
      icon: Cloud,
      title: "Cloud-Based Applications",
      description: "Access all your business applications through secure cloud infrastructure"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Management",
      description: "Secure and manage mobile devices with comprehensive MDM solutions"
    },
    {
      icon: Monitor,
      title: "Multi-Device Support",
      description: "Work seamlessly across laptops, tablets, smartphones, and desktop computers"
    }
  ]

  const solutions = [
    {
      name: "Remote Worker Starter",
      description: "Essential remote work setup for small teams and individual professionals",
      price: "From $50/user/month",
      features: ["Virtual desktop access", "Basic security", "Email & office apps", "Standard support"]
    },
    {
      name: "Business Remote Suite",
      description: "Comprehensive remote work solution for growing businesses",
      price: "From $85/user/month",
      features: ["Full VDI access", "Advanced security", "Collaboration tools", "Priority support"]
    },
    {
      name: "Enterprise Anywhere",
      description: "Complete enterprise remote work platform with custom integrations",
      price: "From $150/user/month",
      features: ["Custom VDI", "Enterprise security", "Advanced analytics", "Dedicated support"]
    },
    {
      name: "Hybrid Workplace",
      description: "Flexible solution for businesses with both remote and office workers",
      price: "Custom Pricing",
      features: ["Flexible licensing", "Office integration", "Hot-desking support", "Unified management"]
    }
  ]

  const benefits = [
    "Work from anywhere with full access to business applications",
    "Reduce office overhead and real estate costs",
    "Attract and retain top talent globally",
    "Improve work-life balance and employee satisfaction",
    "Ensure business continuity during disruptions",
    "Maintain security and compliance standards",
    "Scale your workforce without geographical limitations",
    "Reduce IT hardware and maintenance costs"
  ]

  const securityFeatures = [
    {
      title: "Multi-Factor Authentication",
      description: "Additional security layers beyond passwords",
      icon: Lock
    },
    {
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest",
      icon: Shield
    },
    {
      title: "Network Segmentation",
      description: "Isolated network access for enhanced security",
      icon: Wifi
    },
    {
      title: "Device Compliance",
      description: "Ensure devices meet security requirements",
      icon: Smartphone
    }
  ]

  const useCases = [
    {
      title: "Remote Teams",
      description: "Enable distributed teams to collaborate effectively from any location",
      icon: Users,
      scenarios: ["Global workforce", "Distributed development teams", "Remote customer support", "Virtual sales teams"]
    },
    {
      title: "Hybrid Workforce",
      description: "Support employees who split time between office and remote work",
      icon: Globe,
      scenarios: ["Flexible work arrangements", "Hot-desking solutions", "Office space optimization", "Work-life balance"]
    },
    {
      title: "Business Continuity",
      description: "Maintain operations during office closures or emergencies",
      icon: Shield,
      scenarios: ["Disaster recovery", "Pandemic response", "Office relocations", "Emergency operations"]
    },
    {
      title: "Contractor Access",
      description: "Provide secure access to contractors and temporary workers",
      icon: Lock,
      scenarios: ["Project-based work", "Seasonal employees", "Consultant access", "Vendor collaboration"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Globe className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Techwally Anywhere
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Empower your workforce to be productive from anywhere in the world. Our comprehensive 
              remote work solutions provide secure access to all your business applications and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Enable Remote Work</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Free Demo
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
              Complete Remote Work Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your team needs to work effectively from anywhere, with enterprise-grade 
              security and seamless user experience.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perfect for Every Work Scenario
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're managing remote teams, supporting hybrid work, or ensuring business continuity, 
              Techwally Anywhere adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-techwally-secondary rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.scenarios.map((scenario, scenarioIndex) => (
                        <div key={scenarioIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {scenario}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Remote work doesn't mean compromising on security. Our comprehensive security 
              framework protects your data and ensures compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-techwally-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Remote Work Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the solution that best fits your organization's size, needs, and budget. 
              All solutions include our core remote work capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{solution.name}</CardTitle>
                    <Badge className="bg-techwally-secondary text-white">{solution.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-techwally-primary hover:bg-techwally-secondary">
                    Get Started
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
                Transform Your Business with Remote Work
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Remote work isn't just a trend – it's the future of business. Enable your organization 
                to thrive in the digital age with flexible, secure, and productive remote work solutions.
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Remote Work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-techwally-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Remote Work Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Remote work is transforming how businesses operate. Here's what the data shows 
              about the future of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">88%</div>
              <div className="text-gray-600">Of organizations enabled remote work globally</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
              <div className="text-gray-600">Increase in productivity with remote work</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$11K</div>
              <div className="text-gray-600">Average annual savings per remote employee</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">74%</div>
              <div className="text-gray-600">Of employees want flexible remote work options</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-techwally-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enable Remote Work?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of organizations that have successfully transformed their workforce 
              with Techwally Anywhere. Start your remote work journey today.
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
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TechwallyAnywherePage
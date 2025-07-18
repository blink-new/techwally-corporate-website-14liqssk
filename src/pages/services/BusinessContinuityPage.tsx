import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  RefreshCw, 
  Shield, 
  Clock, 
  Database, 
  CheckCircle, 
  ArrowRight,
  AlertTriangle,
  FileText,
  Users,
  Activity,
  HardDrive,
  Zap
} from 'lucide-react'

const BusinessContinuityPage = () => {
  const features = [
    {
      icon: Database,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with rapid recovery capabilities to protect your critical data"
    },
    {
      icon: RefreshCw,
      title: "Disaster Recovery Planning",
      description: "Comprehensive DR strategies to minimize downtime and ensure business continuity"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Thorough analysis of potential threats and vulnerabilities to your business operations"
    },
    {
      icon: FileText,
      title: "Business Impact Analysis",
      description: "Detailed assessment of how disruptions could affect your business processes"
    },
    {
      icon: Users,
      title: "Crisis Management",
      description: "Structured response procedures and communication plans for emergency situations"
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      description: "24/7 monitoring of critical systems with proactive threat detection"
    }
  ]

  const services = [
    {
      name: "Business Continuity Assessment",
      description: "Comprehensive evaluation of your current preparedness and identification of gaps",
      price: "From $3,500",
      features: ["Risk assessment", "Impact analysis", "Gap identification", "Recommendations report"]
    },
    {
      name: "Disaster Recovery Planning",
      description: "Custom DR plans with documented procedures and recovery time objectives",
      price: "From $5,000",
      features: ["Custom DR plan", "RTO/RPO definition", "Testing procedures", "Staff training"]
    },
    {
      name: "Backup Solutions",
      description: "Automated backup systems with cloud and on-premise options",
      price: "From $800/month",
      features: ["Automated backups", "Cloud storage", "Encryption", "Recovery testing"]
    },
    {
      name: "Managed Continuity Services",
      description: "Complete business continuity management with ongoing support and testing",
      price: "From $2,500/month",
      features: ["24/7 monitoring", "Regular testing", "Plan updates", "Incident response"]
    }
  ]

  const benefits = [
    "Minimize downtime and revenue loss",
    "Protect critical business data and systems",
    "Ensure regulatory compliance",
    "Maintain customer confidence and trust",
    "Reduce insurance premiums",
    "Enable rapid recovery from disasters",
    "Protect your business reputation",
    "Ensure employee safety and communication"
  ]

  const recoverySteps = [
    {
      step: "1",
      title: "Assessment",
      description: "Evaluate current risks and business impact scenarios"
    },
    {
      step: "2", 
      title: "Planning",
      description: "Develop comprehensive continuity and recovery plans"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Deploy backup systems and recovery infrastructure"
    },
    {
      step: "4",
      title: "Testing",
      description: "Regular testing and validation of recovery procedures"
    },
    {
      step: "5",
      title: "Maintenance",
      description: "Ongoing monitoring, updates, and plan refinements"
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
              <RefreshCw className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Continuity Solutions
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Ensure your business operations continue without interruption. Our comprehensive 
              business continuity solutions protect against disasters, minimize downtime, and safeguard your reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Protect Your Business</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Free Assessment
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
              Comprehensive Continuity Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business continuity solutions cover every aspect of disaster preparedness, 
              from risk assessment to recovery implementation.
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

      {/* Recovery Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our 5-Step Recovery Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your business is prepared for any disruption 
              and can recover quickly when needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {recoverySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-techwally-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business Continuity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial assessment to ongoing management, we provide comprehensive 
              business continuity services tailored to your specific needs.
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Business Continuity Matters
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                In today's digital world, even a few hours of downtime can cost your business 
                thousands of dollars and damage your reputation. Be prepared for the unexpected.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business Continuity Planning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-techwally-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Cost of Downtime
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the true impact of business disruptions helps justify 
              the investment in proper continuity planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$5,600</div>
              <div className="text-gray-600">Average cost per minute of downtime</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">60%</div>
              <div className="text-gray-600">Of businesses fail within 6 months of a major disaster</div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HardDrive className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">93%</div>
              <div className="text-gray-600">Of companies without DR go out of business within a year</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4 Hours</div>
              <div className="text-gray-600">Average recovery time with proper planning</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-techwally-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't Wait for Disaster to Strike
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Protect your business with comprehensive continuity planning. Get a free assessment 
              and discover how prepared your business really is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Get Free Assessment</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BusinessContinuityPage
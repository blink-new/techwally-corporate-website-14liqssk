import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Scan,
  FileCheck,
  Users,
  Clock
} from 'lucide-react'

const CyberSecurityPage = () => {
  const features = [
    {
      icon: Eye,
      title: "24/7 Threat Monitoring",
      description: "Continuous monitoring of your systems for potential security threats"
    },
    {
      icon: Scan,
      title: "Vulnerability Assessment",
      description: "Regular security scans to identify and address potential weaknesses"
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure your business meets industry security standards and regulations"
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Comprehensive staff training to prevent human error security breaches"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response team to handle security incidents and minimize damage"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Advanced encryption protocols to protect your sensitive data"
    }
  ]

  const services = [
    {
      name: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture",
      price: "From $2,500"
    },
    {
      name: "Managed Security Services",
      description: "24/7 monitoring and management of your security infrastructure",
      price: "From $1,500/month"
    },
    {
      name: "Penetration Testing",
      description: "Ethical hacking to identify vulnerabilities before attackers do",
      price: "From $5,000"
    },
    {
      name: "Security Awareness Training",
      description: "Educate your team on cybersecurity best practices",
      price: "From $150/user"
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
              <Shield className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Protect your business from evolving cyber threats with our comprehensive security solutions. 
              Stay ahead of attackers with proactive monitoring and expert incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Secure Your Business</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Free Security Assessment
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
              Comprehensive Security Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-layered security approach protects your business from all angles, 
              ensuring your data, systems, and reputation remain secure.
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
              Our Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial assessment to ongoing protection, we provide end-to-end 
              cybersecurity services tailored to your business needs.
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

      {/* CTA Section */}
      <section className="py-20 bg-techwally-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't Wait for a Security Breach
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Protect your business today with our comprehensive cybersecurity solutions. 
              Get a free security assessment and discover your vulnerabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Get Protected Now</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CyberSecurityPage
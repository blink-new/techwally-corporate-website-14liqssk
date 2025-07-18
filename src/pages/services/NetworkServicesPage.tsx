import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Network, 
  Wifi, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Router,
  Globe,
  Activity,
  Lock,
  Settings,
  TrendingUp
} from 'lucide-react'

const NetworkServicesPage = () => {
  const features = [
    {
      icon: Router,
      title: "Network Design & Architecture",
      description: "Custom network designs optimized for your business requirements and growth"
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless networks with seamless coverage and security"
    },
    {
      icon: Globe,
      title: "SD-WAN Implementation",
      description: "Software-defined networking for improved performance and cost efficiency"
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive security measures to protect your network infrastructure"
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "Real-time monitoring and optimization for peak network performance"
    },
    {
      icon: Settings,
      title: "Network Management",
      description: "Ongoing management and maintenance of your network infrastructure"
    }
  ]

  const services = [
    {
      name: "Network Assessment",
      description: "Comprehensive evaluation of your current network infrastructure and performance",
      price: "From $2,000",
      features: ["Infrastructure audit", "Performance analysis", "Security assessment", "Recommendations report"]
    },
    {
      name: "Network Design & Implementation",
      description: "Custom network design and professional installation services",
      price: "From $5,000",
      features: ["Custom design", "Professional installation", "Configuration", "Testing & validation"]
    },
    {
      name: "Managed Network Services",
      description: "Complete network management with 24/7 monitoring and support",
      price: "From $800/month",
      features: ["24/7 monitoring", "Proactive maintenance", "Security management", "Performance optimization"]
    },
    {
      name: "Network Upgrade & Migration",
      description: "Seamless upgrades and migrations with minimal business disruption",
      price: "Custom Pricing",
      features: ["Migration planning", "Minimal downtime", "Data preservation", "Staff training"]
    }
  ]

  const networkTypes = [
    {
      title: "Local Area Networks (LAN)",
      description: "High-performance internal networks for offices and facilities",
      icon: Network,
      benefits: ["Fast internal connectivity", "Resource sharing", "Centralized management", "Scalable architecture"]
    },
    {
      title: "Wide Area Networks (WAN)",
      description: "Connect multiple locations with reliable, secure connections",
      icon: Globe,
      benefits: ["Multi-site connectivity", "Centralized resources", "Remote access", "Cost optimization"]
    },
    {
      title: "Wireless Networks",
      description: "Enterprise-grade WiFi solutions for mobility and flexibility",
      icon: Wifi,
      benefits: ["Mobile device support", "Guest access", "Seamless roaming", "Advanced security"]
    },
    {
      title: "Software-Defined Networks",
      description: "Modern SDN solutions for agility and centralized control",
      icon: Settings,
      benefits: ["Centralized control", "Dynamic provisioning", "Cost reduction", "Improved agility"]
    }
  ]

  const benefits = [
    "Improve network performance and reliability",
    "Reduce network downtime and disruptions",
    "Enhance security and compliance",
    "Support business growth and scalability",
    "Optimize network costs and efficiency",
    "Enable remote work and mobility",
    "Centralize network management",
    "Future-proof your infrastructure"
  ]

  const technologies = [
    { name: "Cisco", description: "Enterprise networking equipment and solutions" },
    { name: "Juniper", description: "High-performance networking infrastructure" },
    { name: "Aruba", description: "Wireless and mobility solutions" },
    { name: "Fortinet", description: "Network security and SD-WAN" },
    { name: "VMware", description: "Software-defined networking solutions" },
    { name: "Meraki", description: "Cloud-managed networking" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Network className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Network Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Build robust, secure, and scalable network infrastructure that supports your business 
              operations and enables growth. From design to management, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Optimize Your Network</Link>
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
              Comprehensive Network Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial design to ongoing management, our network services ensure your 
              infrastructure is reliable, secure, and optimized for performance.
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

      {/* Network Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Network Solutions We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need local connectivity, wide area networking, or modern software-defined 
              solutions, we have the expertise to deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-techwally-secondary rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Network Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to ongoing management, we provide comprehensive network services 
              tailored to your business needs and budget.
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Network Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry-leading vendors to deliver best-in-class network solutions 
              that meet enterprise requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-techwally-primary rounded-full w-12 h-12 flex items-center justify-center">
                    <Network className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </div>
              </div>
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
                Why Invest in Professional Network Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                A well-designed and managed network is the foundation of modern business operations. 
                Invest in professional network services to ensure reliability, security, and performance.
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
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Network Infrastructure"
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
              Network Performance Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poor network performance can significantly impact business productivity and user experience. 
              Here's what the data shows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">23%</div>
              <div className="text-gray-600">Productivity loss from network issues</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$5,600</div>
              <div className="text-gray-600">Average cost per hour of network downtime</div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime achieved with professional management</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Reduction in security incidents with proper network security</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-techwally-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Network?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Don't let network issues hold your business back. Get a free network assessment 
              and discover how we can improve your infrastructure performance and reliability.
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
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NetworkServicesPage
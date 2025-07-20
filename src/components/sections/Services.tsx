import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Shield, 
  Server, 
  RefreshCw, 
  Settings, 
  Globe, 
  Network, 
  Lock,
  Users
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure solutions that grow with your business needs",
      features: ["AWS & Azure Migration", "Cloud Architecture", "Cost Optimization", "24/7 Monitoring"],
      link: "/services/cloud-services",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets and data",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"],
      link: "/services/cyber-security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Server,
      title: "Data Centres",
      description: "Reliable data center solutions with enterprise-grade infrastructure",
      features: ["Colocation Services", "Managed Hosting", "Disaster Recovery", "High Availability"],
      link: "/services/data-centres",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: RefreshCw,
      title: "Business Continuity",
      description: "Ensure your business operations continue without interruption",
      features: ["Backup Solutions", "Disaster Recovery", "Risk Assessment", "Business Planning"],
      link: "/services/business-continuity",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Settings,
      title: "Systems Maintenance",
      description: "Proactive maintenance to keep your IT systems running optimally",
      features: ["Preventive Maintenance", "Performance Monitoring", "System Updates", "Hardware Support"],
      link: "/services/systems-maintenance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Globe,
      title: "Techwally Anywhere",
      description: "Remote work solutions that enable productivity from anywhere",
      features: ["Remote Access", "Virtual Desktops", "Collaboration Tools", "Mobile Security"],
      link: "/services/techwally-anywhere",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Network,
      title: "Network Services",
      description: "Robust networking solutions for seamless connectivity",
      features: ["Network Design", "SD-WAN", "Network Security", "Performance Optimization"],
      link: "/services/network-services",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Lock,
      title: "Secure Space",
      description: "Secure workspace solutions for sensitive data and operations",
      features: ["Secure Facilities", "Access Control", "Surveillance", "Compliance"],
      link: "/services/secure-space",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      title: "Resellers",
      description: "Partner with us to deliver exceptional IT solutions to your clients",
      features: ["Partner Program", "Technical Support", "Sales Training", "Marketing Resources"],
      link: "/services/resellers",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to transform your business operations, 
            enhance security, and drive sustainable growth in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-techwally-primary/80 group-hover:bg-techwally-secondary/80 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-white" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-techwally-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-techwally-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className="w-full bg-techwally-primary hover:bg-techwally-secondary text-white transition-all duration-300"
                  >
                    <Link to={service.link}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-techwally-primary hover:bg-techwally-secondary text-white px-8 py-4 text-lg font-semibold"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
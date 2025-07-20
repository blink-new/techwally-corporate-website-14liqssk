import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  Heart,
  CheckCircle,
  Star,
  Target,
  Zap,
  Globe,
  Headphones
} from 'lucide-react'

const WhyTechwallyPage = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Over 15 years of experience delivering enterprise IT solutions across diverse industries",
      details: [
        "500+ successful projects completed",
        "Industry-certified professionals",
        "Award-winning service delivery",
        "Continuous technology innovation"
      ]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support to ensure your systems are always running smoothly",
      details: [
        "24/7/365 technical support",
        "Average response time: 15 minutes",
        "Proactive system monitoring",
        "Emergency escalation procedures"
      ]
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Advanced cybersecurity measures and compliance standards to protect your business",
      details: [
        "ISO 27001 certified processes",
        "Multi-layered security approach",
        "Regular security audits",
        "Compliance with industry standards"
      ]
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Flexible infrastructure that grows with your business needs and adapts to change",
      details: [
        "Cloud-native architectures",
        "Auto-scaling capabilities",
        "Future-proof technologies",
        "Seamless capacity expansion"
      ]
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Experienced professionals committed to your success with personalized service",
      details: [
        "Dedicated account managers",
        "Specialized technical teams",
        "Regular strategy reviews",
        "Proactive recommendations"
      ]
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Your success is our priority with tailored solutions and exceptional service",
      details: [
        "98% customer satisfaction rate",
        "Customized solution design",
        "Regular feedback sessions",
        "Long-term partnerships"
      ]
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { number: "24/7", label: "Support Available", icon: Headphones }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Melbourne Financial Group",
      role: "IT Director",
      content: "Techwally transformed our IT infrastructure completely. Their expertise in cloud migration saved us 40% on operational costs while improving our system reliability.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Advanced Manufacturing Ltd",
      role: "CEO",
      content: "The cybersecurity solutions provided by Techwally have given us complete peace of mind. Their proactive monitoring caught several threats before they could impact our operations.",
      rating: 5
    },
    {
      name: "Lisa Williams",
      company: "Healthcare Solutions Australia",
      role: "CTO",
      content: "Outstanding support and service. Techwally's team feels like an extension of our own IT department. They understand our business and always deliver on their promises.",
      rating: 5
    }
  ]

  const certifications = [
    "ISO 27001 Information Security",
    "Microsoft Gold Partner",
    "AWS Advanced Consulting Partner",
    "Cisco Premier Partner",
    "VMware Enterprise Partner",
    "CompTIA Authorized Partner"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Techwally?
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Discover what makes us Australia's trusted IT partner and how we can 
              accelerate your digital transformation with proven expertise and unwavering commitment.
            </p>
            <Button asChild size="lg" className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-techwally-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Six Reasons to Trust Techwally
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just provide IT services – we become your strategic technology partner, 
              committed to your long-term success and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-techwally-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{reason.description}</p>
                    <ul className="space-y-2">
                      {reason.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it – hear from the businesses we've helped transform 
              their IT infrastructure and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-techwally-primary font-medium">{testimonial.company}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications and partnerships demonstrate our commitment to excellence 
              and ensure we deliver solutions using the latest technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Award className="h-8 w-8 text-techwally-primary mx-auto mb-2" />
                  <p className="font-medium text-gray-900">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Approach to Success
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in building long-term partnerships, not just providing services. 
                Our methodology ensures your technology investments deliver maximum value.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-techwally-primary rounded-full p-2 flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Planning</h3>
                    <p className="text-gray-600">We start by understanding your business goals and challenges to create a tailored technology roadmap.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-techwally-secondary rounded-full p-2 flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
                    <p className="text-gray-600">Our experienced teams execute projects efficiently with minimal disruption to your operations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-techwally-primary rounded-full p-2 flex-shrink-0">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ongoing Optimization</h3>
                    <p className="text-gray-600">We continuously monitor and optimize your systems to ensure peak performance and value.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
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
              Ready to Experience the Techwally Difference?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join hundreds of satisfied clients who trust Techwally with their IT infrastructure. 
              Let's discuss how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WhyTechwallyPage
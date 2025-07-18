import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'FinanceFlow Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      content: 'Techwally transformed our entire IT infrastructure. Their cloud migration was seamless, and the 24/7 support gives us complete peace of mind. Our system uptime has improved dramatically.',
      rating: 5,
      industry: 'Financial Services'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      company: 'MedCare Australia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      content: 'The cybersecurity solutions from Techwally are exceptional. They helped us achieve compliance and protect sensitive patient data. Their expertise in healthcare IT is unmatched.',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      name: 'Emma Thompson',
      role: 'IT Manager',
      company: 'Manufacturing Plus',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      content: 'Working with Techwally has been a game-changer. Their proactive maintenance approach has reduced our downtime by 80%. The team is incredibly responsive and knowledgeable.',
      rating: 5,
      industry: 'Manufacturing'
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'Legal Partners Group',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      content: 'Techwally\'s business continuity planning saved us during a critical system failure. Their disaster recovery solution got us back online in minutes, not hours. Absolutely reliable.',
      rating: 5,
      industry: 'Legal Services'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Technology',
      company: 'RetailTech Innovations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      content: 'The scalability of Techwally\'s solutions is impressive. As we\'ve grown from 50 to 500 employees, their infrastructure has grown with us seamlessly. True partnership.',
      rating: 5,
      industry: 'Retail Technology'
    },
    {
      name: 'James Mitchell',
      role: 'Facilities Manager',
      company: 'Aged Care Connect',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      content: 'Techwally understands the unique needs of aged care facilities. Their solutions are user-friendly for our staff and provide the reliability our residents depend on.',
      rating: 5,
      industry: 'Aged Care'
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-slate-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've helped businesses across Australia transform their IT infrastructure 
            and achieve remarkable results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <Badge variant="outline" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-slate-700 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">99.9%</div>
              <div className="text-slate-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">24/7</div>
              <div className="text-slate-600">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
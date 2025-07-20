import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Financial Services Cloud Migration',
      client: 'Australian Capital Bank',
      industry: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Complete infrastructure modernization and cloud migration for a leading financial institution.',
      results: [
        { metric: '60%', label: 'Cost Reduction' },
        { metric: '99.99%', label: 'Uptime Achieved' },
        { metric: '3 Months', label: 'Migration Time' }
      ],
      challenge: 'Legacy systems causing operational inefficiencies and compliance concerns.',
      solution: 'Comprehensive cloud migration with enhanced security and compliance frameworks.',
      tags: ['Cloud Migration', 'Security', 'Compliance']
    },
    {
      title: 'Manufacturing Digital Transformation',
      client: 'Industrial Solutions Group',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'End-to-end digital transformation enabling Industry 4.0 capabilities.',
      results: [
        { metric: '45%', label: 'Efficiency Gain' },
        { metric: '24/7', label: 'Monitoring' },
        { metric: '6 Months', label: 'ROI Timeline' }
      ],
      challenge: 'Disconnected systems and lack of real-time operational visibility.',
      solution: 'Integrated IoT platform with advanced analytics and predictive maintenance.',
      tags: ['IoT', 'Analytics', 'Automation']
    },
    {
      title: 'Healthcare Cybersecurity Overhaul',
      client: 'Regional Health Network',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Comprehensive cybersecurity implementation protecting sensitive patient data.',
      results: [
        { metric: '100%', label: 'Compliance' },
        { metric: '0', label: 'Security Incidents' },
        { metric: '2 Weeks', label: 'Implementation' }
      ],
      challenge: 'Vulnerable systems exposing patient data to potential cyber threats.',
      solution: 'Multi-layered security architecture with continuous monitoring and threat detection.',
      tags: ['Cybersecurity', 'Compliance', 'Healthcare']
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-techwally-primary/10 text-techwally-primary border-techwally-primary/20">
            Case Studies
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-slate-900">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped organizations across Australia transform their IT infrastructure 
            and achieve measurable business outcomes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden bg-white border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white text-slate-900">
                    {study.industry}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-slate-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 font-medium">{study.client}</p>
                      <p className="text-slate-600 mt-3">{study.description}</p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-slate-50 rounded-lg">
                          <div className="text-2xl font-poppins font-bold text-techwally-primary">{result.metric}</div>
                          <div className="text-sm text-slate-600">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-red-500" />
                          Challenge
                        </h4>
                        <p className="text-sm text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-2 text-green-500" />
                          Solution
                        </h4>
                        <p className="text-sm text-slate-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full sm:w-auto group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-slate-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our expert IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-techwally-secondary hover:bg-techwally-primary">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-techwally-primary text-techwally-primary hover:bg-techwally-primary hover:text-white">
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
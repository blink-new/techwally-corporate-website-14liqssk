import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Phone, Mail, Calendar, CheckCircle } from 'lucide-react'

const CTA = () => {
  const benefits = [
    'Free consultation and assessment',
    'Customized solution design',
    '24/7 ongoing support',
    'Proven track record with 500+ clients'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Get Started Today
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold leading-tight">
                Transform Your Business with Expert IT Solutions
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Don't let outdated technology hold your business back. Our team of experts is ready to 
                design and implement solutions that drive growth and efficiency.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Call Us Now</div>
                    <div className="text-sm text-white/80">1300 123 456</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email Us</div>
                    <div className="text-sm text-white/80">support@techwally.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Form/Buttons */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Get Your Free Consultation
                </h3>
                <p className="text-slate-600">
                  Speak with our experts and discover how we can help transform your IT infrastructure.
                </p>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full text-lg py-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">or</span>
                  </div>
                </div>

                <Button size="lg" variant="outline" className="w-full text-lg py-6">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Request Custom Quote
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">500+</div>
                    <div className="text-xs text-slate-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">15+</div>
                    <div className="text-xs text-slate-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">24/7</div>
                    <div className="text-xs text-slate-600">Support</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-slate-500">
                  No obligation • Free assessment • Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
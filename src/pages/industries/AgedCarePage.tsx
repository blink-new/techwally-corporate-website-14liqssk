import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, ArrowRight } from 'lucide-react'

const AgedCarePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Heart className="h-3 w-3 mr-1" />
            Aged Care
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            IT Solutions for
            <span className="text-primary block">Aged Care</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Specialized IT solutions for aged care facilities with focus on 
            resident safety, compliance, and operational efficiency.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AgedCarePage
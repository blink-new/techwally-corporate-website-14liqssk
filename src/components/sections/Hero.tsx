import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Enterprise IT Solutions That Drive Success",
      subtitle: "Comprehensive technology services designed to accelerate your business growth and digital transformation",
      description: "From cloud infrastructure to cybersecurity, we provide end-to-end IT solutions that keep your business running smoothly and securely.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Discover Our Services",
      ctaLink: "/services/cloud-services"
    },
    {
      title: "Secure Your Digital Future",
      subtitle: "Advanced cybersecurity solutions to protect your business from evolving threats",
      description: "Stay ahead of cyber threats with our comprehensive security services, including threat monitoring, incident response, and compliance management.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Learn About Security",
      ctaLink: "/services/cyber-security"
    },
    {
      title: "Scale With Confidence",
      subtitle: "Flexible infrastructure solutions that grow with your business",
      description: "Our scalable cloud and data center solutions provide the foundation for sustainable growth, ensuring your technology evolves with your needs.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Solutions",
      ctaLink: "/solutions/infrastructure"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-techwally-secondary hover:bg-techwally-primary text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Link to={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="border-techwally-secondary text-techwally-secondary hover:bg-techwally-secondary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/50"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
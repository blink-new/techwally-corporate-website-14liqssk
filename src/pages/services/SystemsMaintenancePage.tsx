import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  Settings, 
  Activity, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Wrench,
  Monitor,
  AlertCircle,
  TrendingUp,
  Server,
  Zap
} from 'lucide-react'

const SystemsMaintenancePage = () => {
  const features = [
    {
      icon: Monitor,
      title: "Proactive Monitoring",
      description: "24/7 system monitoring with real-time alerts and automated responses"
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance to prevent issues before they impact your operations"
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      description: "Continuous tuning and optimization to ensure peak system performance"
    },
    {
      icon: Shield,
      title: "Security Updates",
      description: "Regular security patches and updates to protect against vulnerabilities"
    },
    {
      icon: AlertCircle,
      title: "Incident Response",
      description: "Rapid response to system issues with expert troubleshooting and resolution"
    },
    {
      icon: TrendingUp,
      title: "Capacity Planning",
      description: "Proactive planning for future growth and resource requirements"
    }
  ]

  const services = [
    {
      name: "Basic Maintenance",
      description: "Essential system monitoring and maintenance for small businesses",
      price: "From $500/month",
      features: ["System monitoring", "Security updates", "Basic support", "Monthly reports"]
    },
    {
      name: "Advanced Maintenance",
      description: "Comprehensive maintenance with proactive optimization and support",
      price: "From $1,200/month",
      features: ["24/7 monitoring", "Performance tuning", "Priority support", "Detailed analytics"]
    },
    {
      name: "Enterprise Maintenance",
      description: "Full-service maintenance with dedicated support and custom SLAs",
      price: "From $2,500/month",
      features: ["Dedicated team", "Custom SLAs", "Advanced analytics", "Strategic planning"]
    },
    {
      name: "Emergency Support",
      description: "On-demand emergency support for critical system issues",
      price: "From $200/hour",
      features: ["Emergency response", "Expert technicians", "Remote assistance", "On-site support"]
    }
  ]

  const maintenanceTypes = [
    {
      title: "Server Maintenance",
      description: "Keep your servers running optimally with regular maintenance and updates",
      icon: Server,
      tasks: ["OS updates", "Hardware monitoring", "Performance tuning", "Backup verification"]
    },
    {
      title: "Network Maintenance",
      description: "Ensure reliable network connectivity and optimal performance",
      icon: Activity,
      tasks: ["Switch configuration", "Bandwidth monitoring", "Security updates", "Cable management"]
    },
    {
      title: "Security Maintenance",
      description: "Maintain strong security posture with regular updates and monitoring",
      icon: Shield,
      tasks: ["Security patches", "Antivirus updates", "Firewall management", "Vulnerability scans"]
    },
    {
      title: "Application Maintenance",
      description: "Keep your business applications running smoothly and efficiently",
      icon: Settings,
      tasks: ["Software updates", "Database optimization", "User management", "License compliance"]
    }
  ]

  const benefits = [
    "Reduce system downtime by up to 90%",
    "Improve system performance and reliability",
    "Lower total cost of ownership",
    "Extend hardware and software lifespan",
    "Ensure security compliance",
    "Minimize emergency repair costs",
    "Increase employee productivity",
    "Maintain competitive advantage"
  ]

  const maintenanceSchedule = [
    { frequency: "Daily", tasks: ["System health checks", "Backup verification", "Security monitoring", "Performance alerts"] },
    { frequency: "Weekly", tasks: ["Security updates", "Log analysis", "Capacity monitoring", "User access review"] },
    { frequency: "Monthly", tasks: ["Full system scan", "Performance reports", "Hardware inspection", "Software updates"] },
    { frequency: "Quarterly", tasks: ["Strategic review", "Capacity planning", "Security audit", "Disaster recovery test"] }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Settings className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Systems Maintenance Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Proactive maintenance to keep your IT systems running optimally with minimal downtime. 
              Prevent problems before they occur and ensure peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Get Maintenance Plan</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-techwally-primary px-8 py-4 text-lg font-semibold"
              >
                Free System Assessment
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
              Comprehensive System Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proactive maintenance approach ensures your systems remain secure, 
              performant, and reliable while minimizing unexpected downtime.
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

      {/* Maintenance Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Types of Maintenance We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our maintenance services cover all aspects of your IT infrastructure, 
              from servers and networks to applications and security systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-techwally-primary rounded-full p-3">
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
                      {type.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {task}
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

      {/* Maintenance Schedule Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Maintenance Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured maintenance schedule to ensure all aspects of your 
              IT infrastructure receive proper attention and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceSchedule.map((schedule, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-techwally-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{schedule.frequency}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {schedule.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-sm text-gray-600">
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Maintenance Service Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that best fits your business needs and budget. 
              All plans include our core maintenance services with varying levels of support.
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
                    Choose Plan
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
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
                Benefits of Proactive Maintenance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Regular system maintenance is an investment that pays dividends in reliability, 
                performance, and cost savings. Don't wait for problems to occur.
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="System Maintenance"
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
              The Impact of Poor Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the cost of reactive maintenance helps justify 
              the investment in proactive system care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5x</div>
              <div className="text-gray-600">Higher cost of reactive vs proactive maintenance</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">87%</div>
              <div className="text-gray-600">Of system failures are preventable with proper maintenance</div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">Improvement in system performance with regular maintenance</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime achieved with proactive maintenance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-techwally-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Keep Your Systems Running Smoothly
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Don't wait for system failures to disrupt your business. Start with proactive 
              maintenance today and enjoy reliable, high-performance IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-techwally-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Start Maintenance Plan</Link>
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

export default SystemsMaintenancePage
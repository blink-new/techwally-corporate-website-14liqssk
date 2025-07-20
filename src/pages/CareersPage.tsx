import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Filter,
  Heart,
  Share2,
  Briefcase,
  Users,
  TrendingUp,
  ChevronDown,
  Bookmark,
  Eye,
  Calendar,
  Globe,
  Star,
  ArrowRight
} from 'lucide-react'

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedJobType, setSelectedJobType] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedClassification, setSelectedClassification] = useState('')
  const [selectedListingDate, setSelectedListingDate] = useState('')
  const [selectedWorkType, setSelectedWorkType] = useState('')
  const [selectedSalary, setSelectedSalary] = useState('')
  const [selectedJob, setSelectedJob] = useState<number | null>(1)
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  // Mock job data matching the reference image
  const jobs = [
    {
      id: 1,
      title: "Manager",
      company: "Prime East Services",
      location: "Melbourne, VIC",
      salary: "$80k - $90k",
      type: "Full-time",
      category: "Management",
      classification: "Administration & Office Support",
      posted: "2 days ago",
      workType: "Full time",
      description: `We are seeking an experienced Manager to join our dynamic team at Prime East Services. This role offers an excellent opportunity to lead a team of professionals while contributing to the strategic growth of our organization.

Key Responsibilities:
• Lead and manage a team of 8-12 staff members
• Develop and implement strategic business plans
• Oversee daily operations and ensure quality service delivery
• Build and maintain strong client relationships
• Monitor performance metrics and drive continuous improvement
• Collaborate with senior leadership on organizational initiatives

Requirements:
• Minimum 5 years of management experience
• Strong leadership and communication skills
• Bachelor's degree in Business Administration or related field
• Experience in service industry preferred
• Proven track record of team development and performance management

What We Offer:
• Competitive salary package ($80,000 - $90,000)
• Performance-based bonuses
• Professional development opportunities
• Flexible working arrangements
• Comprehensive health benefits
• Career progression pathways`,
      requirements: ["5+ years management experience", "Leadership skills", "Bachelor's degree preferred"],
      logo: "/techwally-icon.png",
      featured: true,
      companySize: "50-100 employees",
      industry: "Professional Services",
      benefits: ["Health Insurance", "Flexible Hours", "Professional Development"],
      rating: 4.2,
      reviews: 156
    },
    {
      id: 2,
      title: "Full Time Short Sales Assistant",
      company: "ABC Corp",
      location: "Sydney, NSW",
      salary: "$55k - $65k",
      type: "Full-time",
      category: "Sales",
      classification: "Sales",
      posted: "3 days ago",
      workType: "Full time",
      description: `Join our growing sales team as a Short Sales Assistant. This entry-level position offers excellent training and career development opportunities in the fast-paced world of sales.

Key Responsibilities:
• Assist senior sales staff with client communications
• Prepare sales presentations and proposals
• Maintain accurate customer databases
• Process sales orders and follow up on deliveries
• Support marketing campaigns and events
• Provide excellent customer service

Requirements:
• Strong communication and interpersonal skills
• Attention to detail and organizational abilities
• Basic computer skills (MS Office suite)
• Enthusiasm for sales and customer service
• Previous sales experience preferred but not essential

What We Offer:
• Competitive starting salary
• Commission structure
• Comprehensive training program
• Career advancement opportunities
• Supportive team environment`,
      requirements: ["Communication skills", "Attention to detail", "MS Office"],
      logo: "/techwally-icon.png",
      featured: false,
      companySize: "100-200 employees",
      industry: "Sales & Marketing",
      benefits: ["Commission", "Training", "Career Growth"],
      rating: 3.8,
      reviews: 89
    },
    {
      id: 3,
      title: "Retail Stylist",
      company: "Style Solutions",
      location: "Brisbane, QLD",
      salary: "$45k - $55k",
      type: "Full-time",
      category: "Retail",
      classification: "Retail & Consumer Products",
      posted: "5 days ago",
      workType: "Full time",
      description: `We are looking for a passionate Retail Stylist to join our fashion-forward team. Help customers discover their personal style while driving sales and creating exceptional shopping experiences.

Key Responsibilities:
• Provide personalized styling advice to customers
• Create compelling visual merchandising displays
• Maintain product knowledge and stay current with fashion trends
• Process sales transactions and handle customer inquiries
• Assist with inventory management and stock replenishment
• Build lasting relationships with regular customers

Requirements:
• Passion for fashion and styling
• Excellent customer service skills
• Visual merchandising experience preferred
• Ability to work in a fast-paced retail environment
• Flexible schedule including weekends
• Certificate in Fashion or related field advantageous

Benefits:
• Employee discount on all products
• Flexible scheduling options
• Ongoing training and development
• Performance incentives
• Creative and dynamic work environment`,
      requirements: ["Fashion knowledge", "Customer service", "Visual merchandising"],
      logo: "/techwally-icon.png",
      featured: false,
      companySize: "20-50 employees",
      industry: "Retail",
      benefits: ["Employee Discount", "Flexible Schedule", "Training"],
      rating: 4.1,
      reviews: 67
    },
    {
      id: 4,
      title: "Cleaner / Housekeeper (Every Day Avail.)",
      company: "Home Maintenance Mates",
      location: "Perth, WA",
      salary: "$25 - $30 per hour",
      type: "Part-time",
      category: "Cleaning",
      classification: "Trades & Services",
      posted: "1 week ago",
      workType: "Part time",
      description: `Join our reliable cleaning team providing high-quality residential and commercial cleaning services. We offer flexible hours and competitive pay for dedicated cleaners.

Key Responsibilities:
• Perform thorough cleaning of residential and commercial properties
• Follow detailed cleaning checklists and procedures
• Use cleaning equipment and supplies safely and effectively
• Maintain high standards of cleanliness and presentation
• Communicate professionally with clients
• Report any maintenance issues or concerns

Requirements:
• Previous cleaning experience preferred
• Reliable and punctual
• Attention to detail
• Physical fitness for cleaning tasks
• Own transportation preferred
• Police check required

What We Offer:
• Competitive hourly rates ($25-$30/hour)
• Flexible scheduling - choose your hours
• Ongoing work with regular clients
• All cleaning supplies provided
• Supportive team environment
• Opportunity for additional hours`,
      requirements: ["Cleaning experience", "Reliability", "Own transport"],
      logo: "/techwally-icon.png",
      featured: false,
      companySize: "10-20 employees",
      industry: "Services",
      benefits: ["Flexible Hours", "Competitive Pay", "Supplies Provided"],
      rating: 4.0,
      reviews: 34
    },
    {
      id: 5,
      title: "Customer Service Representative",
      company: "TechSupport Solutions",
      location: "Adelaide, SA",
      salary: "$50k - $60k",
      type: "Full-time",
      category: "Customer Service",
      classification: "Call Centre & Customer Service",
      posted: "1 week ago",
      workType: "Full time",
      description: `We are seeking a dedicated Customer Service Representative to join our growing support team. Provide exceptional service to our clients while helping resolve technical issues and inquiries.

Key Responsibilities:
• Handle inbound customer calls and emails professionally
• Troubleshoot technical issues and provide solutions
• Document customer interactions in CRM system
• Escalate complex issues to appropriate departments
• Follow up on customer concerns to ensure resolution
• Maintain product knowledge and stay updated on procedures

Requirements:
• Excellent verbal and written communication skills
• Previous customer service experience preferred
• Basic technical troubleshooting abilities
• Patience and empathy when dealing with frustrated customers
• Ability to work in a fast-paced environment
• High school diploma or equivalent

Benefits:
• Comprehensive training program
• Career advancement opportunities
• Health and dental benefits
• Paid time off and holidays
• Performance bonuses
• Friendly team environment`,
      requirements: ["Communication skills", "Customer service experience", "Technical aptitude"],
      logo: "/techwally-icon.png",
      featured: false,
      companySize: "50-100 employees",
      industry: "Technology",
      benefits: ["Health Benefits", "Training", "Performance Bonuses"],
      rating: 3.9,
      reviews: 112
    },
    {
      id: 6,
      title: "General Labourer",
      company: "WorkMate",
      location: "Darwin, NT",
      salary: "$28 - $35 per hour",
      type: "Contract",
      category: "Labour",
      classification: "Trades & Services",
      posted: "2 weeks ago",
      workType: "Contract",
      description: `Seeking reliable General Labourers for various construction and maintenance projects. Great opportunity for those looking to gain experience in the trades industry.

Key Responsibilities:
• Assist tradespeople with various construction tasks
• Load and unload materials and equipment
• Maintain clean and safe work sites
• Follow safety protocols and wear appropriate PPE
• Operate basic hand tools and equipment
• Complete assigned tasks efficiently and safely

Requirements:
• Physical fitness and ability to lift heavy objects
• Willingness to work outdoors in various weather conditions
• Basic understanding of workplace safety
• Reliable transportation to job sites
• White card (construction induction) preferred
• Previous labouring experience advantageous

What We Offer:
• Competitive hourly rates
• Immediate start available
• Variety of projects and locations
• Opportunity to learn new skills
• Potential for permanent employment
• Safety training provided`,
      requirements: ["Physical fitness", "White card preferred", "Reliable transport"],
      logo: "/techwally-icon.png",
      featured: false,
      companySize: "100+ employees",
      industry: "Construction",
      benefits: ["Immediate Start", "Skill Development", "Competitive Pay"],
      rating: 3.7,
      reviews: 78
    }
  ]

  const locations = ["All locations", "Melbourne, VIC", "Sydney, NSW", "Brisbane, QLD", "Perth, WA", "Adelaide, SA", "Darwin, NT"]
  const jobTypes = ["All work types", "Full-time", "Part-time", "Contract", "Casual", "Temporary"]
  const categories = ["All categories", "Management", "Sales", "Retail", "Cleaning", "Customer Service", "Labour"]
  const classifications = ["All classifications", "Administration & Office Support", "Sales", "Retail & Consumer Products", "Trades & Services", "Call Centre & Customer Service"]
  const listingDates = ["All listing dates", "Last 24 hours", "Last 3 days", "Last 7 days", "Last 14 days"]
  const workTypes = ["All work types", "Full time", "Part time", "Contract", "Casual"]
  const salaryRanges = ["All salary ranges", "$40k - $60k", "$60k - $80k", "$80k - $100k", "$100k+"]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = !selectedLocation || selectedLocation === "All locations" || job.location === selectedLocation
    const matchesType = !selectedJobType || selectedJobType === "All work types" || job.type === selectedJobType
    const matchesCategory = !selectedCategory || selectedCategory === "All categories" || job.category === selectedCategory
    const matchesClassification = !selectedClassification || selectedClassification === "All classifications" || job.classification === selectedClassification
    const matchesWorkType = !selectedWorkType || selectedWorkType === "All work types" || job.workType === selectedWorkType
    
    return matchesSearch && matchesLocation && matchesType && matchesCategory && matchesClassification && matchesWorkType
  })

  const selectedJobData = jobs.find(job => job.id === selectedJob)

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Top Section with Primary Background and Pattern */}
      <section className="bg-gradient-to-br from-techwally-primary via-[#004d66] to-techwally-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="relative z-10 px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar and Filters */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="lg:col-span-2">
                  <Input
                    placeholder="Job title, keywords, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 text-lg border-gray-300 focus:border-techwally-primary focus:ring-techwally-primary"
                  />
                </div>
                <div>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="h-12 border-gray-300">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Button size="lg" className="w-full h-12 bg-techwally-secondary hover:bg-techwally-primary text-white font-semibold">
                    <Search className="h-5 w-5 mr-2" />
                    SEARCH
                  </Button>
                </div>
              </div>
              
              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                  <SelectTrigger className="w-auto h-8 text-sm border-gray-300">
                    <SelectValue placeholder="Work type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-auto h-8 text-sm border-gray-300">
                    <SelectValue placeholder="Pay" />
                  </SelectTrigger>
                  <SelectContent>
                    {salaryRanges.map(range => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedClassification} onValueChange={setSelectedClassification}>
                  <SelectTrigger className="w-auto h-8 text-sm border-gray-300">
                    <SelectValue placeholder="Classification" />
                  </SelectTrigger>
                  <SelectContent>
                    {classifications.map(classification => (
                      <SelectItem key={classification} value={classification}>{classification}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedListingDate} onValueChange={setSelectedListingDate}>
                  <SelectTrigger className="w-auto h-8 text-sm border-gray-300">
                    <SelectValue placeholder="Listing date" />
                  </SelectTrigger>
                  <SelectContent>
                    {listingDates.map(date => (
                      <SelectItem key={date} value={date}>{date}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="sm" className="h-8 text-sm border-gray-300 hover:bg-gray-50">
                  More filters
                </Button>
                
                <Button variant="outline" size="sm" className="h-8 text-sm border-gray-300 hover:bg-gray-50">
                  Advertiser
                </Button>
                
                <Button variant="outline" size="sm" className="h-8 text-sm border-gray-300 hover:bg-gray-50">
                  Customer Service
                </Button>
                
                <Button variant="outline" size="sm" className="h-8 text-sm border-gray-300 hover:bg-gray-50">
                  Finance
                </Button>
                
                <Button variant="ghost" size="sm" className="h-8 text-sm text-techwally-primary">
                  <Filter className="h-3 w-3 mr-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Jobs Section */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            
            {/* Left Side - Job Cards */}
            <div className="w-1/2 space-y-0 border-r border-gray-200">
              {/* Results Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-600">
                  {filteredJobs.length} jobs found
                </p>
              </div>
              
              {/* Job Cards */}
              <div className="max-h-[800px] overflow-y-auto">
                {filteredJobs.map((job, index) => (
                  <div 
                    key={job.id} 
                    className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedJob === job.id ? 'bg-blue-50 border-l-4 border-l-techwally-primary' : ''
                    }`}
                    onClick={() => setSelectedJob(job.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-techwally-primary hover:underline">
                            {job.title}
                          </h3>
                          {job.featured && (
                            <Badge className="bg-techwally-secondary text-white text-xs px-2 py-0">
                              NEW
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm text-gray-700 font-medium">{job.company}</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600">{job.rating}</span>
                            <span className="text-xs text-gray-500">({job.reviews})</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </span>
                          <span>{job.classification}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <span>Full time</span>
                          <span>{job.salary}</span>
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-2">{job.posted}</p>
                      </div>
                      
                      <div className="flex flex-col gap-1 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleSaveJob(job.id)
                          }}
                          className="h-8 w-8 p-0"
                        >
                          <Heart className={`h-4 w-4 ${savedJobs.includes(job.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Job Details Window */}
            <div className="w-1/2">
              {selectedJobData ? (
                <div className="sticky top-4">
                  <Card className="shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-techwally-primary mb-2">
                            {selectedJobData.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-gray-700 font-medium">{selectedJobData.company}</p>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600">{selectedJobData.rating}</span>
                              <span className="text-sm text-gray-500">({selectedJobData.reviews} reviews)</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {selectedJobData.location}
                            </span>
                            <span className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {selectedJobData.salary}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <Badge variant="outline" className="text-xs border-techwally-primary text-techwally-primary">
                              {selectedJobData.workType}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {selectedJobData.classification}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleSaveJob(selectedJobData.id)}
                            className={savedJobs.includes(selectedJobData.id) ? "text-red-600 border-red-600" : ""}
                          >
                            <Heart className={`h-4 w-4 ${savedJobs.includes(selectedJobData.id) ? "fill-current" : ""}`} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="bg-techwally-secondary hover:bg-techwally-primary text-white flex-1">
                          Apply now
                        </Button>
                        <Button variant="outline" className="text-techwally-primary border-techwally-primary hover:bg-techwally-primary hover:text-white">
                          Save
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="max-h-[600px] overflow-y-auto">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">About the role</h4>
                          <div className="text-sm text-gray-700 whitespace-pre-line">
                            {selectedJobData.description}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Company Information</h4>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Industry:</strong> {selectedJobData.industry}</p>
                            <p><strong>Company Size:</strong> {selectedJobData.companySize}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Benefits</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedJobData.benefits.map((benefit, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <p className="text-xs text-gray-500 mb-2">Posted {selectedJobData.posted}</p>
                          <p className="text-xs text-gray-500">Job ID: {selectedJobData.id.toString().padStart(6, '0')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-gray-500">
                  <div className="text-center">
                    <Briefcase className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p>Select a job to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Email Alert Section */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Receive new jobs for this search by email</h3>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 border-gray-300 focus:border-techwally-primary focus:ring-techwally-primary"
              />
              <Button className="bg-techwally-secondary hover:bg-techwally-primary text-white">
                Create alert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage
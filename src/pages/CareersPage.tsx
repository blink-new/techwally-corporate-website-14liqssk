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
  TrendingUp
} from 'lucide-react'

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedJobType, setSelectedJobType] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: "Senior Cloud Solutions Architect",
      company: "Techwally",
      location: "Melbourne, VIC",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      category: "Cloud Services",
      posted: "2 days ago",
      description: "Lead the design and implementation of cloud infrastructure solutions for enterprise clients. Work with AWS, Azure, and Google Cloud platforms.",
      requirements: ["5+ years cloud architecture experience", "AWS/Azure certifications", "Strong communication skills"],
      logo: "/techwally-icon.png",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Analyst",
      company: "Techwally",
      location: "Sydney, NSW",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      category: "Cyber Security",
      posted: "3 days ago",
      description: "Monitor security threats, conduct vulnerability assessments, and implement security measures to protect client infrastructure.",
      requirements: ["3+ years cybersecurity experience", "Security certifications preferred", "Knowledge of SIEM tools"],
      logo: "/techwally-icon.png",
      featured: false
    },
    {
      id: 3,
      title: "Network Engineer",
      company: "Techwally",
      location: "Brisbane, QLD",
      salary: "$80,000 - $100,000",
      type: "Full-time",
      category: "Network Services",
      posted: "5 days ago",
      description: "Design, implement, and maintain network infrastructure for enterprise clients. Experience with Cisco and Juniper equipment required.",
      requirements: ["CCNA/CCNP certification", "5+ years networking experience", "Troubleshooting skills"],
      logo: "/techwally-icon.png",
      featured: false
    },
    {
      id: 4,
      title: "Data Center Technician",
      company: "Techwally",
      location: "Perth, WA",
      salary: "$65,000 - $80,000",
      type: "Full-time",
      category: "Data Centres",
      posted: "1 week ago",
      description: "Maintain and monitor data center equipment, perform hardware installations, and ensure optimal facility operations.",
      requirements: ["2+ years data center experience", "Hardware troubleshooting skills", "Shift work availability"],
      logo: "/techwally-icon.png",
      featured: false
    },
    {
      id: 5,
      title: "Business Continuity Consultant",
      company: "Techwally",
      location: "Adelaide, SA",
      salary: "$95,000 - $115,000",
      type: "Full-time",
      category: "Business Continuity",
      posted: "1 week ago",
      description: "Develop and implement business continuity plans for clients, conduct risk assessments, and provide disaster recovery solutions.",
      requirements: ["Business continuity certification", "Risk management experience", "Client-facing skills"],
      logo: "/techwally-icon.png",
      featured: false
    },
    {
      id: 6,
      title: "Systems Administrator",
      company: "Techwally",
      location: "Canberra, ACT",
      salary: "$75,000 - $95,000",
      type: "Full-time",
      category: "Systems Maintenance",
      posted: "2 weeks ago",
      description: "Manage and maintain Windows and Linux server environments, implement system updates, and provide technical support.",
      requirements: ["Windows/Linux administration", "PowerShell/Bash scripting", "3+ years experience"],
      logo: "/techwally-icon.png",
      featured: false
    }
  ]

  const locations = ["All Locations", "Melbourne, VIC", "Sydney, NSW", "Brisbane, QLD", "Perth, WA", "Adelaide, SA", "Canberra, ACT"]
  const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Casual"]
  const categories = ["All Categories", "Cloud Services", "Cyber Security", "Network Services", "Data Centres", "Business Continuity", "Systems Maintenance"]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = !selectedLocation || selectedLocation === "All Locations" || job.location === selectedLocation
    const matchesType = !selectedJobType || selectedJobType === "All Types" || job.type === selectedJobType
    const matchesCategory = !selectedCategory || selectedCategory === "All Categories" || job.category === selectedCategory
    
    return matchesSearch && matchesLocation && matchesType && matchesCategory
  })

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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-techwally-primary to-techwally-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Build your career with Australia's leading IT solutions provider. 
              Discover opportunities to grow, innovate, and make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="flex-1">
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 text-gray-900 bg-white"
                />
              </div>
              <div className="flex-1">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12 bg-white text-gray-900">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" className="bg-white text-techwally-primary hover:bg-gray-100 h-12 px-8">
                <Search className="h-5 w-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filter Jobs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Job Type</label>
                    <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedLocation('')
                      setSelectedJobType('')
                      setSelectedCategory('')
                      setSearchQuery('')
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredJobs.length} Jobs Found
                  </h2>
                  <p className="text-gray-600">
                    Showing results for your search criteria
                  </p>
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                    <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-techwally-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <img 
                              src={job.logo} 
                              alt={job.company}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 hover:text-techwally-primary cursor-pointer">
                                <Link to={`/careers/${job.id}`}>
                                  {job.title}
                                </Link>
                              </h3>
                              <p className="text-gray-600 font-medium">{job.company}</p>
                            </div>
                            {job.featured && (
                              <Badge className="bg-techwally-secondary text-white">
                                Featured
                              </Badge>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.posted}
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4 line-clamp-2">
                            {job.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.requirements.slice(0, 3).map((req, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 ml-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleSaveJob(job.id)}
                            className={savedJobs.includes(job.id) ? "text-red-600 border-red-600" : ""}
                          >
                            <Heart className={`h-4 w-4 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <Badge variant="outline" className="text-techwally-primary border-techwally-primary">
                          {job.category}
                        </Badge>
                        <Button asChild className="bg-techwally-primary hover:bg-techwally-secondary">
                          <Link to={`/careers/${job.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              {filteredJobs.length > 0 && (
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    Load More Jobs
                  </Button>
                </div>
              )}

              {/* No Results */}
              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No jobs found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search criteria or browse all available positions.
                    </p>
                    <Button 
                      onClick={() => {
                        setSelectedLocation('')
                        setSelectedJobType('')
                        setSelectedCategory('')
                        setSearchQuery('')
                      }}
                      className="bg-techwally-primary hover:bg-techwally-secondary"
                    >
                      View All Jobs
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Techwally?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values innovation, growth, and work-life balance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-techwally-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Continuous learning opportunities and clear career progression paths
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-techwally-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Team</h3>
              <p className="text-gray-600">
                Work with passionate professionals in a collaborative environment
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-techwally-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible working arrangements and comprehensive benefits package
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage
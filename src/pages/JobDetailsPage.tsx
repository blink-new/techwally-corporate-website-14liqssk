import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Building, 
  Users, 
  Calendar,
  Share2,
  Heart,
  ArrowLeft,
  CheckCircle,
  Upload,
  Mail,
  Phone,
  User
} from 'lucide-react'

const JobDetailsPage = () => {
  const { id } = useParams()
  const [isSaved, setIsSaved] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null
  })

  // Mock job data - in real app, this would be fetched based on ID
  const job = {
    id: parseInt(id || '1'),
    title: "Senior Cloud Solutions Architect",
    company: "Techwally",
    location: "Melbourne, VIC",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    category: "Cloud Services",
    classification: "Information & Communication Technology",
    posted: "2 days ago",
    workType: "Full time",
    description: `We are seeking an experienced Senior Cloud Solutions Architect to join our dynamic team at Techwally. This role offers an excellent opportunity to lead cloud architecture initiatives for enterprise clients while contributing to the strategic growth of our cloud services division.

Key Responsibilities:
• Lead the design and implementation of cloud infrastructure solutions for enterprise clients
• Work with AWS, Azure, and Google Cloud platforms to deliver scalable solutions
• Collaborate with cross-functional teams to ensure successful project delivery
• Provide technical leadership and mentorship to junior team members
• Conduct cloud readiness assessments and develop migration strategies
• Ensure compliance with security and governance requirements
• Stay current with emerging cloud technologies and industry best practices

Technical Requirements:
• 5+ years of experience in cloud architecture and implementation
• Strong expertise in AWS, Azure, or Google Cloud Platform
• Experience with infrastructure as code (Terraform, CloudFormation)
• Knowledge of containerization technologies (Docker, Kubernetes)
• Understanding of DevOps practices and CI/CD pipelines
• Experience with cloud security and compliance frameworks

Soft Skills:
• Excellent communication and presentation skills
• Strong problem-solving and analytical abilities
• Ability to work independently and manage multiple projects
• Leadership experience and mentoring capabilities
• Client-facing experience preferred

What We Offer:
• Competitive salary package ($120,000 - $150,000)
• Performance-based bonuses and incentives
• Comprehensive health and dental benefits
• Professional development opportunities and certifications
• Flexible working arrangements including remote work options
• Career progression pathways within a growing organization
• Access to cutting-edge technologies and projects
• Collaborative and innovative work environment`,
    requirements: [
      "5+ years cloud architecture experience",
      "AWS/Azure/GCP certifications",
      "Strong communication skills",
      "Leadership experience",
      "Infrastructure as Code experience"
    ],
    benefits: [
      "Health Insurance",
      "Dental Coverage",
      "Flexible Hours",
      "Remote Work",
      "Professional Development",
      "Performance Bonuses",
      "Career Growth",
      "Latest Technology"
    ],
    logo: "/techwally-icon.png",
    featured: true,
    companySize: "100-200 employees",
    industry: "Information Technology",
    companyDescription: "Techwally is Australia's leading IT solutions provider, specializing in cloud services, cybersecurity, and infrastructure management. We work with businesses of all sizes to deliver innovative technology solutions that drive growth and efficiency."
  }

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle application submission
    console.log('Application submitted:', applicationData)
    alert('Application submitted successfully! We will review your application and get back to you within 48 hours.')
    setShowApplicationForm(false)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/careers" className="hover:text-blue-600">Careers</Link>
            <span>/</span>
            <span className="text-gray-900">{job.title}</span>
          </div>
        </div>
      </section>

      {/* Job Header */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-6">
            <Link 
              to="/careers"
              className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={job.logo} 
                        alt={job.company}
                        className="w-16 h-16 rounded-lg object-cover border"
                      />
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {job.title}
                        </CardTitle>
                        <p className="text-lg text-gray-700 font-medium">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsSaved(!isSaved)}
                        className={isSaved ? "text-red-600 border-red-600" : ""}
                      >
                        <Heart className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.workType}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Posted {job.posted}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-blue-100 text-blue-800">{job.category}</Badge>
                    <Badge variant="outline">{job.classification}</Badge>
                    {job.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                    <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                      {job.description}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Requirements</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Benefits & Perks</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {job.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Apply for this position</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setShowApplicationForm(true)}
                  >
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Save Job
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Application deadline: Open until filled
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    About {job.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-700">
                    {job.companyDescription}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{job.companySize}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{job.industry}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Company Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Similar Jobs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <h4 className="font-medium text-sm text-blue-600">Cloud Engineer</h4>
                    <p className="text-xs text-gray-600">Techwally • Sydney, NSW</p>
                    <p className="text-xs text-gray-500">$90k - $110k</p>
                  </div>
                  <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <h4 className="font-medium text-sm text-blue-600">DevOps Specialist</h4>
                    <p className="text-xs text-gray-600">Techwally • Brisbane, QLD</p>
                    <p className="text-xs text-gray-500">$100k - $130k</p>
                  </div>
                  <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <h4 className="font-medium text-sm text-blue-600">Solutions Architect</h4>
                    <p className="text-xs text-gray-600">Techwally • Perth, WA</p>
                    <p className="text-xs text-gray-500">$110k - $140k</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Apply for {job.title}</h2>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </Button>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      First Name *
                    </label>
                    <Input
                      required
                      value={applicationData.firstName}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      Last Name *
                    </label>
                    <Input
                      required
                      value={applicationData.lastName}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Upload className="h-4 w-4 inline mr-1" />
                    Resume/CV *
                  </label>
                  <Input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cover Letter
                  </label>
                  <Textarea
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                  />
                </div>

                <div className="flex space-x-4">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Submit Application
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default JobDetailsPage
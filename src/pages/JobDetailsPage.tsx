import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar,
  ArrowLeft,
  Upload,
  CheckCircle,
  Building,
  Users
} from 'lucide-react'

// Mock job data - in a real app, this would come from an API
const mockJob = {
  id: '1',
  title: 'Senior Cloud Solutions Architect',
  department: 'Cloud Services',
  location: 'Sydney, NSW',
  type: 'Full-time',
  salary: '$120,000 - $150,000',
  description: 'We are seeking an experienced Senior Cloud Solutions Architect to join our growing Cloud Services team. You will be responsible for designing and implementing enterprise-grade cloud infrastructure solutions for our clients across various industries.',
  responsibilities: [
    'Design and architect cloud solutions using AWS, Azure, and Google Cloud Platform',
    'Lead cloud migration projects for enterprise clients',
    'Collaborate with cross-functional teams to deliver comprehensive IT solutions',
    'Provide technical leadership and mentorship to junior team members',
    'Conduct client consultations and technical presentations',
    'Ensure solutions meet security, compliance, and performance requirements',
    'Stay current with emerging cloud technologies and best practices'
  ],
  requirements: [
    'Bachelor\'s degree in Computer Science, Engineering, or related field',
    '5+ years of experience in cloud architecture and implementation',
    'Professional certifications in AWS, Azure, or Google Cloud (required)',
    'Strong experience with Infrastructure as Code (Terraform, CloudFormation)',
    'Proficiency in containerization technologies (Docker, Kubernetes)',
    'Experience with CI/CD pipelines and DevOps practices',
    'Excellent communication and client-facing skills',
    'Ability to work independently and manage multiple projects'
  ],
  benefits: [
    'Competitive salary package with performance bonuses',
    'Comprehensive health and dental insurance',
    'Professional development budget for certifications and training',
    'Flexible working arrangements including remote work options',
    'Company-provided laptop and equipment',
    '4 weeks annual leave plus public holidays',
    'Employee stock option program',
    'Regular team building events and company retreats'
  ],
  postedDate: '2024-01-15',
  applicationDeadline: '2024-02-15',
  featured: true
}

const JobDetailsPage = () => {
  const { jobId } = useParams()
  const [isApplying, setIsApplying] = useState(false)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    setTimeout(() => {
      setApplicationSubmitted(true)
      setIsApplying(false)
    }, 1000)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (applicationSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-bold text-slate-900 mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Thank you for your interest in the {mockJob.title} position. 
              Our recruitment team will review your application and get back to you within 5-7 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/careers">
                  View More Jobs
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/careers">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Link>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900">
                  {mockJob.title}
                </h1>
                {mockJob.featured && (
                  <Badge className="bg-primary text-white">Featured</Badge>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 text-slate-600">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>{mockJob.department}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{mockJob.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{mockJob.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span>{mockJob.salary}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Posted {formatDate(mockJob.postedDate)}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Apply by {formatDate(mockJob.applicationDeadline)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button 
                size="lg" 
                onClick={() => setIsApplying(true)}
                className="lg:w-48"
              >
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="lg:w-48">
                Save Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold">Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{mockJob.description}</p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold">Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockJob.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockJob.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold">Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Apply */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading font-semibold">Quick Apply</CardTitle>
                <CardDescription>
                  Ready to join our team? Submit your application today.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => setIsApplying(true)}
                >
                  Apply for this Position
                </Button>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading font-semibold">About Techwally</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-slate-500" />
                  <div>
                    <div className="font-medium">500+ Employees</div>
                    <div className="text-sm text-slate-600">Growing team</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-slate-500" />
                  <div>
                    <div className="font-medium">Enterprise IT</div>
                    <div className="text-sm text-slate-600">Industry leader</div>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-slate-600">
                  Techwally is Australia's leading provider of enterprise IT solutions, 
                  helping businesses transform their technology infrastructure for over 15 years.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading font-semibold">Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: 'Cloud Engineer', department: 'Cloud Services' },
                  { title: 'DevOps Engineer', department: 'Infrastructure' },
                  { title: 'Solutions Architect', department: 'Solutions' }
                ].map((job, index) => (
                  <div key={index} className="p-3 border border-slate-200 rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="font-medium text-slate-900">{job.title}</div>
                    <div className="text-sm text-slate-600">{job.department}</div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/careers">View All Jobs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isApplying && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-heading font-semibold">
                    Apply for {mockJob.title}
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below to submit your application
                  </CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsApplying(false)}
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV *</Label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <div className="text-sm text-slate-600 mb-2">
                      {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                    </div>
                    <div className="text-xs text-slate-500">PDF, DOC, DOCX (max 5MB)</div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    Submit Application
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsApplying(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default JobDetailsPage
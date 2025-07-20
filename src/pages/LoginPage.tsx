import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  Building, 
  Shield,
  ArrowLeft,
  CheckCircle
} from 'lucide-react'

const LoginPage = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState(type || 'employee')
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  })

  // Demo credentials
  const demoCredentials = {
    admin: { email: 'admin@techwally.com.au', password: 'admin123' },
    employee: { email: 'employee@techwally.com.au', password: 'employee123' },
    client: { email: 'client@techwally.com.au', password: 'client123' }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    const credentials = demoCredentials[activeTab as keyof typeof demoCredentials]
    
    if (loginData.email === credentials.email && loginData.password === credentials.password) {
      toast({
        title: "Login successful!",
        description: `Welcome back to your ${activeTab} dashboard.`,
      })

      // Redirect to appropriate dashboard
      switch (activeTab) {
        case 'admin':
          navigate('/admin/dashboard')
          break
        case 'employee':
          navigate('/employee/dashboard')
          break
        case 'client':
          navigate('/client/dashboard')
          break
        default:
          navigate('/')
      }
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive"
      })
    }

    setIsLoading(false)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: "Account created successfully!",
      description: "Please check your email to verify your account.",
    })

    setIsLoading(false)
  }

  const getTabIcon = (tabType: string) => {
    switch (tabType) {
      case 'admin':
        return <Shield className="h-4 w-4" />
      case 'employee':
        return <User className="h-4 w-4" />
      case 'client':
        return <Building className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getTabTitle = (tabType: string) => {
    switch (tabType) {
      case 'admin':
        return 'Admin Portal'
      case 'employee':
        return 'Employee Portal'
      case 'client':
        return 'Client Portal'
      default:
        return 'Employee Portal'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-techwally-primary via-techwally-secondary to-techwally-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            asChild 
            className="text-white hover:bg-white/10"
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/techwally-logo.png" 
            alt="Techwally" 
            className="h-12 mx-auto mb-4 filter brightness-0 invert"
          />
          <h1 className="text-2xl font-bold text-white">
            Welcome to Techwally
          </h1>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {getTabTitle(activeTab)}
            </CardTitle>
            <p className="text-gray-600">
              Sign in to access your dashboard
            </p>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="employee" className="flex items-center gap-2">
                  {getTabIcon('employee')}
                  <span className="hidden sm:inline">Employee</span>
                </TabsTrigger>
                <TabsTrigger value="client" className="flex items-center gap-2">
                  {getTabIcon('client')}
                  <span className="hidden sm:inline">Client</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  {getTabIcon('admin')}
                  <span className="hidden sm:inline">Admin</span>
                </TabsTrigger>
              </TabsList>

              {/* Login Forms */}
              {['employee', 'client', 'admin'].map((tabType) => (
                <TabsContent key={tabType} value={tabType}>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="login">Sign In</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    {/* Login Tab */}
                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              required
                              value={loginData.email}
                              onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="Enter your email"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              required
                              value={loginData.password}
                              onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                              placeholder="Enter your password"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-techwally-primary focus:ring-techwally-primary" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                          </label>
                          <Link to="/forgot-password" className="text-sm text-techwally-primary hover:text-techwally-secondary">
                            Forgot password?
                          </Link>
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isLoading}
                          className="w-full bg-techwally-primary hover:bg-techwally-secondary text-white py-3"
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Signing In...
                            </>
                          ) : (
                            'Sign In'
                          )}
                        </Button>

                        {/* Demo Credentials */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            Demo Credentials
                          </h4>
                          <div className="text-xs text-gray-600 space-y-1">
                            <p><strong>Email:</strong> {demoCredentials[tabType as keyof typeof demoCredentials].email}</p>
                            <p><strong>Password:</strong> {demoCredentials[tabType as keyof typeof demoCredentials].password}</p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => {
                              setLoginData({
                                email: demoCredentials[tabType as keyof typeof demoCredentials].email,
                                password: demoCredentials[tabType as keyof typeof demoCredentials].password
                              })
                            }}
                          >
                            Use Demo Credentials
                          </Button>
                        </div>
                      </form>
                    </TabsContent>

                    {/* Signup Tab */}
                    <TabsContent value="signup">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              First Name
                            </label>
                            <Input
                              id="firstName"
                              type="text"
                              required
                              value={signupData.firstName}
                              onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name
                            </label>
                            <Input
                              id="lastName"
                              type="text"
                              required
                              value={signupData.lastName}
                              onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                              placeholder="Smith"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="signupEmail"
                              type="email"
                              required
                              value={signupData.email}
                              onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="john@company.com"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        {tabType === 'client' && (
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                              Company Name
                            </label>
                            <div className="relative">
                              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="company"
                                type="text"
                                required
                                value={signupData.company}
                                onChange={(e) => setSignupData(prev => ({ ...prev, company: e.target.value }))}
                                placeholder="Your Company"
                                className="pl-10"
                              />
                            </div>
                          </div>
                        )}

                        <div>
                          <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="signupPassword"
                              type={showPassword ? "text" : "password"}
                              required
                              value={signupData.password}
                              onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                              placeholder="Create a password"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="confirmPassword"
                              type="password"
                              required
                              value={signupData.confirmPassword}
                              onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                              placeholder="Confirm your password"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            required
                            className="rounded border-gray-300 text-techwally-primary focus:ring-techwally-primary" 
                          />
                          <span className="ml-2 text-sm text-gray-600">
                            I agree to the <Link to="/terms" className="text-techwally-primary hover:text-techwally-secondary">Terms of Service</Link> and <Link to="/privacy" className="text-techwally-primary hover:text-techwally-secondary">Privacy Policy</Link>
                          </span>
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isLoading}
                          className="w-full bg-techwally-primary hover:bg-techwally-secondary text-white py-3"
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Creating Account...
                            </>
                          ) : (
                            'Create Account'
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-white/80 text-sm">
          <p>© 2024 Techwally. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/support" className="hover:text-white">Support</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
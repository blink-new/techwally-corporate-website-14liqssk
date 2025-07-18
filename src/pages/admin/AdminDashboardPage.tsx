import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Briefcase, 
  MessageSquare,
  Settings,
  BarChart3,
  Calendar,
  Bell,
  Search
} from 'lucide-react'

const AdminDashboardPage = () => {
  const stats = [
    { title: 'Total Pages', value: '24', change: '+2', icon: FileText, color: 'bg-blue-500' },
    { title: 'Active Jobs', value: '8', change: '+3', icon: Briefcase, color: 'bg-green-500' },
    { title: 'Blog Posts', value: '15', change: '+1', icon: MessageSquare, color: 'bg-purple-500' },
    { title: 'Site Visitors', value: '1,234', change: '+12%', icon: BarChart3, color: 'bg-orange-500' }
  ]

  const quickActions = [
    { title: 'Add New Page', icon: FileText, href: '#' },
    { title: 'Post Job', icon: Briefcase, href: '#' },
    { title: 'Write Blog Post', icon: MessageSquare, href: '#' },
    { title: 'Manage Users', icon: Users, href: '#' },
    { title: 'Site Settings', icon: Settings, href: '#' },
    { title: 'Analytics', icon: BarChart3, href: '#' }
  ]

  const recentActivity = [
    { action: 'New job application received', time: '2 minutes ago', type: 'job' },
    { action: 'Blog post "Cloud Security" published', time: '1 hour ago', type: 'blog' },
    { action: 'Contact form submission', time: '3 hours ago', type: 'contact' },
    { action: 'User John Smith registered', time: '5 hours ago', type: 'user' }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-slate-900">Techwally CMS</h1>
                <p className="text-sm text-slate-600">Content Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Badge variant="secondary">Admin</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
            Welcome back, Admin
          </h2>
          <p className="text-slate-600">
            Here's what's happening with your website today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                        <Badge variant="secondary" className="text-xs">
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <div className={`h-10 w-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LayoutDashboard className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 flex-col space-y-2 hover:bg-primary hover:text-white transition-colors"
                      >
                        <IconComponent className="h-6 w-6" />
                        <span className="text-sm font-medium">{action.title}</span>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900">{activity.action}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Management */}
        <div className="mt-8">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
              <p className="text-slate-600">Manage your website content and settings</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Pages
                </Button>
                <Button variant="outline" className="justify-start">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Jobs
                </Button>
                <Button variant="outline" className="justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Blog
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Users
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardPage
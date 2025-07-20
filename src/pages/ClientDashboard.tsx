import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  Building, 
  Server, 
  Shield, 
  FileText, 
  CreditCard, 
  LogOut,
  Bell,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Activity,
  Users,
  Phone,
  Mail,
  Calendar,
  Download,
  Eye,
  MessageSquare,
  Headphones
} from 'lucide-react'

const ClientDashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = () => {
    navigate('/login/client')
  }

  // Mock client data
  const client = {
    company: 'ABC Corporation',
    contactPerson: 'John Smith',
    email: 'john.smith@abccorp.com',
    phone: '+61 3 9123 4567',
    accountManager: 'David Wilson',
    clientSince: '2022-06-15',
    accountStatus: 'Active',
    nextBilling: '2024-02-01'
  }

  const services = [
    { 
      id: 1, 
      name: 'Cloud Infrastructure', 
      status: 'Active', 
      uptime: 99.9, 
      lastUpdate: '2024-01-15',
      description: 'AWS-based cloud hosting with auto-scaling',
      monthlyFee: 2500
    },
    { 
      id: 2, 
      name: 'Cybersecurity Monitoring', 
      status: 'Active', 
      uptime: 100, 
      lastUpdate: '2024-01-14',
      description: '24/7 threat monitoring and incident response',
      monthlyFee: 1800
    },
    { 
      id: 3, 
      name: 'Data Backup & Recovery', 
      status: 'Active', 
      uptime: 99.8, 
      lastUpdate: '2024-01-13',
      description: 'Automated daily backups with disaster recovery',
      monthlyFee: 800
    },
    { 
      id: 4, 
      name: 'Network Management', 
      status: 'Maintenance', 
      uptime: 98.5, 
      lastUpdate: '2024-01-12',
      description: 'Managed network infrastructure and support',
      monthlyFee: 1200
    }
  ]

  const tickets = [
    { id: 'TW-2024-001', title: 'Email server performance issue', priority: 'High', status: 'In Progress', created: '2024-01-15', assignee: 'Sarah Johnson' },
    { id: 'TW-2024-002', title: 'New user account setup', priority: 'Medium', status: 'Completed', created: '2024-01-14', assignee: 'Mike Wilson' },
    { id: 'TW-2024-003', title: 'VPN access request', priority: 'Low', status: 'Pending', created: '2024-01-13', assignee: 'Lisa Chen' },
    { id: 'TW-2024-004', title: 'Security audit report', priority: 'Medium', status: 'In Progress', created: '2024-01-12', assignee: 'David Smith' }
  ]

  const invoices = [
    { id: 'INV-2024-001', date: '2024-01-01', amount: 6300, status: 'Paid', dueDate: '2024-01-31' },
    { id: 'INV-2023-012', date: '2023-12-01', amount: 6300, status: 'Paid', dueDate: '2023-12-31' },
    { id: 'INV-2023-011', date: '2023-11-01', amount: 6300, status: 'Paid', dueDate: '2023-11-30' },
    { id: 'INV-2023-010', date: '2023-10-01', amount: 6300, status: 'Paid', dueDate: '2023-10-31' }
  ]

  const systemAlerts = [
    { id: 1, type: 'warning', message: 'Scheduled maintenance on Network Management service', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'Security scan completed successfully', time: '1 day ago' },
    { id: 3, type: 'success', message: 'Backup completed for all systems', time: '2 days ago' }
  ]

  const usageStats = {
    storage: { used: 750, total: 1000, unit: 'GB' },
    bandwidth: { used: 2.3, total: 5, unit: 'TB' },
    users: { active: 45, total: 50 },
    uptime: 99.7
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/techwally-logo.png" alt="Techwally" className="h-8 w-auto" />
              </Link>
              <div className="ml-6">
                <h1 className="text-xl font-semibold text-gray-900">Client Portal</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-techwally-primary rounded-full flex items-center justify-center">
                  <Building className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">{client.company}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome, {client.company}!</h2>
          <p className="text-gray-600">Account Manager: {client.accountManager} • Client since {client.clientSince}</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              Support
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Billing
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Account
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Server className="h-8 w-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Services</p>
                      <p className="text-2xl font-bold">{services.filter(s => s.status === 'Active').length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">System Uptime</p>
                      <p className="text-2xl font-bold">{usageStats.uptime}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-purple-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Users</p>
                      <p className="text-2xl font-bold">{usageStats.users.active}/{usageStats.users.total}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <DollarSign className="h-8 w-8 text-orange-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Monthly Cost</p>
                      <p className="text-2xl font-bold">${services.reduce((sum, s) => sum + s.monthlyFee, 0).toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Service Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant={service.status === 'Active' ? 'default' : 'secondary'}>
                              {service.status}
                            </Badge>
                            <span className="text-sm text-gray-500">Uptime: {service.uptime}%</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {service.status === 'Active' ? 
                            <CheckCircle className="h-6 w-6 text-green-500" /> :
                            <AlertTriangle className="h-6 w-6 text-yellow-500" />
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Tickets */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Support Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tickets.slice(0, 4).map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{ticket.title}</h4>
                          <div className="flex items-center space-x-4 mt-1">
                            <Badge variant={
                              ticket.priority === 'High' ? 'destructive' : 
                              ticket.priority === 'Medium' ? 'default' : 'secondary'
                            }>
                              {ticket.priority}
                            </Badge>
                            <span className="text-xs text-gray-500">{ticket.id}</span>
                          </div>
                        </div>
                        <div className="ml-4 text-right">
                          <Badge variant={
                            ticket.status === 'Completed' ? 'default' : 
                            ticket.status === 'In Progress' ? 'secondary' : 'outline'
                          }>
                            {ticket.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{ticket.created}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Usage Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Resource Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Storage Usage</span>
                      <span>{usageStats.storage.used}/{usageStats.storage.total} {usageStats.storage.unit}</span>
                    </div>
                    <Progress value={(usageStats.storage.used / usageStats.storage.total) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Bandwidth Usage</span>
                      <span>{usageStats.bandwidth.used}/{usageStats.bandwidth.total} {usageStats.bandwidth.unit}</span>
                    </div>
                    <Progress value={(usageStats.bandwidth.used / usageStats.bandwidth.total) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>User Licenses</span>
                      <span>{usageStats.users.active}/{usageStats.users.total} users</span>
                    </div>
                    <Progress value={(usageStats.users.active / usageStats.users.total) * 100} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.type === 'warning' ? 'bg-yellow-500' :
                        alert.type === 'success' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Services</h2>
              <Button className="bg-techwally-primary hover:bg-techwally-secondary">
                Request New Service
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{service.name}</CardTitle>
                      <Badge variant={service.status === 'Active' ? 'default' : 'secondary'}>
                        {service.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Uptime</span>
                        <span className="font-medium">{service.uptime}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Last Update</span>
                        <span className="font-medium">{service.lastUpdate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Monthly Fee</span>
                        <span className="font-medium">${service.monthlyFee.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Settings className="h-4 w-4 mr-2" />
                        Configure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Support Center</h2>
              <Button className="bg-techwally-primary hover:bg-techwally-secondary">
                Create New Ticket
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-techwally-primary" />
                    <div>
                      <p className="font-medium">24/7 Support</p>
                      <p className="text-sm text-gray-600">1800 TECHWALLY</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-techwally-primary" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-gray-600">support@techwally.com.au</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-techwally-primary" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-gray-600">Available 9AM-5PM</p>
                    </div>
                  </div>
                  <Button className="w-full bg-techwally-primary hover:bg-techwally-secondary">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Support Tickets */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Support Tickets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Ticket ID</th>
                            <th className="text-left py-2">Subject</th>
                            <th className="text-left py-2">Priority</th>
                            <th className="text-left py-2">Status</th>
                            <th className="text-left py-2">Created</th>
                            <th className="text-left py-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tickets.map((ticket) => (
                            <tr key={ticket.id} className="border-b">
                              <td className="py-3 font-mono text-sm">{ticket.id}</td>
                              <td className="py-3">{ticket.title}</td>
                              <td className="py-3">
                                <Badge variant={
                                  ticket.priority === 'High' ? 'destructive' : 
                                  ticket.priority === 'Medium' ? 'default' : 'secondary'
                                }>
                                  {ticket.priority}
                                </Badge>
                              </td>
                              <td className="py-3">
                                <Badge variant={
                                  ticket.status === 'Completed' ? 'default' : 
                                  ticket.status === 'In Progress' ? 'secondary' : 'outline'
                                }>
                                  {ticket.status}
                                </Badge>
                              </td>
                              <td className="py-3">{ticket.created}</td>
                              <td className="py-3">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Billing & Invoices</h2>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Billing Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Billing Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Current Monthly Cost</span>
                    <span className="font-bold">${services.reduce((sum, s) => sum + s.monthlyFee, 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Billing Date</span>
                    <span className="font-medium">{client.nextBilling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span className="font-medium">**** 1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Status</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <Button className="w-full bg-techwally-primary hover:bg-techwally-secondary">
                    Update Payment Method
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Invoices */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Invoices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Invoice ID</th>
                            <th className="text-left py-2">Date</th>
                            <th className="text-left py-2">Amount</th>
                            <th className="text-left py-2">Due Date</th>
                            <th className="text-left py-2">Status</th>
                            <th className="text-left py-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoices.map((invoice) => (
                            <tr key={invoice.id} className="border-b">
                              <td className="py-3 font-mono text-sm">{invoice.id}</td>
                              <td className="py-3">{invoice.date}</td>
                              <td className="py-3 font-medium">${invoice.amount.toLocaleString()}</td>
                              <td className="py-3">{invoice.dueDate}</td>
                              <td className="py-3">
                                <Badge className="bg-green-100 text-green-800">
                                  {invoice.status}
                                </Badge>
                              </td>
                              <td className="py-3">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <h2 className="text-2xl font-bold">Account Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Company Name</label>
                    <p className="text-lg">{client.company}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Primary Contact</label>
                    <p className="text-lg">{client.contactPerson}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email Address</label>
                    <p className="text-lg">{client.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone Number</label>
                    <p className="text-lg">{client.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Account Manager</label>
                    <p className="text-lg">{client.accountManager}</p>
                  </div>
                  <Button className="bg-techwally-primary hover:bg-techwally-secondary">
                    Update Information
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Client Since</span>
                    <span className="font-medium">{client.clientSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Status</span>
                    <Badge className="bg-green-100 text-green-800">{client.accountStatus}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Services</span>
                    <span className="font-medium">{services.filter(s => s.status === 'Active').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Monthly Cost</span>
                    <span className="font-medium">${services.reduce((sum, s) => sum + s.monthlyFee, 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Billing</span>
                    <span className="font-medium">{client.nextBilling}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ClientDashboard
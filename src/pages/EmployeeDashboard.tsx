import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Calendar } from '@/components/ui/calendar'
import { 
  User, 
  Calendar as CalendarIcon, 
  Clock, 
  FileText, 
  Award, 
  LogOut,
  Bell,
  Settings,
  Briefcase,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Users,
  MessageSquare,
  BookOpen,
  Coffee
} from 'lucide-react'

const EmployeeDashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const handleLogout = () => {
    navigate('/login/employee')
  }

  // Mock employee data
  const employee = {
    name: 'Sarah Johnson',
    position: 'Senior Cloud Solutions Architect',
    department: 'Cloud Services',
    employeeId: 'TW-2024-001',
    startDate: '2023-03-15',
    email: 'sarah.johnson@techwally.com.au',
    phone: '+61 4XX XXX XXX',
    manager: 'David Smith'
  }

  const tasks = [
    { id: 1, title: 'Complete AWS Migration Project', priority: 'High', dueDate: '2024-01-20', status: 'In Progress', progress: 75 },
    { id: 2, title: 'Client Security Assessment', priority: 'Medium', dueDate: '2024-01-25', status: 'Pending', progress: 0 },
    { id: 3, title: 'Team Training Session', priority: 'Low', dueDate: '2024-01-30', status: 'Completed', progress: 100 },
    { id: 4, title: 'Documentation Update', priority: 'Medium', dueDate: '2024-02-05', status: 'In Progress', progress: 40 }
  ]

  const projects = [
    { id: 1, name: 'Enterprise Cloud Migration', client: 'ABC Corporation', status: 'Active', completion: 85, team: 5 },
    { id: 2, name: 'Security Infrastructure Upgrade', client: 'XYZ Ltd', status: 'Planning', completion: 15, team: 3 },
    { id: 3, name: 'Data Center Consolidation', client: 'Tech Solutions Inc', status: 'Active', completion: 60, team: 8 }
  ]

  const timeEntries = [
    { date: '2024-01-15', project: 'AWS Migration', hours: 8, description: 'Server configuration and testing' },
    { date: '2024-01-14', project: 'Security Assessment', hours: 6, description: 'Vulnerability scanning and analysis' },
    { date: '2024-01-13', project: 'Documentation', hours: 4, description: 'Updated technical specifications' },
    { date: '2024-01-12', project: 'Team Meeting', hours: 2, description: 'Weekly project review' }
  ]

  const upcomingEvents = [
    { id: 1, title: 'Team Standup', time: '09:00 AM', date: 'Today', type: 'meeting' },
    { id: 2, title: 'Client Presentation', time: '02:00 PM', date: 'Today', type: 'presentation' },
    { id: 3, title: 'AWS Training', time: '10:00 AM', date: 'Tomorrow', type: 'training' },
    { id: 4, title: 'Project Review', time: '03:30 PM', date: 'Jan 20', type: 'meeting' }
  ]

  const achievements = [
    { title: 'AWS Certified Solutions Architect', date: '2023-12-15', type: 'certification' },
    { title: 'Employee of the Month', date: '2023-11-01', type: 'award' },
    { title: 'Project Excellence Award', date: '2023-09-20', type: 'award' },
    { title: 'Azure Fundamentals Certified', date: '2023-08-10', type: 'certification' }
  ]

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
                <h1 className="text-xl font-semibold text-gray-900">Employee Portal</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-techwally-primary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">{employee.name}</span>
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
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, {employee.name.split(' ')[0]}!</h2>
          <p className="text-gray-600">{employee.position} • {employee.department}</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Tasks
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="timesheet" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Timesheet
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Tasks Completed</p>
                          <p className="text-2xl font-bold">12</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Briefcase className="h-8 w-8 text-blue-500" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Active Projects</p>
                          <p className="text-2xl font-bold">3</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Clock className="h-8 w-8 text-purple-500" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Hours This Week</p>
                          <p className="text-2xl font-bold">38</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Tasks */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tasks.slice(0, 3).map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{task.title}</h4>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}>
                                {task.priority}
                              </Badge>
                              <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
                            </div>
                            <Progress value={task.progress} className="mt-2" />
                          </div>
                          <div className="ml-4">
                            <Badge variant={task.status === 'Completed' ? 'default' : 'outline'}>
                              {task.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Active Projects */}
                <Card>
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.filter(p => p.status === 'Active').map((project) => (
                        <div key={project.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{project.name}</h4>
                            <Badge>{project.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Client: {project.client}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{project.team} team members</span>
                            </div>
                            <span className="text-sm font-medium">{project.completion}% complete</span>
                          </div>
                          <Progress value={project.completion} className="mt-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Calendar */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            event.type === 'meeting' ? 'bg-blue-500' :
                            event.type === 'presentation' ? 'bg-green-500' :
                            'bg-purple-500'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{event.title}</p>
                            <p className="text-xs text-gray-500">{event.time} • {event.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Log Time
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Submit Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Team Chat
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Coffee className="h-4 w-4 mr-2" />
                      Book Meeting Room
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Tasks</h2>
              <Button className="bg-techwally-primary hover:bg-techwally-secondary">
                Add Task
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">High Priority</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks.filter(t => t.priority === 'High').map((task) => (
                      <div key={task.id} className="p-3 border rounded-lg">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
                        <Progress value={task.progress} className="mt-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-yellow-600">Medium Priority</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks.filter(t => t.priority === 'Medium').map((task) => (
                      <div key={task.id} className="p-3 border rounded-lg">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
                        <Progress value={task.progress} className="mt-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Low Priority</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks.filter(t => t.priority === 'Low').map((task) => (
                      <div key={task.id} className="p-3 border rounded-lg">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
                        <Progress value={task.progress} className="mt-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <h2 className="text-2xl font-bold">My Projects</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.name}</CardTitle>
                      <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Client: {project.client}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.completion}%</span>
                      </div>
                      <Progress value={project.completion} />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{project.team} members</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Timesheet Tab */}
          <TabsContent value="timesheet" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Timesheet</h2>
              <Button className="bg-techwally-primary hover:bg-techwally-secondary">
                Log Time
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Time Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Project</th>
                        <th className="text-left py-2">Hours</th>
                        <th className="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeEntries.map((entry, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">{entry.date}</td>
                          <td className="py-3">
                            <Badge variant="outline">{entry.project}</Badge>
                          </td>
                          <td className="py-3 font-medium">{entry.hours}h</td>
                          <td className="py-3">{entry.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">My Profile</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-lg">{employee.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Position</label>
                    <p className="text-lg">{employee.position}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Department</label>
                    <p className="text-lg">{employee.department}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Employee ID</label>
                    <p className="text-lg">{employee.employeeId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Start Date</label>
                    <p className="text-lg">{employee.startDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Manager</label>
                    <p className="text-lg">{employee.manager}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.type === 'certification' ? 'bg-blue-100' : 'bg-yellow-100'
                        }`}>
                          {achievement.type === 'certification' ? 
                            <BookOpen className="h-4 w-4 text-blue-600" /> :
                            <Award className="h-4 w-4 text-yellow-600" />
                          }
                        </div>
                        <div>
                          <p className="font-medium">{achievement.title}</p>
                          <p className="text-sm text-gray-500">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default EmployeeDashboard
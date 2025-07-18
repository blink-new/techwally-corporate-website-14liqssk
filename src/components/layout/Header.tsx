import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Menu, 
  ChevronDown,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { AiChat } from '@/components/ui/ai-chat'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const navigate = useNavigate()

  const services = [
    { name: 'Cloud Services', href: '/services/cloud-services' },
    { name: 'Cyber Security', href: '/services/cyber-security' },
    { name: 'Data Centres', href: '/services/data-centres' },
    { name: 'Business Continuity', href: '/services/business-continuity' },
    { name: 'Systems Maintenance', href: '/services/systems-maintenance' },
    { name: 'Techwally Anywhere', href: '/services/techwally-anywhere' },
    { name: 'Network Services', href: '/services/network-services' },
    { name: 'Secure Space', href: '/services/secure-space' },
    { name: 'Resellers', href: '/services/resellers' },
  ]

  const solutions = [
    { name: 'Infrastructure', href: '/solutions/infrastructure' },
    { name: 'Networks', href: '/solutions/networks' },
    { name: 'End User Support', href: '/solutions/end-user-support' },
    { name: 'Consolidation', href: '/solutions/consolidation' },
    { name: 'Growth', href: '/solutions/growth' },
    { name: 'Trouble', href: '/solutions/trouble' },
  ]

  const industries = [
    { name: 'Financial Services', href: '/industries/financial-services' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Professional Services', href: '/industries/professional-services' },
    { name: 'Aged Care', href: '/industries/aged-care' },
  ]

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              {/* Login Portal */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center space-x-1">
                  <span>Login Portal</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate('/login/employee')}>
                    Employee Login
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/login/client')}>
                    Client Login
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Support */}
              <button
                onClick={() => setIsChatOpen(true)}
                className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center space-x-1"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/techwally-logo.png" 
              alt="Techwally" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* What We Do */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-inter text-gray-700 hover:text-primary">
                    What We Do
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.name} asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-inter text-gray-700 hover:text-primary">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6">
                      {solutions.map((solution) => (
                        <NavigationMenuLink key={solution.name} asChild>
                          <Link
                            to={solution.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{solution.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-inter text-gray-700 hover:text-primary">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-6">
                      {industries.map((industry) => (
                        <NavigationMenuLink key={industry.name} asChild>
                          <Link
                            to={industry.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{industry.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Why Techwally */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/why-techwally"
                      className="font-inter text-gray-700 hover:text-primary transition-colors px-4 py-2"
                    >
                      Why Techwally
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Company */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-inter text-gray-700 hover:text-primary">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-6">
                      {company.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <div className="space-y-4">
                  <DialogTitle className="text-lg font-poppins font-semibold">Search</DialogTitle>
                  <Input
                    placeholder="Search for services, solutions, or content..."
                    className="w-full"
                    autoFocus
                  />
                  <div className="text-sm text-gray-500">
                    Try searching for "cloud services", "cybersecurity", or "data centres"
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Contact Us Button */}
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact">Contact Us</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="text-lg font-poppins font-semibold">
                    What We Do
                  </div>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="text-lg font-poppins font-semibold">
                    Solutions
                  </div>
                  <div className="pl-4 space-y-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="text-lg font-poppins font-semibold">
                    Industries
                  </div>
                  <div className="pl-4 space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.href}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Link to="/why-techwally" className="text-lg font-poppins font-semibold">
                    Why Techwally
                  </Link>
                  
                  <div className="text-lg font-poppins font-semibold">
                    Company
                  </div>
                  <div className="pl-4 space-y-2">
                    {company.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Button asChild className="mt-6">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* AI Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="sm:max-w-[600px] h-[600px]">
          <DialogTitle className="sr-only">AI Support Chat</DialogTitle>
          <AiChat />
        </DialogContent>
      </Dialog>
    </header>
  )
}

export default Header
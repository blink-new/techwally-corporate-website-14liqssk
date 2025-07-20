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
  MessageCircle,
  Plus,
  Minus
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
import { VisuallyHidden } from '@/components/ui/visually-hidden'
import { AiChat } from '@/components/ui/ai-chat'
import AdvancedSearch from '@/components/ui/advanced-search'

interface MobileMenuProps {
  services: Array<{ name: string; href: string }>
  solutions: Array<{ name: string; href: string }>
  industries: Array<{ name: string; href: string }>
  company: Array<{ name: string; href: string }>
}

const MobileMenu = ({ services, solutions, industries, company }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  return (
    <div className="flex flex-col space-y-2 mt-6">
      {/* What We Do */}
      <div>
        <button
          onClick={() => toggleSection('services')}
          className="flex items-center justify-between w-full text-lg font-poppins font-semibold py-2 text-left"
        >
          What We Do
          {expandedSections.includes('services') ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes('services') && (
          <div className="pl-4 space-y-2 mt-2">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="block text-gray-600 hover:text-primary transition-colors py-1"
              >
                {service.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Solutions */}
      <div>
        <button
          onClick={() => toggleSection('solutions')}
          className="flex items-center justify-between w-full text-lg font-poppins font-semibold py-2 text-left"
        >
          Solutions
          {expandedSections.includes('solutions') ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes('solutions') && (
          <div className="pl-4 space-y-2 mt-2">
            {solutions.map((solution) => (
              <Link
                key={solution.name}
                to={solution.href}
                className="block text-gray-600 hover:text-primary transition-colors py-1"
              >
                {solution.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Industries */}
      <div>
        <button
          onClick={() => toggleSection('industries')}
          className="flex items-center justify-between w-full text-lg font-poppins font-semibold py-2 text-left"
        >
          Industries
          {expandedSections.includes('industries') ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes('industries') && (
          <div className="pl-4 space-y-2 mt-2">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                to={industry.href}
                className="block text-gray-600 hover:text-primary transition-colors py-1"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Why Techwally */}
      <Link to="/why-techwally" className="text-lg font-poppins font-semibold py-2">
        Why Techwally
      </Link>

      {/* Company */}
      <div>
        <button
          onClick={() => toggleSection('company')}
          className="flex items-center justify-between w-full text-lg font-poppins font-semibold py-2 text-left"
        >
          Company
          {expandedSections.includes('company') ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes('company') && (
          <div className="pl-4 space-y-2 mt-2">
            {company.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-600 hover:text-primary transition-colors py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Button asChild className="mt-6 bg-techwally-secondary hover:bg-techwally-primary">
        <Link to="/contact">Contact Us</Link>
      </Button>
    </div>
  )
}

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
                  <NavigationMenuContent className="right-0">
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
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Contact Us Button */}
            <Button asChild className="hidden sm:inline-flex bg-techwally-secondary hover:bg-techwally-primary">
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
                <MobileMenu 
                  services={services}
                  solutions={solutions}
                  industries={industries}
                  company={company}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Advanced Search */}
      <AdvancedSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* AI Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="sm:max-w-[600px] h-[600px]">
          <VisuallyHidden>
            <DialogTitle>AI Support Chat</DialogTitle>
          </VisuallyHidden>
          <AiChat />
        </DialogContent>
      </Dialog>
    </header>
  )
}

export default Header
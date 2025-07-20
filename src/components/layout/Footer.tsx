import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-techwally-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="ml-2 text-xl font-poppins font-bold">Techwally</span>
            </div>
            <h3 className="text-lg font-poppins font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/why-techwally" className="text-slate-300 hover:text-white transition-colors">Why Techwally</a></li>
            </ul>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/cloud" className="text-slate-300 hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="/services/cybersecurity" className="text-slate-300 hover:text-white transition-colors">Cyber Security</a></li>
              <li><a href="/services/datacentres" className="text-slate-300 hover:text-white transition-colors">Data Centres</a></li>
              <li><a href="/services/continuity" className="text-slate-300 hover:text-white transition-colors">Business Continuity</a></li>
              <li><a href="/services/maintenance" className="text-slate-300 hover:text-white transition-colors">Systems Maintenance</a></li>
              <li><a href="/services/network" className="text-slate-300 hover:text-white transition-colors">Network Services</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/solutions/infrastructure" className="text-slate-300 hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="/solutions/networks" className="text-slate-300 hover:text-white transition-colors">Networks</a></li>
              <li><a href="/solutions/support" className="text-slate-300 hover:text-white transition-colors">End User Support</a></li>
              <li><a href="/solutions/consolidation" className="text-slate-300 hover:text-white transition-colors">Consolidation</a></li>
              <li><a href="/solutions/growth" className="text-slate-300 hover:text-white transition-colors">Growth</a></li>
              <li><a href="/solutions/trouble" className="text-slate-300 hover:text-white transition-colors">Trouble</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-techwally-secondary" />
                <span className="text-slate-300">1300 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-techwally-secondary" />
                <span className="text-slate-300">support@techwally.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-techwally-secondary mt-0.5" />
                <span className="text-slate-300">Level 10, 123 Collins Street<br />Melbourne VIC 3000</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Newsletter</h4>
              <p className="text-xs text-slate-400">Stay updated with our latest insights</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button size="sm" className="bg-techwally-secondary hover:bg-techwally-primary">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-400">
            © 2024 Techwally. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            <a href="/accessibility" className="text-slate-400 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
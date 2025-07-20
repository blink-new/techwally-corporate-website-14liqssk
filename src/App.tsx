import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

// Pages
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import CareersPage from '@/pages/CareersPage'
import BlogPage from '@/pages/BlogPage'
import WhyTechwallyPage from '@/pages/WhyTechwallyPage'
import LoginPage from '@/pages/LoginPage'
import AdminDashboard from '@/pages/admin/AdminDashboard'
import EmployeeDashboard from '@/pages/EmployeeDashboard'
import ClientDashboard from '@/pages/ClientDashboard'

// Service Pages
import CloudServicesPage from '@/pages/services/CloudServicesPage'
import CyberSecurityPage from '@/pages/services/CyberSecurityPage'
import DataCentresPage from '@/pages/services/DataCentresPage'
import BusinessContinuityPage from '@/pages/services/BusinessContinuityPage'
import SystemsMaintenancePage from '@/pages/services/SystemsMaintenancePage'
import TechwallyAnywherePage from '@/pages/services/TechwallyAnywherePage'
import NetworkServicesPage from '@/pages/services/NetworkServicesPage'
import SecureSpacePage from '@/pages/services/SecureSpacePage'
import ResellersPage from '@/pages/services/ResellersPage'

// Solution Pages
import InfrastructurePage from '@/pages/solutions/InfrastructurePage'
import NetworksPage from '@/pages/solutions/NetworksPage'
import EndUserSupportPage from '@/pages/solutions/EndUserSupportPage'
import ConsolidationPage from '@/pages/solutions/ConsolidationPage'
import GrowthPage from '@/pages/solutions/GrowthPage'
import TroublePage from '@/pages/solutions/TroublePage'

// Industry Pages
import FinancialServicesPage from '@/pages/industries/FinancialServicesPage'
import ManufacturingPage from '@/pages/industries/ManufacturingPage'
import ProfessionalServicesPage from '@/pages/industries/ProfessionalServicesPage'
import AgedCarePage from '@/pages/industries/AgedCarePage'

// Job Details Page
import JobDetailsPage from '@/pages/JobDetailsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<JobDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/why-techwally" element={<WhyTechwallyPage />} />
          
          {/* Authentication */}
          <Route path="/login/:type" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Dashboards */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />

          {/* Service Pages */}
          <Route path="/services/cloud-services" element={<CloudServicesPage />} />
          <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/services/data-centres" element={<DataCentresPage />} />
          <Route path="/services/business-continuity" element={<BusinessContinuityPage />} />
          <Route path="/services/systems-maintenance" element={<SystemsMaintenancePage />} />
          <Route path="/services/techwally-anywhere" element={<TechwallyAnywherePage />} />
          <Route path="/services/network-services" element={<NetworkServicesPage />} />
          <Route path="/services/secure-space" element={<SecureSpacePage />} />
          <Route path="/services/resellers" element={<ResellersPage />} />

          {/* Solution Pages */}
          <Route path="/solutions/infrastructure" element={<InfrastructurePage />} />
          <Route path="/solutions/networks" element={<NetworksPage />} />
          <Route path="/solutions/end-user-support" element={<EndUserSupportPage />} />
          <Route path="/solutions/consolidation" element={<ConsolidationPage />} />
          <Route path="/solutions/growth" element={<GrowthPage />} />
          <Route path="/solutions/trouble" element={<TroublePage />} />

          {/* Industry Pages */}
          <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
          <Route path="/industries/aged-care" element={<AgedCarePage />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  )
}

export default App
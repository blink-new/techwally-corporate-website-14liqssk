import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Techwally Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in enterprise IT
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Blog Coming Soon</CardTitle>
            <CardDescription>We're working on bringing you valuable content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our blog will feature articles about cloud computing, cybersecurity, digital transformation, and more. Stay tuned!</p>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  )
}

export default BlogPage
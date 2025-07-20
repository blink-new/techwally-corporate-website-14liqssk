import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  Clock, 
  TrendingUp, 
  FileText, 
  Users, 
  Settings,
  ArrowRight,
  Filter,
  Star,
  MapPin,
  Calendar,
  Tag,
  Zap,
  BookOpen,
  Briefcase,
  Shield,
  Cloud,
  Database,
  Network,
  Cpu,
  Globe,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink
} from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
  type: 'service' | 'solution' | 'industry' | 'blog' | 'case-study' | 'job' | 'contact' | 'documentation'
  tags?: string[]
  rating?: number
  location?: string
  date?: string
  featured?: boolean
}

interface AdvancedSearchProps {
  isOpen: boolean
  onClose: () => void
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Cloud Services & Migration',
    description: 'Comprehensive cloud infrastructure and migration services for modern businesses. AWS, Azure, Google Cloud expertise.',
    category: 'Services',
    url: '/services/cloud',
    type: 'service',
    tags: ['AWS', 'Azure', 'Google Cloud', 'Migration', 'Infrastructure'],
    rating: 4.9,
    featured: true
  },
  {
    id: '2',
    title: 'Advanced Cybersecurity Solutions',
    description: 'Enterprise-grade security measures to protect your business from evolving cyber threats and compliance requirements.',
    category: 'Services',
    url: '/services/cybersecurity',
    type: 'service',
    tags: ['Security', 'Compliance', 'Threat Protection', 'SOC'],
    rating: 4.8,
    featured: true
  },
  {
    id: '3',
    title: 'Senior Cloud Solutions Architect',
    description: 'Lead cloud architecture initiatives for enterprise clients. $120k-$150k, Melbourne VIC.',
    category: 'Careers',
    url: '/careers/1',
    type: 'job',
    tags: ['Cloud', 'Architecture', 'AWS', 'Leadership'],
    location: 'Melbourne, VIC',
    date: '2 days ago'
  }
]

const AdvancedSearch = ({ isOpen, onClose }: AdvancedSearchProps) => {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSort, setSelectedSort] = useState<string>('relevance')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'cloud migration',
    'cybersecurity audit',
    'data center solutions'
  ])
  const searchInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    { id: 'all', label: 'All Results', icon: Search, count: mockResults.length },
    { id: 'service', label: 'Services', icon: Settings, count: mockResults.filter(r => r.type === 'service').length },
    { id: 'job', label: 'Jobs', icon: Briefcase, count: mockResults.filter(r => r.type === 'job').length }
  ]

  const sortOptions = [
    { id: 'relevance', label: 'Most Relevant' },
    { id: 'date', label: 'Most Recent' },
    { id: 'rating', label: 'Highest Rated' }
  ]

  const popularSearches = [
    { query: 'cloud migration', icon: Cloud, category: 'Services' },
    { query: 'cybersecurity audit', icon: Shield, category: 'Services' },
    { query: 'IT support jobs', icon: Briefcase, category: 'Jobs' }
  ]

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length > 0) {
      setIsSearching(true)
      
      const searchTimeout = setTimeout(() => {
        const filtered = mockResults.filter(result => {
          const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                             result.description.toLowerCase().includes(query.toLowerCase())
          const matchesCategory = selectedCategory === 'all' || result.type === selectedCategory
          return matchesQuery && matchesCategory
        })

        setResults(filtered)
        setIsSearching(false)
      }, 300)

      return () => clearTimeout(searchTimeout)
    } else {
      setResults([])
      setIsSearching(false)
    }
  }, [query, selectedCategory, selectedSort])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (searchQuery && !recentSearches.includes(searchQuery)) {
      setRecentSearches(prev => [searchQuery, ...prev.slice(0, 4)])
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Settings className="h-4 w-4" />
      case 'job':
        return <Briefcase className="h-4 w-4" />
      default:
        return <Search className="h-4 w-4" />
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0 border-b">
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Search className="h-6 w-6 mr-2 text-blue-600" />
            Advanced Search
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              ref={searchInputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for services, jobs, documentation, case studies..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
            />
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search Results */}
            <div className="lg:col-span-3">
              {query.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">
                      Search Results ({results.length})
                      {query && (
                        <span className="text-gray-500 font-normal"> for "{query}"</span>
                      )}
                    </h3>
                  </div>
                  
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-4">
                      {results.map((result) => (
                        <div
                          key={result.id}
                          className="p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group bg-white"
                          onClick={() => {
                            handleSearch(query)
                            onClose()
                          }}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-1 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                              {getTypeIcon(result.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {result.title}
                                  </h4>
                                  {result.featured && (
                                    <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                                      <Star className="h-3 w-3 mr-1" />
                                      Featured
                                    </Badge>
                                  )}
                                </div>
                                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                              </div>
                              
                              <p className="text-gray-600 mb-3 line-clamp-2">
                                {result.description}
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <Badge variant="outline" className="text-xs">
                                    {result.category}
                                  </Badge>
                                  
                                  {result.location && (
                                    <span className="flex items-center">
                                      <MapPin className="h-3 w-3 mr-1" />
                                      {result.location}
                                    </span>
                                  )}
                                  
                                  {result.date && (
                                    <span className="flex items-center">
                                      <Calendar className="h-3 w-3 mr-1" />
                                      {result.date}
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              {result.tags && (
                                <div className="flex flex-wrap gap-1 mt-3">
                                  {result.tags.slice(0, 4).map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      <Tag className="h-2 w-2 mr-1" />
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {results.length === 0 && query.length > 0 && !isSearching && (
                        <div className="text-center py-12">
                          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">No results found</h3>
                          <p className="text-gray-600 mb-4">Try adjusting your search terms or browse our popular content.</p>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                    Popular Searches
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {popularSearches.map((search, index) => {
                      const IconComponent = search.icon
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-start h-auto p-4 text-left hover:border-blue-300 hover:bg-blue-50"
                          onClick={() => handleSearch(search.query)}
                        >
                          <IconComponent className="h-5 w-5 mr-3 text-blue-600" />
                          <div>
                            <div className="font-medium">{search.query}</div>
                            <div className="text-xs text-gray-500">{search.category}</div>
                          </div>
                        </Button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Recent Searches
                  </h3>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-white"
                        onClick={() => handleSearch(search)}
                      >
                        <Search className="h-3 w-3 mr-2" />
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-blue-600 hover:bg-blue-100">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-blue-600 hover:bg-blue-100">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-blue-600 hover:bg-blue-100">
                    <Globe className="h-4 w-4 mr-2" />
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AdvancedSearch
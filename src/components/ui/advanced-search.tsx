import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Search, 
  Clock, 
  TrendingUp, 
  FileText, 
  Users, 
  Settings,
  ArrowRight
} from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
  type: 'service' | 'solution' | 'industry' | 'blog' | 'case-study'
}

interface AdvancedSearchProps {
  isOpen: boolean
  onClose: () => void
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Cloud Services',
    description: 'Comprehensive cloud infrastructure and migration services for modern businesses.',
    category: 'Services',
    url: '/services/cloud',
    type: 'service'
  },
  {
    id: '2',
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your business from cyber threats.',
    category: 'Services',
    url: '/services/cybersecurity',
    type: 'service'
  },
  {
    id: '3',
    title: 'Financial Services Cloud Migration',
    description: 'How we helped Australian Capital Bank migrate to the cloud with 60% cost reduction.',
    category: 'Case Studies',
    url: '/case-studies/financial-cloud-migration',
    type: 'case-study'
  },
  {
    id: '4',
    title: 'Infrastructure Solutions',
    description: 'Scalable infrastructure solutions that grow with your business needs.',
    category: 'Solutions',
    url: '/solutions/infrastructure',
    type: 'solution'
  },
  {
    id: '5',
    title: 'Manufacturing Industry',
    description: 'Specialized IT solutions for manufacturing and industrial businesses.',
    category: 'Industries',
    url: '/industries/manufacturing',
    type: 'industry'
  },
  {
    id: '6',
    title: 'The Future of Cloud Computing',
    description: 'Exploring emerging trends and technologies in cloud infrastructure.',
    category: 'Blog',
    url: '/blog/future-of-cloud-computing',
    type: 'blog'
  }
]

const AdvancedSearch = ({ isOpen, onClose }: AdvancedSearchProps) => {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'cloud migration',
    'cybersecurity audit',
    'data center solutions'
  ])

  const categories = [
    { id: 'all', label: 'All Results', icon: Search },
    { id: 'service', label: 'Services', icon: Settings },
    { id: 'solution', label: 'Solutions', icon: TrendingUp },
    { id: 'industry', label: 'Industries', icon: Users },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'case-study', label: 'Case Studies', icon: FileText }
  ]

  const popularSearches = [
    'cloud migration',
    'cybersecurity audit',
    'data backup',
    'network security',
    'IT support',
    'disaster recovery'
  ]

  useEffect(() => {
    if (query.length > 0) {
      const filtered = mockResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                           result.description.toLowerCase().includes(query.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || result.type === selectedCategory
        return matchesQuery && matchesCategory
      })
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query, selectedCategory])

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
      case 'solution':
        return <TrendingUp className="h-4 w-4" />
      case 'industry':
        return <Users className="h-4 w-4" />
      case 'blog':
      case 'case-study':
        return <FileText className="h-4 w-4" />
      default:
        return <Search className="h-4 w-4" />
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-heading font-bold">Search Techwally</DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-4">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for services, solutions, case studies..."
              className="pl-10 pr-4 py-3 text-lg border-slate-300 focus:border-primary"
              autoFocus
            />
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
                </Button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search Results */}
            <div className="lg:col-span-2">
              {query.length > 0 ? (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">
                    Search Results ({results.length})
                  </h3>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {results.map((result) => (
                        <div
                          key={result.id}
                          className="p-4 border border-slate-200 rounded-lg hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group"
                          onClick={() => {
                            handleSearch(query)
                            onClose()
                          }}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(result.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                                  {result.title}
                                </h4>
                                <Badge variant="outline" className="text-xs">
                                  {result.category}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-600 line-clamp-2">
                                {result.description}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-slate-500">{result.url}</span>
                                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {results.length === 0 && query.length > 0 && (
                        <div className="text-center py-8">
                          <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                          <h3 className="font-medium text-slate-900 mb-2">No results found</h3>
                          <p className="text-slate-600">Try adjusting your search terms or browse our popular content.</p>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Popular Searches</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {popularSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start h-auto p-3 text-left"
                        onClick={() => handleSearch(search)}
                      >
                        <TrendingUp className="h-4 w-4 mr-2 text-slate-400" />
                        <span className="text-sm">{search}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Recent Searches
                  </h3>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-slate-600 hover:text-slate-900"
                        onClick={() => handleSearch(search)}
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Contact Support
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Schedule Consultation
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    View All Services
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Case Studies
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
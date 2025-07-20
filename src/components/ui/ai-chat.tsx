import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Send, Bot, User, Sparkles, Clock, Phone, Mail, MessageCircle, FileText, Settings, HelpCircle } from 'lucide-react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'quick-reply' | 'suggestion'
  suggestions?: string[]
}

interface QuickReply {
  text: string
  response: string
  suggestions?: string[]
}

export const AiChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hello! I'm your advanced Techwally AI Support Assistant. I can help you with:\n\n• Technical support & troubleshooting\n• Service information & pricing\n• Account management\n• Job applications & career guidance\n• General inquiries\n\nHow can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
      suggestions: [
        "Tell me about your services",
        "I need technical support",
        "Help with job application",
        "Pricing information",
        "Contact details"
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const quickReplies: QuickReply[] = [
    {
      text: "Tell me about your services",
      response: "🚀 Techwally offers comprehensive IT solutions including:\n\n• **Cloud Services** - AWS, Azure, Google Cloud migration & management\n• **Cyber Security** - Advanced threat protection & compliance\n• **Data Centres** - Secure, scalable infrastructure solutions\n• **Business Continuity** - Disaster recovery & backup solutions\n• **Network Services** - Design, implementation & monitoring\n• **Systems Maintenance** - 24/7 support & optimization\n\nWhich service interests you most?",
      suggestions: ["Cloud Services details", "Cyber Security info", "Get a quote", "Schedule consultation"]
    },
    {
      text: "I need technical support",
      response: "🔧 I'm here to help with technical issues! Our support team provides:\n\n• **24/7 Emergency Support** - Critical issues resolved immediately\n• **Remote Assistance** - Quick troubleshooting via secure connection\n• **On-site Support** - Expert technicians at your location\n• **Preventive Maintenance** - Proactive system monitoring\n\nWhat type of technical issue are you experiencing?",
      suggestions: ["Server problems", "Network connectivity", "Security concerns", "Software issues", "Hardware failure"]
    },
    {
      text: "Help with job application",
      response: "💼 Great! I can help you with your career at Techwally:\n\n• **Current Openings** - View all available positions\n• **Application Tips** - How to make your application stand out\n• **Interview Preparation** - What to expect in our process\n• **Company Culture** - Learn about working at Techwally\n• **Benefits Package** - Comprehensive employee benefits\n\nWhat specific help do you need with your application?",
      suggestions: ["View current jobs", "Application tips", "Interview process", "Company benefits", "Career growth"]
    },
    {
      text: "Pricing information",
      response: "💰 Our pricing is tailored to your specific needs:\n\n• **Free Consultation** - Initial assessment at no cost\n• **Flexible Packages** - Monthly or annual billing options\n• **Scalable Solutions** - Pay only for what you use\n• **Enterprise Discounts** - Volume pricing available\n• **ROI Guarantee** - Measurable business value\n\nWould you like a customized quote for your requirements?",
      suggestions: ["Request quote", "Compare packages", "Enterprise pricing", "Schedule consultation"]
    },
    {
      text: "Contact details",
      response: "📞 Here are multiple ways to reach us:\n\n**Phone Support:**\n• General: 1800-TECHWALLY\n• Emergency: 1800-TECH-911\n• Sales: 1800-TECH-SALES\n\n**Email:**\n• Support: support@techwally.com\n• Sales: sales@techwally.com\n• Careers: careers@techwally.com\n\n**Office Hours:**\n• Mon-Fri: 8:00 AM - 6:00 PM\n• Emergency: 24/7 availability\n\nHow would you prefer to connect?",
      suggestions: ["Call now", "Send email", "Schedule callback", "Live chat", "Visit office"]
    }
  ]

  const intelligentResponses = {
    // Service-related keywords
    'cloud': "☁️ Our Cloud Services include migration, management, and optimization for AWS, Azure, and Google Cloud. We help businesses reduce costs by up to 40% while improving performance. Would you like to learn about our cloud assessment?",
    'security': "🔒 Cybersecurity is critical! We provide advanced threat protection, compliance management, and security audits. Our SOC monitors threats 24/7. Are you concerned about a specific security issue?",
    'backup': "💾 Business Continuity is essential! Our backup solutions ensure 99.9% data recovery with automated daily backups and disaster recovery planning. When did you last test your backup system?",
    'network': "🌐 Network issues can cripple productivity. We design, implement, and monitor enterprise networks with 99.99% uptime guarantee. Are you experiencing connectivity problems?",
    
    // Support-related keywords
    'help': "🆘 I'm here to help! Please describe your specific issue and I'll connect you with the right solution or specialist immediately.",
    'problem': "⚠️ Let's solve this problem quickly! Can you provide more details about what's happening? Our average resolution time is under 2 hours.",
    'urgent': "🚨 This sounds urgent! I'm escalating this to our priority support team. You should receive a call within 15 minutes. Can I get your contact number?",
    'down': "📉 System downtime is critical! Our emergency response team is standing by. Are you experiencing a complete outage or partial service disruption?",
    
    // Career-related keywords
    'job': "💼 Exciting! We have several open positions across different departments. Our employees enjoy competitive salaries, flexible work arrangements, and excellent growth opportunities. What type of role interests you?",
    'career': "🚀 Techwally offers amazing career growth! We promote from within, provide continuous training, and support professional certifications. What's your background and career goals?",
    'interview': "🎯 Interview tips: Research our company values, prepare technical examples, and be ready to discuss how you'd contribute to our team. Would you like specific preparation guidance?",
    
    // Pricing-related keywords
    'cost': "💵 Our solutions are designed to provide excellent ROI. Most clients see cost savings within 6 months. We offer flexible pricing models to fit any budget. What's your current IT spending?",
    'price': "💰 Pricing varies based on your specific needs. We offer free consultations to provide accurate quotes. Our solutions typically pay for themselves through efficiency gains. Shall we schedule a consultation?",
    'quote': "📋 I can help you get a customized quote! Our sales team will assess your needs and provide detailed pricing within 24 hours. What services are you most interested in?",
    
    // General business keywords
    'business': "🏢 We understand business needs! Our solutions are designed to improve efficiency, reduce costs, and drive growth. We work with companies from startups to Fortune 500. What's your business size?",
    'enterprise': "🏭 Enterprise solutions are our specialty! We handle complex, large-scale implementations with dedicated project managers and 24/7 support. What enterprise challenges are you facing?",
    'small business': "🏪 Small businesses are important to us! We offer scaled solutions that grow with you, starting from just $99/month. Our SMB package includes everything you need to get started."
  }

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getIntelligentResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Check for exact quick reply matches first
    const quickReply = quickReplies.find(qr => 
      input.includes(qr.text.toLowerCase()) || 
      qr.text.toLowerCase().includes(input)
    )
    
    if (quickReply) {
      return quickReply.response
    }
    
    // Check for keyword matches
    for (const [keyword, response] of Object.entries(intelligentResponses)) {
      if (input.includes(keyword)) {
        return response
      }
    }
    
    // Default intelligent response
    return "🤖 Thank you for your message! I understand you're asking about: \"" + userInput + "\"\n\nLet me connect you with the right information or specialist. In the meantime, here are some quick options that might help:"
  }

  const getSuggestions = (userInput: string): string[] => {
    const input = userInput.toLowerCase()
    
    if (input.includes('cloud') || input.includes('aws') || input.includes('azure')) {
      return ["Cloud migration options", "Cost comparison", "Security features", "Schedule demo"]
    }
    if (input.includes('security') || input.includes('cyber')) {
      return ["Security audit", "Threat assessment", "Compliance help", "Emergency response"]
    }
    if (input.includes('job') || input.includes('career') || input.includes('work')) {
      return ["View open positions", "Application process", "Company culture", "Benefits package"]
    }
    if (input.includes('price') || input.includes('cost') || input.includes('quote')) {
      return ["Get custom quote", "Compare packages", "ROI calculator", "Free consultation"]
    }
    if (input.includes('support') || input.includes('help') || input.includes('problem')) {
      return ["Emergency support", "Schedule callback", "Remote assistance", "Create ticket"]
    }
    
    return ["Tell me more", "Get expert help", "Schedule consultation", "View documentation"]
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    setShowSuggestions(false)

    // Simulate intelligent bot response
    setTimeout(() => {
      const response = getIntelligentResponse(inputValue)
      const suggestions = getSuggestions(inputValue)
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: suggestions
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
      setShowSuggestions(true)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    handleSendMessage()
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bot className="h-8 w-8 text-techwally-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-techwally-secondary rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Techwally AI Assistant</h3>
            <p className="text-xs text-techwally-secondary flex items-center">
              <div className="w-2 h-2 bg-techwally-secondary rounded-full mr-1 animate-pulse"></div>
              Online • Avg response: 30 seconds
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-xs bg-techwally-primary text-white">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
        </div>
      </div>
      
      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="space-y-2">
              <div
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${
                  message.sender === 'user' 
                    ? 'bg-techwally-primary text-white' 
                    : 'bg-white text-techwally-primary border-2 border-gray-100'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>
                <div className={`flex-1 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'text-right' : ''
                }`}>
                  <div className={`inline-block p-4 rounded-2xl shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-techwally-primary text-white rounded-br-md'
                      : 'bg-white text-gray-900 border border-gray-100 rounded-bl-md'
                  }`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    <Clock className="h-3 w-3 inline mr-1" />
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
              
              {/* Suggestions */}
              {message.suggestions && message.sender === 'bot' && showSuggestions && (
                <div className="ml-13 space-y-2">
                  <p className="text-xs text-gray-500 font-medium">Quick replies:</p>
                  <div className="flex flex-wrap gap-2">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-8 rounded-full border-techwally-primary text-techwally-primary hover:bg-gray-50"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white text-techwally-primary border-2 border-gray-100 shadow-sm">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md p-4 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-techwally-secondary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-techwally-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-techwally-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {/* Quick Actions */}
      <div className="px-4 py-2 border-t bg-gray-50">
        <div className="flex space-x-2 overflow-x-auto">
          <Button variant="ghost" size="sm" className="text-xs whitespace-nowrap">
            <Phone className="h-3 w-3 mr-1" />
            Call Support
          </Button>
          <Button variant="ghost" size="sm" className="text-xs whitespace-nowrap">
            <Mail className="h-3 w-3 mr-1" />
            Email Us
          </Button>
          <Button variant="ghost" size="sm" className="text-xs whitespace-nowrap">
            <FileText className="h-3 w-3 mr-1" />
            Documentation
          </Button>
          <Button variant="ghost" size="sm" className="text-xs whitespace-nowrap">
            <HelpCircle className="h-3 w-3 mr-1" />
            FAQ
          </Button>
        </div>
      </div>
      
      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
            placeholder="Type your message... (Press Enter to send)"
            className="flex-1 rounded-full border-gray-200 focus:border-techwally-primary focus:ring-techwally-primary"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSendMessage} 
            size="sm" 
            className="rounded-full bg-techwally-secondary hover:bg-techwally-primary px-4"
            disabled={isTyping || !inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Powered by advanced AI • Available 24/7 • Average response time: 30 seconds
        </p>
      </div>
    </div>
  )
}
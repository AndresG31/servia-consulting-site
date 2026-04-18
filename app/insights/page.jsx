'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/layout/Footer'
import ScrollFadeIn from '../components/ui/ScrollFadeIn'
import { getFeaturedPosts } from '../lib/sanity'

const InsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sanityPosts, setSanityPosts] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [placeholderText, setPlaceholderText] = useState('')
  const [activePhraseIndex, setActivePhraseIndex] = useState(0)
  const [previewFading, setPreviewFading] = useState(false)
  const [showSuggestModal, setShowSuggestModal] = useState(false)
  const [suggestForm, setSuggestForm] = useState({ name: '', email: '', source: '', url: '', category: '', reason: '' })
  const [suggestStatus, setSuggestStatus] = useState(null)

  const scrollToFeatured = () => {
    const target = document.getElementById('featured-sources')
    if (!target) return
    const start = window.scrollY
    const end = target.getBoundingClientRect().top + window.scrollY - 80
    const duration = 900
    const startTime = performance.now()
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, start + (end - start) * easeOutQuart(progress))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }

  // Phrases mapped 1-to-1 with preview sources below
  const previewSourceNames = [
    'Harvard Business Review',
    'Forbes Business',
    'Wall Street Journal',
    'Bloomberg Business',
    'TechCrunch',
    'Nation\'s Restaurant News',
    'QSR Magazine',
    'McKinsey Insights',
  ]

  const previewAssociations = {
    'Harvard Business Review':  { text: 'Trusted by executives and business school leaders worldwide for management strategy.' },
    'Forbes Business':          { text: 'Go-to source for entrepreneurs, innovators, and business executives across every industry.' },
    'Wall Street Journal':      { text: 'The gold standard in financial and business journalism — essential daily reading for operators.' },
    'Bloomberg Business':       { text: 'Real-time market intelligence and business coverage relied on by finance professionals globally.' },
    'TechCrunch':               { text: 'Stay ahead of the technology disruptions reshaping every corner of the business world.' },
    'Nation\'s Restaurant News':{ text: 'The leading trade publication covering foodservice trends, operations, and restaurant news.' },
    'QSR Magazine':             { text: 'Dedicated coverage of quick-service and fast-casual restaurant trends, technology, and growth.' },
    'McKinsey Insights':        { text: 'Research-backed strategy insights from one of the world\'s top management consulting firms.' },
  }

  useEffect(() => {
    const phrases = previewSourceNames.map(n => n + '...')
    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timeout

    const type = () => {
      const current = phrases[phraseIndex]

      if (!deleting) {
        charIndex++
        setPlaceholderText(current.slice(0, charIndex))
        if (charIndex === current.length) {
          // Phrase fully typed — surface the preview card then hold 4 s
          setActivePhraseIndex(phraseIndex)
          setPreviewFading(false)
          deleting = true
          timeout = setTimeout(type, 5000)
        } else {
          timeout = setTimeout(type, 60)
        }
      } else {
        charIndex--
        setPlaceholderText(current.slice(0, charIndex))
        if (charIndex === 0) {
          // Word fully erased — fade the card out then switch to next phrase
          setPreviewFading(true)
          deleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
          timeout = setTimeout(type, 400)
        } else {
          timeout = setTimeout(type, 30)
        }
      }
    }

    timeout = setTimeout(type, 800)
    return () => clearTimeout(timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Fetch Sanity blog posts
  useEffect(() => {
    async function fetchSanityPosts() {
      try {
        const posts = await getFeaturedPosts(3)
        if (posts && posts.length > 0) {
          setSanityPosts(posts)
        }
      } catch (error) {
        console.warn('Sanity not configured yet:', error.message)
      }
    }
    fetchSanityPosts()
  }, [])

  // Curated business news sources
  const newsources = [
    {
      name: "Harvard Business Review",
      description: "Management tips and insights from business leaders",
      url: "https://hbr.org/topic/business-management",
      category: "Strategy",
      iconImage: "/assets/insights/Icons/Harvard.png",
      color: "from-blue-500 to-blue-600",
      featured: true,
      image: "/assets/insights/Photos/Harvard.png"
    },
    {
      name: "Forbes Business",
      description: "Latest business news, entrepreneurs, and innovation",
      url: "https://www.forbes.com/business/",
      category: "Business News",
      iconImage: "/assets/insights/Icons/Forbes.png",
      color: "from-gray-700 to-gray-800",
      featured: true,
      image: "/assets/insights/Photos/Forbes.png"
    },
    {
      name: "Entrepreneur",
      description: "Startup advice, small business tips, and success stories",
      url: "https://www.entrepreneur.com/topic/starting-a-business",
      category: "Entrepreneurship",
      iconImage: "/assets/insights/Icons/EntreLogo.png",
      color: "from-red-500 to-red-600",
      featured: true,
      image: "/assets/insights/Photos/Entreprenuer.png"
    },
    {
      name: "Inc. Magazine",
      description: "Resources for growing your business and leadership",
      url: "https://www.inc.com/",
      category: "Growth",
      iconImage: "/assets/insights/Icons/IncLogo.png",
      color: "from-emerald-500 to-emerald-600",
      featured: false
    },
    {
      name: "Fast Company",
      description: "Innovation, technology, and business creativity",
      url: "https://www.fastcompany.com/section/news",
      category: "Innovation",
      iconImage: "/assets/insights/Icons/fastcompany.png",
      logoPadding: "p-0 scale-125",
      color: "from-orange-500 to-orange-600",
      featured: false
    },
    {
      name: "Bloomberg Business",
      description: "Global business and financial market news",
      url: "https://www.bloomberg.com/businessweek",
      category: "Finance",
      iconImage: "/assets/insights/Icons/Bloomberg.png",
      color: "from-indigo-500 to-indigo-600",
      featured: true,
      image: "/assets/insights/Photos/Bloomberg.png"
    },
    {
      name: "Restaurant Business",
      description: "News and trends in the restaurant industry",
      url: "https://www.restaurantbusinessonline.com/",
      category: "Restaurant",
      iconImage: "/assets/insights/Icons/restaurantbusiness.png",
      color: "from-pink-500 to-pink-600",
      featured: false
    },
    {
      name: "Nation's Restaurant News",
      description: "Foodservice industry insights and restaurant operations",
      url: "https://www.nrn.com/",
      category: "Restaurant",
      iconImage: "/assets/insights/Icons/nrn.png",
      color: "from-purple-500 to-purple-600",
      featured: false
    },
    {
      name: "QSR Magazine",
      description: "Quick-service restaurant news and trends",
      url: "https://www.qsrmagazine.com/",
      category: "Fast Casual",
      iconImage: "/assets/insights/Icons/qsr.png",
      color: "from-yellow-500 to-yellow-600",
      featured: false
    },
    {
      name: "Small Business Trends",
      description: "News, tips, and resources for small business owners",
      url: "https://smallbiztrends.com/",
      category: "Small Business",
      iconImage: "/assets/insights/Icons/SmallBusinessTrends.png",
      color: "from-teal-500 to-teal-600",
      featured: false
    },
    {
      name: "McKinsey Insights",
      description: "Business strategy and consulting insights",
      url: "https://www.mckinsey.com/featured-insights",
      category: "Consulting",
      iconImage: "/assets/insights/Icons/mckinseyandcompany.png",
      logoPadding: "p-0",
      color: "from-cyan-500 to-cyan-600",
      featured: false
    },
    {
      name: "TechCrunch",
      description: "Stay ahead of the technology disruptions",
      url: "https://techcrunch.com/category/startups/",
      category: "Tech",
      iconImage: "/assets/insights/Icons/TechCrunch.png",
      color: "from-green-500 to-green-600",
      featured: true,
      image: "/assets/insights/Photos/TechCrunch.png"
    },
    {
      name: "Wall Street Journal",
      description: "Breaking business and financial news",
      url: "https://www.wsj.com/news/business",
      category: "Business News",
      iconImage: "/assets/insights/Icons/wallstreetjournal.png",
      color: "from-slate-600 to-slate-700",
      featured: true,
      image: "/assets/insights/Photos/Wallstreetjournal.png"
    },
    {
      name: "Business Insider",
      description: "Business strategy, finance, and markets",
      url: "https://www.businessinsider.com/",
      category: "Business News",
      iconImage: "/assets/insights/Icons/BusinessInsider.png",
      color: "from-blue-600 to-blue-700",
      featured: false
    },
    {
      name: "MIT Sloan Review",
      description: "Research-based insights on management",
      url: "https://sloanreview.mit.edu/",
      category: "Management",
      iconImage: "/assets/insights/Icons/mitsmr.png",
      color: "from-red-600 to-red-700",
      featured: false
    },
    {
      name: "CNBC Business",
      description: "Real-time business and market news",
      url: "https://www.cnbc.com/business/",
      category: "Markets",
      iconImage: "/assets/insights/Icons/cnbc.png",
      color: "from-blue-500 to-blue-600",
      featured: false
    },
    {
      name: "Restaurant Dive",
      description: "Restaurant industry news and analysis",
      url: "https://www.restaurantdive.com/",
      category: "Restaurant",
      iconImage: "/assets/insights/Icons/restaurantdive.jpg",
      color: "from-orange-500 to-orange-600",
      featured: false
    },
    {
      name: "Food & Wine",
      description: "Food industry trends and restaurant business",
      url: "https://www.foodandwine.com/",
      category: "Food Industry",
      iconImage: "/assets/insights/Icons/foodandwine.png",
      color: "from-rose-500 to-rose-600",
      featured: false
    }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false)
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showDropdown])

  const handleSearchClick = (e) => {
    e.stopPropagation()
    setShowDropdown(true)
  }

  const handleSourceClick = (url) => {
    window.open(url, '_blank')
    setSearchTerm('')
    setShowDropdown(false)
  }

  const categories = ['All', ...new Set(newsources.map(source => source.category))]

  // Used only for the search dropdown — filters by both search term and category
  const filteredSources = newsources.filter(source => {
    const matchesCategory = selectedCategory === 'All' || source.category === selectedCategory
    const matchesSearch = source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         source.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         source.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Used for the library grid — only filters by category, never by search
  const librarySources = newsources.filter(source =>
    selectedCategory === 'All' || source.category === selectedCategory
  )

  // Featured sources — always show all, never filtered by search
  const featuredSources = newsources.filter(source => source.featured)

  // Show search is active
  const isSearching = searchTerm.length > 0

  // Generate random stars
  const generateStars = (count) => {
    const stars = []
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 3 + 1 // 1-4px
      const top = Math.random() * 100
      const left = Math.random() * 100
      const animationDelay = Math.random() * 5
      const animationDuration = Math.random() * 3 + 2 // 2-5s
      const opacity = Math.random() * 0.7 + 0.3 // 0.3-1

      // Random color - emerald, blue, purple, or white
      const colors = ['bg-emerald-400', 'bg-blue-400', 'bg-purple-400', 'bg-white']
      const color = colors[Math.floor(Math.random() * colors.length)]

      stars.push({
        id: i,
        size,
        top,
        left,
        animationDelay,
        animationDuration,
        opacity,
        color
      })
    }
    return stars
  }

  const [stars, setStars] = useState([])
  const [shootingStars, setShootingStars] = useState([])

  useEffect(() => {
    setStars(generateStars(200))
    setShootingStars(Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: Math.random() * 60,
      left: Math.random() * 80,
      length: 80 + Math.random() * 120,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 12,
    })))
  }, [])

  return (
    <div className="-mt-[92px] min-h-screen bg-emerald-950 relative overflow-x-hidden">
      {/* Starfield Background - Fixed across entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-emerald-950 to-purple-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Shooting Stars */}
        {shootingStars.map((s) => (
          <div
            key={s.id}
            className="shooting-star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.length}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${star.color} rounded-full animate-twinkle`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Content - Above starfield */}
      <div className="relative z-10">

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-visible min-h-[700px] pb-32">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/insights/insights-hero.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay over video */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 z-10">
          <div className="text-center">
            <div className="inline-block mb-8 opacity-0 animate-page-hero">
              <button
                onClick={scrollToFeatured}
                className="group flex items-center gap-2 bg-emerald-600/20 border border-emerald-600/30 rounded-full px-6 py-2 backdrop-blur-sm hover:bg-emerald-600/30 transition-colors cursor-pointer"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-sm font-semibold">Live News Sources</span>
                <svg className="w-3.5 h-3.5 text-emerald-400 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.15s' }}>
              Your Business
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                News Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
              Discover hand-picked news sources from the world's leading business publications.
              Stay informed, stay ahead.
            </p>

            {/* Search Bar with Dropdown */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative" onClick={handleSearchClick}>
                <input
                  type="text"
                  placeholder={searchTerm ? 'Search news sources...' : placeholderText}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setShowDropdown(true)
                  }}
                  onFocus={() => setShowDropdown(true)}
                  className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-colors search-glow"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchTerm && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSearchTerm('')
                      setShowDropdown(false)
                    }}
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Dropdown Results - Moved outside inner div for better positioning */}
              {showDropdown && searchTerm && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-2 border-emerald-600/30 rounded-2xl shadow-2xl shadow-emerald-500/20 overflow-hidden z-[60] max-h-96 overflow-y-auto">
                  {filteredSources.length > 0 ? (
                    <>
                      <div className="px-4 py-3 bg-emerald-600/20 border-b border-emerald-600/30">
                        <p className="text-emerald-400 text-sm font-semibold">
                          {filteredSources.length} source{filteredSources.length !== 1 ? 's' : ''} found
                        </p>
                      </div>
                      {filteredSources.map((source, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.open(source.url, '_blank', 'noopener,noreferrer')
                            setSearchTerm('')
                            setShowDropdown(false)
                          }}
                          className="w-full px-6 py-4 hover:bg-emerald-600/20 transition-all text-left border-b border-white/5 last:border-b-0 group cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            {source.iconImage ? (
                              <div className={`${source.logoSize ?? 'w-12 h-12'} relative flex-shrink-0 rounded-lg overflow-hidden bg-white`}>
                                <Image
                                  src={source.iconImage}
                                  alt={`${source.name} logo`}
                                  fill
                                  className={`object-contain ${source.logoPadding ?? 'p-1'}`}
                                />
                              </div>
                            ) : (
                              <div className="text-3xl">{source.icon}</div>
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                                  {source.name}
                                </h4>
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </div>
                              <p className="text-gray-400 text-sm line-clamp-1">{source.description}</p>
                              <div className="mt-1">
                                <span className="inline-block bg-emerald-600/20 text-emerald-400 text-xs px-2 py-1 rounded-full">
                                  {source.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="px-6 py-8 text-center">
                      <div className="text-4xl mb-2">🔍</div>
                      <p className="text-gray-400">No sources match "{searchTerm}"</p>
                      <p className="text-gray-500 text-sm mt-1">Try a different search term</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Typewriter Preview Card */}
            {!searchTerm && (() => {
              const previewSource = newsources.find(s => s.name === previewSourceNames[activePhraseIndex])
              if (!previewSource) return null
              return (
                <>
                <a
                  href={previewSource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4"
                  style={{ opacity: previewFading ? 0 : 1, transition: 'opacity 0.35s ease' }}
                >
                  <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${previewSource.color} flex flex-row items-stretch`}>
                    {/* Text content — left */}
                    <div className="flex-1 px-10 py-10 flex flex-col justify-center relative z-10 text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-white font-bold text-2xl leading-tight">{previewSource.name}</span>
                        <svg className="w-6 h-6 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <p className="text-white/80 text-base leading-relaxed mb-4 line-clamp-3">{previewSource.description}</p>
                      <span className="inline-block self-start bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-1.5 rounded-full">
                        {previewSource.category}
                      </span>
                    </div>

                    {/* Logo — right */}
                    <div className="w-24 sm:w-40 md:w-56 lg:w-72 flex-shrink-0 relative bg-white">
                      {previewSource.iconImage ? (
                        <Image
                          src={previewSource.iconImage}
                          alt={`${previewSource.name} logo`}
                          fill
                          className={`object-contain ${previewSource.logoPadding ?? 'p-3'}`}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-8xl">
                          {previewSource.icon}
                        </div>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                </a>

                {/* Association Banner */}
                {(() => {
                  const assoc = previewAssociations[previewSourceNames[activePhraseIndex]]
                  if (!assoc) return null
                  return (
                    <div
                      className="w-full mt-1 px-5 py-3 rounded-xl bg-emerald-900/60 backdrop-blur-sm border border-emerald-700/40 flex items-center gap-3"
                      style={{ opacity: previewFading ? 0 : 1, transition: 'opacity 0.35s ease' }}
                    >
                      <p className="text-emerald-300 text-sm leading-snug">{assoc.text}</p>
                    </div>
                  )
                })()}
                </>
              )
            })()}
          </div>
        </div>
      </section>

      {/* From Servia - Original Articles */}
      <section className="relative bg-transparent py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-emerald-500"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">From Servia</h2>
            <span className="text-sm font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 rounded-full">Original</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sanityPosts.length > 0 ? (
              sanityPosts.map((post, index) => {
                const colors = [
                  { gradient: 'from-emerald-500 to-emerald-400', badge: 'text-emerald-400 bg-emerald-400/10', hover: 'group-hover:text-emerald-300' },
                  { gradient: 'from-blue-500 to-blue-400', badge: 'text-blue-400 bg-blue-400/10', hover: 'group-hover:text-blue-300' },
                  { gradient: 'from-purple-500 to-purple-400', badge: 'text-purple-400 bg-purple-400/10', hover: 'group-hover:text-purple-300' },
                ]
                const colorScheme = colors[index % 3]

                return (
                  <ScrollFadeIn key={post._id} delay={index * 100}>
                    <Link href={post.slug ? `/blog/${post.slug.current}` : '#'}>
                      <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:bg-white/8 transition-all duration-300 cursor-pointer h-full">
                        <div className={`h-2 bg-gradient-to-r ${colorScheme.gradient}`}></div>
                        <div className="p-7">
                          <span className={`text-xs font-semibold ${colorScheme.badge} px-3 py-1 rounded-full`}>
                            {post.category || 'Article'}
                          </span>
                          <h3 className={`text-xl font-bold text-white mt-4 mb-3 leading-snug ${colorScheme.hover} transition-colors`}>
                            {post.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <span className="text-xs text-gray-500">
                              By {post.author || 'Andres Gutierrez'} · {post.readTime || '5 min read'}
                            </span>
                            {post.slug && (
                              <span className="text-xs text-emerald-500 font-semibold">Read Now →</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollFadeIn>
                )
              })
            ) : (
              // Fallback articles if Sanity isn't configured
              <>
                <ScrollFadeIn>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:bg-white/8 transition-all duration-300">
                    <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                    <div className="p-7">
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">Operations</span>
                      <h3 className="text-xl font-bold text-white mt-4 mb-3 leading-snug group-hover:text-emerald-300 transition-colors">
                        The Essential Guide to Restaurant Operations Excellence
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">
                        Discover proven strategies to streamline your restaurant operations, reduce costs, and improve customer satisfaction.
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">By Andres Gutierrez · 5 min read</span>
                        <span className="text-xs text-emerald-500 font-semibold">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn delay={100}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:bg-white/8 transition-all duration-300">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-400"></div>
                    <div className="p-7">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">Business Strategy</span>
                      <h3 className="text-xl font-bold text-white mt-4 mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                        5 Key Metrics Every Restaurant Owner Should Track
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">
                        Learn which performance indicators truly matter for sustainable growth and profitability in the restaurant industry.
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">By Andres Gutierrez · 7 min read</span>
                        <span className="text-xs text-blue-500 font-semibold">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn delay={200}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:bg-white/8 transition-all duration-300">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    <div className="p-7">
                      <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">Team Development</span>
                      <h3 className="text-xl font-bold text-white mt-4 mb-3 leading-snug group-hover:text-purple-300 transition-colors">
                        Building a High-Performance Restaurant Team
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">
                        The secrets to recruiting, training, and retaining exceptional staff in the competitive hospitality industry.
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">By Andres Gutierrez · 6 min read</span>
                        <span className="text-xs text-purple-500 font-semibold">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="relative bg-transparent py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <div className="text-6xl mb-6">📬</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bookmark this page to access all your favorite business news sources in one place.
              We regularly update our curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    alert('Press Ctrl+D (Windows) or Cmd+D (Mac) to bookmark this page!')
                  }
                }}
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Bookmark This Page
              </button>
              <button
                onClick={() => { setSuggestStatus(null); setShowSuggestModal(true) }}
                className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-400/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Suggest a Source
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sources - Bento Grid Style */}
      {featuredSources.length > 0 && (
      <section id="featured-sources" className="relative bg-transparent py-20">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/5 via-transparent to-purple-900/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Sources
            </h2>
            <p className="text-gray-400 mb-6">
              Our top recommendations for essential business news
            </p>
            <button
              onClick={() => {
                const target = document.getElementById('news-library')
                if (!target) return
                const start = window.scrollY
                const end = target.getBoundingClientRect().top + window.scrollY - 80
                const duration = 900
                const startTime = performance.now()
                const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
                const animate = (now) => {
                  const elapsed = now - startTime
                  const progress = Math.min(elapsed / duration, 1)
                  window.scrollTo(0, start + (end - start) * easeOutQuart(progress))
                  if (progress < 1) requestAnimationFrame(animate)
                }
                requestAnimationFrame(animate)
              }}
              className="group flex items-center gap-2 bg-emerald-600/20 border border-emerald-600/30 rounded-full px-6 py-2 backdrop-blur-sm hover:bg-emerald-600/30 transition-colors cursor-pointer mx-auto"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-semibold">Live News Sources Library</span>
              <svg className="w-3.5 h-3.5 text-emerald-400 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSources.map((source, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${source.color} hover:scale-105 transition-all duration-300`}
              >
                {/* Live Preview Window */}
                <div className="relative w-full overflow-hidden rounded-t-2xl bg-white/10 backdrop-blur-md border-b-2 border-white/20">
                  <div className="relative h-48 md:h-56">
                    {/* Browser Chrome */}
                    <div className="absolute top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm px-4 py-2 z-10 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-gray-800/50 rounded px-3 py-1 text-xs text-gray-400 truncate ml-2">
                        {source.url}
                      </div>
                    </div>

                    {/* Screenshot Preview */}
                    <div className="absolute inset-0 pt-10">
                      {source.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={source.image}
                            alt={`${source.name} preview`}
                            fill
                            className="object-cover object-top"
                            priority={index < 3}
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full p-6">
                          {/* Fallback Mock Content */}
                          <div className="text-center space-y-4 w-full">
                            <div className="space-y-2">
                              <div className="h-3 bg-white/20 rounded w-3/4 mx-auto"></div>
                              <div className="h-3 bg-white/15 rounded w-full"></div>
                              <div className="h-3 bg-white/15 rounded w-5/6 mx-auto"></div>
                              <div className="h-2 bg-white/10 rounded w-2/3 mx-auto mt-4"></div>
                              <div className="h-2 bg-white/10 rounded w-3/4 mx-auto"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-6">
                              <div className="h-16 bg-white/10 rounded"></div>
                              <div className="h-16 bg-white/10 rounded"></div>
                              <div className="h-16 bg-white/10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Overlay gradient to fade into card */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                    {/* "Visit Site" Badge */}
                    <div className="absolute top-12 right-2 z-20">
                      <div className="flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg group-hover:bg-emerald-500 transition-colors">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit Site
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      {source.iconImage ? (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative flex-shrink-0 rounded-xl overflow-hidden bg-white">
                          <Image
                            src={source.iconImage}
                            alt={`${source.name} logo`}
                            fill
                            className={`object-contain ${source.logoPadding ?? 'p-1'}`}
                          />
                        </div>
                      ) : null}
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold text-white mb-2 text-2xl">
                      {source.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {source.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {source.category}
                      </span>
                      <span className="text-white/80 text-xs font-semibold group-hover:text-white transition-colors">
                        Click to Read →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Business News Hub Library Title */}
      <section id="news-library" className="relative bg-transparent pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Business News Hub Library
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of the world's most trusted business publications — hand-picked to keep you informed and ahead.
          </p>
        </div>
      </section>

      {/* Search Results Section Title */}
      {isSearching && (
        <section className="relative bg-transparent py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              🔍 Search Results
            </h2>
            <p className="text-gray-400">
              Showing {filteredSources.length} source{filteredSources.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          </div>
        </section>
      )}

      {/* Category Filter Pills */}
      <section className="relative py-8 sticky top-0 z-40 backdrop-blur-lg bg-emerald-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/50 animate-pulse-glow'
                    : 'bg-emerald-800 text-gray-300 hover:bg-emerald-700 hover-glow-emerald'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All' ? newsources.length : newsources.filter(s => s.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Sources - Card Grid with Glassmorphism */}
      <section className="relative bg-transparent py-20">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-blue-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {librarySources.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No sources found</h3>
              <p className="text-gray-400 text-lg mb-6">
                {isSearching
                  ? `No sources match "${searchTerm}". Try a different search term.`
                  : 'No sources match your selected category.'}
              </p>
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                  }}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Clear All Filters
                </button>
              )}
            </div>
          )}

          {librarySources.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {librarySources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-purple-600/0 group-hover:from-emerald-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      {source.iconImage ? (
                        <div className={`${source.logoSize ?? 'w-16 h-16'} relative flex-shrink-0 rounded-lg overflow-hidden bg-white transform group-hover:scale-110 transition-transform`}>
                          <Image
                            src={source.iconImage}
                            alt={`${source.name} logo`}
                            fill
                            className={`object-contain ${source.logoPadding ?? 'p-1'}`}
                          />
                        </div>
                      ) : (
                        <div className="text-4xl transform group-hover:scale-110 transition-transform">
                          {source.icon}
                        </div>
                      )}
                      <div className="bg-white/10 group-hover:bg-emerald-500 rounded-full p-2 transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {source.name}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {source.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                        {source.category}
                      </span>
                      <span className="text-emerald-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Now →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-center hover-glow-emerald">
              <div className="text-4xl font-bold text-white mb-2">{newsources.length}</div>
              <div className="text-emerald-100 text-sm">Total Sources</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center hover-glow-blue">
              <div className="text-4xl font-bold text-white mb-2">{categories.length - 1}</div>
              <div className="text-blue-100 text-sm">Categories</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-center hover-glow-purple">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-100 text-sm">Live Updates</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl p-6 text-center hover-glow-pink">
              <div className="text-4xl font-bold text-white mb-2">Free</div>
              <div className="text-pink-100 text-sm">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-transparent py-20">
        {/* Subtle gradient overlay for depth - stronger at bottom for footer transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-black/30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Put Insights
            <span className="block text-emerald-400 mt-2">Into Action?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let Servia Consulting help you transform business insights into growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block text-center"
            >
              Schedule Consultation
            </a>
            <a
              href="/service"
              className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-400/10 transition-all inline-block text-center"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
      </div>
      {/* End Content Wrapper */}

      {/* Suggest a Source Modal */}
      {showSuggestModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSuggestModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto p-8">

            {/* Close */}
            <button onClick={() => setShowSuggestModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="w-12 h-1 bg-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Suggest a Source</h2>
              <p className="text-gray-500 text-sm mt-1">Know a great publication or resource? Let us know and we'll review it for our library.</p>
            </div>

            {suggestStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-500 text-sm">Your suggestion has been submitted. We'll review it and may add it to our library.</p>
                <button onClick={() => setShowSuggestModal(false)} className="mt-6 bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">Close</button>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  try {
                    const res = await fetch('/api/suggest-source', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(suggestForm),
                    })
                    if (res.ok) {
                      setSuggestStatus('success')
                      setSuggestForm({ name: '', email: '', source: '', url: '', category: '', reason: '' })
                    } else {
                      setSuggestStatus('error')
                    }
                  } catch {
                    setSuggestStatus('error')
                  }
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={suggestForm.name}
                      onChange={e => setSuggestForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={suggestForm.email}
                      onChange={e => setSuggestForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Source / Publication Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={suggestForm.source}
                    onChange={e => setSuggestForm(p => ({ ...p, source: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g. Nation's Restaurant News"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                  <input
                    type="url"
                    value={suggestForm.url}
                    onChange={e => setSuggestForm(p => ({ ...p, url: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={suggestForm.category}
                    onChange={e => setSuggestForm(p => ({ ...p, category: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a category...</option>
                    <option>Restaurant Industry</option>
                    <option>Business Strategy</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                    <option>Operations</option>
                    <option>Technology</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Why do you recommend it?</label>
                  <textarea
                    rows={3}
                    value={suggestForm.reason}
                    onChange={e => setSuggestForm(p => ({ ...p, reason: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    placeholder="Briefly describe why this source is valuable..."
                  />
                </div>

                {suggestStatus === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Submit Suggestion
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default InsightsPage

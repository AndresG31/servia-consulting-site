'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '../components/layout/Footer'
import {
  auditCategories,
  SCORE_LABELS,
  SCORE_PILL_SELECTED,
  SCORE_BORDER_L,
  SCORE_DOT_COLORS,
  getCategoryBand,
} from './auditData'

// Category icons mapping
const categoryIcons = {
  operations: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  financial: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  menu: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  staff: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  customer: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  marketing: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  facility: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  technology: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  maintenance: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  compliance: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

export default function AuditPage() {
  const router = useRouter()
  const [scores, setScores] = useState({})
  const [activeCategory, setActiveCategory] = useState('operations')
  const [showProPopup, setShowProPopup] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [pulsingBand, setPulsingBand] = useState(0)
  const [autoSaved, setAutoSaved] = useState(false)
  const [completedCategory, setCompletedCategory] = useState(null)
  const popupShown = useRef(false)
  const timerRef = useRef(null)
  const mainPanelRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('auditScores')
    if (saved) {
      try { setScores(JSON.parse(saved)) } catch {}
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsingBand(prev => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentIndex = auditCategories.findIndex(c => c.id === activeCategory)

      // Arrow keys for category navigation
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault()
        changeCategory(auditCategories[currentIndex - 1].id)
      } else if (e.key === 'ArrowRight' && currentIndex < auditCategories.length - 1) {
        e.preventDefault()
        changeCategory(auditCategories[currentIndex + 1].id)
      }

      // Number keys (0, 1, 2) for quick scoring when focused on an item
      if (['0', '1', '2'].includes(e.key) && document.activeElement?.dataset?.itemId) {
        e.preventDefault()
        const itemId = document.activeElement.dataset.itemId
        setScore(itemId, parseInt(e.key))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeCategory])

  const startPopupTimer = () => {
    if (popupShown.current || timerRef.current) return
    timerRef.current = setTimeout(() => {
      popupShown.current = true
      setShowProPopup(true)
    }, 30000)
  }

  const totalItems = auditCategories.reduce((acc, cat) => acc + cat.items.length, 0)
  const answeredItems = Object.keys(scores).length
  const isComplete = answeredItems === totalItems

  const setScore = (itemId, value) => {
    startPopupTimer()
    setScores(prev => {
      const newScores = { ...prev, [itemId]: value }
      localStorage.setItem('auditScores', JSON.stringify(newScores))
      setAutoSaved(true)
      setTimeout(() => setAutoSaved(false), 2000)

      // Check if category just completed
      const activeCat = auditCategories.find(c => c.id === activeCategory)
      const catAnswered = activeCat.items.filter(item => newScores[item.id] !== undefined).length
      if (catAnswered === activeCat.items.length) {
        setCompletedCategory(activeCategory)
        setTimeout(() => setCompletedCategory(null), 3000)
      }

      return newScores
    })
  }

  const unsetScore = (itemId) => {
    setScores(prev => {
      const next = { ...prev }
      delete next[itemId]
      return next
    })
  }

  const resetAll = () => {
    localStorage.removeItem('auditScores')
    setScores({})
    setActiveCategory('operations')
  }

  const randomizeAll = () => {
    const randomized = {}
    auditCategories.forEach(cat => {
      cat.items.forEach(item => {
        randomized[item.id] = Math.floor(Math.random() * 3)
      })
    })
    setScores(randomized)
  }

  const categoryStats = auditCategories.map(cat => {
    const catScore = cat.items.reduce((acc, item) => acc + (scores[item.id] ?? 0), 0)
    const catMax = cat.items.length * 2
    const catPct = Math.round((catScore / catMax) * 100)
    const answered = cat.items.filter(item => scores[item.id] !== undefined).length
    return { ...cat, catScore, catMax, catPct, answered, band: getCategoryBand(catPct) }
  })

  const activeCat = auditCategories.find(c => c.id === activeCategory)
  const activeCatStats = categoryStats.find(c => c.id === activeCategory)

  const progress = Math.round((answeredItems / totalItems) * 100)

  const liveAnsweredScore = Object.values(scores).reduce((acc, v) => acc + v, 0)
  const liveMaxScore = answeredItems * 2
  const livePct = liveMaxScore > 0 ? Math.round((liveAnsweredScore / liveMaxScore) * 100) : 0

  const changeCategory = (newCatId) => {
    setActiveCategory(newCatId)
    setTimeout(() => {
      mainPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  const viewResults = () => {
    localStorage.setItem('auditScores', JSON.stringify(scores))
    router.push('/audit/results')
  }

  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Pro Guide Popup */}
      {mounted && showProPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" onClick={() => setShowProPopup(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full mx-4 text-center">
            <button onClick={() => setShowProPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-3">Want a professional to guide you through the audit?</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">Our consultants can walk you through each section, help interpret your results, and build an action plan tailored to your restaurant.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Talk to a Consultant</a>
              <button onClick={() => setShowProPopup(false)} className="flex-1 border border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Continue on My Own</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section data-header-theme="dark" className="relative overflow-hidden -mt-[92px]" style={{ minHeight: 'calc(90vh + 9px)' }}>
        {/* Video Background Playlist */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={(e) => {
              const videos = ['/assets/audit/audit-hero.mp4', '/assets/audit/audit-hero-2.mp4']
              const current = e.target.src
              const currentIndex = videos.findIndex(v => current.endsWith(v))
              const next = videos[(currentIndex + 1) % videos.length]
              e.target.src = next
              e.target.play()
            }}
          >
            <source src="/assets/audit/audit-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Content Overlay — exact same structure as homepage */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0" style={{ minHeight: 'calc(90vh + 9px)' }}>

            {/* Left Side */}
            <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-24 pb-12 lg:pt-28 lg:pb-16 z-10">
              <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-page"></div>

              <div className="relative z-10">
                <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-page-hero"></div>

                <div className="flex items-center gap-3 mb-4 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-600 rounded-full px-4 py-1">Diagnostic Tool</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
                  Restaurant
                  <span className="block text-emerald-400 mt-2">Audit Framework</span>
                </h1>

                <p className="text-xl text-gray-100 mb-10 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
                  A structured 48-point diagnostic across 8 critical business areas. Score your restaurant honestly and receive a clear picture of where to focus first.
                </p>

                <div className="flex flex-wrap gap-8 text-sm text-white mb-10 opacity-0 animate-page-hero" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" />8 Assessment Categories</div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" />48 Diagnostic Criteria</div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" />Instant Scored Results</div>
                </div>

                {/* Performance Bands */}
                <div className="pt-4 border-t border-gray-600 opacity-0 animate-page-hero" style={{ animationDelay: '0.9s' }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Performance Bands</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Critical',    range: '0 – 40%',   color: 'text-red-400',     border: 'border-red-800/60',     bg: 'bg-red-900/20',     glow: '0 0 14px rgba(239,68,68,0.7)'    },
                      { label: 'Developing',  range: '41 – 70%',  color: 'text-yellow-400',  border: 'border-yellow-800/60',  bg: 'bg-yellow-900/20',  glow: '0 0 14px rgba(234,179,8,0.7)'    },
                      { label: 'Established', range: '71 – 85%',  color: 'text-blue-400',    border: 'border-blue-800/60',    bg: 'bg-blue-900/20',    glow: '0 0 14px rgba(59,130,246,0.7)'   },
                      { label: 'Optimized',   range: '86 – 100%', color: 'text-emerald-400', border: 'border-emerald-800/60', bg: 'bg-emerald-900/20', glow: '0 0 14px rgba(16,185,129,0.7)'   },
                    ].map((band, i) => (
                      <div
                        key={band.label}
                        className={`rounded-xl px-4 py-3 border ${band.border} ${band.bg} backdrop-blur-sm flex items-center justify-between transition-all duration-500`}
                        style={{ boxShadow: pulsingBand === i ? band.glow : 'none' }}
                      >
                        <p className={`text-sm font-black ${band.color}`}>{band.label}</p>
                        <p className={`text-xs font-semibold ${band.color} opacity-70`}>{band.range}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section data-header-theme="light" className="relative bg-white border-b border-gray-200">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-8">How It Works</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden sm:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gray-200" />

            {[
              {
                step: '01',
                title: 'Score Each Item',
                desc: 'Rate every criterion as Not in Place, Partially in Place, or Fully in Place.',
                icon: (
                  <svg className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Complete All Categories',
                desc: 'Work through all 9 categories covering operations, finances, staff, maintenance, and more.',
                icon: (
                  <svg className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Review Your Results',
                desc: 'Get an overall performance band and identify your top priority gaps.',
                icon: (
                  <svg className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div key={s.step} className={`group flex flex-col items-start sm:items-center sm:text-center px-0 sm:px-8 pb-8 sm:pb-0 ${i > 0 ? 'border-t border-gray-200 pt-8 sm:border-t-0 sm:pt-0' : ''}`}>
                {/* Step circle with icon */}
                <div className="relative mb-5 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:shadow-[0_0_20px_rgba(5,150,105,0.5)]">
                    {s.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center leading-none">
                    {s.step}
                  </span>
                </div>
                <p className="font-bold text-gray-900 text-base mb-3">{s.title}</p>
                <div className="bg-emerald-400/20 border border-emerald-500/60 rounded-2xl px-5 py-3 backdrop-blur-sm">
                  <p className="text-sm text-emerald-700 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Audit Area */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        {/* Subtle gradient background pattern */}
        <div className="absolute inset-0 -z-10 opacity-30" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Progress bar with milestones */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white">Overall Progress</span>
              {autoSaved && (
                <span className="text-xs text-emerald-400 flex items-center gap-1 animate-fade-in">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Auto-saved
                </span>
              )}
            </div>
            <span className="text-sm font-bold text-emerald-400">{answeredItems} / {totalItems} criteria scored ({progress}%)</span>
          </div>
          <div className="relative h-3 bg-emerald-900 rounded-full overflow-visible shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full transition-all duration-500 relative"
              style={{ width: `${progress}%` }}
            >
              {progress > 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              )}
            </div>
            {/* Milestone markers */}
            {[25, 50, 75].map(milestone => (
              <div
                key={milestone}
                className="absolute top-0 bottom-0 w-0.5 bg-emerald-700"
                style={{ left: `${milestone}%` }}
              >
                <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold ${progress >= milestone ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  {milestone}%
                </div>
              </div>
            ))}
          </div>
          {/* Milestone celebrations */}
          {progress >= 100 && (
            <div className="mt-8 text-center animate-bounce">
              <span className="text-emerald-400 text-sm font-bold">🎉 Perfect! All criteria scored!</span>
            </div>
          )}
          {progress >= 75 && progress < 100 && (
            <div className="mt-8 text-center">
              <span className="text-emerald-400 text-sm font-medium">⭐ Great progress! Almost there!</span>
            </div>
          )}
          {progress >= 50 && progress < 75 && (
            <div className="mt-8 text-center">
              <span className="text-yellow-400 text-sm font-medium">✨ Halfway there!</span>
            </div>
          )}
          {progress >= 25 && progress < 50 && (
            <div className="mt-8 text-center">
              <span className="text-blue-400 text-sm font-medium">💪 Keep going!</span>
            </div>
          )}
        </div>

        {/* Mobile tabs */}
        <div className="grid grid-cols-2 gap-2 lg:hidden mb-6">
          {categoryStats.map(cat => {
            const isActive = cat.id === activeCategory
            const words = cat.title.split(' ')
            const abbrev = words.length > 2 ? words[0] + ' ' + words[1] : cat.title
            return (
              <button
                key={cat.id}
                onClick={() => changeCategory(cat.id)}
                className={`flex items-center justify-between gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-all ${
                  isActive ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-emerald-900 text-white border-emerald-700 hover:bg-emerald-800'
                }`}
              >
                <span className="truncate">{abbrev}</span>
                {cat.answered === cat.items.length && <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cat.band.bar}`} />}
              </button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4 px-1">Categories</p>
            <nav className="space-y-1">
              {categoryStats.map(cat => {
                const isActive = cat.id === activeCategory
                return (
                  <button
                    key={cat.id}
                    onClick={() => changeCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex flex-col gap-2 ${
                      isActive ? 'bg-emerald-600 text-white shadow-lg' : 'bg-emerald-900 text-white hover:bg-emerald-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-emerald-400'}`}>
                          {categoryIcons[cat.id]}
                        </span>
                        <span className="text-sm font-medium truncate">{cat.title}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {cat.answered === cat.items.length && (
                          <span className={`text-xs font-bold ${isActive ? 'text-emerald-200' : cat.band.color}`}>{cat.catPct}%</span>
                        )}
                        {cat.answered > 0 && cat.answered < cat.items.length && (
                          <span className="text-xs text-white">{cat.answered}/{cat.items.length}</span>
                        )}
                        {cat.answered === cat.items.length && (
                          <svg className={`w-4 h-4 ${isActive ? 'text-emerald-200' : 'text-emerald-500'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {cat.items.map(item => {
                        const s = scores[item.id]
                        return <span key={item.id} className={`w-2 h-2 rounded-full flex-shrink-0 ${s !== undefined ? SCORE_DOT_COLORS[s] : 'bg-emerald-800'}`} />
                      })}
                    </div>
                  </button>
                )
              })}
            </nav>

            {answeredItems > 0 && (
              <div className="mt-6 bg-emerald-900 rounded-xl p-4 border border-emerald-800">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">Live Score</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-black text-emerald-400">{livePct}%</span>
                  <span className="text-xs text-white">of answered items</span>
                </div>
                <div className="h-1.5 bg-emerald-800 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${livePct}%` }} />
                </div>
                <p className="text-xs text-white">{answeredItems} of {totalItems} scored</p>
              </div>
            )}

            {process.env.NODE_ENV === 'development' && (
              <button
                onClick={randomizeAll}
                className="mt-4 w-full px-4 py-3 rounded-lg border border-emerald-700 text-emerald-400 text-sm font-medium hover:bg-emerald-800/40 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Randomize Answers
              </button>
            )}

            {answeredItems > 0 && (
              <button
                onClick={resetAll}
                className="mt-2 w-full px-4 py-3 rounded-lg border border-red-800 text-red-400 text-sm font-medium hover:bg-red-900/30 hover:border-red-600 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset All Criteria
              </button>
            )}
          </aside>
          {/* Main Panel */}
          <main ref={mainPanelRef}>
            {/* Category Header */}
            <div className="relative bg-emerald-900 rounded-2xl p-8 mb-6 border border-emerald-800">
              {/* Category completion celebration */}
              {completedCategory === activeCategory && (
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-600/95 rounded-2xl z-10 animate-fade-in">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🎉</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Category Complete!</h3>
                    <p className="text-emerald-100">Great job! All items in this category are scored.</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">{categoryIcons[activeCategory]}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{activeCat.title}</h2>
                    <p className="text-white mt-1">{activeCat.description}</p>
                  </div>
                </div>
              </div>
              {activeCatStats.answered > 0 && (
                <div className="mt-4 pt-4 border-t border-emerald-800 flex items-center gap-4">
                  <div className="flex-1 h-1.5 bg-emerald-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${activeCatStats.band.bar}`} style={{ width: `${activeCatStats.catPct}%` }} />
                  </div>
                  <span className={`text-sm font-bold ${activeCatStats.band.color}`}>{activeCatStats.catPct}% — {activeCatStats.band.label}</span>
                </div>
              )}
            </div>

            {/* Inline Scoring Key */}
            <div className="flex flex-wrap gap-4 mb-4 text-xs text-white items-center">
              <span className="font-bold uppercase tracking-wider text-white">Key:</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />0 — Not in Place</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />1 — Partial</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />2 — Fully in Place</span>
            </div>

            {/* Audit Items */}
            <div className="space-y-4">
              {activeCat.items.map((item, idx) => {
                const currentScore = scores[item.id]
                const borderClass = currentScore !== undefined ? SCORE_BORDER_L[currentScore] : 'border-emerald-800'
                return (
                  <div
                    key={item.id}
                    className={`bg-emerald-900 rounded-xl p-6 border transition-all duration-300 hover:bg-emerald-800/80 hover:shadow-lg group ${borderClass}`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                    role="group"
                    aria-label={`Question ${idx + 1}: ${item.label}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold text-white mt-1 flex-shrink-0 w-5">{idx + 1}</span>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-4 leading-relaxed">{item.label}</p>
                        <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Score options">
                          {SCORE_LABELS.map((label, value) => {
                            const isSelected = currentScore === value
                            return (
                              <button
                                key={value}
                                onClick={() => setScore(item.id, value)}
                                data-item-id={item.id}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                                  isSelected ? SCORE_PILL_SELECTED[value] : 'border-emerald-700 text-white hover:border-gray-500 hover:text-gray-200 bg-emerald-800'
                                }`}
                                role="radio"
                                aria-checked={isSelected}
                                aria-label={`${value} - ${label}`}
                                tabIndex={0}
                              >
                                <span className="font-bold">{value}</span>
                                <span>{label}</span>
                                {isSelected && (
                                  <span
                                    role="button"
                                    aria-label="Clear score"
                                    onClick={e => { e.stopPropagation(); unsetScore(item.id) }}
                                    className="ml-1 flex items-center justify-center w-4 h-4 rounded-full bg-white/20 hover:bg-white/40 transition-colors leading-none text-xs font-bold"
                                  >×</span>
                                )}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Category navigation */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => { const idx = auditCategories.findIndex(c => c.id === activeCategory); if (idx > 0) changeCategory(auditCategories[idx - 1].id) }}
                disabled={auditCategories.findIndex(c => c.id === activeCategory) === 0}
                className="px-6 py-3 rounded-lg border border-emerald-700 text-white font-medium hover:border-gray-500 hover:text-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >← Previous</button>

              {isComplete ? (
                <button onClick={viewResults} className="px-8 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/50">
                  View My Results →
                </button>
              ) : (
                <button
                  onClick={() => { const idx = auditCategories.findIndex(c => c.id === activeCategory); if (idx < auditCategories.length - 1) changeCategory(auditCategories[idx + 1].id) }}
                  disabled={auditCategories.findIndex(c => c.id === activeCategory) === auditCategories.length - 1}
                  className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >Next Category →</button>
              )}
            </div>

            {isComplete && (
              <div className="mt-4 text-center">
                <p className="text-sm text-emerald-400">All {totalItems} criteria scored. Ready to view your results.</p>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Performance Bands Reference */}
      <section id="performance-bands" data-header-theme="light" className="relative bg-white border-t border-gray-200">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="w-16 h-1 bg-emerald-600 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Bands</h2>
          <p className="text-gray-600 mb-10">Understand what each score range means for your restaurant&apos;s operational maturity.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Critical',    range: '0 – 40%',   color: 'text-red-600',     border: 'border-red-200',     bg: 'bg-red-50',     glow: 'hover-glow-red',     desc: 'Fundamental operational gaps are present. Immediate strategic intervention is required to stabilize the business.' },
              { label: 'Developing',  range: '41 – 70%',  color: 'text-yellow-600',  border: 'border-yellow-200',  bg: 'bg-yellow-50',  glow: 'hover-glow-yellow',  desc: 'Core systems exist but are inconsistently applied. Structured consulting engagement will accelerate progress.' },
              { label: 'Established', range: '71 – 85%',  color: 'text-blue-600',    border: 'border-blue-200',    bg: 'bg-blue-50',    glow: 'hover-glow-blue',    desc: 'A strong foundation is in place. Focused improvements in weaker areas will unlock the next performance level.' },
              { label: 'Optimized',   range: '86 – 100%', color: 'text-emerald-600', border: 'border-emerald-200', bg: 'bg-emerald-50', glow: 'hover-glow-emerald', desc: 'Operating at a high level across most areas. Focus shifts to sustaining performance and competitive differentiation.' },
            ].map(band => (
              <div key={band.label} className={`rounded-xl p-6 border ${band.border} ${band.bg} ${band.glow}`}>
                <p className={`text-xl font-black mb-1 ${band.color}`}>{band.label}</p>
                <p className={`text-sm font-semibold mb-4 ${band.color} opacity-70`}>{band.range}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{band.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

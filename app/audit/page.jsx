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

export default function AuditPage() {
  const router = useRouter()
  const [scores, setScores] = useState({})
  const [activeCategory, setActiveCategory] = useState('operations')
  const [showProPopup, setShowProPopup] = useState(false)
  const [mounted, setMounted] = useState(false)
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
    setScores(prev => ({ ...prev, [itemId]: value }))
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
      <section className="relative bg-emerald-950 overflow-hidden min-h-[520px]">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-90" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 lg:py-28 z-10">
          <div className="w-20 h-1 bg-emerald-600 mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-600 rounded-full px-4 py-1">Diagnostic Tool</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Restaurant
            <span className="block text-emerald-400 mt-2">Audit Framework</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mb-10 leading-relaxed">A structured 48-point diagnostic across 8 critical business areas. Score your restaurant honestly and receive a clear picture of where to focus first.</p>
          <div className="flex flex-wrap gap-8 text-sm text-white">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" />8 Assessment Categories</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" />48 Diagnostic Criteria</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" />Instant Scored Results</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-emerald-950 border-b border-emerald-800/60">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-8">How It Works</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden sm:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-emerald-700/60" />

            {[
              {
                step: '01',
                title: 'Score Each Item',
                desc: 'Rate every criterion as Not in Place, Partially in Place, or Fully in Place.',
                icon: (
                  <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Complete All Categories',
                desc: 'Work through all 8 categories covering operations, finances, staff, and more.',
                icon: (
                  <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Review Your Results',
                desc: 'Get an overall performance band and identify your top priority gaps.',
                icon: (
                  <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div key={s.step} className={`flex flex-col items-start sm:items-center sm:text-center px-0 sm:px-8 pb-8 sm:pb-0 ${i > 0 ? 'border-t border-emerald-800/50 pt-8 sm:border-t-0 sm:pt-0' : ''}`}>
                {/* Step circle with icon */}
                <div className="relative mb-5 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center leading-none">
                    {s.step}
                  </span>
                </div>
                <p className="font-bold text-white text-base mb-2">{s.title}</p>
                <p className="text-sm text-emerald-300/80 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Audit Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-white">Overall Progress</span>
            <span className="text-sm font-bold text-emerald-400">{answeredItems} / {totalItems} criteria scored</span>
          </div>
          <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden mb-6">
          {categoryStats.map(cat => {
            const isActive = cat.id === activeCategory
            const words = cat.title.split(' ')
            const abbrev = words.length > 2 ? words[0] + ' ' + words[1] : cat.title
            return (
              <button
                key={cat.id}
                onClick={() => changeCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-all ${
                  isActive ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-emerald-900 text-white border-emerald-700 hover:bg-emerald-800'
                }`}
              >
                {abbrev}
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
                      isActive ? 'bg-emerald-600 text-white' : 'bg-emerald-900 text-white hover:bg-emerald-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium truncate">{cat.title}</span>
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

            <button
              onClick={randomizeAll}
              className="mt-4 w-full px-4 py-3 rounded-lg border border-emerald-700 text-emerald-400 text-sm font-medium hover:bg-emerald-800/40 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Randomize Answers
            </button>

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
            <div className="bg-emerald-900 rounded-2xl p-8 mb-6 border border-emerald-800">
              <div className="flex items-start gap-4 mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-white">{activeCat.title}</h2>
                  <p className="text-white mt-1">{activeCat.description}</p>
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
                  <div key={item.id} className={`bg-emerald-900 rounded-xl p-6 border transition-all ${borderClass}`}>
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold text-white mt-1 flex-shrink-0 w-5">{idx + 1}</span>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-4 leading-relaxed">{item.label}</p>
                        <div className="flex flex-wrap gap-3">
                          {SCORE_LABELS.map((label, value) => {
                            const isSelected = currentScore === value
                            return (
                              <button
                                key={value}
                                onClick={() => setScore(item.id, value)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                                  isSelected ? SCORE_PILL_SELECTED[value] : 'border-emerald-700 text-white hover:border-gray-500 hover:text-gray-200 bg-emerald-800'
                                }`}
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
      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="w-16 h-1 bg-emerald-600 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Performance Bands</h2>
          <p className="text-white mb-10">Understand what each score range means for your restaurant&apos;s operational maturity.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Critical',    range: '0 – 40%',   color: 'text-red-400',     border: 'border-red-800',     bg: 'bg-red-900/20',     glow: 'hover-glow-red',     desc: 'Fundamental operational gaps are present. Immediate strategic intervention is required to stabilize the business.' },
              { label: 'Developing',  range: '41 – 70%',  color: 'text-yellow-400',  border: 'border-yellow-800',  bg: 'bg-yellow-900/20',  glow: 'hover-glow-yellow',  desc: 'Core systems exist but are inconsistently applied. Structured consulting engagement will accelerate progress.' },
              { label: 'Established', range: '71 – 85%',  color: 'text-blue-400',    border: 'border-blue-800',    bg: 'bg-blue-900/20',    glow: 'hover-glow-blue',    desc: 'A strong foundation is in place. Focused improvements in weaker areas will unlock the next performance level.' },
              { label: 'Optimized',   range: '86 – 100%', color: 'text-emerald-400', border: 'border-emerald-800', bg: 'bg-emerald-900/20', glow: 'hover-glow-emerald', desc: 'Operating at a high level across most areas. Focus shifts to sustaining performance and competitive differentiation.' },
            ].map(band => (
              <div key={band.label} className={`rounded-xl p-6 border ${band.border} ${band.bg} ${band.glow}`}>
                <p className={`text-xl font-black mb-1 ${band.color}`}>{band.label}</p>
                <p className={`text-sm font-semibold mb-4 ${band.color} opacity-70`}>{band.range}</p>
                <p className="text-sm text-white leading-relaxed">{band.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

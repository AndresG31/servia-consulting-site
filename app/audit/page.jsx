'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'

const auditCategories = [
  {
    id: 'operations',
    title: 'Operations & Kitchen Management',
    icon: '🍳',
    description: 'Evaluate the efficiency and consistency of your back-of-house operations.',
    items: [
      { id: 'op1', label: 'Documented opening and closing procedures are followed daily' },
      { id: 'op2', label: 'Kitchen layout supports smooth, logical prep-to-plate workflow' },
      { id: 'op3', label: 'Equipment maintenance schedule is documented and current' },
      { id: 'op4', label: 'Inventory is counted on a set schedule (weekly or bi-weekly)' },
      { id: 'op5', label: 'Waste tracking and reduction practices are actively in use' },
      { id: 'op6', label: 'Food preparation standards and plating guides are documented' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Performance',
    icon: '📊',
    description: 'Assess how well your financials are monitored, managed, and optimized.',
    items: [
      { id: 'fin1', label: 'Food cost percentage is tracked weekly and benchmarked against target' },
      { id: 'fin2', label: 'Labor cost as a % of revenue is reviewed monthly' },
      { id: 'fin3', label: 'A formal P&L review is conducted at least monthly' },
      { id: 'fin4', label: 'Break-even point per week or month is known and monitored' },
      { id: 'fin5', label: 'Cash flow is actively managed with a rolling 30-day forecast' },
      { id: 'fin6', label: 'Revenue per available seat hour (RevPASH) is tracked during service' },
    ],
  },
  {
    id: 'menu',
    title: 'Menu & Product Quality',
    icon: '📋',
    description: 'Review how strategically your menu is designed, priced, and maintained.',
    items: [
      { id: 'men1', label: 'Menu items are analyzed for profitability and popularity (menu engineering)' },
      { id: 'men2', label: 'Standardized recipes are written for every dish with portion controls' },
      { id: 'men3', label: 'Menu is reviewed and refreshed at least twice per year' },
      { id: 'men4', label: 'Pricing is set strategically, not just by marking up food cost' },
      { id: 'men5', label: 'Allergen and dietary information is documented and accessible' },
      { id: 'men6', label: 'Supplier quality is evaluated on a regular basis' },
    ],
  },
  {
    id: 'staff',
    title: 'Staff & Human Resources',
    icon: '👥',
    description: 'Gauge the strength of your team, training programs, and leadership pipeline.',
    items: [
      { id: 'stf1', label: 'A structured onboarding and training program exists for all roles' },
      { id: 'stf2', label: 'Employee retention rate is tracked and above industry average' },
      { id: 'stf3', label: 'Formal performance reviews are conducted at least annually' },
      { id: 'stf4', label: 'Scheduling is optimized to match expected covers and reduce overtime' },
      { id: 'stf5', label: 'Clear channels for team communication and shift handoffs are in place' },
      { id: 'stf6', label: 'At least one manager or supervisor is being developed for a leadership role' },
    ],
  },
  {
    id: 'customer',
    title: 'Customer Experience',
    icon: '⭐',
    description: 'Measure how consistently you deliver exceptional experiences that drive loyalty.',
    items: [
      { id: 'cus1', label: 'Online reviews (Google, Yelp) are monitored and responded to within 48 hours' },
      { id: 'cus2', label: 'A guest satisfaction feedback mechanism is in place (surveys, comment cards, etc.)' },
      { id: 'cus3', label: 'Wait time and table turn standards are defined and tracked during service' },
      { id: 'cus4', label: 'A documented complaint resolution process exists for front-of-house staff' },
      { id: 'cus5', label: 'A loyalty or repeat-guest reward program is active' },
      { id: 'cus6', label: 'Reservation and waitlist management is handled through a system (not pen and paper)' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Brand',
    icon: '📣',
    description: 'Evaluate your brand presence, visibility, and marketing effectiveness.',
    items: [
      { id: 'mkt1', label: 'Social media accounts are updated at least 3 times per week with original content' },
      { id: 'mkt2', label: 'Google Business Profile is claimed, complete, and updated regularly' },
      { id: 'mkt3', label: 'Local SEO basics are in place (consistent NAP, local keywords, website)' },
      { id: 'mkt4', label: 'An email or SMS marketing list is being actively built and used' },
      { id: 'mkt5', label: 'The restaurant participates in at least one community or local marketing event per quarter' },
      { id: 'mkt6', label: 'Brand visuals (logo, colors, photography) are consistent across all channels' },
    ],
  },
  {
    id: 'technology',
    title: 'Technology & Systems',
    icon: '💻',
    description: 'Identify gaps in your tech stack that may be limiting efficiency or revenue.',
    items: [
      { id: 'tec1', label: 'POS system provides detailed sales, labor, and menu performance reporting' },
      { id: 'tec2', label: 'Online ordering is integrated with your POS (not manually entered)' },
      { id: 'tec3', label: 'Third-party delivery platforms are managed through a single aggregator or integration' },
      { id: 'tec4', label: 'Data and analytics are reviewed weekly to drive decisions' },
      { id: 'tec5', label: 'Multiple digital payment options are available (tap, mobile wallets, etc.)' },
      { id: 'tec6', label: 'Table management or reservation software is used to optimize floor performance' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Safety',
    icon: '🛡️',
    description: 'Confirm your operation is legally protected and safety-certified.',
    items: [
      { id: 'com1', label: 'All applicable health permits and licenses are current and displayed' },
      { id: 'com2', label: 'All food handlers have current food safety certifications' },
      { id: 'com3', label: 'A HACCP (Hazard Analysis Critical Control Points) plan is written and followed' },
      { id: 'com4', label: 'Fire safety equipment is inspected and staff is trained on emergency procedures' },
      { id: 'com5', label: 'Labor law requirements (breaks, overtime, tip reporting) are documented and followed' },
      { id: 'com6', label: 'Insurance coverage (general liability, workers\' comp, liquor) is reviewed annually' },
    ],
  },
]

const SCORE_LABELS = ['Not in Place', 'Partially in Place', 'Fully in Place']
const SCORE_COLORS = ['bg-red-500', 'bg-yellow-500', 'bg-emerald-600']
const SCORE_TEXT = ['text-red-400', 'text-yellow-400', 'text-emerald-400']

function getPerformanceBand(pct) {
  if (pct >= 86) return { label: 'Optimized', color: 'text-emerald-400', bg: 'bg-emerald-600', desc: 'Your restaurant is operating at a high level. Focus on sustaining performance and innovating for growth.' }
  if (pct >= 71) return { label: 'Established', color: 'text-blue-400', bg: 'bg-blue-600', desc: 'Strong foundation is in place. Targeted improvements in weaker areas will push you to the next level.' }
  if (pct >= 41) return { label: 'Developing', color: 'text-yellow-400', bg: 'bg-yellow-600', desc: 'Several critical systems need attention. A structured consulting engagement can accelerate your progress.' }
  return { label: 'Critical', color: 'text-red-400', bg: 'bg-red-600', desc: 'Fundamental operational gaps are putting your business at risk. Immediate strategic support is recommended.' }
}

function getCategoryBand(pct) {
  if (pct >= 86) return { label: 'Strong', color: 'text-emerald-400', bar: 'bg-emerald-600' }
  if (pct >= 71) return { label: 'Good', color: 'text-blue-400', bar: 'bg-blue-600' }
  if (pct >= 41) return { label: 'Needs Work', color: 'text-yellow-400', bar: 'bg-yellow-500' }
  return { label: 'Critical Gap', color: 'text-red-400', bar: 'bg-red-600' }
}

export default function AuditPage() {
  const [scores, setScores] = useState({})
  const [activeCategory, setActiveCategory] = useState('operations')
  const [showResults, setShowResults] = useState(false)
  const [showProPopup, setShowProPopup] = useState(false)
  const [mounted, setMounted] = useState(false)
  const popupShown = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
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
    setScores({})
    setShowResults(false)
    setActiveCategory('operations')
  }

  const totalScore = Object.values(scores).reduce((acc, v) => acc + v, 0)
  const maxScore = totalItems * 2
  const overallPct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
  const band = getPerformanceBand(overallPct)

  const categoryStats = auditCategories.map(cat => {
    const catScore = cat.items.reduce((acc, item) => acc + (scores[item.id] ?? 0), 0)
    const catMax = cat.items.length * 2
    const catPct = Math.round((catScore / catMax) * 100)
    const answered = cat.items.filter(item => scores[item.id] !== undefined).length
    return { ...cat, catScore, catMax, catPct, answered, band: getCategoryBand(catPct) }
  })

  const weakestCategories = [...categoryStats]
    .filter(c => c.answered === c.items.length)
    .sort((a, b) => a.catPct - b.catPct)
    .slice(0, 3)

  const activeCat = auditCategories.find(c => c.id === activeCategory)
  const activeCatStats = categoryStats.find(c => c.id === activeCategory)

  const progress = Math.round((answeredItems / totalItems) * 100)

  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Pro Guide Popup */}
      {mounted && showProPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Light backdrop filter */}
          <div
            className="absolute inset-0 bg-white/30 backdrop-blur-sm"
            onClick={() => setShowProPopup(false)}
          />
          {/* Modal card */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full mx-4 text-center">
            {/* Close button */}
            <button
              onClick={() => setShowProPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-emerald-900 mb-3">
              Want a professional to guide you through the audit?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our consultants can walk you through each section, help interpret your results, and build an action plan tailored to your restaurant.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Talk to a Consultant
              </a>
              <button
                onClick={() => setShowProPopup(false)}
                className="flex-1 border border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Continue on My Own
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-emerald-950 overflow-hidden min-h-[520px]">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-90" />

        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 lg:py-28 z-10">
          <div className="w-20 h-1 bg-emerald-600 mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-600 rounded-full px-4 py-1">
              Diagnostic Tool
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Restaurant
            <span className="block text-emerald-400 mt-2">Audit Framework</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            A structured 48-point diagnostic across 8 critical business areas. Score your
            restaurant honestly and receive a clear picture of where to focus first.
          </p>
          <div className="flex flex-wrap gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              8 Assessment Categories
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              48 Diagnostic Criteria
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              Instant Scored Results
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-emerald-950 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Score Each Item', desc: 'Rate every criterion as Not in Place, Partially in Place, or Fully in Place.' },
              { step: '02', title: 'Complete All Categories', desc: 'Work through all 8 categories covering operations, finances, staff, and more.' },
              { step: '03', title: 'Review Your Results', desc: 'Get an overall performance band and identify your top priority gaps.' },
            ].map(s => (
              <div key={s.step} className="flex items-start gap-4">
                <span className="text-3xl font-black text-emerald-600 opacity-60 leading-none">{s.step}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{s.title}</p>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
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
            <span className="text-sm font-medium text-gray-400">Overall Progress</span>
            <span className="text-sm font-bold text-emerald-400">{answeredItems} / {totalItems} criteria scored</span>
          </div>
          <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Sidebar: Category Nav */}
          <aside>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 px-1">Categories</p>
            <nav className="space-y-1">
              {categoryStats.map(cat => {
                const isActive = cat.id === activeCategory
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between gap-3 group ${
                      isActive
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-900 text-gray-300 hover:bg-emerald-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-lg flex-shrink-0">{cat.icon}</span>
                      <span className="text-sm font-medium truncate">{cat.title}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {cat.answered === cat.items.length && (
                        <span className={`text-xs font-bold ${isActive ? 'text-emerald-200' : cat.band.color}`}>
                          {cat.catPct}%
                        </span>
                      )}
                      {cat.answered > 0 && cat.answered < cat.items.length && (
                        <span className="text-xs text-gray-500">{cat.answered}/{cat.items.length}</span>
                      )}
                      {cat.answered === cat.items.length && (
                        <svg className={`w-4 h-4 ${isActive ? 'text-emerald-200' : 'text-emerald-500'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                )
              })}
            </nav>

            {/* Score key */}
            <div className="mt-8 bg-emerald-900 rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Scoring Key</p>
              <div className="space-y-2">
                {SCORE_LABELS.map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${SCORE_COLORS[i]}`} />
                    <span className="text-xs text-gray-400">{i} — {label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reset All */}
            {answeredItems > 0 && (
              <button
                onClick={resetAll}
                className="mt-4 w-full px-4 py-3 rounded-lg border border-red-800 text-red-400 text-sm font-medium hover:bg-red-900/30 hover:border-red-600 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset All Criteria
              </button>
            )}
          </aside>

          {/* Main Panel */}
          <main>
            {!showResults ? (
              <div>
                {/* Category Header */}
                <div className="bg-emerald-900 rounded-2xl p-8 mb-6 border border-emerald-800">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-4xl">{activeCat.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{activeCat.title}</h2>
                      <p className="text-gray-400 mt-1">{activeCat.description}</p>
                    </div>
                  </div>
                  {activeCatStats.answered > 0 && (
                    <div className="mt-4 pt-4 border-t border-emerald-800 flex items-center gap-4">
                      <div className="flex-1 h-1.5 bg-emerald-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${activeCatStats.band.bar}`}
                          style={{ width: `${activeCatStats.catPct}%` }}
                        />
                      </div>
                      <span className={`text-sm font-bold ${activeCatStats.band.color}`}>
                        {activeCatStats.catPct}% — {activeCatStats.band.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* Audit Items */}
                <div className="space-y-4">
                  {activeCat.items.map((item, idx) => {
                    const currentScore = scores[item.id]
                    return (
                      <div
                        key={item.id}
                        className={`bg-emerald-900 rounded-xl p-6 border transition-all ${
                          currentScore !== undefined ? 'border-emerald-700' : 'border-emerald-800'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-xs font-bold text-gray-600 mt-1 flex-shrink-0 w-5">{idx + 1}</span>
                          <div className="flex-1">
                            <p className="text-white font-medium mb-4 leading-relaxed">{item.label}</p>
                            <div className="flex flex-wrap gap-3">
                              {SCORE_LABELS.map((label, value) => (
                                <button
                                  key={value}
                                  onClick={() => setScore(item.id, value)}
                                  onDoubleClick={() => currentScore === value && unsetScore(item.id)}
                                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                                    currentScore === value
                                      ? `${SCORE_COLORS[value]} border-transparent text-white`
                                      : 'border-emerald-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 bg-emerald-800'
                                  }`}
                                >
                                  <span className="font-bold">{value}</span>
                                  <span>{label}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Category navigation buttons */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const idx = auditCategories.findIndex(c => c.id === activeCategory)
                      if (idx > 0) setActiveCategory(auditCategories[idx - 1].id)
                    }}
                    disabled={auditCategories.findIndex(c => c.id === activeCategory) === 0}
                    className="px-6 py-3 rounded-lg border border-emerald-700 text-gray-400 font-medium hover:border-gray-500 hover:text-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>

                  {isComplete ? (
                    <button
                      onClick={() => setShowResults(true)}
                      className="px-8 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/50"
                    >
                      View My Results →
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const idx = auditCategories.findIndex(c => c.id === activeCategory)
                        if (idx < auditCategories.length - 1) setActiveCategory(auditCategories[idx + 1].id)
                      }}
                      disabled={auditCategories.findIndex(c => c.id === activeCategory) === auditCategories.length - 1}
                      className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next Category →
                    </button>
                  )}
                </div>

                {isComplete && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-emerald-400">All {totalItems} criteria scored. Ready to view your results.</p>
                  </div>
                )}
              </div>
            ) : (
              /* ===== RESULTS PANEL ===== */
              <div>
                {/* Overall Score Card */}
                <div className="bg-emerald-900 rounded-2xl p-8 border border-emerald-800 mb-8 text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Overall Audit Score</p>
                  <div className={`inline-block text-8xl font-black mb-3 ${band.color}`}>{overallPct}%</div>
                  <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-bold text-lg mb-4 ${band.bg}`}>
                    {band.label}
                  </div>
                  <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">{band.desc}</p>
                </div>

                {/* Category Breakdown */}
                <div className="bg-emerald-900 rounded-2xl p-8 border border-emerald-800 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6">Category Breakdown</h3>
                  <div className="space-y-5">
                    {categoryStats.map(cat => (
                      <div key={cat.id}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span>{cat.icon}</span>
                            <span className="text-sm font-medium text-white">{cat.title}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-bold ${cat.band.color}`}>{cat.band.label}</span>
                            <span className="text-sm font-black text-white w-10 text-right">{cat.catPct}%</span>
                          </div>
                        </div>
                        <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${cat.band.bar}`}
                            style={{ width: `${cat.catPct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Priority Focus Areas */}
                {weakestCategories.length > 0 && (
                  <div className="bg-emerald-900 rounded-2xl p-8 border border-emerald-800 mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">Priority Focus Areas</h3>
                    <p className="text-gray-400 text-sm mb-6">Your lowest-scoring categories where targeted effort will have the greatest impact.</p>
                    <div className="space-y-4">
                      {weakestCategories.map((cat, i) => (
                        <div key={cat.id} className="flex items-center gap-4 bg-emerald-800 rounded-xl p-5">
                          <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center flex-shrink-0 text-xs font-black text-emerald-400">
                            {i + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span>{cat.icon}</span>
                              <p className="font-semibold text-white">{cat.title}</p>
                            </div>
                            <p className="text-sm text-gray-400">
                              Scored {cat.catPct}% — {cat.catMax - cat.catScore} points of improvement available in this category.
                            </p>
                          </div>
                          <span className={`text-lg font-black flex-shrink-0 ${cat.band.color}`}>{cat.catPct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Score Distribution */}
                <div className="bg-emerald-900 rounded-2xl p-8 border border-emerald-800 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6">Score Distribution</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { label: 'Not in Place', value: 0, color: 'text-red-400', bg: 'bg-red-900/30', border: 'border-red-800' },
                      { label: 'Partially in Place', value: 1, color: 'text-yellow-400', bg: 'bg-yellow-900/30', border: 'border-yellow-800' },
                      { label: 'Fully in Place', value: 2, color: 'text-emerald-400', bg: 'bg-emerald-900/30', border: 'border-emerald-800' },
                    ].map(s => {
                      const count = Object.values(scores).filter(v => v === s.value).length
                      const pct = Math.round((count / totalItems) * 100)
                      return (
                        <div key={s.value} className={`rounded-xl p-5 ${s.bg} border ${s.border}`}>
                          <p className={`text-4xl font-black mb-1 ${s.color}`}>{count}</p>
                          <p className={`text-sm font-semibold mb-1 ${s.color}`}>{pct}%</p>
                          <p className="text-xs text-gray-400">{s.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-emerald-950 rounded-2xl p-8 border border-emerald-800 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">Ready to Close the Gaps?</h3>
                  <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                    This audit gives you a clear map. Our consultants turn that map into an execution plan with
                    measurable milestones, accountability systems, and hands-on support at every stage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg"
                    >
                      Schedule a Strategy Call
                    </Link>
                    <button
                      onClick={() => {
                        setShowResults(false)
                        setActiveCategory('operations')
                      }}
                      className="border-2 border-emerald-600 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600/10 transition-all"
                    >
                      Retake the Audit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Performance Bands Reference */}
      <section className="bg-emerald-950 border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="w-16 h-1 bg-emerald-600 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Performance Bands</h2>
          <p className="text-gray-400 mb-10">Understand what each score range means for your restaurant&apos;s operational maturity.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Critical', range: '0 – 40%', color: 'text-red-400', border: 'border-red-800', bg: 'bg-red-900/20', glow: 'hover-glow-red', desc: 'Fundamental operational gaps are present. Immediate strategic intervention is required to stabilize the business.' },
              { label: 'Developing', range: '41 – 70%', color: 'text-yellow-400', border: 'border-yellow-800', bg: 'bg-yellow-900/20', glow: 'hover-glow-yellow', desc: 'Core systems exist but are inconsistently applied. Structured consulting engagement will accelerate progress.' },
              { label: 'Established', range: '71 – 85%', color: 'text-blue-400', border: 'border-blue-800', bg: 'bg-blue-900/20', glow: 'hover-glow-blue', desc: 'A strong foundation is in place. Focused improvements in weaker areas will unlock the next performance level.' },
              { label: 'Optimized', range: '86 – 100%', color: 'text-emerald-400', border: 'border-emerald-800', bg: 'bg-emerald-900/20', glow: 'hover-glow-emerald', desc: 'Operating at a high level across most areas. Focus shifts to sustaining performance and competitive differentiation.' },
            ].map(band => (
              <div key={band.label} className={`rounded-xl p-6 border ${band.border} ${band.bg} ${band.glow}`}>
                <p className={`text-xl font-black mb-1 ${band.color}`}>{band.label}</p>
                <p className={`text-sm font-semibold mb-4 ${band.color} opacity-70`}>{band.range}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{band.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

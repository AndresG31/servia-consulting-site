'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import Footer from '../../components/layout/Footer'
import {
  auditCategories,
  getPerformanceBand,
  getCategoryBand,
  PERFORMANCE_BAND_DEFS,
} from '../auditData'

const SERVICE_ID       = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const AUDIT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUDIT_TEMPLATE_ID
const PUBLIC_KEY       = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

function ScoreDistributionPie({ scores, totalItems }) {
  const tiers = [
    { label: 'Not in Place',       value: 0, color: '#ef4444', textColor: 'text-red-400' },
    { label: 'Partially in Place', value: 1, color: '#eab308', textColor: 'text-yellow-400' },
    { label: 'Fully in Place',     value: 2, color: '#10b981', textColor: 'text-emerald-400' },
  ]
  const counts = tiers.map(t => ({ ...t, count: Object.values(scores).filter(v => v === t.value).length }))
  const total = counts.reduce((a, c) => a + c.count, 0) || 1

  const cx = 70, cy = 70, outerR = 60, innerR = 36
  const toXY = (angle, r) => ({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) })

  let startAngle = -Math.PI / 2
  const slices = counts.map(t => {
    const sweep = (t.count / total) * 2 * Math.PI
    const endAngle = startAngle + sweep
    const s = { ...t, startAngle, endAngle }
    startAngle = endAngle
    return s
  })

  const arcPath = (s) => {
    if (s.count === 0) return ''
    const large = s.endAngle - s.startAngle > Math.PI ? 1 : 0
    const o1 = toXY(s.startAngle, outerR), o2 = toXY(s.endAngle, outerR)
    const i2 = toXY(s.endAngle, innerR),  i1 = toXY(s.startAngle, innerR)
    return `M ${o1.x} ${o1.y} A ${outerR} ${outerR} 0 ${large} 1 ${o2.x} ${o2.y} L ${i2.x} ${i2.y} A ${innerR} ${innerR} 0 ${large} 0 ${i1.x} ${i1.y} Z`
  }

  return (
    <div>
      {/* Pie */}
      <div className="flex justify-center mb-5">
        <svg width="140" height="140" viewBox="0 0 140 140">
          {slices.map(s => s.count > 0 && (
            <path key={s.value} d={arcPath(s)} fill={s.color} />
          ))}
          {/* Center label */}
          <text x="70" y="66" textAnchor="middle" fill="white" fontSize="18" fontWeight="900">{total}</text>
          <text x="70" y="80" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="600">CRITERIA</text>
        </svg>
      </div>
      {/* Legend */}
      <div className="space-y-3">
        {counts.map(t => {
          const pct = Math.round((t.count / totalItems) * 100)
          return (
            <div key={t.value} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
                <span className="text-xs text-white">{t.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${t.textColor}`}>{t.count}</span>
                <span className="text-xs text-white/30">·</span>
                <span className={`text-xs font-black ${t.textColor}`}>{pct}%</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function AuditResultsPage() {
  const router = useRouter()
  const [scores, setScores] = useState(null)
  const [copiedSummary, setCopiedSummary] = useState(false)
  const [downloading, setDownloading] = useState(false)

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStatus, setModalStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [form, setForm] = useState({ fullName: '', businessName: '', email: '', phone: '' })
  const modalFormRef = useRef(null)

  const openModal = () => { setModalOpen(true); setModalStatus('idle'); setForm({ fullName: '', businessName: '', email: '', phone: '' }) }
  const closeModal = () => { setModalOpen(false); setModalStatus('idle') }

  const handleFormChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleModalSubmit = async (e) => {
    e.preventDefault()
    setModalStatus('loading')
    try {
      await Promise.all([
        emailjs.send(
          SERVICE_ID,
          AUDIT_TEMPLATE_ID,
          {
            full_name: form.fullName,
            business_name: form.businessName,
            email: form.email,
            phone: form.phone,
            message: 'Submitted via audit results page — requesting consultant contact.',
          },
          PUBLIC_KEY
        ),
        fetch('/api/audit-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName: form.fullName, email: form.email, phone: form.phone, scores }),
        }),
      ])
      setModalStatus('success')
    } catch (err) {
      console.error('Submission error:', err)
      setModalStatus('error')
    }
  }

  useEffect(() => {
    const raw = localStorage.getItem('auditScores')
    if (!raw) { router.replace('/audit'); return }
    const parsed = JSON.parse(raw)
    if (Object.keys(parsed).length === 0) { router.replace('/audit'); return }
    setScores(parsed)
  }, [router])

  if (!scores) return null

  const totalItems = auditCategories.reduce((acc, cat) => acc + cat.items.length, 0)
  const answeredItems = Object.keys(scores).length

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

  const retakeAudit = () => {
    localStorage.removeItem('auditScores')
    router.push('/audit')
  }

  const copySummary = () => {
    const lines = [
      'Restaurant Audit Summary',
      '========================',
      `Overall Score: ${overallPct}% — ${band.label}`,
      '',
      'Category Scores:',
      ...categoryStats.map(cat => `  ${cat.title}: ${cat.catPct}% — ${cat.band.label} (${cat.answered}/${cat.items.length} answered)`),
      '',
      `Criteria scored: ${answeredItems} of ${totalItems}`,
    ]
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopiedSummary(true)
      setTimeout(() => setCopiedSummary(false), 2500)
    })
  }

  const downloadPdf = async () => {
    setDownloading(true)
    try {
      const res = await fetch('/api/audit-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scores }),
      })
      if (!res.ok) throw new Error('PDF generation failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'servia-audit-results.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch (e) {
      console.error(e)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Hero */}
      <section className="relative bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-90" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 lg:py-28 z-10">
          <div className="w-20 h-1 bg-emerald-600 mb-8" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: title + description */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-600 rounded-full px-4 py-1">Diagnostic Results</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mt-6 mb-4">
                Overall
                <span className="block text-emerald-400 mt-2">Audit Score</span>
              </h1>
              <p className="text-lg text-white leading-relaxed">{band.desc}</p>
            </div>

            {/* Right: score + bar + buttons */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-end gap-4 mb-3">
                  <span className={`text-8xl font-black leading-none ${band.color}`}>{overallPct}%</span>
                  <div className={`inline-flex items-center px-5 py-2 rounded-full text-white font-bold text-lg mb-2 ${band.bg}`}>
                    {band.label}
                  </div>
                </div>
                <div className="h-3 bg-emerald-800 rounded-full overflow-hidden mb-2">
                  <div className={`h-full rounded-full transition-all duration-700 ${band.bg}`} style={{ width: `${overallPct}%` }} />
                </div>
                <p className="text-sm text-emerald-300">{answeredItems} of {totalItems} criteria scored</p>
              </div>

              {/* Consultant CTA */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-600/40 bg-gradient-to-br from-emerald-900 via-emerald-900/80 to-emerald-950">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent" />
                <div className="p-6 flex flex-col gap-4">
                  {/* Icon + headline row */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/30 border border-emerald-600/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base leading-snug">Your score is just the starting point.</p>
                      <p className="text-emerald-300/80 text-sm mt-1 leading-relaxed">
                        The gaps in your results aren't just numbers — they're costing you revenue, consistency, and growth. Our consultants turn your audit into a focused action plan built around your restaurant.
                      </p>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-emerald-800" />
                  {/* Bottom row */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-xs text-emerald-400/70 font-medium uppercase tracking-wide">Free — delivered to your inbox</p>
                    <button
                      onClick={openModal}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors flex-shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Me My Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* Export buttons */}
            <div className="flex flex-col gap-2 mb-4">
              <button
                onClick={copySummary}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-800 text-emerald-300 text-sm font-medium border border-emerald-700 hover:bg-emerald-700 transition-all w-full justify-center"
              >
                {copiedSummary ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Copy Summary
                  </>
                )}
              </button>
              <button
                onClick={downloadPdf}
                disabled={downloading}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-800 text-emerald-300 text-sm font-medium border border-emerald-700 hover:bg-emerald-700 transition-all w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8v8H4z" /></svg>
                    Generating…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download PDF
                  </>
                )}
              </button>
            </div>

            {/* Score Distribution */}
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Score Distribution</p>
              <ScoreDistributionPie scores={scores} totalItems={totalItems} />
            </div>

            {/* Performance Bands */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-4 px-1">Performance Bands</p>
              <div className="space-y-2">
                {PERFORMANCE_BAND_DEFS.map(b => (
                  <div key={b.label} className={`rounded-lg px-4 py-3 border ${b.border} ${b.bg}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold ${b.color}`}>{b.label}</span>
                      <span className={`text-xs font-black ${b.color}`}>{b.range}</span>
                    </div>
                    <p className="text-xs text-white leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Panel */}
          <main>
            {/* Category Breakdown */}
            <div className="bg-emerald-900 rounded-2xl p-8 border border-emerald-800 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Category Breakdown</h3>
              <div className="space-y-5">
                {categoryStats.map(cat => (
                  <div key={cat.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{cat.title}</span>
                        <span className="text-xs text-white opacity-50">{cat.answered}/{cat.items.length}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-bold ${cat.band.color}`}>{cat.band.label}</span>
                        <span className="text-sm font-black text-white w-10 text-right">{cat.catPct}%</span>
                      </div>
                    </div>
                    <div className="h-3 bg-emerald-800 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-700 ${cat.band.bar}`} style={{ width: `${cat.catPct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Focus Areas */}
            {weakestCategories.length > 0 && (
              <div className="bg-emerald-900 rounded-2xl p-8 border border-emerald-800 mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Priority Focus Areas</h3>
                <p className="text-white text-sm mb-6">Your lowest-scoring categories where targeted effort will have the greatest impact.</p>
                <div className="space-y-4">
                  {weakestCategories.map((cat, i) => (
                    <div key={cat.id} className="flex items-center gap-4 bg-emerald-800 rounded-xl p-5">
                      <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center flex-shrink-0 text-xs font-black text-emerald-400">{i + 1}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white mb-1">{cat.title}</p>
                        <p className="text-sm text-white">Scored {cat.catPct}% — {cat.catMax - cat.catScore} points of improvement available in this category.</p>
                      </div>
                      <span className={`text-lg font-black flex-shrink-0 ${cat.band.color}`}>{cat.catPct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Score Distribution — mobile only (sidebar handles desktop) */}
            <div className="lg:hidden bg-emerald-900/40 rounded-2xl p-6 border border-emerald-800 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Score Distribution</p>
              <ScoreDistributionPie scores={scores} totalItems={totalItems} />
            </div>

            {/* Edit / Retake buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/audit" className="border-2 border-emerald-600 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600/10 transition-all text-center">
                Edit Answers
              </Link>
              <button onClick={retakeAudit} className="border-2 border-red-800 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-900/20 transition-all">
                Retake the Audit
              </button>
            </div>

            {/* CTA */}
            <div className="bg-emerald-950 rounded-2xl p-8 border border-emerald-800 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Want a Copy of Your Results?</h3>
              <p className="text-white mb-8 max-w-xl mx-auto leading-relaxed">Get your full audit report delivered straight to your inbox — free. Our consultants will also reach out to help you turn these results into an action plan.</p>
              <button onClick={openModal} className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg">
                Email Me My Free Report
              </button>
            </div>
          </main>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />

          {/* Panel */}
          <div className="relative bg-emerald-950 border border-emerald-700 rounded-2xl w-full max-w-md shadow-2xl">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent rounded-t-2xl" />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-emerald-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {modalStatus === 'success' ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-600/20 border border-emerald-600/40 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Check your inbox!</h3>
                  <p className="text-emerald-300 text-sm">Your full audit report is on its way. A consultant may also follow up to help you put it into action.</p>
                  <button onClick={closeModal} className="mt-6 px-6 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Free — No Strings Attached</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-1">Get Your Audit Report</h3>
                    <p className="text-emerald-300/80 text-sm">Enter your details and we'll email your full results PDF instantly. A consultant may also follow up to help you act on them.</p>
                  </div>

                  {modalStatus === 'error' && (
                    <div className="mb-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg text-red-300 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <form ref={modalFormRef} onSubmit={handleModalSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-emerald-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleFormChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-700 rounded-lg text-white placeholder-emerald-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-emerald-300 mb-1.5">Business Name *</label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={form.businessName}
                        onChange={handleFormChange}
                        placeholder="The Corner Bistro"
                        className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-700 rounded-lg text-white placeholder-emerald-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-emerald-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleFormChange}
                        placeholder="jane@yourrestaurant.com"
                        className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-700 rounded-lg text-white placeholder-emerald-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-emerald-300 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="(123) 456-7890"
                        className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-700 rounded-lg text-white placeholder-emerald-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={modalStatus === 'loading'}
                      className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                    >
                      {modalStatus === 'loading' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        'Get in Touch'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

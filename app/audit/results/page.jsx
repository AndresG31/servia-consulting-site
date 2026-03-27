'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Footer from '../../components/Footer'
import {
  auditCategories,
  getPerformanceBand,
  getCategoryBand,
  PERFORMANCE_BAND_DEFS,
} from '../auditData'

export default function AuditResultsPage() {
  const router = useRouter()
  const [scores, setScores] = useState(null)
  const [copiedSummary, setCopiedSummary] = useState(false)
  const [downloading, setDownloading] = useState(false)

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
                    <p className="text-xs text-emerald-400/70 font-medium uppercase tracking-wide">Free 30-min strategy session</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors flex-shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule a Consultation
                    </Link>
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

              {/* Stacked proportion bar */}
              {(() => {
                const tiers = [
                  { label: 'Not in Place',       value: 0, bar: 'bg-red-500',     color: 'text-red-400',     dot: 'bg-red-500' },
                  { label: 'Partially in Place', value: 1, bar: 'bg-yellow-400',  color: 'text-yellow-400',  dot: 'bg-yellow-400' },
                  { label: 'Fully in Place',     value: 2, bar: 'bg-emerald-500', color: 'text-emerald-400', dot: 'bg-emerald-500' },
                ]
                const counts = tiers.map(t => ({ ...t, count: Object.values(scores).filter(v => v === t.value).length }))
                const total = counts.reduce((a, c) => a + c.count, 0) || 1
                return (
                  <>
                    {/* Segmented bar */}
                    <div className="flex h-3 rounded-full overflow-hidden mb-5 gap-px">
                      {counts.map(t => (
                        <div
                          key={t.value}
                          className={`${t.bar} transition-all duration-700`}
                          style={{ width: `${(t.count / total) * 100}%` }}
                        />
                      ))}
                    </div>

                    {/* Rows */}
                    <div className="space-y-4">
                      {counts.map(t => {
                        const pct = Math.round((t.count / totalItems) * 100)
                        return (
                          <div key={t.value}>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${t.dot}`} />
                                <span className="text-xs text-white">{t.label}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs font-bold ${t.color}`}>{t.count}</span>
                                <span className="text-xs text-white/40">·</span>
                                <span className={`text-xs font-semibold ${t.color} opacity-70`}>{pct}%</span>
                              </div>
                            </div>
                            <div className="h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${t.bar} transition-all duration-700`} style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Performance Bands */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-4 px-1">Performance Bands</p>
              <div className="space-y-2">
                {PERFORMANCE_BAND_DEFS.map(b => (
                  <div key={b.label} className={`rounded-lg px-4 py-3 border ${b.border} ${b.bg}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold ${b.color}`}>{b.label}</span>
                      <span className={`text-xs font-mono ${b.color} opacity-70`}>{b.range}</span>
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
              {(() => {
                const tiers = [
                  { label: 'Not in Place',       value: 0, bar: 'bg-red-500',     color: 'text-red-400',     dot: 'bg-red-500' },
                  { label: 'Partially in Place', value: 1, bar: 'bg-yellow-400',  color: 'text-yellow-400',  dot: 'bg-yellow-400' },
                  { label: 'Fully in Place',     value: 2, bar: 'bg-emerald-500', color: 'text-emerald-400', dot: 'bg-emerald-500' },
                ]
                const counts = tiers.map(t => ({ ...t, count: Object.values(scores).filter(v => v === t.value).length }))
                const total = counts.reduce((a, c) => a + c.count, 0) || 1
                return (
                  <>
                    <div className="flex h-3 rounded-full overflow-hidden mb-5 gap-px">
                      {counts.map(t => (
                        <div key={t.value} className={`${t.bar} transition-all duration-700`} style={{ width: `${(t.count / total) * 100}%` }} />
                      ))}
                    </div>
                    <div className="space-y-4">
                      {counts.map(t => {
                        const pct = Math.round((t.count / totalItems) * 100)
                        return (
                          <div key={t.value}>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${t.dot}`} />
                                <span className="text-xs text-white">{t.label}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs font-bold ${t.color}`}>{t.count}</span>
                                <span className="text-xs text-white/40">·</span>
                                <span className={`text-xs font-semibold ${t.color} opacity-70`}>{pct}%</span>
                              </div>
                            </div>
                            <div className="h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${t.bar} transition-all duration-700`} style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </>
                )
              })()}
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
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Close the Gaps?</h3>
              <p className="text-white mb-8 max-w-xl mx-auto leading-relaxed">This audit gives you a clear map. Our consultants turn that map into an execution plan with measurable milestones, accountability systems, and hands-on support at every stage.</p>
              <Link href="/contact" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg">
                Schedule a Strategy Call
              </Link>
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </div>
  )
}

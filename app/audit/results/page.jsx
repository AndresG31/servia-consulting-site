'use client'

import React, { useState, useEffect, useRef } from 'react'
import ScrollFadeIn from '../../components/ui/ScrollFadeIn'
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

const CATEGORY_TO_SERVICES = {
  operations:  ['business-assessment', 'in-field-consultant', 'implementation-support'],
  financial:   ['revenue-optimization', 'performance-analytics', 'business-assessment'],
  menu:        ['menu-engineering', 'revenue-optimization', 'business-assessment'],
  staff:       ['staff-training', 'in-field-consultant', 'business-assessment'],
  customer:    ['business-assessment', 'in-field-consultant', 'staff-training'],
  marketing:   ['revenue-optimization', 'business-assessment', 'performance-analytics'],
  technology:  ['performance-analytics', 'business-assessment', 'in-field-consultant'],
  maintenance: ['restaurant-maintenance', 'business-assessment', 'in-field-consultant'],
  compliance:  ['restaurant-maintenance', 'business-assessment', 'in-field-consultant'],
}

const SERVICE_DETAILS = {
  'business-assessment':  { label: 'Business Assessment',              pkg: 'Foundation', pkgColor: 'text-emerald-400', desc: 'A full analysis of your operations, pipeline, and growth gaps — delivered as a written report.',         href: '/contact?service=business-assessment' },
  'plan-of-action':       { label: 'Custom Plan of Action',            pkg: 'Foundation', pkgColor: 'text-emerald-400', desc: 'A tailored strategic roadmap with milestones, KPIs, and a clear implementation timeline.',              href: '/contact?service=plan-of-action' },
  'restaurant-maintenance':{ label: 'Restaurant Maintenance',          pkg: 'Foundation', pkgColor: 'text-emerald-400', desc: 'Preventive maintenance programs to eliminate equipment downtime and protect health compliance.',          href: '/contact?service=restaurant-maintenance' },
  'revenue-optimization': { label: 'Revenue Optimization Strategy',    pkg: 'Growth',     pkgColor: 'text-yellow-400',  desc: 'Close revenue leaks, sharpen pricing, and maximize performance across every revenue stream.',             href: '/contact?service=revenue-optimization' },
  'menu-engineering':     { label: 'Menu Engineering & Pricing',       pkg: 'Growth',     pkgColor: 'text-yellow-400',  desc: 'Restructure your menu around food cost, item performance, and margin — not guesswork.',                   href: '/contact?service=menu-engineering' },
  'staff-training':       { label: 'Staff Training & Development',     pkg: 'Growth',     pkgColor: 'text-yellow-400',  desc: 'Build structured programs that improve retention, consistency, and team performance.',                    href: '/contact?service=staff-training' },
  'performance-analytics':{ label: 'Performance Analytics & Reporting',pkg: 'Growth',     pkgColor: 'text-yellow-400',  desc: 'Set up KPIs and dashboards so you always know where your business stands and what to act on.',           href: '/contact?service=performance-analytics' },
  'in-field-consultant':  { label: 'In-Field Consultant',              pkg: 'Enterprise', pkgColor: 'text-purple-400',  desc: 'A dedicated consultant on-site 3 days/week to drive implementation and hold your team accountable.',     href: '/contact?service=in-field-consultant' },
  'implementation-support':{ label: 'Implementation Support',         pkg: 'Enterprise', pkgColor: 'text-purple-400',  desc: 'Hands-on guidance through the execution phase to ensure changes actually stick across your operation.', href: '/contact?service=implementation-support' },
  'monthly-reports':      { label: 'Monthly Progress Reports',         pkg: 'Enterprise', pkgColor: 'text-purple-400',  desc: 'Regular reports covering key metrics, milestones, and recommendations for the period ahead.',            href: '/contact?service=monthly-reports' },
}

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
          <text x="70" y="66" textAnchor="middle" fill="#064e3b" fontSize="18" fontWeight="900">{total}</text>
          <text x="70" y="80" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="600">CRITERIA</text>
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
                <span className="text-xs text-gray-700">{t.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${t.textColor}`}>{t.count}</span>
                <span className="text-xs text-gray-300">·</span>
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

  const recommendedServices = (() => {
    const seen = new Set()
    const result = []
    for (const cat of weakestCategories) {
      for (const svcId of (CATEGORY_TO_SERVICES[cat.id] || [])) {
        if (!seen.has(svcId) && SERVICE_DETAILS[svcId]) {
          seen.add(svcId)
          result.push({ id: svcId, ...SERVICE_DETAILS[svcId] })
        }
        if (result.length >= 3) break
      }
      if (result.length >= 3) break
    }
    return result
  })()

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
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">

      {/* Hard Truth Hero */}
      <section data-header-theme="dark" className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden -mt-[92px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-emerald-500 text-sm font-semibold uppercase tracking-[0.3em] mb-10 opacity-0 animate-page-hero">
            The Hard Truth
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] opacity-0 animate-page-hero"
            style={{ animationDelay: '0.15s' }}
          >
            Most restaurants don't fail
            <span className="block text-emerald-400 mt-3 font-playfair font-normal italic">
              from lack of effort.
            </span>
          </h1>
          <h2
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white/60 leading-tight opacity-0 animate-page-hero"
            style={{ animationDelay: '0.35s' }}
          >
            They fail from lack of direction.
          </h2>
          <div className="mt-14 opacity-0 animate-page-hero" style={{ animationDelay: '0.55s' }}>
            <p className="text-emerald-400 text-lg mb-6">Your audit results are ready below.</p>
            <button
              onClick={() => document.getElementById('score-summary').scrollIntoView({ behavior: 'smooth' })}
              className="mx-auto flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all animate-bounce"
              aria-label="Scroll to results"
            >
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Score Summary */}
      <section id="score-summary" data-header-theme="dark" className="relative overflow-hidden" style={{
        background: overallPct >= 86
          ? 'linear-gradient(135deg, rgb(6, 78, 59) 0%, rgb(5, 46, 22) 100%)'  // emerald/green for Optimized
          : overallPct >= 71
          ? 'linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(17, 24, 39) 100%)'  // blue for Established
          : overallPct >= 41
          ? 'linear-gradient(135deg, rgb(113, 63, 18) 0%, rgb(68, 35, 10) 100%)'  // yellow/amber for Developing
          : 'linear-gradient(135deg, rgb(127, 29, 29) 0%, rgb(69, 10, 10) 100%)'  // red for Critical
      }}>
        <div className="absolute inset-0 backdrop-blur-md" style={{
          backgroundColor: overallPct >= 86
            ? 'rgba(16, 185, 129, 0.1)'  // emerald tint
            : overallPct >= 71
            ? 'rgba(59, 130, 246, 0.1)'  // blue tint
            : overallPct >= 41
            ? 'rgba(234, 179, 8, 0.1)'  // yellow tint
            : 'rgba(239, 68, 68, 0.1)'  // red tint
        }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 py-14 lg:py-20 z-10">
          <div className="w-16 h-1 bg-emerald-600 mb-6" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: title + description */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-600 rounded-full px-4 py-1">Diagnostic Results</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6 mb-4">
                Overall
                <span className="block text-emerald-400 mt-2">Audit Score</span>
              </h2>
              <p className="text-lg text-white leading-relaxed">{band.desc}</p>
            </div>

            {/* Right: score + bar + buttons */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-end gap-4 mb-3 flex-wrap">
                  <span className={`text-6xl sm:text-8xl font-black leading-none ${band.color}`}>{overallPct}%</span>
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
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent" />
                <div className="p-6 flex flex-col gap-4">
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
                  <div className="border-t border-emerald-800" />
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
      <section data-header-theme="light" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* Export buttons */}
            <div className="flex flex-col gap-2 mb-4">
              <button
                onClick={copySummary}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-emerald-700 text-sm font-medium border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all w-full justify-center shadow-sm"
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
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-emerald-700 text-sm font-medium border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
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
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">Score Distribution</p>
              <ScoreDistributionPie scores={scores} totalItems={totalItems} />
            </div>

            {/* Performance Bands */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-900 mb-4 px-1">Performance Bands</p>
              <div className="space-y-2">
                {PERFORMANCE_BAND_DEFS.map(b => {
                  // Determine frosted glass background based on band
                  const glassStyle = b.label === 'Critical'
                    ? { backgroundColor: 'rgba(239, 68, 68, 0.25)', backdropFilter: 'blur(12px)', border: '2px solid rgba(239, 68, 68, 0.5)' }
                    : b.label === 'Developing'
                    ? { backgroundColor: 'rgba(234, 179, 8, 0.25)', backdropFilter: 'blur(12px)', border: '2px solid rgba(234, 179, 8, 0.5)' }
                    : b.label === 'Established'
                    ? { backgroundColor: 'rgba(59, 130, 246, 0.25)', backdropFilter: 'blur(12px)', border: '2px solid rgba(59, 130, 246, 0.5)' }
                    : { backgroundColor: 'rgba(16, 185, 129, 0.25)', backdropFilter: 'blur(12px)', border: '2px solid rgba(16, 185, 129, 0.5)' }

                  return (
                    <div key={b.label} className="rounded-lg px-4 py-3" style={glassStyle}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-bold ${b.color}`}>{b.label}</span>
                        <span className={`text-xs font-black ${b.color}`}>{b.range}</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">{b.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Edit / Retake buttons */}
            <div className="flex flex-col gap-2 mt-6">
              <Link href="/audit" className="border-2 border-emerald-600 text-emerald-400 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-emerald-600/10 transition-all text-center">
                Edit Answers
              </Link>
              <button onClick={retakeAudit} className="border-2 border-red-800 text-red-400 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-red-900/20 transition-all">
                Retake the Audit
              </button>
            </div>

            {/* Email CTA */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/60 mt-6 group hover:border-emerald-400 transition-all">
              {/* Gradient background with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Glass-like glare overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-60"></div>
              <div className="absolute top-0 left-0 right-1/2 bottom-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-xl"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500"></div>

              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

              {/* Content */}
              <div className="relative p-5">
                {/* Icon */}
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-tight">Get Your Free Report</h3>
                <p className="text-white/90 text-xs mb-4 leading-relaxed">Receive your complete audit analysis via email — plus a consultation to turn insights into action.</p>

                <button onClick={openModal} className="w-full bg-white text-emerald-700 px-4 py-3 rounded-lg font-bold text-sm hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me Now
                </button>

                {/* "Free" badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-yellow-400 text-yellow-900 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full shadow-lg">
                    Free
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Panel */}
          <main>
            {/* Category Breakdown */}
            <div className="relative bg-emerald-50 rounded-2xl p-5 sm:p-8 border-2 border-emerald-300 mb-8 transition-shadow duration-300" style={{ boxShadow: '0 8px 32px -4px rgba(16,185,129,0.2), 0 4px 12px -2px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-emerald-900 mb-6">Category Breakdown</h3>
              <div className="space-y-5">
                {categoryStats.map(cat => (
                  <div key={cat.id}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-sm font-medium text-gray-900 truncate">{cat.title}</span>
                        <span className="text-xs text-gray-500 flex-shrink-0">{cat.answered}/{cat.items.length}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-xs sm:text-sm font-bold ${cat.band.color}`}>{cat.band.label}</span>
                        <span className="text-sm font-black text-gray-900 w-9 text-right">{cat.catPct}%</span>
                      </div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-700 ${cat.band.bar}`} style={{ width: `${cat.catPct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>

            {/* Priority Focus Areas */}
            {weakestCategories.length > 0 && (
              <div className="relative bg-emerald-50 rounded-2xl p-5 sm:p-8 border-2 border-emerald-300 mb-8 transition-shadow duration-300" style={{ boxShadow: '0 8px 32px -4px rgba(16,185,129,0.2), 0 4px 12px -2px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Priority Focus Areas</h3>
                  <p className="text-gray-700 text-sm mb-6">Your lowest-scoring categories where targeted effort will have the greatest impact.</p>
                <div className="space-y-4">
                  {weakestCategories.map((cat, i) => (
                    <div key={cat.id} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-emerald-200">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-black text-white">{i + 1}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 mb-1">{cat.title}</p>
                        <p className="text-sm text-gray-700">Scored {cat.catPct}% — {cat.catMax - cat.catScore} points of improvement available in this category.</p>
                      </div>
                      <span className={`text-lg font-black flex-shrink-0 ${cat.band.color}`}>{cat.catPct}%</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            )}

            {/* Recommended Services */}
            {recommendedServices.length > 0 && (
              <div className="relative bg-emerald-50 rounded-2xl p-5 sm:p-8 border-2 border-emerald-300 mb-8 transition-shadow duration-300" style={{ boxShadow: '0 8px 32px -4px rgba(16,185,129,0.2), 0 4px 12px -2px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Recommended Services</h3>
                  <p className="text-gray-700 text-sm mb-6">Based on your lowest-scoring areas, these services are most likely to move the needle for your business.</p>
                <div className="space-y-4">
                  {recommendedServices.map((svc, i) => (
                    <div key={svc.id} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-emerald-200">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-black text-white mt-0.5">{i + 1}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900">{svc.label}</p>
                          <span className={`text-xs font-bold uppercase tracking-widest ${svc.pkgColor}`}>{svc.pkg}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{svc.desc}</p>
                      </div>
                      <Link
                        href={svc.href}
                        className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors mt-0.5"
                      >
                        Inquire
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            )}

            {/* Score Distribution — mobile only (sidebar handles desktop) */}
            <div className="lg:hidden bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">Score Distribution</p>
              <ScoreDistributionPie scores={scores} totalItems={totalItems} />
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

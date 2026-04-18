'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Footer from '../../../components/layout/Footer'
import { services, QUIZ_SCORING } from '../../serviceData'

function computeResults(answers) {
  const totals = {}
  for (const [qId, vals] of Object.entries(answers)) {
    const valArr = Array.isArray(vals) ? vals : [vals]
    for (const val of valArr) {
      const weights = QUIZ_SCORING[qId]?.[val] || {}
      for (const [svcId, pts] of Object.entries(weights)) {
        totals[svcId] = (totals[svcId] || 0) + pts
      }
    }
  }
  return Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([id]) => services.find(s => s.slug === id))
    .filter(Boolean)
}

const pkgBadge = {
  emerald: 'text-emerald-400',
  yellow:  'text-yellow-400',
  purple:  'text-purple-400',
}

export default function QuizResultsPage() {
  const searchParams = useSearchParams()
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get answers from URL params
    const answersParam = searchParams.get('answers')
    if (answersParam) {
      try {
        const answers = JSON.parse(decodeURIComponent(answersParam))
        const computed = computeResults(answers)
        setResults(computed)
      } catch (e) {
        console.error('Failed to parse answers', e)
      }
    }
    setLoading(false)
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading your results...</div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="min-h-screen bg-emerald-950">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">No Results Found</h1>
          <p className="text-gray-300 mb-8">Please take the quiz to see your personalized recommendations.</p>
          <Link href="/service/quiz" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all">
            Take the Quiz
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const topMatch = results[0]
  const secondMatch = results[1]

  return (
    <div className="min-h-screen bg-emerald-950">
      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[500px] -mt-[92px]">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Decorative glow elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 pt-36 pb-16 lg:pt-44 lg:pb-24 text-center">
          {/* Success Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full px-4 py-2 mb-6 opacity-0 animate-page-hero">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Quiz Complete</span>
          </div>

          {/* Emerald accent */}
          <div className="w-20 h-1 bg-emerald-600 mb-8 mx-auto opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}></div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.2s' }}>
            Your Perfect
            <span className="block text-emerald-400 mt-2">Match</span>
          </h1>

          <p className="text-xl text-gray-100 mb-6 leading-relaxed opacity-0 animate-page-hero max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
            Based on your answers, we've identified the services that best match your current needs and goals.
          </p>
        </div>
      </section>

      {/* Top Match Section */}
      <section data-header-theme="light" className="relative bg-white py-24">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Match Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-full px-6 py-3 mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="font-bold text-lg">Your Top Match</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
              {topMatch.label}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className={`text-sm font-bold uppercase tracking-widest ${pkgBadge[topMatch.pkgColor]}`}>
                {topMatch.pkg}
              </span>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{topMatch.tagline}</p>
          </div>

          {/* Service Details Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/30 mb-8">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start mb-8">
              <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">Why This Service?</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {topMatch.shortDesc}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This service is ideal for your situation because it addresses the specific challenges you identified in the quiz and aligns with where you are in your business journey.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/contact?service=${topMatch.contactParam}`}
                className="bg-emerald-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Get Started with {topMatch.label}
              </Link>
              <Link
                href={`/service/${topMatch.slug}`}
                className="border-2 border-emerald-600 text-emerald-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all text-center"
              >
                Learn More About This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second Match (Alternative) */}
      {secondMatch && (
        <section data-header-theme="dark" className="relative bg-gradient-to-b from-emerald-950 to-emerald-900 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-emerald-400 font-semibold mb-2">Another Great Option</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Alternative Recommendation
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                This service also scored highly based on your needs and could be a great fit.
              </p>
            </div>

            <div className="bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-600/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white">{secondMatch.label}</h3>
                    <span className={`text-xs font-bold uppercase tracking-widest ${pkgBadge[secondMatch.pkgColor]}`}>
                      {secondMatch.pkg}
                    </span>
                  </div>
                  <p className="text-emerald-300 mb-2">{secondMatch.tagline}</p>
                  <p className="text-gray-300 mb-6">{secondMatch.shortDesc}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/contact?service=${secondMatch.contactParam}`}
                      className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-all text-center"
                    >
                      Inquire About This Service
                    </Link>
                    <Link
                      href={`/service/${secondMatch.slug}`}
                      className="border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400/10 transition-all text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Audit CTA Section */}
      <section data-header-theme="light" className="relative bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-100 mb-3">Want the Full Picture?</p>
            <h3 className="text-3xl font-bold text-white mb-4">Take the Free Restaurant Audit</h3>
            <p className="text-emerald-50 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Our comprehensive audit scores your operation across 9 critical categories—financials, staffing, menu, maintenance, and more—giving you a detailed breakdown of exactly where to focus.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Take the Free Audit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Actions */}
      <section data-header-theme="dark" className="relative bg-emerald-950 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">Not quite what you were looking for?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/service/quiz" className="text-emerald-400 hover:text-emerald-300 font-semibold underline transition-colors">
              Retake the Quiz
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href="/service" className="text-emerald-400 hover:text-emerald-300 font-semibold underline transition-colors">
              Browse All Services
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 font-semibold underline transition-colors">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

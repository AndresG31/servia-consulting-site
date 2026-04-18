'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '../../components/layout/Footer'

export default function SubscribeThankYouPage() {
  return (
    <div className="min-h-screen bg-emerald-950">
      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-screen -mt-[92px] flex items-center">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Decorative glow elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-20 text-center w-full">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 opacity-0 animate-page-hero shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full px-4 py-2 mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}>
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">You're In!</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.2s' }}>
            Welcome to
            <span className="block text-emerald-400 mt-2">Servia Insights</span>
          </h1>

          <p className="text-xl text-gray-100 mb-8 leading-relaxed opacity-0 animate-page-hero max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
            Thanks for subscribing! Check your inbox for a welcome email with resources to help you get started.
          </p>

          {/* What's Next Section */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-emerald-600/30 rounded-2xl p-8 mb-8 text-left max-w-2xl mx-auto opacity-0 animate-page-hero" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Check Your Email</h3>
                  <p className="text-gray-300">You'll receive a welcome email in the next few minutes with links to our best resources.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Get Exclusive Content</h3>
                  <p className="text-gray-300">Bi-weekly insights, actionable tips, and industry trends delivered straight to your inbox.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Access Your Free Resources</h3>
                  <p className="text-gray-300">Download your profitability checklist and other exclusive tools for subscribers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-bold text-white mb-4">While You're Here...</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Don't wait for the next email. Start improving your restaurant right now with our free tools.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              {/* Free Audit Card */}
              <div className="bg-white/5 backdrop-blur-sm border-2 border-emerald-600/30 rounded-xl p-6 hover:border-emerald-400 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Free Restaurant Audit</h3>
                <p className="text-gray-300 text-sm mb-4">Get a detailed scorecard across 9 categories in 10 minutes</p>
                <Link href="/audit" className="inline-block w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all">
                  Take the Audit
                </Link>
              </div>

              {/* Package Quiz Card */}
              <div className="bg-white/5 backdrop-blur-sm border-2 border-emerald-600/30 rounded-xl p-6 hover:border-emerald-400 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Find Your Service</h3>
                <p className="text-gray-300 text-sm mb-4">Take our 30-second quiz for personalized recommendations</p>
                <Link href="/service/quiz" className="inline-block w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all">
                  Take the Quiz
                </Link>
              </div>
            </div>

            {/* Download Lead Magnet */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-white mb-1">Download Your Free Checklist</h3>
                  <p className="text-emerald-50 text-sm">5 Quick Wins to Boost Restaurant Profitability</p>
                </div>
              </div>
              <a
                href="/resources/profitability-checklist.pdf"
                download
                className="inline-block w-full bg-white text-emerald-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                Download Checklist (PDF)
              </a>
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t border-emerald-600/30 opacity-0 animate-page-hero" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-400 mb-4">Know someone who could benefit from these insights?</p>
            <div className="flex gap-3 justify-center">
              <a
                href={`https://twitter.com/intent/tweet?text=Just subscribed to @ServiaConsulting for restaurant operations insights!&url=${encodeURIComponent('https://serviaconsulting.com/insights')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://serviaconsulting.com/insights')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../components/layout/Footer'
import ScrollFadeIn from '../components/ui/ScrollFadeIn'

const faqs = [
  {
    q: 'What does a free restaurant audit include?',
    a: 'Our free audit covers 54 diagnostic criteria across 9 key business areas — operations, financials, staffing, menu quality, marketing, technology, maintenance, compliance, and customer experience. You receive a scored report with a performance band and prioritized action items.',
  },
  {
    q: 'How long does the initial consultation take?',
    a: 'The initial consultation typically runs 60–90 minutes. We use that time to understand your business, review your audit results if completed, and outline a tailored strategy.',
  },
  {
    q: 'Do you work with businesses outside the Rio Grande Valley?',
    a: 'Yes. While we are based in the Rio Grande Valley, we offer virtual consulting sessions and serve clients throughout Texas and nationwide.',
  },
  {
    q: 'Which package is right for me?',
    a: 'Package 1 (Foundation) is ideal if you want a clear picture of where you stand. Package 2 (Growth) is for operators ready to implement changes. Package 3 (Enterprise) is for multi-location or high-volume operations needing ongoing strategic support.',
  },
  {
    q: 'Do you offer ongoing support after the engagement ends?',
    a: 'Yes. All packages include follow-up check-ins, and we offer retainer-based ongoing advisory relationships for clients who want continuous support.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'You can start the free audit immediately — no appointment needed. For paid engagements, onboarding typically begins within 3–5 business days of signing.',
  },
]

function FaqAccordion() {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-300 overflow-hidden ${open === i ? 'border-emerald-600 bg-emerald-50' : 'border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/50'}`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
          >
            <span className="text-emerald-900 font-semibold">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-48 pb-5' : 'max-h-0'}`}>
            <p className="px-6 text-gray-700 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-screen lg:min-h-[600px] -mt-[92px]">
        {/* Full-width Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            key="service-hero-video"
          >
            <source src="/assets/services/servicesHR_compressed.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-screen lg:min-h-[600px]">

            {/* Left Side - Headline Content with Black Background Filter */}
            <div className="relative flex flex-col justify-start px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-12 lg:pt-36 lg:pb-16 z-10">
              {/* Black background filter with 50% transparency */}
              <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-page"></div>

              {/* Content with delayed animation */}
              <div className="relative z-10">
                {/* Emerald accent */}
                <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-page-hero"></div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}>
                  Analyzing Your
                  <span className="block text-emerald-400 mt-2">
                    Business Pipeline
                  </span>
                </h1>

                <p className="text-xl sm:text-xl text-gray-100 mb-8 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
                  Every business is unique, with its own challenges, opportunities, and vision.
                  We don't believe in one-size-fits-all solutions. Instead, we dive deep into
                  understanding your operations, analyzing every aspect of your pipeline.
                </p>

                <p className="text-lg text-gray-200 mb-10 max-w-xl opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
                  From initial assessment to strategic planning and implementation, we tailor
                  our services to meet your specific needs—ensuring sustainable growth and
                  measurable results.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-page-hero" style={{ animationDelay: '0.7s' }}>
                  <Link href="/audit" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Start Your Audit
                  </Link>
                  <Link href="/service/quiz" className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400/10 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    30-Second Quiz
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - hidden on mobile */}
            <div className="hidden lg:block relative h-full lg:min-h-full">
              {/* Video shows through from background */}
            </div>

          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section data-header-theme="dark" className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>

        {/* Green glowing squares */}
        <div className="absolute top-12 left-8 w-16 h-16 border-2 border-emerald-600/30 rounded-lg rotate-12 animate-float animate-pulse-glow anim-delay-0" />
        <div className="absolute top-32 right-12 w-20 h-20 border-2 border-emerald-600/20 rounded-lg -rotate-6 animate-float-slow animate-pulse-glow anim-delay-400" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header */}
          <ScrollFadeIn>
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Service
              <span className="block text-emerald-400 mt-2">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that best fits your business needs. Each tier builds upon the last,
              providing comprehensive solutions for sustainable growth.
            </p>
          </div>
          </ScrollFadeIn>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Package 1 - Foundation */}
            <ScrollFadeIn delay={100}>
            <div className="relative bg-gradient-to-b from-emerald-800 to-emerald-900 rounded-2xl p-8 border-2 border-emerald-600/30 hover:border-emerald-400 hover:bg-gradient-to-b hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 hover:shadow-2xl hover:shadow-emerald-500/50">
              {/* Package Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full font-bold text-sm group-hover:bg-white group-hover:text-emerald-600 transition-colors">
                PACKAGE 1
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Package Icon */}
                <div className="w-16 h-16 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6 mt-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-8 h-8 text-emerald-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white">Foundation</h3>

                <div className="mb-6">
                  <p className="text-sm text-emerald-400 group-hover:text-white font-semibold mb-3 transition-colors">STARTER PACKAGE</p>
                  <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                    Get a comprehensive understanding of your business with our in-depth assessment and strategic action plan.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 text-left w-full">
                  {[
                    { label: 'Complete Business Assessment', slug: 'business-assessment' },
                    { label: 'Custom Plan of Action', slug: 'plan-of-action' },
                    { label: 'Pipeline Analysis', slug: null },
                    { label: 'Strategic Recommendations', slug: null },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item.slug ? (
                        <Link href={`/service/${item.slug}`} className="flex items-center gap-1 text-gray-200 group-hover:text-white transition-colors hover:text-emerald-300 group-hover:hover:text-emerald-200">
                          {item.label}
                          <svg className="w-3 h-3 opacity-60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-gray-200 group-hover:text-white transition-colors">{item.label}</span>
                      )}
                    </div>
                  ))}
                </div>

                <Link href="/service/package/foundation" className="w-full bg-emerald-600 text-white group-hover:bg-white group-hover:text-emerald-600 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            </ScrollFadeIn>

            {/* Package 2 - Growth */}
            <ScrollFadeIn delay={200}>
            <div className="relative bg-gradient-to-b from-emerald-900/40 to-gray-900 rounded-2xl p-8 border-2 border-emerald-500 hover:border-emerald-400 hover:bg-gradient-to-b hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 shadow-xl shadow-emerald-600/20 hover:shadow-2xl hover:shadow-emerald-500/50">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold text-sm group-hover:bg-white group-hover:text-emerald-600 transition-colors text-center">
                PACKAGE 2 POPULAR
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Package Icon */}
                <div className="w-16 h-16 bg-emerald-500/30 rounded-xl flex items-center justify-center mb-6 mt-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-8 h-8 text-emerald-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white">Growth</h3>

                <div className="mb-6">
                  <p className="text-sm text-emerald-300 group-hover:text-white font-semibold mb-3 transition-colors">MOST POPULAR</p>
                  <p className="text-gray-200 group-hover:text-white leading-relaxed transition-colors">
                    Everything in Foundation, plus deeper operational coaching to sharpen your team, refine your menu, and accelerate revenue growth.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 text-left w-full">
                  {[
                    { label: 'Everything in Foundation', slug: null },
                    { label: 'Revenue Optimization Strategy', slug: 'revenue-optimization' },
                    { label: 'Menu Engineering & Pricing Strategy', slug: 'menu-engineering' },
                    { label: 'Staff Training & Development Plan', slug: 'staff-training' },
                    { label: 'Performance Analytics & Reporting', slug: 'performance-analytics' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-300 group-hover:text-white flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item.slug ? (
                        <Link href={`/service/${item.slug}`} className="flex items-center gap-1 text-gray-100 group-hover:text-white transition-colors hover:text-emerald-300 group-hover:hover:text-emerald-200">
                          {item.label}
                          <svg className="w-3 h-3 opacity-60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-gray-100 group-hover:text-white font-medium transition-colors">{item.label}</span>
                      )}
                    </div>
                  ))}
                </div>

                <Link href="/service/package/growth" className="w-full bg-emerald-500 text-white group-hover:bg-white group-hover:text-emerald-600 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            </ScrollFadeIn>

            {/* Package 3 - Enterprise */}
            <ScrollFadeIn delay={300}>
            <div className="relative bg-gradient-to-b from-emerald-800 to-emerald-900 rounded-2xl p-8 border-2 border-emerald-600/30 hover:border-emerald-400 hover:bg-gradient-to-b hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 hover:shadow-2xl hover:shadow-emerald-500/50">
              {/* Package Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full font-bold text-sm group-hover:bg-white group-hover:text-emerald-600 transition-colors">
                PACKAGE 3
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Package Icon */}
                <div className="w-16 h-16 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6 mt-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-8 h-8 text-emerald-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white">Enterprise</h3>

                <div className="mb-6">
                  <p className="text-sm text-emerald-400 group-hover:text-white font-semibold mb-3 transition-colors">PREMIUM PACKAGE</p>
                  <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                    Complete solution with dedicated in-field consulting to ensure your plan is executed perfectly.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 text-left w-full">
                  {[
                    { label: 'Everything in Foundation & Growth', slug: null },
                    { label: 'In-Field Consultant', slug: 'in-field-consultant' },
                    { label: '3 Days/Week On-Site Support', slug: null },
                    { label: '3-Month Contract (Renewable)', slug: null },
                    { label: 'Implementation Support', slug: 'implementation-support' },
                    { label: 'Monthly Progress Reports', slug: 'monthly-reports' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item.slug ? (
                        <Link href={`/service/${item.slug}`} className="flex items-center gap-1 text-gray-200 group-hover:text-white transition-colors hover:text-emerald-300 group-hover:hover:text-emerald-200">
                          {item.label}
                          <svg className="w-3 h-3 opacity-60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-gray-200 group-hover:text-white font-medium transition-colors">{item.label}</span>
                      )}
                    </div>
                  ))}
                </div>

                <Link href="/service/package/enterprise" className="w-full bg-emerald-600 text-white group-hover:bg-white group-hover:text-emerald-600 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            </ScrollFadeIn>

          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Not sure which package is right for you?{' '}
              <Link href="/service/quiz" className="text-emerald-400 hover:text-emerald-300 font-semibold underline">
                Take the 30-second quiz
              </Link>
            </p>
          </div>
        </div>
      </section>



      {/* Individual Services Section */}
      <section data-header-theme="light" className="relative bg-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

        {/* Animated corner squares */}
        <div className="absolute bottom-12 left-12 w-16 h-16 border-2 border-emerald-600/30 rounded-lg rotate-12 animate-float anim-delay-0" />
        <div className="absolute top-12 right-12 w-20 h-20 border-2 border-emerald-600/20 rounded-lg -rotate-6 animate-float-slow anim-delay-800" />
        {/* ScrollFadeIn import handled at top of file */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 mb-6">
              What&apos;s Inside
              <span className="block text-emerald-600 mt-2">Our Packages</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every service we deliver is built around real restaurant operations. Here&apos;s a deeper look at what each one actually involves.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">

            {/* Service 1 - Business Assessment */}
            <ScrollFadeIn>
            <Link href="/service/business-assessment" className="block relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Business Assessment <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Strategy</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Diagnosis</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">We conduct a thorough analysis of your business operations, identifying strengths, weaknesses, opportunities, and potential roadblocks. Our assessment covers your sales pipeline, operational efficiency, customer acquisition strategies, and technology infrastructure.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Pipeline Analysis', 'Operations Review', 'Technology Audit', 'Growth Opportunities'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 2 - Plan of Action */}
            <ScrollFadeIn delay={100}>
            <Link href="/service/plan-of-action" className="block relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Custom Plan of Action <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Strategy</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Planning</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">Based on our assessment, we develop a tailored strategic plan designed specifically for your business. This actionable roadmap includes clear milestones, timelines, resource allocation, and measurable KPIs to track your progress toward sustainable growth.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Strategic Roadmap', 'Clear Milestones', 'Measurable KPIs', 'Implementation Timeline'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 3 - In-Field Consulting */}
            <ScrollFadeIn delay={150}>
            <Link href="/service/in-field-consultant" className="block relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">In-Field Consultant <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Execution</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Hands-On</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">Our dedicated consultant works on-site at your business three days a week to ensure your strategic plan is executed flawlessly. This hands-on approach provides accountability, real-time problem-solving, and direct support to your team during the critical implementation phase.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['3 Days/Week On-Site', 'Hands-on Implementation', 'Team Training', 'Progress Monitoring'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 4 - Restaurant Maintenance */}
            <ScrollFadeIn>
            <Link href="/service/restaurant-maintenance" className="block relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Restaurant Maintenance <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Operations</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Compliance</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">A well-maintained kitchen is the backbone of any successful restaurant. We provide comprehensive kitchen maintenance consulting — helping you build preventive maintenance schedules, ensure equipment longevity, maintain health code compliance, and reduce costly emergency repairs that disrupt service and impact your bottom line.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Equipment Audit', 'Preventive Maintenance', 'Health Code Compliance', 'Emergency Protocols'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 5 - Revenue Optimization */}
            <ScrollFadeIn>
            <Link href="/service/revenue-optimization" className="block relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Revenue Optimization Strategy <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Profitability</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Revenue</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">We identify and close the revenue gaps that are costing you money — analyzing pricing, upsell opportunities, peak hour performance, and underperforming revenue streams to build a clear plan for top-line growth.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Pricing Gap Analysis', 'Upsell & Cross-sell Strategy', 'Peak Hour Optimization', 'Revenue Stream Review'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 6 - Menu Engineering */}
            <ScrollFadeIn delay={100}>
            <Link href="/service/menu-engineering" className="block relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Menu Engineering &amp; Pricing <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Profitability</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Menu</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">Your menu is one of your most powerful profit levers. We analyze item-level food cost, sales velocity, and contribution margin to restructure your menu for maximum profitability without sacrificing guest experience.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Item-Level Cost Analysis', 'Profitability Matrix', 'Strategic Pricing', 'Menu Design Guidance'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 7 - Staff Training */}
            <ScrollFadeIn delay={150}>
            <Link href="/service/staff-training" className="block relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Staff Training &amp; Development <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Staffing</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Retention</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">High turnover and inconsistent service kill restaurants. We build structured training programs, define role expectations, and create a development path that improves retention, performance, and team culture.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Training Programs', 'Role Expectations', 'Development Paths', 'Manager Coaching'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 8 - Performance Analytics */}
            <ScrollFadeIn>
            <Link href="/service/performance-analytics" className="block relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Performance Analytics &amp; Reporting <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Data</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Reporting</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">Most operators are flying blind. We set up the right KPIs, build simple dashboards, and establish a reporting cadence so you always know what&apos;s working, what isn&apos;t, and where to focus next.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['KPI Framework', 'Dashboard Setup', 'Weekly Reporting', 'Data-Driven Decisions'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 9 - Implementation Support */}
            <ScrollFadeIn delay={100}>
            <Link href="/service/implementation-support" className="block relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Implementation Support <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Execution</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Growth</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">A strategy is only as good as its execution. We stay involved through the rollout phase — helping your team adopt new processes, troubleshoot issues in real time, and ensure changes stick across your operation.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Phased Rollout Planning', 'Launch Support', 'Change Management', 'Checkpoint Reviews'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 10 - Monthly Reports */}
            <ScrollFadeIn delay={150}>
            <Link href="/service/monthly-reports" className="block relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Monthly Progress Reports <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Reporting</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Accountability</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">Regular, structured reporting keeps you accountable and informed. Each month you receive a clear breakdown of key metrics, milestones hit, open action items, and our recommendations for the period ahead.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Monthly KPI Review', 'Milestone Tracking', 'Action Item Follow-Up', 'Trend Analysis'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 11 - Financial Review */}
            <ScrollFadeIn delay={200}>
            <Link href="/service/financial-review" className="block relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Financial Review <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Finance</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Strategy</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">A deep-dive into your restaurant's financial health — food cost, labor cost, margins, and pricing — with a clear action plan to improve profitability.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['P&L Analysis', 'Food & Labor Cost Breakdown', 'Menu Pricing Assessment', 'Cash Flow Overview'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 12 - Pipeline Analysis */}
            <ScrollFadeIn delay={250}>
            <Link href="/service/pipeline-analysis" className="block relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Pipeline Analysis <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Strategy</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Diagnosis</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">We map your entire business pipeline from customer acquisition to retention, identifying bottlenecks, revenue leaks, and untapped efficiency opportunities.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Customer Journey Mapping', 'Revenue Flow Analysis', 'Bottleneck Identification', 'Efficiency Opportunities'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

            {/* Service 13 - Strategic Recommendations */}
            <ScrollFadeIn delay={300}>
            <Link href="/service/strategic-recommendations" className="block relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-500 transition-colors inline-flex items-center gap-2">Strategic Recommendations <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></h3>
                  <div className="flex gap-2 flex-wrap mb-4"><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Strategy</span><span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Planning</span></div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">Prioritized, actionable recommendations based on what will move the needle most for your specific situation — with a clear order of operations and resource allocation guide.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Prioritized Action Items', 'Quick Wins Identified', 'Long-term Strategy', 'Resource Allocation Guide'].map(item => (<div key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-800 font-medium">{item}</span></div>))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-emerald-600/[0.12] to-transparent group-hover:from-emerald-600/25 transition-all duration-300 rounded-r-2xl pointer-events-none hidden lg:flex items-center justify-end pr-6"><svg className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
            </Link>
            </ScrollFadeIn>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-emerald-950 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-emerald-900 text-lg mb-8 max-w-2xl mx-auto">
              Not sure what you need? Let&apos;s talk through it. Schedule a free consultation and we&apos;ll point you in the right direction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-emerald-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-950 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
                Work With Us
              </a>
              <a href="/audit" className="border-2 border-emerald-900 text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-900/10 transition-all inline-block">
                Take the Free Audit
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Audit Funnel Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <div className="w-16 h-1 bg-emerald-600 mb-8" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-600 rounded-full px-4 py-1">Free Diagnostic Tool</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-6 mb-6">
                Not Sure Where
                <span className="block text-emerald-400 mt-1">to Start?</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Before choosing a service package, take our free Restaurant Audit. It evaluates your operations across every key category — from staffing and financials to guest experience and marketing — and gives you a scored breakdown of exactly where your business stands.
              </p>
              <p className="text-base text-emerald-300/80 leading-relaxed mb-10">
                The results will show you which gaps are costing you the most, making it easy to match the right service to your real needs — not just a guess.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: '10 min', label: 'To complete' },
                  { value: '100%', label: 'Free' },
                  { value: 'PDF', label: 'Report included' },
                ].map(stat => (
                  <div key={stat.label} className="border border-emerald-800 rounded-xl p-4 text-center bg-emerald-900/30">
                    <p className="text-2xl font-black text-emerald-400 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/audit"
                className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500 transition-all shadow-lg"
              >
                Take the Free Audit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Right — what gets evaluated */}
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6">What the audit covers</p>
              <div className="space-y-4">
                {[
                  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', label: 'Operations & Kitchen Management', desc: 'SOPs, workflow, inventory, waste tracking' },
                  { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Financial Performance', desc: 'Food cost, labor cost, P&L, cash flow' },
                  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M12 12h.01M12 16h.01M12 8h.01', label: 'Menu & Product Quality', desc: 'Pricing, recipes, profitability, suppliers' },
                  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: 'Staff & Human Resources', desc: 'Hiring, training, retention, scheduling' },
                  { icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', label: 'Customer Experience', desc: 'Reviews, feedback, loyalty, wait times' },
                  { icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z', label: 'Marketing & Brand', desc: 'Online presence, social, promotions' },
                  { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Technology & Systems', desc: 'POS, reservations, reporting tools' },
                  { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', label: 'Maintenance & Preventative Care', desc: 'Equipment upkeep, repairs, safety checks' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Compliance & Safety', desc: 'Health codes, permits, food safety standards' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-emerald-900/50 border border-emerald-800/60">
                    <div className="w-9 h-9 rounded-lg bg-emerald-600/20 border border-emerald-600/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-emerald-300/70 text-xs">{item.desc}</p>
                    </div>
                    <svg className="w-4 h-4 text-emerald-600 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-header-theme="light" className="relative bg-white border-t border-emerald-600/10 py-20">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
              Frequently Asked
              <span className="block text-emerald-600 mt-2">Questions</span>
            </h2>
            <p className="text-gray-700 text-lg">Everything you need to know before getting started.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicePage

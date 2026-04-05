'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../components/layout/Footer'

const faqs = [
  {
    q: 'What does a free restaurant audit include?',
    a: 'Our free audit covers 48 diagnostic criteria across 8 key business areas — operations, financials, staffing, marketing, customer experience, and more. You receive a scored report with a performance band and prioritized action items.',
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
        <div key={i} className={`rounded-xl border transition-all duration-300 overflow-hidden ${open === i ? 'border-emerald-600 bg-emerald-900/60' : 'border-emerald-800 bg-emerald-900/30 hover:border-emerald-700'}`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
          >
            <span className="text-white font-semibold">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-48 pb-5' : 'max-h-0'}`}>
            <p className="px-6 text-gray-300 leading-relaxed">{faq.a}</p>
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
      <section className="relative bg-emerald-950 overflow-hidden min-h-[600px]">
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
            <source src="/assets/services/servicesHR.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">

            {/* Left Side - Headline Content with Black Background Filter */}
            <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-16 z-10">
              {/* Black background filter with 50% transparency */}
              <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-delayed"></div>

              {/* Content with delayed animation */}
              <div className="relative z-10">
                {/* Emerald accent */}
                <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-slide-in-delayed"></div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.2s' }}>
                  Analyzing Your
                  <span className="block text-emerald-400 mt-2">
                    Business Pipeline
                  </span>
                </h1>

                <p className="text-xl sm:text-xl text-gray-100 mb-8 leading-relaxed opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.4s' }}>
                  Every business is unique, with its own challenges, opportunities, and vision.
                  We don't believe in one-size-fits-all solutions. Instead, we dive deep into
                  understanding your operations, analyzing every aspect of your pipeline.
                </p>

                <p className="text-lg text-gray-200 mb-10 max-w-xl opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.6s' }}>
                  From initial assessment to strategic planning and implementation, we tailor
                  our services to meet your specific needs—ensuring sustainable growth and
                  measurable results.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.8s' }}>
                  <Link href="/audit" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Start Your Audit
                  </Link>
                  <Link href="/service" className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400/10 transition-all">
                    View Packages
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Empty (video is full-width background) */}
            <div className="relative h-full min-h-[500px] lg:min-h-full">
              {/* Video shows through from background */}
            </div>

          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>

        {/* Green glowing squares */}
        <div className="absolute top-12 left-8 w-16 h-16 border-2 border-emerald-600/30 rounded-lg rotate-12 animate-float animate-pulse-glow anim-delay-0" />
        <div className="absolute top-32 right-12 w-20 h-20 border-2 border-emerald-600/20 rounded-lg -rotate-6 animate-float-slow animate-pulse-glow anim-delay-400" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header */}
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

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Package 1 - Foundation */}
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
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">Complete Business Assessment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">Custom Plan of Action</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">Pipeline Analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">Strategic Recommendations</span>
                  </div>
                </div>

                <Link href="/contact?service=package1" className="w-full bg-emerald-600 text-white group-hover:bg-white group-hover:text-emerald-600 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Package 2 - Growth */}
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
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-300 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100 group-hover:text-white font-medium transition-colors">Everything in Foundation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-300 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100 group-hover:text-white transition-colors">Revenue Optimization Strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-300 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100 group-hover:text-white transition-colors">Menu Engineering & Pricing Strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-300 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100 group-hover:text-white transition-colors">Staff Training & Development Plan</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-300 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100 group-hover:text-white transition-colors">Performance Analytics & Reporting Strategy</span>
                  </div>
                </div>

                <Link href="/contact?service=package2" className="w-full bg-emerald-500 text-white group-hover:bg-white group-hover:text-emerald-600 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Package 3 - Enterprise */}
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
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white font-medium transition-colors">Everything in Foundation & Growth</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">In-Field Consultant</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">3 Days/Week On-Site Support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">3-Month Contract (Renewable)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">Implementation Support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 group-hover:text-white transition-colors">Monthly Progress Reports</span>
                  </div>
                </div>

                <Link href="/contact?service=package3" className="w-full bg-emerald-600 text-white group-hover:bg-white group-hover:text-emerald-600 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Not sure which package is right for you?{' '}
              <a href="/contact" className="text-emerald-400 hover:text-emerald-300 font-semibold underline">
                Contact us for a free consultation
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="relative bg-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

        {/* Animated corner squares */}
        <div className="absolute bottom-12 left-12 w-16 h-16 border-2 border-emerald-600/30 rounded-lg rotate-12 animate-float anim-delay-0" />
        <div className="absolute top-12 right-12 w-20 h-20 border-2 border-emerald-600/20 rounded-lg -rotate-6 animate-float-slow anim-delay-800" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 mb-6">
              Our Core
              <span className="block text-emerald-600 mt-2">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each service is designed to address specific business needs. Mix and match or choose a package
              for a comprehensive solution.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">

            {/* Service 1 - Business Assessment */}
            <div className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Icon */}
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-4">Business Assessment</h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    We conduct a thorough analysis of your business operations, identifying strengths, weaknesses,
                    opportunities, and potential roadblocks. Our assessment covers your sales pipeline, operational
                    efficiency, customer acquisition strategies, and technology infrastructure.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Pipeline Analysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Operations Review</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Technology Audit</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Growth Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Plan of Action */}
            <div className="bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Icon */}
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-4">Custom Plan of Action</h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Based on our assessment, we develop a tailored strategic plan designed specifically for your business.
                    This actionable roadmap includes clear milestones, timelines, resource allocation, and measurable KPIs
                    to track your progress toward sustainable growth.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Strategic Roadmap</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Clear Milestones</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Measurable KPIs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Implementation Timeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - In-Field Consulting */}
            <div className="bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all group">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Icon */}
                <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-4">In-Field Consultant</h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Our dedicated consultant works on-site at your business five days a week to ensure your strategic
                    plan is executed flawlessly. This hands-on approach provides accountability, real-time problem-solving,
                    and direct support to your team during the critical implementation phase.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">3 Days/Week On-Site</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Hands-on Implementation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Team Training</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 font-medium">Progress Monitoring</span>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 bg-emerald-50 border border-emerald-600/30 rounded-lg p-4">
                    <p className="text-emerald-700 text-sm font-medium">
                      <span className="font-bold">3-Month Minimum Contract</span> - Renewable monthly based on progress and needs.
                      Monthly fee covers dedicated consultant time, implementation support, and ongoing optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-emerald-900/80 via-emerald-800/80 to-emerald-900/80 rounded-2xl p-12 border border-emerald-600/30">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss which services or package best fits your needs. Schedule a free consultation
              to get started on your growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
                Schedule Consultation
              </a>
              <a href="tel:+1234567890" className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400/10 transition-all inline-block">
                Call Us Today
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Audit Funnel Section */}
      <section className="relative bg-emerald-950 overflow-hidden">
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
                  { value: '5 min', label: 'To complete' },
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
                  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', label: 'Operations & Systems', desc: 'SOPs, consistency, kitchen efficiency' },
                  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: 'Staffing & Leadership', desc: 'Hiring, training, retention' },
                  { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Financial Health', desc: 'Food cost, labor cost, margins' },
                  { icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', label: 'Guest Experience', desc: 'Reviews, hospitality, loyalty' },
                  { icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z', label: 'Marketing & Visibility', desc: 'Online presence, social, promotions' },
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Growth & Scalability', desc: 'Expansion readiness, partnerships' },
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
      <section id="faq" className="bg-black border-t border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked
              <span className="block text-emerald-400 mt-2">Questions</span>
            </h2>
            <p className="text-gray-300 text-lg">Everything you need to know before getting started.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicePage

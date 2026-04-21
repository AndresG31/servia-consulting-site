'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '../../../components/layout/Footer'
import ScrollFadeIn from '../../../components/ui/ScrollFadeIn'

const GrowthPackagePage = () => {
  return (
    <div className="min-h-screen bg-emerald-950">
      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[600px] -mt-[92px]">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Decorative glow elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-36 pb-16 lg:pt-44 lg:pb-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/30 border border-emerald-500/60 rounded-full px-4 py-2 mb-6 opacity-0 animate-page-hero">
              <span className="text-emerald-300 font-bold text-sm uppercase tracking-wider">Package 2 • Most Popular</span>
            </div>

            {/* Emerald accent */}
            <div className="w-20 h-1 bg-emerald-500 mb-8 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}></div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.2s' }}>
              Growth
              <span className="block text-emerald-400 mt-2">Package</span>
            </h1>

            <p className="text-xl text-gray-100 mb-6 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
              Everything in Foundation, plus deeper operational coaching to sharpen your team, refine your menu, and accelerate revenue growth.
            </p>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.4s' }}>
              Our most popular package for restaurant operators ready to move beyond diagnostics and start implementing real improvements. You get the strategic plan plus the tactical support to actually make it happen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
              <Link href="/contact?service=package2" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                Get Started with Growth
              </Link>
              <Link href="/audit" className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400/10 transition-all text-center">
                Take Free Audit First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section data-header-theme="light" className="relative bg-white py-24">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6">
              What's
              <span className="block text-emerald-600 mt-2">Included</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything from the Foundation Package, plus five additional high-impact services designed to drive measurable results.
            </p>
          </div>

          {/* Foundation Services Note */}
          <div className="bg-emerald-50 border-2 border-emerald-600/30 rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Includes Everything in Foundation Package</h3>
                <p className="text-gray-700">Complete Business Assessment • Custom Plan of Action • Pipeline Analysis • Strategic Recommendations</p>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="space-y-8">
            {/* Service 1 - Revenue Optimization */}
            <ScrollFadeIn>
              <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Revenue Optimization Strategy</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      We identify and close the revenue gaps that are costing you money—analyzing pricing, upsell opportunities, peak hour performance, and underperforming revenue streams to build a clear plan for top-line growth.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['Pricing Gap Analysis', 'Upsell & Cross-sell Strategy', 'Peak Hour Optimization', 'Revenue Stream Review'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/revenue-optimization"
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                    >
                      Learn More About This Service
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Service 2 - Menu Engineering */}
            <ScrollFadeIn delay={100}>
              <div className="relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Menu Engineering & Pricing Strategy</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Your menu is one of your most powerful profit levers. We analyze item-level food cost, sales velocity, and contribution margin to restructure your menu for maximum profitability without sacrificing guest experience.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['Item-Level Cost Analysis', 'Profitability Matrix', 'Strategic Pricing', 'Menu Design Guidance'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/menu-engineering"
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                    >
                      Learn More About This Service
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Service 3 - Staff Training */}
            <ScrollFadeIn delay={150}>
              <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Staff Training & Development Plan</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      High turnover and inconsistent service kill restaurants. We build structured training programs, define role expectations, and create a development path that improves retention, performance, and team culture.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['Training Programs', 'Role Expectations', 'Development Paths', 'Manager Coaching'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/staff-training"
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                    >
                      Learn More About This Service
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Service 4 - Performance Analytics */}
            <ScrollFadeIn delay={200}>
              <div className="relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Performance Analytics & Reporting Strategy</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Most operators are flying blind. We set up the right KPIs, build simple dashboards, and establish a reporting cadence so you always know what's working, what isn't, and where to focus next.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['KPI Framework', 'Dashboard Setup', 'Weekly Reporting', 'Data-Driven Decisions'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/performance-analytics"
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                    >
                      Learn More About This Service
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section data-header-theme="dark" className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How It
              <span className="block text-emerald-400 mt-2">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive 8-12 week engagement from assessment to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Foundation Phase',
                desc: 'Complete assessment, pipeline analysis, and strategic planning (weeks 1-3)',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
              },
              {
                step: '02',
                title: 'Revenue & Menu',
                desc: 'Revenue optimization and menu engineering analysis (weeks 4-6)',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                step: '03',
                title: 'Team Development',
                desc: 'Staff training programs and performance systems implementation (weeks 7-9)',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
              },
              {
                step: '04',
                title: 'Tracking & Refinement',
                desc: 'Analytics setup, reporting cadence, and ongoing refinement (weeks 10-12)',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-600/30 hover:border-emerald-400 transition-all h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>

                  <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 mt-4">
                    <svg className="w-7 h-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section data-header-theme="light" className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6">
              Who This
              <span className="block text-emerald-600 mt-2">Is For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border-2 border-emerald-600/20">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Perfect For:</h3>
              <ul className="space-y-3">
                {[
                  'Established operators ready to scale',
                  'Restaurants with inconsistent profitability',
                  'Owners tired of guessing and want data',
                  'Teams experiencing high turnover',
                  'Operators who want to implement, not just plan'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-300">
              <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Not Ideal For:</h3>
              <ul className="space-y-3">
                {[
                  'Brand new restaurants (under 6 months)',
                  'Owners wanting only a diagnostic report',
                  'Multi-location chains (see Enterprise Package)',
                  'Restaurants in immediate crisis mode',
                  'Those unable to commit 8-12 weeks'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-header-theme="dark" className="relative bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
            Let's build a comprehensive strategy and give you the tools to execute it successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=package2" className="bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Schedule Your Consultation
            </Link>
            <Link href="/service/quiz" className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              Take Package Quiz
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GrowthPackagePage

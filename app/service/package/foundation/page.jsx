'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '../../../components/layout/Footer'
import ScrollFadeIn from '../../../components/ui/ScrollFadeIn'

const FoundationPackagePage = () => {
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
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full px-4 py-2 mb-6 opacity-0 animate-page-hero">
              <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Package 1</span>
            </div>

            {/* Emerald accent */}
            <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}></div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.2s' }}>
              Foundation
              <span className="block text-emerald-400 mt-2">Package</span>
            </h1>

            <p className="text-xl text-gray-100 mb-6 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
              Get a comprehensive understanding of your restaurant's current state with our in-depth assessment and strategic action plan.
            </p>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.4s' }}>
              Perfect for restaurant owners who want clarity on where they stand and a clear roadmap for improvement. This package provides the diagnostic foundation needed to make informed decisions about your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
              <Link href="/contact?service=package1" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                Get Started with Foundation
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
              The Foundation Package includes four core services that work together to give you a complete picture of your restaurant's performance and potential.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            {/* Service 1 - Business Assessment */}
            <ScrollFadeIn>
              <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Complete Business Assessment</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      We conduct a thorough 54-point diagnostic across 9 critical business areas—operations, financials, staffing, marketing, customer experience, and more. This isn't a surface-level review; we dive deep to understand how your restaurant actually runs day-to-day.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['Pipeline Analysis', 'Operations Review', 'Technology Audit', 'Growth Opportunities'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/business-assessment"
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

            {/* Service 2 - Custom Plan of Action */}
            <ScrollFadeIn delay={100}>
              <div className="relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Custom Plan of Action</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Based on the assessment findings, we develop a tailored strategic plan designed specifically for your restaurant. This actionable roadmap includes clear milestones, timelines, and measurable KPIs so you know exactly what to focus on first, second, and third.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['Strategic Roadmap', 'Clear Milestones', 'Measurable KPIs', 'Implementation Timeline'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/plan-of-action"
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

            {/* Service 3 - Pipeline Analysis */}
            <ScrollFadeIn delay={150}>
              <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Pipeline Analysis</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      We map out your entire business pipeline—from customer acquisition to retention, from ordering to delivery, from staffing to training. This gives you visibility into where bottlenecks exist, where revenue is leaking, and where opportunities are hiding.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['Customer Journey Mapping', 'Revenue Flow Analysis', 'Bottleneck Identification', 'Efficiency Opportunities'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/pipeline-analysis"
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

            {/* Service 4 - Strategic Recommendations */}
            <ScrollFadeIn delay={200}>
              <div className="relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Strategic Recommendations</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      You'll receive prioritized, actionable recommendations based on what will move the needle most for your specific situation. We don't just point out problems—we tell you exactly what to do about them, in what order, and why it matters.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {['Prioritized Action Items', 'Quick Wins Identified', 'Long-term Strategy', 'Resource Allocation Guide'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/service/strategic-recommendations"
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
              A clear, structured process from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                desc: 'We meet to understand your restaurant, your challenges, and your goals. This helps us tailor the assessment to what matters most to you.',
                icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              },
              {
                step: '02',
                title: 'Deep Dive Assessment',
                desc: 'We conduct the 54-point diagnostic, review your operations, analyze your financials, and evaluate your systems over a 1-2 week period.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
              },
              {
                step: '03',
                title: 'Plan Development',
                desc: 'We synthesize findings and build your custom action plan with prioritized recommendations, timelines, and success metrics.',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              },
              {
                step: '04',
                title: 'Results Presentation',
                desc: 'We walk you through the full assessment, explain the findings, review the action plan, and answer your questions in detail.',
                icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-600/30 hover:border-emerald-400 transition-all h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>

                  <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-4 mt-4">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>

                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-600/50 z-10"></div>
                )}
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
                  'New restaurant owners seeking clarity',
                  'Operators who feel stuck or overwhelmed',
                  'Owners considering expansion or changes',
                  'Restaurants experiencing inconsistent performance',
                  'Anyone wanting an objective third-party assessment'
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
                  'Owners needing hands-on implementation support',
                  'Multi-location operations (see Enterprise Package)',
                  'Restaurants requiring immediate operational fixes',
                  'Those seeking ongoing advisory relationships',
                  'Operators wanting someone to execute the plan'
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

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Not sure if this is the right fit?{' '}
              <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-semibold underline">
                Schedule a free consultation
              </Link>
              {' '}to discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-header-theme="dark" className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
            Let's build a clear picture of where your restaurant stands and create a roadmap to get you where you want to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=package1" className="bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Schedule Your Assessment
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

export default FoundationPackagePage

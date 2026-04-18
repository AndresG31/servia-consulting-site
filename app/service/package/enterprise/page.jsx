'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '../../../components/layout/Footer'
import ScrollFadeIn from '../../../components/ui/ScrollFadeIn'

const EnterprisePackagePage = () => {
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
              <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Package 3 • Premium</span>
            </div>

            {/* Emerald accent */}
            <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}></div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.2s' }}>
              Enterprise
              <span className="block text-emerald-400 mt-2">Package</span>
            </h1>

            <p className="text-xl text-gray-100 mb-6 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
              Complete solution with everything in Foundation and Growth, plus dedicated in-field consulting to ensure your plan is executed perfectly.
            </p>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.4s' }}>
              Our premium package for serious operators who want a partner embedded in their operation. You get hands-on implementation support, on-site coaching, and accountability to make sure changes actually stick.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
              <Link href="/contact?service=package3" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                Get Started with Enterprise
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
              Everything from Foundation and Growth Packages, plus three additional premium services for hands-on execution support.
            </p>
          </div>

          {/* Foundation + Growth Services Note */}
          <div className="bg-emerald-50 border-2 border-emerald-600/30 rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Includes Everything in Foundation & Growth Packages</h3>
                <p className="text-gray-700">Business Assessment • Custom Plan • Pipeline Analysis • Strategic Recommendations • Revenue Optimization • Menu Engineering • Staff Training • Performance Analytics</p>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="space-y-8">
            {/* Service 1 - In-Field Consultant */}
            <ScrollFadeIn>
              <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Dedicated In-Field Consultant</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Our dedicated consultant works on-site at your restaurant three days a week to ensure your strategic plan is executed flawlessly. This hands-on approach provides accountability, real-time problem-solving, and direct support to your team during the critical implementation phase.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {['3 Days/Week On-Site', 'Hands-on Implementation', 'Team Training', 'Real-Time Problem Solving'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Service 2 - Implementation Support */}
            <ScrollFadeIn delay={100}>
              <div className="relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Full Implementation Support</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      A strategy is only as good as its execution. We stay involved through the entire rollout phase—helping your team adopt new processes, troubleshoot issues in real time, and ensure changes stick across your operation. No more shelf-ware consulting reports.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {['Phased Rollout Planning', 'Launch Support', 'Change Management', 'Process Documentation'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Service 3 - Monthly Progress Reports */}
            <ScrollFadeIn delay={150}>
              <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-600/20 hover:border-emerald-600 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">Monthly Progress Reports</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Regular, structured reporting keeps you accountable and informed. Each month you receive a clear breakdown of key metrics, milestones hit, open action items, and our recommendations for the period ahead. You always know exactly where you stand.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {['Monthly KPI Review', 'Milestone Tracking', 'Action Item Follow-Up', 'Trend Analysis'].map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Engagement Terms Section */}
      <section data-header-theme="dark" className="relative bg-gradient-to-b from-emerald-950 to-emerald-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Engagement
              <span className="block text-emerald-400 mt-2">Structure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-600/30">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3-Month Minimum</h3>
              <p className="text-gray-300 leading-relaxed">
                Initial engagement is a 3-month contract to ensure we have enough time to implement meaningful changes and see measurable results.
              </p>
            </div>

            <div className="bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-600/30">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Renewable Contract</h3>
              <p className="text-gray-300 leading-relaxed">
                After the initial period, continue on a month-to-month basis or commit to longer terms. Flexibility to scale up or down based on your needs.
              </p>
            </div>

            <div className="bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-600/30">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3 Days Per Week</h3>
              <p className="text-gray-300 leading-relaxed">
                Your consultant is on-site three days per week, with remote support available as needed during off-days. Consistent presence without overwhelming your team.
              </p>
            </div>
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
                  'Multi-location or high-volume operations',
                  'Owners preparing for rapid expansion',
                  'Restaurants undergoing major transitions',
                  'Teams lacking internal expertise',
                  'Operators who want guaranteed execution'
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
                  'Single-location starter restaurants',
                  'Owners wanting a one-time consultation',
                  'Restaurants with limited budgets',
                  'Teams resistant to outside involvement',
                  'Those unwilling to commit 3+ months'
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
      <section data-header-theme="dark" className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready for Hands-On Partnership?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
            Let's embed an expert in your operation and ensure every strategic initiative gets executed flawlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=package3" className="bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Schedule Enterprise Consultation
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

export default EnterprisePackagePage

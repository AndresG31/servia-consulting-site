import React from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'

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

      <Footer />
    </div>
  )
}

export default ServicePage

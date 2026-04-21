'use client'

import React from 'react'
import Image from 'next/image'
import Footer from '../components/layout/Footer'
import MeetTheTeam from '../components/sections/MeetTheTeam'
import ScrollFadeIn from '../components/ui/ScrollFadeIn'

const AboutPage = () => {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-screen -mt-[92px]">
        {/* Full-width Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/aboutus/about-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-screen">

            {/* Left Side - Headline Content with Black Background Filter */}
            <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-36 pb-12 lg:pt-44 lg:pb-16 z-10">
              {/* Black background filter with 50% transparency */}
              <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-page"></div>

              {/* Content with delayed animation */}
              <div className="relative z-10">
                {/* Emerald accent */}
                <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-page-hero"></div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}>
                  About
                  <span className="block text-emerald-400 mt-2">
                    Servia Consulting
                  </span>
                </h1>

                <p className="text-xl sm:text-xl text-gray-100 mb-8 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
                  Founded on principles of service, integrity, and excellence—delivering strategic solutions
                  powered by cutting-edge technology.
                </p>

                <p className="text-lg text-gray-200 mb-10 max-w-xl opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
                  Built on Eagle Scout values and service industry expertise, we bring a unique approach
                  to business consulting that puts your success first.
                </p>

                {/* Social CTA */}
                <div className="opacity-0 animate-page-hero" style={{ animationDelay: '0.7s' }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Follow Us</p>
                  <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <a href="https://www.facebook.com/profile.php?id=61583970260191" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-2 bg-white/10 hover:bg-emerald-600 border border-white/20 hover:border-emerald-600 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                    <a href="https://www.instagram.com/serviaconsulting?igsh=MWV3dW1razh1dzA1Mw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 bg-white/10 hover:bg-emerald-600 border border-white/20 hover:border-emerald-600 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                    <a href="https://www.linkedin.com/company/109907500" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 bg-white/10 hover:bg-emerald-600 border border-white/20 hover:border-emerald-600 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="https://www.tiktok.com/@andres.gutierrez3935?_r=1&_t=ZT-95Jfc5qQTS2" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center gap-2 bg-white/10 hover:bg-emerald-600 border border-white/20 hover:border-emerald-600 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                      </svg>
                      TikTok
                    </a>
                    <a href="#" aria-label="Google Business" className="flex items-center gap-2 bg-white/10 hover:bg-emerald-600 border border-white/20 hover:border-emerald-600 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Google
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Empty (image is full-width background) */}
            <div className="relative h-full min-h-[500px] lg:min-h-full">
              {/* Image shows through from background */}
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section data-header-theme="light" className="relative bg-white py-20">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-emerald-700">Meet the Founder</h2>
          </div>
          </ScrollFadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section with Emerald Wrapper */}
            <ScrollFadeIn delay={100}>
            <div className="relative">
              <div className="relative p-6 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 rounded-xl shadow-2xl">
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-emerald-400 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-emerald-700 rounded-lg"></div>

                {/* Image container */}
                <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/assets/aboutus/founder-skiing.png"
                      alt="Andres Gutierrez - Founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Stats badges on emerald background */}
                <div className="absolute -top-3 right-8 bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-emerald-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">Eagle Scout</div>
                    <div className="text-xs text-gray-600 font-medium">Leadership Honor</div>
                  </div>
                </div>

                <div className="absolute top-1/4 -left-3 bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-emerald-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">5 Years</div>
                    <div className="text-xs text-gray-600 font-medium">Chick-fil-A</div>
                  </div>
                </div>
              </div>

              {/* Background decorative element */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-emerald-100 rounded-xl"></div>
            </div>
            </ScrollFadeIn>

            {/* Info Section */}
            <ScrollFadeIn delay={200}>
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-3xl font-bold text-emerald-900">Andres Gutierrez</h3>
                <a
                  href="https://www.linkedin.com/in/contactandresgutierrez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0077B5] px-3 py-1.5 rounded-full hover:bg-[#005e8e] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
              <p className="text-emerald-600 font-semibold text-lg">Founder & Lead Consultant, Servia Consulting</p>

              <div className="w-20 h-1 bg-emerald-600"></div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Andres brings a rare combination of front-line operational experience and strategic consulting discipline to every engagement. After five years at Chick-fil-A — one of the most operationally precise restaurant brands in the world — he founded Servia to give independent operators access to the same level of systems thinking, team development, and structured problem-solving that drives elite brands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                His Eagle Scout background instilled a lifelong commitment to service, integrity, and showing up prepared — values that show up in every client interaction and every deliverable Servia produces.
              </p>

              {/* Credential tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Eagle Scout', '5 Years Chick-fil-A', 'Operations Specialist', 'Restaurant Consulting', 'Team Development'].map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section data-header-theme="dark" className="relative bg-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
            <div className="space-y-6">
              <div className="w-20 h-1 bg-emerald-400"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Five Years of
                <span className="block text-emerald-400 mt-2">Strategic Excellence</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                For the past five years, Servia Consulting has been at the forefront of the consulting industry,
                helping businesses transform their operations and achieve sustainable growth. Our journey has been
                defined by unwavering commitment to service and excellence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We've built our reputation on deep industry expertise, strategic thinking, and a genuine dedication
                to our clients' success. Every engagement is approached with the same level of care and attention
                that has become our hallmark.
              </p>
              <div className="pt-4">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400">5+</div>
                    <div className="text-sm text-gray-400 mt-1">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400">50+</div>
                    <div className="text-sm text-gray-400 mt-1">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400">98%</div>
                    <div className="text-sm text-gray-400 mt-1">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-700 text-lg">Client-First Approach</h3>
                        <p className="text-gray-600 text-sm">Every strategy tailored to your unique needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-700 text-lg">Proven Results</h3>
                        <p className="text-gray-600 text-sm">Measurable outcomes that drive growth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-700 text-lg">Expert Team</h3>
                        <p className="text-gray-600 text-sm">Industry veterans with deep expertise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>


      {/* Roots in Service - Boy Scouts & Order of the Arrow */}
      <section data-header-theme="light" className="relative bg-white py-20 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-emerald-600"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 leading-tight">
              Rooted in
              <span className="block text-emerald-600 mt-2">Service & Leadership</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our values are deeply inspired by the principles of the Boy Scouts of America and the Order of the Arrow—
              organizations that have championed service, leadership, and integrity for over a century.
            </p>
          </div>
          </ScrollFadeIn>

          {/* Service in Action - Moved to top */}
          <ScrollFadeIn delay={100}>
          <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-600/20 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-emerald-700 mb-4">Service in Action</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                These organizations don't just teach values—they demand action. Service isn't a concept;
                it's a way of life that shapes how we approach every challenge and opportunity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-emerald-700 mb-2">Cheerful Service</h4>
                <p className="text-gray-600 text-sm">Serving with enthusiasm and positivity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-emerald-700 mb-2">Brotherhood</h4>
                <p className="text-gray-600 text-sm">Building lasting partnerships</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-emerald-700 mb-2">Leadership</h4>
                <p className="text-gray-600 text-sm">Leading by example and integrity</p>
              </div>
            </div>
          </div>
          </ScrollFadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Boy Scouts of America */}
            <ScrollFadeIn delay={200}>
            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-600/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-700">Boy Scouts of America</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 1910, the Boy Scouts of America has instilled values of character, citizenship, and
                leadership in millions of young people. The Scout Oath and Scout Law serve as guiding principles—
                teaching individuals to be trustworthy, loyal, helpful, friendly, courteous, kind, obedient,
                cheerful, thrifty, brave, clean, and reverent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These timeless values form the foundation of how we conduct business at Servia Consulting.
                Every client interaction is guided by integrity, every solution is crafted with care, and
                every relationship is built on trust.
              </p>
            </div>
            </ScrollFadeIn>

            {/* Order of the Arrow */}
            <ScrollFadeIn delay={300}>
            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-600/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-700">Order of the Arrow</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Order of the Arrow, Scouting's National Honor Society, was founded on the principles of
                brotherhood, cheerfulness, and service. Members are called to render cheerful service to others,
                to promote camping and responsible outdoor adventure, and to crystallize the Scout habit of helpfulness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This commitment to selfless service is woven into every aspect of Servia Consulting. We don't just
                provide solutions—we serve our clients with dedication, going above and beyond to ensure their success.
              </p>
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Founder's Experience - Chick-fil-A */}
      <section data-header-theme="dark" className="relative bg-emerald-950 py-20 overflow-hidden">
        {/* Full-width Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/aboutus/aboutus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Black overlay filter with 50% transparency */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn delay={100}>
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-700 mb-2">Service Industry Expertise</h3>
                    <p className="text-emerald-600 font-semibold">5 Years at Chick-fil-A</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Operational excellence in high-volume environment</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Customer service at the highest standard</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Team leadership and development</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Leadership development programs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Systems thinking and process optimization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">System development and implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200}>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-20 h-1 bg-emerald-400"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Forged in
                <span className="block text-emerald-400 mt-2">Service Excellence</span>
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                Our founder, <span className="font-bold text-white">Andres Gutierrez</span>, brings a unique perspective shaped by
                five years of service industry experience at Chick-fil-A—a company renowned for its unwavering commitment
                to exceptional service and operational excellence.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                At Chick-fil-A, every team member learns that service isn't just about transactions—it's about creating
                remarkable experiences. This philosophy, combined with Eagle Scout values and consulting expertise,
                creates a powerful foundation for transformative business solutions.
              </p>

              <div className="bg-emerald-900/70 border-l-4 border-emerald-400 p-6 rounded-r-lg">
                <p className="text-gray-100 italic leading-relaxed">
                  "My pleasure"—these two words represent more than customer service; they embody a mindset of
                  cheerful service that I carry into every client engagement. Excellence isn't an act; it's a habit.
                </p>
                <p className="text-emerald-400 font-semibold mt-4">— Andres Gutierrez, Founder</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-emerald-900/70 border border-emerald-600/30 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">5 Years</div>
                  <div className="text-sm text-gray-300">Chick-fil-A Service</div>
                </div>
                <div className="bg-emerald-900/70 border border-emerald-600/30 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">Eagle Scout</div>
                  <div className="text-sm text-gray-300">Leadership Honor</div>
                </div>
              </div>
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section data-header-theme="light" className="relative bg-white py-20 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-emerald-600 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-emerald-600 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-emerald-600 rounded-lg rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-emerald-600 rounded-lg -rotate-6"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-emerald-600"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 leading-tight">
              Our Core
              <span className="block text-emerald-600 mt-2">Values</span>
            </h2>
          </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollFadeIn delay={100}>
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-8 rounded-2xl border-2 border-emerald-600/30 hover:border-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-600/50">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">Integrity First</h3>
              <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                Trustworthy, loyal, and honest in every interaction. Our word is our bond, and we honor our commitments.
              </p>
            </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200}>
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-8 rounded-2xl border-2 border-emerald-600/30 hover:border-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-600/50">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">Service Above Self</h3>
              <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                Cheerfully serving our clients with dedication, going beyond expectations to ensure their success.
              </p>
            </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={300}>
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-8 rounded-2xl border-2 border-emerald-600/30 hover:border-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-600/50">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">Excellence Always</h3>
              <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                Prepared, resourceful, and committed to delivering the highest quality in everything we do.
              </p>
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <MeetTheTeam />

      {/* Call to Action */}
      <section data-header-theme="light" className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 leading-tight">
              Ready to Experience
              <span className="block text-emerald-600 mt-2">Service-Driven Consulting?</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Let's discuss how our unique blend of service excellence, strategic thinking, and
              cutting-edge technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block text-center">
                Schedule a Consultation
              </a>
              <a href="/service" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all inline-block text-center">
                View Our Services
              </a>
            </div>
          </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage

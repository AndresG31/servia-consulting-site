'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import CountUp from '../ui/CountUp'

const CYCLING_WORDS = ['Results', 'Revenue', 'Growth', 'Profitability', 'Confidence']

const HeroSection = () => {
  const [displayedWord, setDisplayedWord] = useState('')
  const [started, setStarted] = useState(false)
  const wordIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const deletingRef = useRef(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Wait for the hero entrance animations to finish before starting
    const startDelay = setTimeout(() => setStarted(true), 1600)
    return () => clearTimeout(startDelay)
  }, [])

  useEffect(() => {
    if (!started) return

    const type = () => {
      const word = CYCLING_WORDS[wordIndexRef.current]

      if (!deletingRef.current) {
        charIndexRef.current++
        setDisplayedWord(word.slice(0, charIndexRef.current))
        if (charIndexRef.current === word.length) {
          deletingRef.current = true
          timeoutRef.current = setTimeout(type, 2800)
        } else {
          timeoutRef.current = setTimeout(type, 80)
        }
      } else {
        charIndexRef.current--
        setDisplayedWord(word.slice(0, charIndexRef.current))
        if (charIndexRef.current === 0) {
          deletingRef.current = false
          wordIndexRef.current = (wordIndexRef.current + 1) % CYCLING_WORDS.length
          timeoutRef.current = setTimeout(type, 350)
        } else {
          timeoutRef.current = setTimeout(type, 40)
        }
      }
    }

    timeoutRef.current = setTimeout(type, 100)
    return () => clearTimeout(timeoutRef.current)
  }, [started])

  return (
    <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[700px] -mt-[92px]">
      {/* Full-width Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/homepage/Images/Video/HeroSection_compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[700px]">

          {/* Left Side */}
          <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-36 pb-16 lg:pt-44 lg:pb-24 z-10">
            {/* Black background filter */}
            <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-delayed"></div>

            <div className="relative z-10">
              {/* Eyebrow */}
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-5 opacity-0 animate-page-hero">
                Restaurant · Hospitality · Food Service
              </p>

              {/* Emerald accent */}
              <div className="w-20 h-1 bg-emerald-600 mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}></div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.2s' }}>
                <span className="font-playfair font-normal italic">Strategy</span> That
                <span className="block text-white mt-2">Drives</span>
                <span className="block text-emerald-400">
                  {displayedWord}
                  <span className="inline-block w-[3px] h-[0.85em] bg-emerald-400 ml-1 align-middle animate-blink" />
                </span>
              </h1>

              <p className="text-xl sm:text-xl text-gray-100 mb-10 leading-relaxed opacity-0 animate-page-hero max-w-lg" style={{ animationDelay: '0.35s' }}>
                We transform complex challenges into clear opportunities,
                empowering restaurants to build stronger systems and grow with confidence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
                <Link href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                  Work With Us
                </Link>
                <Link href="/service" className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400/10 transition-all text-center">
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-600 opacity-0 animate-page-hero" style={{ animationDelay: '0.65s' }}>
                <div>
                  <div className="text-3xl font-bold text-emerald-400"><CountUp end={50} suffix="+" /></div>
                  <div className="text-sm text-gray-300 mt-1">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400"><CountUp end={98} suffix="%" /></div>
                  <div className="text-sm text-gray-300 mt-1">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400"><CountUp end={5} suffix="+" /></div>
                  <div className="text-sm text-gray-300 mt-1">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — video shows through */}
          <div className="relative h-full min-h-[500px] lg:min-h-full" />

        </div>
      </div>
    </section>
  )
}

export default HeroSection

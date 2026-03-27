'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-emerald-900 shadow-sm z-50 border border-white/40 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 -mx-2">
              <Image
                src="/assets/logos/servia-icon.png"
                alt="Servia Consulting"
                width={72}
                height={72}
                className="object-contain brightness-0 invert"
              />
            </div>
            <div>
            <h1 className="text-2xl font-bold text-white">
                Servia Consulting
            </h1>

              <p className="text-sm text-emerald-600 italic">
                "Business in Motion"
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-emerald-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/service" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Services
            </Link>
            <Link href="/insights" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Insights
            </Link>
            <Link href="/audit" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Restaurant Audit
            </Link>
            <Link href="/contact" className="bg-emerald-600 text-white px-6 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header

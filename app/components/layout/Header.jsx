'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/blog', label: 'Blog' },
  { href: '/audit', label: 'Restaurant Audit' },
]

const Header = () => {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Hide header when footer is visible
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

  // Detect which section is under the header and swap pill theme + show back to top
  useEffect(() => {
    const handleScroll = () => {
      const y = 92
      const scrollY = window.scrollY

      // Show back to top button after scrolling down 400px
      setShowBackToTop(scrollY > 400)

      // Update theme based on section
      const els = document.querySelectorAll('[data-header-theme]')
      let current = 'dark'
      els.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= y && rect.bottom > y) {
          current = el.dataset.headerTheme
        }
      })
      setTheme(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-white/5 backdrop-blur-md border-b border-white/10 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* Back to Top Button - appears on hover at bottom of header */}
          {showBackToTop && (
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 group/backtotop">
              {/* Hover trigger zone */}
              <div className="w-40 h-10 flex items-end justify-center">
                <button
                  onClick={scrollToTop}
                  className={`opacity-0 group-hover/backtotop:opacity-100 translate-y-full group-hover/backtotop:translate-y-2 transition-all duration-300 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg whitespace-nowrap ${
                    theme === 'light'
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 border border-emerald-700'
                      : 'bg-white text-emerald-900 hover:bg-white/90 border border-white/60'
                  }`}
                  aria-label="Back to top"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Back to Top
                </button>
              </div>
            </div>
          )}

          <Link href="/" className="flex items-center gap-3 -ml-3">
            <Image
              src="/assets/logos/servia-isotipo-ai14.png"
              alt="Servia Consulting"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-4 items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium px-4 py-1.5 rounded-full transition-all duration-300 border ${
                  theme === 'light'
                    ? 'text-emerald-900 bg-white/80 backdrop-blur-sm hover:bg-white border-emerald-900/20 hover:border-emerald-900/40 shadow-sm hover:shadow-md'
                    : 'text-white bg-emerald-950/60 backdrop-blur-sm hover:bg-emerald-950/80 border-white/40 hover:border-white/60 shadow-lg hover:shadow-xl'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-5 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg border ${
                theme === 'light'
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500 border-emerald-700 hover:border-emerald-600'
                  : 'bg-white text-emerald-900 hover:bg-white/90 border-white/60 hover:border-white'
              }`}
            >
              Work With Us
            </Link>
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${theme === 'light' ? 'hover:bg-emerald-900/10' : 'hover:bg-white/10'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className={`h-6 w-6 ${theme === 'light' ? 'text-emerald-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={`h-6 w-6 ${theme === 'light' ? 'text-emerald-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-emerald-950/95 backdrop-blur-sm border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-emerald-300 hover:bg-white/10 transition-colors font-medium px-4 py-3 rounded-lg"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-500 transition-colors font-medium text-center"
          >
            Work With Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

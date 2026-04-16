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

  // Detect which section is under the header and swap pill theme
  useEffect(() => {
    const getTheme = () => {
      const y = 92
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
    getTheme()
    window.addEventListener('scroll', getTheme, { passive: true })
    return () => window.removeEventListener('scroll', getTheme)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-white/5 backdrop-blur-md border-b border-white/10 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
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
              className={`ml-2 px-5 py-1.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg border ${
                theme === 'light'
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500 border-emerald-700 hover:border-emerald-600'
                  : 'bg-white text-emerald-900 hover:bg-white/90 border-white/60 hover:border-white font-semibold'
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

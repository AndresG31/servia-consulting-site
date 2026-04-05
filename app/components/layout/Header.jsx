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
      className={`fixed top-0 left-0 right-0 bg-black shadow-sm z-50 border-b border-white/10 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logos/servia-isotipo.png"
              alt="Servia Consulting"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
            <div>
              <p className="text-white font-bold text-2xl leading-tight tracking-wide">servia</p>
              <p className="text-emerald-400 text-xs font-medium tracking-widest uppercase leading-none">consulting</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-emerald-400 transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-white hover:text-emerald-400 transition-colors font-medium">About</Link>
            <Link href="/service" className="text-white hover:text-emerald-400 transition-colors font-medium">Services</Link>
            <Link href="/insights" className="text-white hover:text-emerald-400 transition-colors font-medium">Insights</Link>
            <Link href="/audit" className="text-white hover:text-emerald-400 transition-colors font-medium">Restaurant Audit</Link>
            <Link href="/contact" className="bg-emerald-600 text-white px-6 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors font-medium">Contact Us</Link>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-emerald-800 transition-colors">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

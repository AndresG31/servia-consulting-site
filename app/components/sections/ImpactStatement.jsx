'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function ImpactStatement() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section data-header-theme="dark" className="relative bg-black min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Subtle vignette glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div
        ref={ref}
        className="relative max-w-5xl mx-auto px-6 text-center"
      >
        <p
          className={`text-emerald-500 text-sm font-semibold uppercase tracking-[0.3em] mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0ms' }}
        >
          The Hard Truth
        </p>

        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '150ms', transition: 'opacity 0.9s ease-out, transform 0.9s ease-out' }}
        >
          Most restaurants don't fail
          <span className="block text-emerald-400 mt-3 font-playfair font-normal italic">
            from lack of effort.
          </span>
        </h2>

        <h3
          className={`mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/60 leading-tight transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '350ms', transition: 'opacity 0.9s ease-out, transform 0.9s ease-out' }}
        >
          They fail from lack of direction.
        </h3>

        <div
          className={`mt-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <Link
            href="/audit"
            className="inline-flex items-center gap-3 border border-emerald-500/50 text-emerald-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500/10 hover:border-emerald-400 transition-all"
          >
            Get Your Free Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

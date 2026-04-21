'use client'

import React, { useEffect, useRef, useState } from 'react'
import CountUp from '../ui/CountUp'

const STATS = [
  { value: 5,  suffix: '+', label: 'Clients Served',       detail: 'Across the U.S. & beyond'     },
  { value: 100, suffix: '%', label: 'Success Rate',         detail: 'Measured by client outcomes'  },
  { value: 5,  suffix: '+', label: 'Years of Experience',  detail: 'In restaurant operations'     },
  { value: 25,  suffix: '%', label: 'Avg. Revenue Increase', detail: 'In the first 6 months'      },
]

export default function BigStats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section data-header-theme="light" className="relative bg-white border-y border-gray-100 overflow-hidden">
      {/* Top + bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center px-6 py-10 text-center rounded-2xl border border-gray-100 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Giant number */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-emerald-600 leading-none tracking-tight tabular-nums">
                {stat.prefix && <span>{stat.prefix}</span>}
                {visible ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <div className="mt-4 text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wider">
                {stat.label}
              </div>

              {/* Detail */}
              <div className="mt-1 text-sm text-gray-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

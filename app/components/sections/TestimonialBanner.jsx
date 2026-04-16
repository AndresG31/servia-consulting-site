'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const testimonials = [
  {
    quote: "Within 3 months of working with Servia, our food cost dropped from 38% to 29% and we finally understood where every dollar was going. The menu engineering work alone paid for the whole engagement.",
    name: "Maria Santos",
    title: "Owner, La Casa Restaurant",
    initial: "M"
  },
  {
    quote: "We'd tried to fix our staffing problems for years. Servia built us a real training program and our turnover dropped by more than half. My team actually feels like a team now.",
    name: "James Harrington",
    title: "General Manager, The Harbor Grill",
    initial: "J"
  },
  {
    quote: "I didn't know what I didn't know. The business assessment surfaced three revenue leaks I'd been ignoring for years. We recovered over $40k in the first quarter.",
    name: "Rachel Kim",
    title: "Owner, Spice Garden",
    initial: "R"
  },
  {
    quote: "Andres has been in the trenches — he gets how restaurants actually work. The plan he built wasn't theory, it was actionable from day one. We hit our growth target ahead of schedule.",
    name: "David Okonkwo",
    title: "Owner, Uptown Bistro",
    initial: "D"
  },
  {
    quote: "Before Servia, I was making every decision by gut. Now I have a dashboard, a maintenance schedule, and a team that knows exactly what to do. My stress level is half of what it was.",
    name: "Carmen Reyes",
    title: "Owner, Mesa Verde Kitchen",
    initial: "C"
  }
]

const TestimonialBanner = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  const t = testimonials[current]

  return (
    <section data-header-theme="dark" className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 py-20 overflow-hidden section-transition section-delay-1">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl z-0"></div>

      {/* Animated squares */}
      <div className="absolute bottom-8 left-8 w-20 h-20 border-2 border-white/40 rounded-lg rotate-12 animate-float animate-pulse-black anim-delay-0 pointer-events-none z-10" />
      <div className="absolute top-10 right-20 w-24 h-24 border-2 border-white/35 rounded-lg rotate-6 animate-float-slow animate-pulse-black anim-delay-800 pointer-events-none z-10" />
      <div className="absolute bottom-16 right-16 w-20 h-20 border-2 border-white/30 rounded-lg rotate-12 animate-float animate-pulse-black anim-delay-1200 pointer-events-none z-10" />
      <div className="absolute top-1/3 left-16 w-16 h-16 border-2 border-white/35 rounded-lg -rotate-6 animate-float animate-pulse-black anim-delay-400 pointer-events-none z-10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">Don't just take our word for it — hear what our clients have to say</p>
        </div>

        {/* Carousel Card */}
        <div className="relative">
          <div
            className={`bg-white rounded-2xl p-8 sm:p-10 shadow-2xl transition-all duration-300 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            {/* Quote icon */}
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p className="text-gray-800 text-xl leading-relaxed mb-8">"{t.quote}"</p>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">{t.initial}</span>
              </div>
              <div>
                <div className="font-bold text-emerald-700 text-base">{t.name}</div>
                <div className="text-gray-600 text-sm">{t.title}</div>
              </div>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-emerald-50 text-lg mb-6">Ready to transform your business?</p>
          <Link href="/contact" className="bg-white text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-3">
            <span>Start Your Journey</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </section>
  )
}

export default TestimonialBanner

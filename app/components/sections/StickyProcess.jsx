'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    title: 'Diagnose',
    subtitle: 'Full operational assessment',
    description:
      'We start by immersing ourselves in your operation — analyzing financials, observing workflows, interviewing your team, and benchmarking against industry standards. Nothing goes unexamined.',
    points: ['Financial & cost analysis', 'Workflow observation', 'Team interviews', 'Industry benchmarking'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategize',
    subtitle: 'Your custom roadmap',
    description:
      'Every restaurant is different. We build a tailored plan of action — prioritizing the highest-impact changes first, with clear timelines, owners, and measurable targets baked in from day one.',
    points: ['Prioritized action plan', 'Clear milestones & timelines', 'Defined KPIs', 'Risk assessment'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Execute',
    subtitle: 'Hands-on implementation',
    description:
      'Strategy without execution is just a document. Our consultants work shoulder-to-shoulder with your team, embedding the changes directly into daily operations — training, systems, and culture.',
    points: ['On-site implementation', 'Staff training & coaching', 'Systems setup', 'Change management'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Optimize',
    subtitle: 'Measure, refine, grow',
    description:
      'Results are tracked against the KPIs we set together. We revisit, refine, and push further — turning one-time improvements into a permanent competitive advantage for your restaurant.',
    points: ['KPI tracking & reporting', 'Continuous refinement', 'Monthly check-ins', 'Growth planning'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
]

export default function StickyProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const HEADER_HEIGHT = 92

    const handleScroll = () => {
      let current = 0
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        if (el.getBoundingClientRect().top <= HEADER_HEIGHT) current = i
      })
      setActiveStep(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const step = STEPS[activeStep]

  return (
    <section data-header-theme="dark" className="relative bg-emerald-950 [overflow:clip]">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center pt-24 pb-16">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 bg-emerald-500" />
          </div>
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">The Process</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            How We Turn
            <span className="block text-emerald-400 mt-2">Challenges Into Results</span>
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 pb-12">

          {/* LEFT — sticky panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative bg-emerald-900/50 border border-emerald-700/40 rounded-3xl p-10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(16,185,129,0.15)' }} />
                </div>

                <div key={activeStep} className="animate-step-enter">
                  <div className="relative text-[120px] font-bold leading-none text-emerald-900 select-none -mt-4 -ml-2">
                    {step.number}
                  </div>
                  <div className="relative -mt-8 flex items-center gap-5">
                    <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/50">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-1">
                        Step {step.number}
                      </div>
                      <div className="text-white text-3xl font-bold">
                        {step.title}
                      </div>
                    </div>
                  </div>
                  <p className="relative mt-5 text-emerald-300 text-lg font-medium">
                    {step.subtitle}
                  </p>
                </div>

                <div className="relative flex gap-3 mt-10">
                  {STEPS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === activeStep ? 'w-8 bg-emerald-400' : 'w-3 bg-emerald-800'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA — always visible, no transitions */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500 transition-colors shadow-lg animate-process-cta-glow"
                >
                  Start Your Process
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — scrolling steps */}
          <div className="space-y-0">
            {STEPS.map((s, i) => (
              <div
                key={i}
                ref={el => (stepRefs.current[i] = el)}
                className={`border-b border-emerald-800/40 last:border-0 py-16 transition-all duration-500 ${
                  i <= activeStep ? 'opacity-100' : 'opacity-40 lg:opacity-30'
                }`}
              >
                {/* Mobile: icon + title */}
                <div className="flex items-center gap-4 mb-6 lg:hidden">
                  <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Step {s.number}</div>
                    <div className="text-white text-2xl font-bold">{s.title}</div>
                  </div>
                </div>

                <div className="hidden lg:block text-emerald-500 text-sm font-semibold uppercase tracking-widest mb-3">
                  Step {s.number} — {s.subtitle}
                </div>
                <h3 className="hidden lg:block text-white text-3xl font-bold mb-5">{s.title}</h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">{s.description}</p>

                <ul className="space-y-3">
                  {s.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-emerald-600/20 border border-emerald-600/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Mobile CTA on last step */}
                {i === STEPS.length - 1 && (
                  <div className="mt-8 lg:hidden">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500 transition-all"
                    >
                      Start Your Process
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

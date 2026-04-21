'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '../../components/layout/Footer'
import ScrollFadeIn from '../../components/ui/ScrollFadeIn'
import { services, QUIZ_SCORING } from '../serviceData'

const questions = [
  {
    id: 'challenge',
    label: 'What is your biggest challenge right now?',
    subtitle: 'Select all that apply — pick up to 3.',
    multiSelect: true,
    options: [
      { value: 'revenue',        label: 'My revenue has plateaued or isn\'t where it needs to be',  icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { value: 'staff',          label: 'My team keeps underperforming or I can\'t retain staff',  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
      { value: 'menu',           label: 'My menu isn\'t as profitable as it should be',           icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
      { value: 'maintenance',    label: 'My kitchen equipment keeps failing or costing me money', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
      { value: 'implementation', label: 'I have plans but they never get executed properly',       icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { value: 'numbers',        label: 'I can\'t clearly see what\'s working in my numbers',      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' },
      { value: 'expand',         label: 'I want to open, expand, or reposition my concept',        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
    ],
  },
  {
    id: 'progress',
    label: 'Where are you in the process?',
    subtitle: "Be honest — it helps us point you to the right starting point.",
    options: [
      { value: 'start',          label: "I don't know where to start — I need a clear diagnosis first",     icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
      { value: 'execute',        label: 'I have a direction but I need help turning it into an action plan', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
      { value: 'accountability', label: "I'm already moving — I need accountability and support to see it through", icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    ],
  },
  {
    id: 'involvement',
    label: 'What kind of support do you want?',
    subtitle: 'There\'s no wrong answer — different businesses need different approaches.',
    options: [
      { value: 'report',   label: 'A detailed report and roadmap I can act on with my team',          icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { value: 'coaching', label: 'Strategic coaching sessions to work through the problem together',   icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
      { value: 'onsite',   label: 'Someone on-site working alongside my team to make things happen',   icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    ],
  },
]

function computeResults(answers) {
  const totals = {}
  for (const [qId, vals] of Object.entries(answers)) {
    const valArr = Array.isArray(vals) ? vals : [vals]
    for (const val of valArr) {
      const weights = QUIZ_SCORING[qId]?.[val] || {}
      for (const [svcId, pts] of Object.entries(weights)) {
        totals[svcId] = (totals[svcId] || 0) + pts
      }
    }
  }
  return Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([id]) => services.find(s => s.slug === id))
    .filter(Boolean)
}

const pkgBadge = {
  emerald: 'text-emerald-400',
  yellow:  'text-yellow-400',
  purple:  'text-purple-400',
}

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep] = useState(0) // 0,1,2 = questions
  const [answers, setAnswers] = useState({})
  const [selected, setSelected] = useState([])

  const question = questions[step]

  const handleSelect = (value) => {
    if (question.multiSelect) {
      setSelected(prev =>
        prev.includes(value) ? prev.filter(v => v !== value) : prev.length < 3 ? [...prev, value] : prev
      )
    } else {
      setSelected([value])
    }
  }

  const handleNext = () => {
    if (selected.length === 0) return
    const newAnswers = { ...answers, [question.id]: selected }

    // If this is the last question, navigate to results page
    if (step === questions.length - 1) {
      const answersParam = encodeURIComponent(JSON.stringify(newAnswers))
      router.push(`/service/quiz/results?answers=${answersParam}`)
    } else {
      setAnswers(newAnswers)
      setSelected([])
      setStep(s => s + 1)
    }
  }

  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Hero */}
      <section className="relative bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-8 py-20 z-10 text-center">
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6" />
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-600 rounded-full px-4 py-1">
            30-Second Quiz
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-6 mb-4">
            Find Your <span className="text-emerald-400">Service</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
            Answer 3 quick questions and we'll match you to the services most likely to solve your biggest challenge.
          </p>
          <p className="text-emerald-500 text-sm mt-4">
            Looking for a full operational diagnostic?{' '}
            <Link href="/audit" className="text-emerald-400 underline hover:text-emerald-300 transition-colors">
              Take the free Restaurant Audit instead →
            </Link>
          </p>
        </div>
      </section>

      {/* Quiz body */}
      <section className="bg-white py-16 min-h-[500px]">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-10">
            {questions.map((_, i) => (
              <React.Fragment key={i}>
                <div className={`h-2 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-emerald-600' : 'bg-gray-200'}`} />
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">
            Question {step + 1} of {questions.length}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{question.label}</h2>
          <p className="text-gray-500 mb-8">{question.subtitle}</p>

          <div className="space-y-3">
            {question.options.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                  selected.includes(opt.value)
                    ? 'border-emerald-600 bg-emerald-50 shadow-md'
                    : 'border-gray-200 bg-gray-50 hover:border-emerald-400 hover:bg-emerald-50/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${selected.includes(opt.value) ? 'bg-emerald-600' : 'bg-white border border-gray-200'}`}>
                  <svg className={`w-5 h-5 ${selected.includes(opt.value) ? 'text-white' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={opt.icon} />
                  </svg>
                </div>
                <span className={`font-medium ${selected.includes(opt.value) ? 'text-emerald-700' : 'text-gray-700'}`}>{opt.label}</span>
                {selected.includes(opt.value) && (
                  <svg className="w-5 h-5 text-emerald-600 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            {step > 0 ? (
              <button
                onClick={() => { setStep(s => s - 1); setSelected(answers[questions[step - 1].id] || []) }}
                className="text-gray-500 hover:text-gray-700 font-medium text-sm flex items-center gap-1 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Back
              </button>
            ) : <div />}
            <button
              onClick={handleNext}
              disabled={selected.length === 0}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {step === questions.length - 1 ? 'See My Results' : 'Next'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import React, { useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import CustomSelect from './ui/CustomSelect'
import Toast from './ui/Toast'
import { teamMembers } from '../team/teamData'

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service') || ''
  const preselectedConsultant = searchParams.get('consultant') || ''
  const [restaurantType, setRestaurantType] = useState('')
  const [service, setService] = useState(preselectedService)

  const consultantMember = teamMembers.find(m => m.slug === preselectedConsultant) || null

  const restaurantOptions = [
    { value: 'italian', label: 'Italian' },
    { value: 'american', label: 'American Cuisine' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'thai', label: 'Thai' },
    { value: 'indian', label: 'Indian' },
    { value: 'french', label: 'French' },
    { value: 'mediterranean', label: 'Mediterranean' },
    { value: 'bbq', label: 'BBQ / Steakhouse' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'fast-food', label: 'Fast Food' },
    { value: 'fast-casual', label: 'Fast Casual' },
    { value: 'cafe', label: 'Café / Bakery' },
    { value: 'pizza', label: 'Pizza' },
    { value: 'fusion', label: 'Fusion' },
    { value: 'vegan', label: 'Vegan / Vegetarian' },
    { value: 'other', label: 'Other' },
  ]

  const serviceOptions = [
    { value: '', label: '— Packages —', disabled: true },
    { value: 'package1', label: 'Package 1 – Foundation' },
    { value: 'package2', label: 'Package 2 – Growth' },
    { value: 'package3', label: 'Package 3 – Enterprise' },
    { value: '', label: '— À La Carte —', disabled: true },
    { value: 'business-assessment', label: 'Business Assessment' },
    { value: 'plan-of-action', label: 'Custom Plan of Action' },
    { value: 'restaurant-maintenance', label: 'Restaurant Maintenance' },
    { value: 'revenue-optimization', label: 'Revenue Optimization Strategy' },
    { value: 'menu-engineering', label: 'Menu Engineering & Pricing' },
    { value: 'staff-training', label: 'Staff Training & Development' },
    { value: 'performance-analytics', label: 'Performance Analytics & Reporting' },
    { value: 'in-field-consultant', label: 'In-Field Consultant' },
    { value: 'implementation-support', label: 'Implementation Support' },
    { value: 'monthly-reports', label: 'Monthly Progress Reports' },
    { value: '', label: '———', disabled: true },
    { value: 'other', label: 'Other' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const data = Object.fromEntries(new FormData(formRef.current))
    data.restaurantType = restaurantType
    data.service = service
    data.consultantSlug = consultantMember?.slug || ''
    data.consultantName = consultantMember?.name || ''
    data.consultantEmail = consultantMember?.email || ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        formRef.current.reset()
        setRestaurantType('')
        setService('')
        setTimeout(() => setStatus('idle'), 4500)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4500)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4500)
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-emerald-600/20 shadow-lg">
      <h2 className="text-3xl font-bold text-emerald-700 mb-6">Send Us a Message</h2>

      {status === 'success' && (
        <Toast
          message="Message sent! We'll get back to you within 24 hours."
          type="success"
          onClose={() => setStatus('idle')}
        />
      )}
      {status === 'error' && (
        <Toast
          message="Something went wrong. Please try again or email us directly."
          type="error"
          onClose={() => setStatus('idle')}
        />
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all text-black"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all text-black"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all text-black"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all text-black"
            placeholder="(123) 456-7890"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all text-black"
            placeholder="Your Company"
          />
        </div>

        {/* Restaurant Type */}
        <div>
          <label htmlFor="restaurantType" className="block text-sm font-semibold text-gray-700 mb-2">
            Restaurant Type
          </label>
          <CustomSelect
            id="restaurantType"
            name="restaurantType"
            value={restaurantType}
            onChange={setRestaurantType}
            options={restaurantOptions}
            placeholder="Select restaurant type"
          />
        </div>

        {/* Working with (pre-filled from team page) */}
        {consultantMember && (
          <div className="flex items-center gap-3 bg-emerald-50 border-2 border-emerald-200 rounded-lg px-4 py-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">
                {consultantMember.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Working with</p>
              <p className="text-sm font-bold text-emerald-900 truncate">{consultantMember.name}</p>
              <p className="text-xs text-emerald-700">{consultantMember.title}</p>
            </div>
            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
            Interested In
          </label>
          <CustomSelect
            id="service"
            name="service"
            value={service}
            onChange={setService}
            options={serviceOptions}
            placeholder="Select a service"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all resize-none text-black"
            placeholder="Tell us about your business and how we can help..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

'use client'

import React, { useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service') || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-emerald-600/20 shadow-lg">
      <h2 className="text-3xl font-bold text-emerald-700 mb-6">Send Us a Message</h2>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-lg flex items-center gap-3">
          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-emerald-700 font-medium">Message sent! We'll get back to you within 24 hours.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg flex items-center gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p className="text-red-600 font-medium">Something went wrong. Please try again or email us directly.</p>
        </div>
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
          <select
            id="restaurantType"
            name="restaurantType"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white text-black"
          >
            <option value="">Select restaurant type</option>
            <option value="italian">Italian</option>
            <option value="american">American Cuisine</option>
            <option value="mexican">Mexican</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            <option value="thai">Thai</option>
            <option value="indian">Indian</option>
            <option value="french">French</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="bbq">BBQ / Steakhouse</option>
            <option value="seafood">Seafood</option>
            <option value="fast-food">Fast Food</option>
            <option value="fast-casual">Fast Casual</option>
            <option value="cafe">Café / Bakery</option>
            <option value="pizza">Pizza</option>
            <option value="fusion">Fusion</option>
            <option value="vegan">Vegan / Vegetarian</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
            Interested In
          </label>
          <select
            id="service"
            name="service"
            defaultValue={preselectedService}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white text-black"
          >
            <option value="">Select a service</option>
            <option value="package1">Package 1 - Foundation</option>
            <option value="package2">Package 2 - Growth</option>
            <option value="package3">Package 3 - Enterprise</option>
            <option value="assessment">Business Assessment</option>
            <option value="consulting">In-Field Consulting</option>
            <option value="other">Other</option>
          </select>
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

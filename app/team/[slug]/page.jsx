'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Footer from '../../components/layout/Footer'
import { teamMembers } from '../teamData'
import ScrollFadeIn from '../../components/ui/ScrollFadeIn'
import { services } from '../../service/serviceData'
import ConsultantEmailModal from '../../components/ui/ConsultantEmailModal'

export default function TeamMemberPage() {
  const params = useParams()
  const member = teamMembers.find(m => m.slug === params.slug)
  const [showEmailModal, setShowEmailModal] = useState(false)

  if (!member) {
    return (
      <div className="min-h-screen bg-emerald-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Team Member Not Found</h1>
          <Link href="/about#meet-the-team" className="text-emerald-400 hover:text-emerald-300">
            Back to Team
          </Link>
        </div>
      </div>
    )
  }

  // Get associated services
  const memberServices = services.filter(service =>
    member.servicesSlugs.includes(service.slug)
  )

  return (
    <div className="min-h-screen bg-emerald-950">
      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[640px] -mt-[92px]">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Decorative glow elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 pt-36 pb-16 lg:pt-44 lg:pb-24">
          <div className="flex flex-col md:flex-row gap-10 items-end">
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0 opacity-0 animate-page-hero">
              <div className="relative w-72 h-[420px] md:w-80 md:h-[500px] rounded-2xl overflow-hidden border-4 border-emerald-400/40 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center">
                  <div className="text-white text-5xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="w-20 h-1 bg-emerald-600 mb-6 opacity-0 animate-page-hero mx-auto md:mx-0" style={{ animationDelay: '0.1s' }}></div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 opacity-0 animate-page-hero text-center md:text-left" style={{ animationDelay: '0.2s' }}>
                {member.name}
              </h1>

              <p className="text-2xl text-emerald-400 font-semibold mb-6 opacity-0 animate-page-hero text-center md:text-left" style={{ animationDelay: '0.3s' }}>
                {member.title}
              </p>

              <p className="text-lg text-gray-200 leading-relaxed mb-8 opacity-0 animate-page-hero max-w-2xl mx-auto md:mx-0 text-center md:text-left" style={{ animationDelay: '0.4s' }}>
                {member.bio}
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col gap-3 opacity-0 animate-page-hero max-w-sm mx-auto md:mx-0 w-full" style={{ animationDelay: '0.5s' }}>
                <Link
                  href={`/contact?consultant=${member.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-emerald-700 transition-all shadow-lg w-full"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Work with {member.name.split(' ')[0]}
                </Link>
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-400 text-emerald-400 px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-emerald-400/10 transition-all w-full"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Directly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section data-header-theme="light" className="relative bg-white py-20">
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About */}
            <ScrollFadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                About {member.name.split(' ')[0]}
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                {member.detailedBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-line">{paragraph.trim()}</p>
                ))}
              </div>

              {/* Certifications */}
              {member.certifications && member.certifications.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {member.certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Languages */}
              {member.languages && member.languages.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang, index) => (
                      <span key={index} className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            </ScrollFadeIn>

            {/* Areas of Expertise */}
            <ScrollFadeIn delay={100}>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                Areas of Expertise
              </h2>
              <div className="grid gap-4">
                {member.expertise.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-emerald-50 to-white p-5 rounded-xl border-2 border-emerald-200 hover:border-emerald-400 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-emerald-900">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section data-header-theme="dark" className="relative bg-gradient-to-b from-emerald-950 to-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Services {member.name.split(' ')[0]} Specializes In
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These are the core services where {member.name.split(' ')[0]} brings their expertise to help your business succeed.
            </p>
          </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberServices.map((service, index) => (
              <ScrollFadeIn key={service.slug} delay={100 + index * 60}>
              <Link
                href={`/service/${service.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl border-2 border-emerald-400/30 hover:border-emerald-400 p-6 transition-all hover:shadow-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-all">
                    <svg className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              </ScrollFadeIn>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href={`/contact?consultant=${member.slug}`}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg"
            >
              Work with {member.name.split(' ')[0]}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {showEmailModal && (
        <ConsultantEmailModal
          member={member}
          onClose={() => setShowEmailModal(false)}
        />
      )}
    </div>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Andres Gutierrez',
    title: 'Founder & Lead Consultant',
    image: '/assets/aboutus/andres-founder.jpg',
  },
  {
    id: 2,
    name: 'Team Member 2',
    title: 'Operations Specialist',
    image: '/assets/team/member-2.jpg', // You'll need to add these images
  },
  {
    id: 3,
    name: 'Team Member 3',
    title: 'Financial Analyst',
    image: '/assets/team/member-3.jpg',
  },
  {
    id: 4,
    name: 'Team Member 4',
    title: 'Training Coordinator',
    image: '/assets/team/member-4.jpg',
  },
]

const TeamPreview = () => {
  return (
    <section data-header-theme="light" className="relative bg-white py-20 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to transforming your restaurant operations
          </p>
        </div>

        {/* Team Grid - Condensed Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group text-center opacity-0 animate-page-hero"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden border-2 border-emerald-200 group-hover:border-emerald-600 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center">
                  {/* Placeholder - replace with actual images */}
                  <div className="text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                {/* Uncomment when you add actual images */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
              </div>

              {/* Name & Title */}
              <h3 className="text-lg font-bold text-emerald-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to Full Team Page */}
        <div className="text-center">
          <Link
            href="/about#meet-the-team"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl group"
          >
            Meet the Full Team
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TeamPreview

'use client'

import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Andres Gutierrez',
    title: 'Founder & Lead Consultant',
    bio: 'With over 5 years of experience in restaurant operations and a background rooted in service excellence, Andres founded Servia Consulting to help restaurant owners transform their operations and achieve sustainable growth.',
    image: '/assets/aboutus/andres-founder.jpg',
    linkedin: 'https://www.linkedin.com/in/contactandresgutierrez/',
    email: 'agutierrez@serviaconsulting.com',
  },
  {
    id: 2,
    name: 'Team Member 2',
    title: 'Operations Specialist',
    bio: 'Specializing in streamlining restaurant operations and implementing efficient systems that drive profitability and improve team performance.',
    image: '/assets/team/member-2.jpg',
    linkedin: '#',
    email: 'member2@serviaconsulting.com',
  },
  {
    id: 3,
    name: 'Team Member 3',
    title: 'Financial Analyst',
    bio: 'Expert in restaurant financial management, cost control, and developing strategies to maximize revenue and minimize waste.',
    image: '/assets/team/member-3.jpg',
    linkedin: '#',
    email: 'member3@serviaconsulting.com',
  },
  {
    id: 4,
    name: 'Team Member 4',
    title: 'Training Coordinator',
    bio: 'Passionate about building high-performance teams through comprehensive training programs and leadership development.',
    image: '/assets/team/member-4.jpg',
    linkedin: '#',
    email: 'member4@serviaconsulting.com',
  },
]

const MeetTheTeam = () => {
  return (
    <section id="meet-the-team" data-header-theme="dark" className="relative bg-gradient-to-b from-emerald-950 to-emerald-900 py-20 overflow-hidden scroll-mt-24">
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Decorative glow elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team brings together expertise in operations, finance, training, and technology
            to deliver comprehensive solutions for your restaurant.
          </p>
        </div>

        {/* Team Grid - Full Bios */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-emerald-400/30 hover:border-emerald-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden opacity-0 animate-page-hero"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6 lg:p-8">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden border-2 border-emerald-400/40 group-hover:border-emerald-400 transition-all duration-300 mx-auto sm:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center">
                      {/* Placeholder - replace with actual images */}
                      <div className="text-white text-3xl font-bold">
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
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-400 font-semibold mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Contact Links */}
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-400 hover:bg-emerald-400 hover:text-white transition-all duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-400 hover:bg-emerald-400 hover:text-white transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-emerald-400/30 shadow-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Let's discuss how our expertise can help transform your restaurant operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl group"
            >
              Schedule a Consultation
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam

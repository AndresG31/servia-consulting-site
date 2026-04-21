import React from 'react'
import Image from 'next/image'
import ScrollFadeIn from '../ui/ScrollFadeIn'

const UpperBanner = () => {
  return (
    <section data-header-theme="light" className="relative bg-white py-16 overflow-hidden border-b border-gray-100">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl -translate-y-1/2"></div>

      {/* Animated corner squares */}
      <div className="absolute top-8 left-8 w-12 h-12 border-2 border-emerald-600/30 rounded-lg rotate-12 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-emerald-600/30 rounded-lg -rotate-12 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Content - Message about Eagle Scout Values */}
          <ScrollFadeIn>
          <div className="space-y-6">
            {/* Emerald accent bar */}
            <div className="w-20 h-1 bg-emerald-600"></div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 leading-tight">
              Values Rooted in
              <span className="block text-emerald-600 mt-2">
                Excellence & Service
              </span>
            </h2>

            {/* Main message */}
            <p className="text-lg text-gray-600 leading-relaxed">
              At Servia Consulting, our core values are deeply rooted in the principles of the Boy Scouts of America.
              Founder <span className="text-emerald-900 font-semibold">Andres Gutierrez</span>, an
              <span className="text-emerald-600 font-semibold"> Eagle Scout</span>, brings the highest standards
              of integrity, leadership, and service to every client engagement.
            </p>

            {/* Scout Values */}
            <div className="space-y-3 pt-4">
              {[
                {
                  title: "Trustworthy & Loyal",
                  description: "Building lasting partnerships through integrity"
                },
                {
                  title: "Helpful & Courteous",
                  description: "Dedicated service with respect and professionalism"
                },
                {
                  title: "Prepared & Resourceful",
                  description: "Strategic thinking for every challenge"
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 text-base">{value.title}</h3>
                    <p className="text-gray-500 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollFadeIn>

          {/* Right Content - Eagle Scout Badge */}
          <ScrollFadeIn delay={100}>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-400/10 rounded-full blur-2xl scale-110"></div>

              {/* Badge container */}
              <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 rounded-2xl border-2 border-emerald-600/30 shadow-2xl">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <Image
                    src="/assets/homepage/Images/UpperBanner.png"
                    alt="Eagle Scout Badge - Boy Scouts of America"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={false}
                  />
                </div>

                {/* Badge label */}
                <div className="mt-4 text-center">
                  <p className="text-emerald-400 font-bold text-lg">Eagle Scout</p>
                  <p className="text-gray-400 text-sm">Highest Rank in Scouting</p>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-emerald-600/40 rounded-lg rotate-12"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-2 border-emerald-600/40 rounded-lg -rotate-12"></div>
            </div>
          </div>
          </ScrollFadeIn>

        </div>
      </div>

      {/* Bottom subtle border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent"></div>
    </section>
  )
}

export default UpperBanner

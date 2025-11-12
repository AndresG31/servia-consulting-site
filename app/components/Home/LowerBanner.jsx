import React from 'react'

const LowerBanner = () => {
  return (
    <section className="relative bg-black py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>

      {/* Animated corner squares */}
      <div className="absolute top-8 left-8 w-12 h-12 border-2 border-emerald-600/40 rounded-lg rotate-12 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-emerald-600/40 rounded-lg -rotate-12 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-6">
          {/* Emerald accent bar */}
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-emerald-600"></div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Interested in Multiple Services?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Maximize your restaurant's potential with our exclusive bundle package combining expert consulting services with our comprehensive platform solution.
          </p>

          {/* Value propositions */}
          <div className="grid sm:grid-cols-3 gap-6 pt-6 pb-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Save Up to 25%</h3>
              <p className="text-sm text-gray-400">Special bundle pricing</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Complete Solution</h3>
              <p className="text-sm text-gray-400">Strategy + Technology</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Faster Results</h3>
              <p className="text-sm text-gray-400">Integrated implementation</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-3">
              Explore Bundle Options
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="bg-transparent border-2 border-emerald-600 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600/10 transition-all inline-flex items-center gap-3">
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom subtle border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent"></div>
    </section>
  )
}

export default LowerBanner

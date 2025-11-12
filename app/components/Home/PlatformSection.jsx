import React from 'react'
import Image from 'next/image'

const PlatformSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-emerald-600 via-emerald-700 to-black py-24 overflow-hidden section-transition section-delay-3">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/homepage/Images/PlatformSection.png"
          alt="Restaurant ordering platform interface"
          fill
          className="object-cover"
          priority={false}
        />

        {/* Emerald overlay from top with 50% transparency */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/50 via-emerald-700/30 to-transparent"></div>

        {/* Black overlay for lower half - ensures smooth blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>

        {/* Additional overlay for content readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Green glowing squares - reduced amount */}
      {/* LOWER LEFT (2) */}
      <div className="absolute bottom-12 left-8 w-20 h-20 border-2 border-emerald-600/30 rounded-lg rotate-12 animate-float animate-pulse-glow anim-delay-0 pointer-events-none z-10" />
      <div className="absolute bottom-32 left-24 w-24 h-24 border-2 border-emerald-600/20 rounded-lg rotate-6 animate-float-slow animate-pulse-glow anim-delay-400 pointer-events-none z-10" />

      {/* LOWER RIGHT (2) */}
      <div className="absolute bottom-16 right-12 w-16 h-16 border-2 border-emerald-600/30 rounded-lg -rotate-12 animate-float animate-pulse-glow anim-delay-400 pointer-events-none z-10" />
      <div className="absolute bottom-28 right-20 w-24 h-24 border-2 border-emerald-600/25 rounded-lg rotate-6 animate-float-slow animate-pulse-glow anim-delay-800 pointer-events-none z-10" />

      {/* Decorative background blur elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Emerald accent bar */}
            <div className="w-20 h-1 bg-emerald-400"></div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Your Complete
                <span className="block text-emerald-300 mt-2">
                  Restaurant Platform
                </span>
              </h2>

              <p className="text-xl text-emerald-50 leading-relaxed mb-6">
                Streamline your restaurant operations with our comprehensive backend platform
                designed specifically for modern food service businesses.
              </p>

              <p className="text-lg text-emerald-100/90 leading-relaxed">
                From menu management to real-time order tracking, our platform empowers
                you to focus on what matters most  delivering exceptional dining experiences.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  ),
                  title: "Online Ordering Management",
                  description: "Seamlessly manage all incoming orders across multiple channels in one unified dashboard"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Smart Menu & Item Control",
                  description: "Update your menu items, descriptions, and availability instantly across all platforms"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Dynamic Pricing Engine",
                  description: "Flexible pricing controls with scheduled changes, promotions, and category-based adjustments"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: "Analytics & Insights",
                  description: "Real-time reporting on sales, popular items, peak hours, and customer preferences"
                }
              ].map((feature, index) => (
                <div key={index} className={`flex items-start gap-4 group fade-slide-up text-delay-${index + 5}`}>
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors border border-emerald-400/30">
                    <div className="text-emerald-300 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
                    <p className="text-emerald-100/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-3">
                Explore Our Platform
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Visual/Stats Section */}
          <div className="relative fade-slide-up text-delay-3">
            {/* Platform Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 hover:bg-white/15 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">Real-time</div>
                <div className="text-emerald-200 text-sm">Order Synchronization</div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 hover:bg-white/15 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">Secure</div>
                <div className="text-emerald-200 text-sm">Data Protection</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 hover:bg-white/15 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">Cloud-based</div>
                <div className="text-emerald-200 text-sm">Access Anywhere</div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 hover:bg-white/15 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-emerald-200 text-sm">Support Available</div>
              </div>
            </div>

            {/* Additional feature badge */}
            <div className="mt-6 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-400/40 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">Multi-Location Support</div>
                  <div className="text-emerald-100/80 text-sm">Manage multiple restaurant locations from a single dashboard</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade line for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
    </section>
  )
}

export default PlatformSection

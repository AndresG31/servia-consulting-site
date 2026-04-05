import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CountUp from '../ui/CountUp'

const HeroSection = () => {
  return (
    <section className="relative bg-emerald-950 overflow-hidden min-h-[600px]">
      {/* Full-width Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/homepage/Images/Video/HeroSection_compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">

          {/* Left Side - Headline Content with Black Background Filter */}
          <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24 z-10">
            {/* Black background filter with 50% transparency */}
            <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-delayed"></div>

            {/* Content with delayed animation */}
            <div className="relative z-10">
              {/* Emerald accent */}
              <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-slide-in-delayed"></div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.2s' }}>
                Strategy That
                <span className="block text-emerald-400 mt-2">
                  Drives Results
                </span>
              </h1>

              <p className="text-xl sm:text-xl text-gray-100 mb-8 leading-relaxed opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.4s' }}>
                We transform complex challenges into clear opportunities,
                empowering businesses to achieve sustainable growth within the Rio Grande Valley through expert consulting and actionable strategy.
              </p>

              <p className="text-lg text-gray-200 mb-10 max-w-xl opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.6s' }}>
                Partner with experts who understand your vision and deliver
                actionable strategies tailored to your unique goals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.8s' }}>
                <Link href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                  Get Started
                </Link>
                <Link href="/service" className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400/10 transition-all text-center">
                  Our Services
                </Link>
              </div>

              {/* Stats/Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-600 opacity-0 animate-slide-in-delayed" style={{ animationDelay: '3s' }}>
                <div>
                  <div className="text-3xl font-bold text-emerald-400"><CountUp end={500} suffix="+" /></div>
                  <div className="text-sm text-gray-300 mt-1">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400"><CountUp end={98} suffix="%" /></div>
                  <div className="text-sm text-gray-300 mt-1">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400"><CountUp end={15} suffix="+" /></div>
                  <div className="text-sm text-gray-300 mt-1">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Empty (video is full-width background) */}
          <div className="relative h-full min-h-[500px] lg:min-h-full">
            {/* Video shows through from background */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection

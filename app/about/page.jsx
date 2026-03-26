import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="relative bg-emerald-950 overflow-hidden min-h-[900px]">
        {/* Full-width Image Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/aboutus/lightfixture.png"
            alt="Light Fixture"
            fill
            className="object-cover"
            priority={true}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[900px]">

            {/* Left Side - Headline Content with Black Background Filter */}
            <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-16 z-10">
              {/* Black background filter with 50% transparency */}
              <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-delayed"></div>

              {/* Content with delayed animation */}
              <div className="relative z-10">
                {/* Emerald accent */}
                <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-slide-in-delayed"></div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.2s' }}>
                  About
                  <span className="block text-emerald-400 mt-2">
                    Servia Consulting
                  </span>
                </h1>

                <p className="text-xl sm:text-xl text-gray-100 mb-8 leading-relaxed opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.4s' }}>
                  Founded on principles of service, integrity, and excellence—delivering strategic solutions
                  powered by cutting-edge technology.
                </p>

                <p className="text-lg text-gray-200 mb-10 max-w-xl opacity-0 animate-slide-in-delayed" style={{ animationDelay: '2.6s' }}>
                  Built on Eagle Scout values and service industry expertise, we bring a unique approach
                  to business consulting that puts your success first.
                </p>
              </div>
            </div>

            {/* Right Side - Empty (image is full-width background) */}
            <div className="relative h-full min-h-[500px] lg:min-h-full">
              {/* Image shows through from background */}
            </div>

          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative bg-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-20 h-1 bg-emerald-400"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Five Years of
                <span className="block text-emerald-400 mt-2">Strategic Excellence</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                For the past five years, Servia Consulting has been at the forefront of the consulting industry,
                helping businesses transform their operations and achieve sustainable growth. Our journey has been
                defined by unwavering commitment to service and excellence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We've built our reputation on deep industry expertise, strategic thinking, and a genuine dedication
                to our clients' success. Every engagement is approached with the same level of care and attention
                that has become our hallmark.
              </p>
              <div className="pt-4">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400">5+</div>
                    <div className="text-sm text-gray-400 mt-1">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400">500+</div>
                    <div className="text-sm text-gray-400 mt-1">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400">98%</div>
                    <div className="text-sm text-gray-400 mt-1">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-700 text-lg">Client-First Approach</h3>
                        <p className="text-gray-600 text-sm">Every strategy tailored to your unique needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-700 text-lg">Proven Results</h3>
                        <p className="text-gray-600 text-sm">Measurable outcomes that drive growth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-700 text-lg">Expert Team</h3>
                        <p className="text-gray-600 text-sm">Industry veterans with deep expertise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Roots in Service - Boy Scouts & Order of the Arrow */}
      <section className="relative bg-white py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-emerald-600"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 leading-tight">
              Rooted in
              <span className="block text-emerald-600 mt-2">Service & Leadership</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our values are deeply inspired by the principles of the Boy Scouts of America and the Order of the Arrow—
              organizations that have championed service, leadership, and integrity for over a century.
            </p>
          </div>

          {/* Service in Action - Moved to top */}
          <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-600/20 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-emerald-700 mb-4">Service in Action</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                These organizations don't just teach values—they demand action. Service isn't a concept;
                it's a way of life that shapes how we approach every challenge and opportunity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-emerald-700 mb-2">Cheerful Service</h4>
                <p className="text-gray-600 text-sm">Serving with enthusiasm and positivity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-emerald-700 mb-2">Brotherhood</h4>
                <p className="text-gray-600 text-sm">Building lasting partnerships</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-emerald-700 mb-2">Leadership</h4>
                <p className="text-gray-600 text-sm">Leading by example and integrity</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Boy Scouts of America */}
            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-600/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-700">Boy Scouts of America</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 1910, the Boy Scouts of America has instilled values of character, citizenship, and
                leadership in millions of young people. The Scout Oath and Scout Law serve as guiding principles—
                teaching individuals to be trustworthy, loyal, helpful, friendly, courteous, kind, obedient,
                cheerful, thrifty, brave, clean, and reverent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These timeless values form the foundation of how we conduct business at Servia Consulting.
                Every client interaction is guided by integrity, every solution is crafted with care, and
                every relationship is built on trust.
              </p>
            </div>

            {/* Order of the Arrow */}
            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-600/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-700">Order of the Arrow</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Order of the Arrow, Scouting's National Honor Society, was founded on the principles of
                brotherhood, cheerfulness, and service. Members are called to render cheerful service to others,
                to promote camping and responsible outdoor adventure, and to crystallize the Scout habit of helpfulness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This commitment to selfless service is woven into every aspect of Servia Consulting. We don't just
                provide solutions—we serve our clients with dedication, going above and beyond to ensure their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Experience - Chick-fil-A */}
      <section className="relative bg-emerald-950 py-20 overflow-hidden">
        {/* Full-width Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/aboutus/aboutus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Black overlay filter with 50% transparency */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-700 mb-2">Service Industry Expertise</h3>
                    <p className="text-emerald-600 font-semibold">5 Years at Chick-fil-A</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Operational excellence in high-volume environment</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Customer service at the highest standard</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Team leadership and development</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Leadership development programs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Systems thinking and process optimization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">System development and implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-20 h-1 bg-emerald-400"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Forged in
                <span className="block text-emerald-400 mt-2">Service Excellence</span>
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                Our founder, <span className="font-bold text-white">Andres Gutierrez</span>, brings a unique perspective shaped by
                five years of service industry experience at Chick-fil-A—a company renowned for its unwavering commitment
                to exceptional service and operational excellence.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                At Chick-fil-A, every team member learns that service isn't just about transactions—it's about creating
                remarkable experiences. This philosophy, combined with Eagle Scout values and consulting expertise,
                creates a powerful foundation for transformative business solutions.
              </p>

              <div className="bg-emerald-900/70 border-l-4 border-emerald-400 p-6 rounded-r-lg">
                <p className="text-gray-100 italic leading-relaxed">
                  "My pleasure"—these two words represent more than customer service; they embody a mindset of
                  cheerful service that I carry into every client engagement. Excellence isn't an act; it's a habit.
                </p>
                <p className="text-emerald-400 font-semibold mt-4">— Andres Gutierrez, Founder</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-emerald-900/70 border border-emerald-600/30 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">5 Years</div>
                  <div className="text-sm text-gray-300">Chick-fil-A Service</div>
                </div>
                <div className="bg-emerald-900/70 border border-emerald-600/30 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">Eagle Scout</div>
                  <div className="text-sm text-gray-300">Leadership Honor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="relative bg-emerald-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-emerald-600 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-emerald-600 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-emerald-600 rounded-lg rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-emerald-600 rounded-lg -rotate-6"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-emerald-600"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Our Core
              <span className="block text-emerald-400 mt-2">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 rounded-2xl border border-emerald-600/30 hover:border-emerald-400 hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 hover:shadow-2xl hover:shadow-emerald-500/50">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">Integrity First</h3>
              <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                Trustworthy, loyal, and honest in every interaction. Our word is our bond, and we honor our commitments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 rounded-2xl border border-emerald-600/30 hover:border-emerald-400 hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 hover:shadow-2xl hover:shadow-emerald-500/50">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">Service Above Self</h3>
              <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                Cheerfully serving our clients with dedication, going beyond expectations to ensure their success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 rounded-2xl border border-emerald-600/30 hover:border-emerald-400 hover:from-emerald-600 hover:to-emerald-700 transition-all group hover:scale-105 transform duration-300 hover:shadow-2xl hover:shadow-emerald-500/50">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">Excellence Always</h3>
              <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors">
                Prepared, resourceful, and committed to delivering the highest quality in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 leading-tight">
              Ready to Experience
              <span className="block text-emerald-600 mt-2">Service-Driven Consulting?</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Let's discuss how our unique blend of service excellence, strategic thinking, and
              cutting-edge technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block text-center">
                Schedule a Consultation
              </a>
              <a href="/service" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all inline-block text-center">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage

import React from 'react'
import Image from 'next/image';

const ContentSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden section-transition section-delay-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Emerald accent bar */}
            <div className="w-20 h-1 bg-emerald-600 text-reveal text-delay-1"></div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight text-reveal text-delay-2">
                Transforming Vision Into
                <span className="block text-emerald-600 mt-2">
                  Measurable Success
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-6 fade-slide-up text-delay-3">
                At Servia Consulting, we believe in the power of strategic thinking
                combined with actionable execution. Our approach is tailored to your
                unique challenges and opportunities.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed fade-slide-up text-delay-4">
                Whether you're scaling operations, entering new markets, or optimizing
                performance, our team brings decades of experience across industries to
                help you achieve sustainable growth and competitive advantage.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 pt-4">
              {[
                {
                  title: "Strategic Planning",
                  description: "Data-driven strategies aligned with your business objectives"
                },
                {
                  title: "Operational Excellence",
                  description: "Streamlined processes that drive efficiency and growth"
                },
                {
                  title: "Market Insights",
                  description: "Deep industry knowledge and competitive intelligence"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-start gap-4 group fade-slide-up text-delay-${index + 5}`}>
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                    <svg className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 fade-slide-up text-delay-8">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-3">
                Learn More About Our Process
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image Section with Emerald Wrapper */}
          <div className="relative fade-slide-up text-delay-3">
            {/* Emerald border wrapper */}
            <div className="relative p-6 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 rounded-xl shadow-2xl">

              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-emerald-400 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-emerald-700 rounded-lg"></div>

              {/* Image container */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/assets/homepage/Images/ContentSection.png"
                    alt="Team collaboration and consulting"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image overlay info card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-5 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm">Success Story</div>
                      <div className="text-emerald-600 text-xs font-semibold">250% Growth Achieved</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "Our partnership with Servia resulted in unprecedented growth and market expansion."
                  </p>
                </div>
              </div>

              {/* Stats badges on emerald background */}
              <div className="absolute -top-3 right-8 bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">98%</div>
                  <div className="text-xs text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-3 bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-xs text-gray-600 font-medium">Projects</div>
                </div>
              </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-emerald-100 rounded-xl"></div>
          </div>

        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  )
}

export default ContentSection

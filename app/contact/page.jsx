import React, { Suspense } from 'react'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[400px] -mt-[92px]">
        {/* Crystal clear frosted glass background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 lg:pt-44 z-10">
          <div className="text-center">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8 opacity-0 animate-page-hero"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.15s' }}>
              Get in
              <span className="block text-emerald-400 mt-2">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
              Ready to transform your business? Let's start the conversation. Our team is here to answer
              your questions and help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section data-header-theme="light" className="relative bg-white py-20">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-emerald-900/90 to-emerald-950 p-8 rounded-2xl border-2 border-emerald-600/30 shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                      <a href="mailto:info@serviaconsulting.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                        info@serviaconsulting.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Phone</h3>
                      <a href="tel:+15551234567" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Location</h3>
                      <p className="text-gray-300">
                        San Antonio, Texas<br />
                        Serving businesses nationwide
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-600/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-700 text-lg mb-2">Quick Response Guarantee</h3>
                    <p className="text-gray-700">
                      We'll respond to your inquiry within 24 hours during business days. Your success is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section data-header-theme="light" className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-700 mb-4">
              Visit Us in
              <span className="block text-emerald-600 mt-2">San Antonio</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Located in the heart of San Antonio, serving businesses across Texas and beyond.
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224344.55019498!2d-98.69682!3d29.4241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00ebd%3A0xef44c7e0abe90dcc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Servia Consulting Location"
            ></iframe>
          </div>

          {/* Location Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Central Location</h3>
              <p className="text-gray-600 text-sm">
                Strategically positioned to serve businesses throughout the region
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Bilingual Services</h3>
              <p className="text-gray-600 text-sm">
                English and Spanish support to serve our diverse community
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Nationwide Reach</h3>
              <p className="text-gray-600 text-sm">
                Virtual and in-person consulting available across the United States
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage

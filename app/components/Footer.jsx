'use client'

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="site-footer" className="relative bg-emerald-900 text-white overflow-hidden section-transition section-delay-4">
      {/* ===== Main Footer Content (kept above decorations) ===== */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Company Info */}
            <div className="space-y-6 fade-slide-up text-delay-1">
              <div className="flex items-center -my-4">
                <Image
                  src="/assets/logos/servia-logo.png"
                  alt="Servia Consulting"
                  width={260}
                  height={104}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming insights into strategic advantage. Your trusted partner for sustainable business growth.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="fade-slide-up text-delay-2">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                Quick Links
                <span className="ml-3 w-12 h-0.5 bg-emerald-600" />
              </h4>
              <ul className="space-y-3">
                {[
                  ['/', 'Home'],
                  ['/about', 'About Us'],
                  ['/service', 'Our Services'],
                  ['/insights', 'Insights'],
                  ['/audit', 'Restaurant Audit'],
                  ['/contact', 'Contact'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info & Location */}
            <div className="fade-slide-up text-delay-3">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                Contact Us
                <span className="ml-3 w-12 h-0.5 bg-emerald-600" />
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-400 text-sm">Harlingen, Texas</p>
                    <p className="text-gray-400 text-sm">United States</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:info@serviaconsulting.com" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                      agutierrez@serviaconsulting.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <svg className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+19565551234" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                      +1 (956) 543-1772
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="fade-slide-up text-delay-4">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                Business Hours
                <span className="ml-3 w-12 h-0.5 bg-emerald-600" />
              </h4>

              <div className="space-y-3">
                {[
                  ['Monday - Friday', '9:00 AM - 6:00 PM'],
                  ['Saturday', '10:00 AM - 2:00 PM'],
                  ['Sunday', 'Closed'],
                ].map(([day, hours]) => (
                  <div className="flex items-center gap-3" key={day}>
                    <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className={`w-5 h-5 ${day === 'Sunday' ? 'text-gray-600' : 'text-emerald-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{day}</p>
                      <p className="text-gray-400 text-sm">{hours}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-emerald-900 rounded-lg border border-emerald-600/30">
                <p className="text-emerald-400 text-xs font-semibold mb-1">24/7 Emergency Support</p>
                <p className="text-gray-400 text-xs">For urgent matters, contact us anytime</p>
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-emerald-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-emerald-900">
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Servia Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <span className="text-emerald-700">|</span>
              <a href="#terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              <span className="text-emerald-700">|</span>
              <a href="#cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Decorations behind content ===== */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl z-0" />

      {/* LEFT (6) */}
      <div className="absolute bottom-8 left-8 w-20 h-20 border-2 border-emerald-600/20 rounded-lg rotate-12 animate-float animate-pulse-glow anim-delay-0 pointer-events-none z-0" />
      <div className="absolute bottom-24 left-24 w-24 h-24 border-2 border-emerald-600/10 rounded-lg rotate-6 animate-float-slow animate-pulse-glow anim-delay-400 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-16 w-16 h-16 border-2 border-emerald-600/15 rounded-lg -rotate-6 animate-float animate-pulse-glow anim-delay-800 pointer-events-none z-0" />
      <div className="absolute top-10 left-1/4 w-28 h-28 border-2 border-emerald-600/5 rounded-lg rotate-3 animate-float-fast animate-pulse-glow anim-delay-1200 pointer-events-none z-0" style={{ '--rotate': '8deg' }} />
      <div className="absolute top-20 left-32 w-14 h-14 border-2 border-emerald-600/25 rounded-lg -rotate-12 animate-float-slow animate-pulse-glow anim-delay-1600 pointer-events-none z-0" style={{ '--rotate': '12deg' }} />
      <div className="absolute bottom-1/3 left-12 w-18 h-18 border-2 border-emerald-600/20 rounded-lg rotate-8 animate-float-fast animate-pulse-glow anim-delay-2000 pointer-events-none z-0" style={{ '--rotate': '15deg' }} />

      {/* RIGHT (6) */}
      <div className="absolute top-1/3 right-12 w-16 h-16 border-2 border-emerald-600/20 rounded-lg -rotate-12 animate-float animate-pulse-glow anim-delay-400 pointer-events-none z-0" />
      <div className="absolute top-10 right-20 w-24 h-24 border-2 border-emerald-600/15 rounded-lg rotate-6 animate-float-slow animate-pulse-glow anim-delay-800 pointer-events-none z-0" />
      <div className="absolute bottom-16 right-16 w-20 h-20 border-2 border-emerald-600/10 rounded-lg rotate-12 animate-float animate-pulse-glow anim-delay-1200 pointer-events-none z-0" />
      <div className="absolute bottom-8 right-1/4 w-28 h-28 border-2 border-emerald-600/5 rounded-lg -rotate-3 animate-float-fast animate-pulse-glow anim-delay-0 pointer-events-none z-0" style={{ '--rotate': '10deg' }} />
      <div className="absolute top-24 right-32 w-14 h-14 border-2 border-emerald-600/25 rounded-lg rotate-15 animate-float-slow animate-pulse-glow anim-delay-1600 pointer-events-none z-0" style={{ '--rotate': '18deg' }} />
      <div className="absolute bottom-1/4 right-28 w-18 h-18 border-2 border-emerald-600/20 rounded-lg -rotate-8 animate-float-fast animate-pulse-glow anim-delay-2000 pointer-events-none z-0" style={{ '--rotate': '14deg' }} />
    </footer>
  );
};

export default Footer;

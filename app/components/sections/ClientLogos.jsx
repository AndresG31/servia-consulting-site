'use client'
import React from 'react'
import ScrollFadeIn from '../ui/ScrollFadeIn'

const clients = [
  { name: "Moran's Pizzeria", type: 'Pizzeria', city: 'Texas' },
]

export default function ClientLogos() {
  return (
    <section data-header-theme="dark" className="relative bg-black py-16">
      {/* Subtle noise/grain texture feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollFadeIn>
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Our Clients</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Restaurants That Trusted Servia
          </h2>
        </div>
        </ScrollFadeIn>

        {/* Logo grid */}
        <div className="flex justify-center">
          {clients.map((client, i) => (
            <ScrollFadeIn key={client.name} delay={i * 60}>
            <div className="w-48 flex flex-col items-center justify-center text-center p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all group">
              {/* Monogram */}
              <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-emerald-600 flex items-center justify-center mb-3 transition-colors">
                <span className="text-lg font-black text-white transition-colors">
                  {client.name.charAt(0)}
                </span>
              </div>
              <p className="font-bold text-white text-sm leading-tight">{client.name}</p>
              <p className="text-xs text-emerald-400 mt-0.5">{client.type}</p>
              <p className="text-xs text-white/40 mt-0.5">{client.city}</p>
            </div>
            </ScrollFadeIn>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 mt-8">
          Independent restaurants · Fast casual · Cafés · Bistros · Fine dining
        </p>
      </div>
    </section>
  )
}

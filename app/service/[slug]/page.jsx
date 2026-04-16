import { notFound } from 'next/navigation'
import Link from 'next/link'
import Footer from '../../components/layout/Footer'
import { services, getServiceBySlug } from '../serviceData'

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.label} | Servia Consulting`,
    description: service.shortDesc,
  }
}

const pkgStyles = {
  emerald: { badge: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/40', dot: 'bg-emerald-500', step: 'bg-emerald-600', border: 'border-emerald-600/30' },
  yellow:  { badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',   dot: 'bg-yellow-500',  step: 'bg-yellow-500',  border: 'border-yellow-500/30' },
  purple:  { badge: 'bg-purple-500/20 text-purple-400 border-purple-500/40',   dot: 'bg-purple-500',  step: 'bg-purple-600',  border: 'border-purple-500/30' },
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const style = pkgStyles[service.pkgColor]
  const related = service.relatedSlugs.map(s => services.find(x => x.slug === s)).filter(Boolean)

  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Hero */}
      <section className="relative bg-emerald-950 overflow-hidden min-h-[420px]">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-24 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-emerald-500 mb-8">
            <Link href="/service" className="hover:text-emerald-400 transition-colors">Services</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-emerald-300">{service.label}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${style.badge}`}>
              {service.pkg} Package
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            {service.label}
          </h1>
          <p className="text-xl text-emerald-300 max-w-2xl leading-relaxed mb-10">
            {service.tagline}
          </p>

          <Link
            href={`/contact?service=${service.contactParam}`}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500 transition-all shadow-lg"
          >
            Inquire About This Service
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">

            {/* Main content */}
            <div className="space-y-16">

              {/* Is this right for you */}
              <div>
                <div className="w-12 h-1 bg-emerald-600 mb-6" />
                <h2 className="text-3xl font-bold text-emerald-700 mb-6">Is this right for you?</h2>
                <div className="space-y-4">
                  {service.whoFor.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div>
                <div className="w-12 h-1 bg-emerald-600 mb-6" />
                <h2 className="text-3xl font-bold text-emerald-700 mb-8">How it works</h2>
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full ${style.step} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                          {i + 1}
                        </div>
                        {i < service.process.length - 1 && (
                          <div className="w-0.5 bg-emerald-200 flex-1 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div>
                  <div className="w-12 h-1 bg-emerald-600 mb-6" />
                  <h2 className="text-3xl font-bold text-emerald-700 mb-6">Often paired with</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {related.map(rel => {
                      const relStyle = pkgStyles[rel.pkgColor]
                      return (
                        <Link
                          key={rel.slug}
                          href={`/service/${rel.slug}`}
                          className="group flex flex-col p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-100 transition-all"
                        >
                          <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${relStyle.badge.split(' ')[1]}`}>{rel.pkg}</span>
                          <h3 className="font-bold text-emerald-700 text-lg mb-1 group-hover:text-emerald-600">{rel.label}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed flex-1">{rel.shortDesc}</p>
                          <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                            Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* What's included */}
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-6 border border-emerald-700/50">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">What's included</p>
                <ul className="space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${style.dot} flex-shrink-0 mt-2`} />
                      <span className="text-sm text-white leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-6 pt-5 border-t ${style.border}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Package</p>
                  <p className="text-white font-bold">{service.pkg}</p>
                  <p className="text-emerald-300/70 text-xs mt-1">Also included in higher-tier packages</p>
                  <Link href="/service#packages" className="text-emerald-400 hover:text-emerald-300 text-xs underline mt-1 inline-block transition-colors">
                    View all packages →
                  </Link>
                </div>

                <Link
                  href={`/contact?service=${service.contactParam}`}
                  className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Not sure? */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <p className="text-sm font-bold text-emerald-700 mb-2">Not sure this is the right fit?</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">Take our 30-second quiz and we'll match you to the service that fits your goals.</p>
                <Link href="/service/quiz" className="text-emerald-600 hover:text-emerald-700 text-xs font-semibold underline transition-colors">
                  Find my service →
                </Link>
              </div>

              {/* Audit nudge */}
              <div className="bg-emerald-950 border border-emerald-800 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Free diagnostic</p>
                <p className="text-sm text-white font-semibold mb-1">Want the full picture first?</p>
                <p className="text-xs text-emerald-300/70 leading-relaxed mb-3">Our free Restaurant Audit scores your operation across 9 categories and tells you exactly where to focus.</p>
                <Link href="/audit" className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold underline transition-colors">
                  Take the free audit →
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-emerald-950 py-20 border-t border-emerald-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Tell us about your business and we'll reach out to talk through how {service.label} can move the needle for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?service=${service.contactParam}`}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500 transition-all shadow-lg"
            >
              Inquire Now
            </Link>
            <Link
              href="/service"
              className="border-2 border-emerald-700 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-900/40 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

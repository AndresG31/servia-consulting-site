'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/layout/Footer'
import { getAllPosts, urlFor } from '../lib/sanity'

// Fallback sample posts if Sanity is not configured yet
const fallbackPosts = [
  {
    _id: '1',
    title: 'The Essential Guide to Restaurant Operations Excellence',
    excerpt: 'Discover proven strategies to streamline your restaurant operations, reduce costs, and improve customer satisfaction.',
    category: 'Operations',
    publishedAt: '2026-04-10',
    author: 'Andres Gutierrez',
    readTime: '5 min read',
  },
  {
    _id: '2',
    title: '5 Key Metrics Every Restaurant Owner Should Track',
    excerpt: 'Learn which performance indicators truly matter for sustainable growth and profitability in the restaurant industry.',
    category: 'Business Strategy',
    publishedAt: '2026-04-05',
    author: 'Andres Gutierrez',
    readTime: '7 min read',
  },
  {
    _id: '3',
    title: 'Building a High-Performance Restaurant Team',
    excerpt: 'The secrets to recruiting, training, and retaining exceptional staff in the competitive hospitality industry.',
    category: 'Team Development',
    publishedAt: '2026-03-28',
    author: 'Andres Gutierrez',
    readTime: '6 min read',
  },
  {
    _id: '4',
    title: 'Digital Transformation: Modern Technology for Restaurants',
    excerpt: 'How to leverage technology to enhance operations, improve customer experience, and increase profitability.',
    category: 'Technology',
    publishedAt: '2026-03-20',
    author: 'Andres Gutierrez',
    readTime: '8 min read',
  },
  {
    _id: '5',
    title: 'Mastering Food Cost Control Without Sacrificing Quality',
    excerpt: 'Practical techniques to optimize your food costs while maintaining the quality your customers expect.',
    category: 'Financial Management',
    publishedAt: '2026-03-15',
    author: 'Andres Gutierrez',
    readTime: '6 min read',
  },
  {
    _id: '6',
    title: 'Creating Memorable Customer Experiences',
    excerpt: 'Go beyond good service—learn how to create experiences that turn first-time guests into loyal customers.',
    category: 'Customer Experience',
    publishedAt: '2026-03-08',
    author: 'Andres Gutierrez',
    readTime: '5 min read',
  },
]

const categories = ['All', 'Operations', 'Business Strategy', 'Team Development', 'Technology', 'Financial Management', 'Customer Experience']

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [blogPosts, setBlogPosts] = useState(fallbackPosts)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [subscribing, setSubscribing] = useState(false)
  const [subscribeError, setSubscribeError] = useState('')

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getAllPosts()
        if (posts && posts.length > 0) {
          setBlogPosts(posts)
        }
      } catch (error) {
        console.warn('Sanity not configured yet, using fallback posts:', error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setSubscribeError('')

    if (!email || !email.includes('@')) {
      setSubscribeError('Please enter a valid email address')
      return
    }

    setSubscribing(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to thank you page
        window.location.href = '/subscribe/thank-you'
      } else {
        setSubscribeError(data.message || 'Failed to subscribe. Please try again.')
        setSubscribing(false)
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setSubscribeError('Failed to subscribe. Please try again.')
      setSubscribing(false)
    }
  }

  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-screen -mt-[92px]">
        {/* Full-width Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            key="blog-hero-video"
          >
            <source src="/assets/blog/blog-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-screen">

            {/* Left Side - Headline Content with Black Background Filter */}
            <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-36 pb-12 lg:pt-44 lg:pb-16 z-10">
              {/* Black background filter with 50% transparency */}
              <div className="absolute inset-0 bg-black/50 opacity-0 animate-fade-in-page"></div>

              {/* Content with delayed animation */}
              <div className="relative z-10">
                {/* Emerald accent */}
                <div className="w-20 h-1 bg-emerald-600 mb-8 opacity-0 animate-page-hero"></div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-page-hero" style={{ animationDelay: '0.1s' }}>
                  The Servia
                  <span className="block text-emerald-400 mt-2">Blog Posts</span>
                </h1>

                <p className="text-xl sm:text-xl text-gray-100 mb-8 leading-relaxed opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
                  Stories, strategies, and insights from the field—helping restaurant owners turn operations into opportunities.
                </p>

                <p className="text-lg text-gray-200 mb-10 max-w-xl opacity-0 animate-page-hero" style={{ animationDelay: '0.5s' }}>
                  Real-world advice, proven systems, and actionable strategies to help you grow your restaurant business.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-page-hero" style={{ animationDelay: '0.7s' }}>
                  <a
                    href="#blog-content"
                    onClick={(e) => {
                      e.preventDefault()
                      const section = document.getElementById('blog-content')
                      if (section) {
                        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
                        window.scrollTo({ top: elementPosition, behavior: 'smooth' })
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg"
                  >
                    Browse Articles
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <a
                    href="#newsletter"
                    onClick={(e) => {
                      e.preventDefault()
                      const section = document.getElementById('newsletter')
                      if (section) {
                        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
                        window.scrollTo({ top: elementPosition, behavior: 'smooth' })
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Subscribe for Free
                  </a>
                </div>

                {/* Reference Link */}
                <div className="mt-8 pt-8 border-t border-white/10 opacity-0 animate-page-hero" style={{ animationDelay: '0.9s' }}>
                  <p className="text-gray-300 text-sm mb-3">Looking for more resources?</p>
                  <a
                    href="/insights"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium group"
                  >
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Explore Our Insights & Resources
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Let video show through */}
            <div className="hidden lg:block"></div>

          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-content" data-header-theme="light" className="relative bg-gray-50 py-20">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 mt-4">Loading posts...</p>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post._id}
                  className="group bg-white border-2 border-emerald-100 rounded-2xl overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/10 transition-all"></div>
                        <svg className="w-20 h-20 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-emerald-100">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    {post.slug && (
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="inline-flex items-center gap-2 text-emerald-600 font-semibold mt-4 group-hover:gap-3 transition-all"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No posts found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" data-header-theme="light" className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50 py-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-xl text-emerald-800 mb-8">
            Subscribe to our newsletter for exclusive tips, strategies, and updates delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={subscribing}
                className="flex-1 px-6 py-4 rounded-lg bg-white border-2 border-emerald-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                required
              />
              <button
                type="submit"
                disabled={subscribing}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {subscribeError && (
              <p className="text-red-600 mt-3 text-sm font-medium">{subscribeError}</p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage

'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '../components/layout/Footer'

// Sample blog posts - you can replace this with actual data from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'The Essential Guide to Restaurant Operations Excellence',
    excerpt: 'Discover proven strategies to streamline your restaurant operations, reduce costs, and improve customer satisfaction.',
    category: 'Operations',
    date: 'April 10, 2026',
    author: 'Andres Gutierrez',
    readTime: '5 min read',
    image: '/assets/logos/servia-isotipo-ai14.png', // Placeholder
  },
  {
    id: 2,
    title: '5 Key Metrics Every Restaurant Owner Should Track',
    excerpt: 'Learn which performance indicators truly matter for sustainable growth and profitability in the restaurant industry.',
    category: 'Business Strategy',
    date: 'April 5, 2026',
    author: 'Andres Gutierrez',
    readTime: '7 min read',
    image: '/assets/logos/servia-isotipo-ai14.png', // Placeholder
  },
  {
    id: 3,
    title: 'Building a High-Performance Restaurant Team',
    excerpt: 'The secrets to recruiting, training, and retaining exceptional staff in the competitive hospitality industry.',
    category: 'Team Development',
    date: 'March 28, 2026',
    author: 'Andres Gutierrez',
    readTime: '6 min read',
    image: '/assets/logos/servia-isotipo-ai14.png', // Placeholder
  },
  {
    id: 4,
    title: 'Digital Transformation: Modern Technology for Restaurants',
    excerpt: 'How to leverage technology to enhance operations, improve customer experience, and increase profitability.',
    category: 'Technology',
    date: 'March 20, 2026',
    author: 'Andres Gutierrez',
    readTime: '8 min read',
    image: '/assets/logos/servia-isotipo-ai14.png', // Placeholder
  },
  {
    id: 5,
    title: 'Mastering Food Cost Control Without Sacrificing Quality',
    excerpt: 'Practical techniques to optimize your food costs while maintaining the quality your customers expect.',
    category: 'Financial Management',
    date: 'March 15, 2026',
    author: 'Andres Gutierrez',
    readTime: '6 min read',
    image: '/assets/logos/servia-isotipo-ai14.png', // Placeholder
  },
  {
    id: 6,
    title: 'Creating Memorable Customer Experiences',
    excerpt: 'Go beyond good service—learn how to create experiences that turn first-time guests into loyal customers.',
    category: 'Customer Experience',
    date: 'March 8, 2026',
    author: 'Andres Gutierrez',
    readTime: '5 min read',
    image: '/assets/logos/servia-isotipo-ai14.png', // Placeholder
  },
]

const categories = ['All', 'Operations', 'Business Strategy', 'Team Development', 'Technology', 'Financial Management', 'Customer Experience']

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[500px] -mt-[92px]">
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
              The Servia
              <span className="block text-emerald-400 mt-2">Blog Page</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-page-hero" style={{ animationDelay: '0.3s' }}>
              Stories, strategies, and insights from the field—helping restaurant owners turn operations into opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section data-header-theme="light" className="relative bg-gray-50 py-20">
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

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border-2 border-emerald-100 rounded-2xl overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/10 transition-all"></div>
                  <svg className="w-20 h-20 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
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
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold mt-4 group-hover:gap-3 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
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
      <section data-header-theme="light" className="relative bg-white py-16">
        {/* Grid pattern background */}
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Subscribe to our newsletter for exclusive tips, strategies, and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-emerald-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
            />
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage

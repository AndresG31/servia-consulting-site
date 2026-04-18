import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, urlFor, getAllPosts } from '../../lib/sanity'
import Footer from '../../components/layout/Footer'

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post) => ({
      slug: post.slug.current,
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }) {
  try {
    const post = await getPostBySlug(params.slug)
    if (!post) return { title: 'Post Not Found' }

    return {
      title: `${post.title} | Servia Consulting Blog`,
      description: post.excerpt,
    }
  } catch {
    return { title: 'Post Not Found' }
  }
}

export default async function BlogPost({ params }) {
  let post
  try {
    post = await getPostBySlug(params.slug)
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[400px] -mt-[92px]">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Category badge */}
          <span className="inline-block px-3 py-1 bg-emerald-600/20 text-emerald-400 text-xs font-semibold rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section data-header-theme="light" className="relative bg-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-xl">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section data-header-theme="light" className="relative bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Excerpt */}
          {post.excerpt && (
            <div className="text-xl text-gray-700 font-medium mb-8 pb-8 border-b-2 border-emerald-100">
              {post.excerpt}
            </div>
          )}

          {/* Post content */}
          <div className="prose prose-lg prose-emerald max-w-none">
            {post.content ? (
              <div className="text-gray-700 leading-relaxed space-y-4">
                {/* Render content blocks - for now showing as JSON, you can add @portabletext/react for rich content */}
                <p className="text-gray-500 italic">
                  Content rendering coming soon. Configure @portabletext/react to display rich content.
                </p>
                <pre className="text-xs bg-gray-50 p-4 rounded overflow-auto">
                  {JSON.stringify(post.content, null, 2)}
                </pre>
              </div>
            ) : (
              <p className="text-gray-600">No content available yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-header-theme="light" className="relative bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you achieve operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all inline-flex items-center justify-center gap-2"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

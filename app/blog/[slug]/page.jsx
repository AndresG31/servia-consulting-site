import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, urlFor, getAllPosts } from '../../lib/sanity'
import Footer from '../../components/layout/Footer'
import PublishButton from '../../components/ui/PublishButton'

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post) => ({ slug: post.slug.current }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  try {
    const post = await getPostBySlug(slug)
    if (!post) return { title: 'Post Not Found' }
    return {
      title: `${post.title} | Servia Consulting Blog`,
      description: post.excerpt,
    }
  } catch {
    return { title: 'Post Not Found' }
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-emerald-900 mt-14 mb-5 font-playfair leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-emerald-900 mt-10 mb-4 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-emerald-800 mt-8 mb-3 leading-snug">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative border-l-4 border-emerald-500 pl-6 pr-4 py-4 my-8 bg-emerald-50 rounded-r-2xl">
        <svg className="absolute top-4 left-4 w-5 h-5 text-emerald-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p className="text-emerald-900 text-lg italic font-medium pl-6">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline decoration-emerald-500 decoration-2 underline-offset-2">{children}</span>
    ),
    code: ({ children }) => (
      <code className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : '_self'}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-emerald-600 underline decoration-emerald-400 decoration-1 underline-offset-2 hover:text-emerald-500 hover:decoration-2 transition-all"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none ml-0 mb-6 space-y-3 text-gray-700 text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-none ml-0 mb-6 space-y-3 text-gray-700 text-lg counter-reset-[item]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 leading-relaxed">
        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-3 leading-relaxed">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center mt-1">
          {/* number injected by browser */}
        </span>
        <span>{children}</span>
      </li>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-10 rounded-2xl overflow-hidden border border-emerald-100 shadow-lg">
        <Image
          src={urlFor(value).width(900).url()}
          alt={value.alt || ''}
          width={900}
          height={500}
          className="w-full object-cover"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-gray-500 italic bg-emerald-50 py-2 px-4">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const { isEnabled: isDraftMode } = await draftMode()

  let post
  try {
    post = await getPostBySlug(slug, isDraftMode)
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  if (!post) notFound()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="font-sans">
      {/* Draft mode banner */}
      {isDraftMode && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-yellow-400 text-yellow-900 font-semibold text-sm px-5 py-2 rounded-full shadow-lg flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-yellow-700 animate-pulse" />
          Draft Preview
          <PublishButton draftId={post._id} slug={slug} />
          <Link href="/api/draft-mode/disable" className="underline hover:no-underline ml-1">
            Exit
          </Link>
        </div>
      )}

      {/* Hero */}
      <section data-header-theme="dark" className="relative bg-emerald-950 overflow-hidden min-h-[400px] -mt-[92px]">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <span className="block mt-5 mb-4 px-3 py-1 bg-emerald-600/20 text-emerald-400 text-xs font-semibold rounded-full w-fit">
            {post.category}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

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
          {post.excerpt && (
            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10 pb-10 border-b-2 border-emerald-100">
              {post.excerpt}
            </p>
          )}
          <div>
            {post.content ? (
              <PortableText value={post.content} components={portableTextComponents} />
            ) : (
              <p className="text-gray-500">No content available yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
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

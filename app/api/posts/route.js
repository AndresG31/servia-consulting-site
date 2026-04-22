import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-04-16',
  useCdn: false,
})

export async function GET() {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        "category": category->title,
        publishedAt,
        "author": author->name,
        readTime,
        mainImage
      }
    `)
    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return NextResponse.json({ posts: [], error: error.message }, { status: 500 })
  }
}

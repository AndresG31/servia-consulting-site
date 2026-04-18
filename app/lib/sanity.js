import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

// Use a valid dummy project ID format for builds when Sanity isn't configured
// Must be lowercase alphanumeric + dashes only
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-04-16',
  useCdn: process.env.NODE_ENV === 'production',
})

export const isSanityConfigured = () => {
  return projectId !== 'placeholder' && projectId !== 'REPLACE_WITH_YOUR_PROJECT_ID'
}

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Fetch all blog posts
export async function getAllPosts() {
  if (!isSanityConfigured()) {
    return []
  }
  try {
    return await client.fetch(`
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
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return []
  }
}

// Fetch single post by slug
export async function getPostBySlug(slug) {
  if (!isSanityConfigured()) {
    return null
  }
  try {
    return await client.fetch(
      `
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        content,
        "category": category->title,
        publishedAt,
        "author": author->name,
        readTime,
        mainImage
      }
    `,
      { slug }
    )
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null
  }
}

// Fetch posts by category
export async function getPostsByCategory(category) {
  if (!isSanityConfigured()) {
    return []
  }
  try {
    return await client.fetch(
      `
      *[_type == "post" && category->title == $category] | order(publishedAt desc) {
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
    `,
      { category }
    )
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return []
  }
}

// Fetch featured posts (limit 3 for insights page)
export async function getFeaturedPosts(limit = 3) {
  if (!isSanityConfigured()) {
    return []
  }
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) [0...${limit}] {
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
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return []
  }
}

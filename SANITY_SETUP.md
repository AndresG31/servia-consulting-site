# Sanity CMS Setup Guide

## Current Status
Your Sanity CMS integration is complete! Here's what's been set up:

- ✅ Sanity client configured in `app/lib/sanity.js`
- ✅ Blog schemas created (Post, Category, Author)
- ✅ Sanity Studio route at `/studio`
- ✅ Environment variables configured with project ID: `2njlhj6k`
- ✅ Build passing successfully

## Fix CORS Error

To access your Sanity Studio at `http://localhost:3000/studio`, you need to add your domain to CORS origins:

### Option 1: Via Sanity CLI (Recommended)

```bash
# Install Sanity CLI globally if you haven't
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Add CORS origin for localhost
sanity cors add http://localhost:3000 --credentials

# For production, also add your production domain
sanity cors add https://yourdomain.com --credentials
```

### Option 2: Via Sanity Management Dashboard

1. Go to https://www.sanity.io/manage
2. Select your project: **Servia Consulting Blog** (ID: 2njlhj6k)
3. Go to **Settings** → **API**
4. Under **CORS Origins**, click **Add CORS origin**
5. Add these origins:
   - `http://localhost:3000` (for development)
   - `http://localhost:3001` (backup port)
   - Your production domain when ready

6. Enable **Allow credentials** for each origin

## Start Creating Content

Once CORS is configured:

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Access Sanity Studio:**
   Open http://localhost:3000/studio in your browser

3. **Create initial content:**

   a. **Create Categories** (in this order):
      - Operations
      - Business Strategy
      - Team Development
      - Technology
      - Financial Management
      - Customer Experience

   b. **Create an Author:**
      - Name: Andres Gutierrez
      - Upload a profile image
      - Add a bio

   c. **Create Blog Posts:**
      - Add a title (slug auto-generates)
      - Write an excerpt (max 200 chars)
      - Select a category
      - Select the author
      - Set publish date
      - Add read time (e.g., "5 min read")
      - Upload a featured image
      - Write your content

## How It Works

### Fallback System
Your blog works even without Sanity content:
- If Sanity isn't configured or has no posts → Shows 6 fallback sample posts
- Once you add real content in Sanity → Automatically displays your real posts

### Pages That Use Sanity

1. **Blog Page** (`/blog`)
   - Fetches all posts from Sanity
   - Falls back to sample posts if none exist

2. **Blog Post Detail** (`/blog/[slug]`)
   - Fetches individual post by slug
   - Shows 404 if post doesn't exist

3. **Insights Page** (`/insights`)
   - "From Servia" section shows 3 most recent posts
   - Falls back to hardcoded articles if no Sanity posts

## Useful Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Check Sanity CLI help
sanity help

# List all Sanity projects
sanity projects list

# Deploy Sanity Studio (if needed later)
sanity deploy
```

## Schema Overview

### Post Schema
- title (required)
- slug (auto-generated from title)
- excerpt (required, max 200 chars)
- mainImage (optional)
- category (required, references Category)
- author (required, references Author)
- publishedAt (required)
- readTime (required, e.g., "5 min read")
- content (rich text with images)

### Category Schema
- title (required)
- slug (auto-generated)
- description (optional)

### Author Schema
- name (required)
- slug (auto-generated)
- image (optional)
- bio (rich text, optional)

## Troubleshooting

### "Module not found" errors
Make sure all Sanity packages are installed:
```bash
npm install next-sanity @sanity/image-url @sanity/vision sanity
```

### Studio won't load
1. Check CORS settings (see above)
2. Verify your project ID in `.env.local` is correct: `2njlhj6k`
3. Make sure you're logged into Sanity: `sanity login`

### Posts not showing
1. Create content in Sanity Studio first
2. Make sure posts have `publishedAt` dates
3. Check browser console for errors
4. Verify `.env.local` has the correct project ID

## Next Steps

1. **Fix CORS** using one of the methods above
2. **Access Studio** at http://localhost:3000/studio
3. **Create categories, author, and posts**
4. **Visit your blog** at http://localhost:3000/blog to see real content

Your blog will automatically switch from fallback posts to real Sanity content once you create it!

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './sanity/schemas'
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Servia Consulting Blog',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve: {
        locations: {
          post: (doc) => ({
            locations: [
              {
                title: doc?.title as string || 'Blog Post',
                href: `/blog/${(doc?.slug as any)?.current}`,
              },
            ],
          }),
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Performance optimizations
  document: {
    // Reduce the number of revisions shown in the history panel
    productionUrl: async (prev, context) => {
      return prev
    },
  },

  // Faster image uploads and performance
  tasks: { enabled: false },

  // Optimize how documents are loaded
  __internal: {
    options: {
      // Reduce initial load time
      lazyLoad: true,
    },
  },
})

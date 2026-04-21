'use server'

import { createClient } from 'next-sanity'
import { draftMode } from 'next/headers'
import { revalidatePath } from 'next/cache'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-04-16',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

export async function publishPost(draftId: string, slug: string) {
  const publishedId = draftId.replace(/^drafts\./, '')

  const draft = await writeClient.getDocument(draftId)
  if (!draft) throw new Error('Draft not found')

  await writeClient
    .transaction()
    .createOrReplace({ ...draft, _id: publishedId })
    .delete(draftId)
    .commit()

  const dm = await draftMode()
  dm.disable()

  revalidatePath(`/blog/${slug}`)
  revalidatePath('/blog')
}

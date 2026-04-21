'use client'

import { useTransition } from 'react'
import { publishPost } from '../../actions/publish'

export default function PublishButton({ draftId, slug }: { draftId: string; slug: string }) {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => publishPost(draftId, slug))}
      disabled={isPending}
      className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold text-sm px-4 py-1.5 rounded-full shadow transition-colors"
    >
      {isPending ? 'Publishing…' : 'Publish'}
    </button>
  )
}

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const dm = await draftMode()
  dm.enable()
  const redirectTo = searchParams.get('redirect') || '/'
  redirect(redirectTo)
}

import { buildHtml, generatePdf } from '../../lib/auditPdf'

export const maxDuration = 60

export async function POST(request) {
  const { scores } = await request.json()
  const pdf = await generatePdf(scores)

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="servia-audit-results.pdf"',
    },
  })
}

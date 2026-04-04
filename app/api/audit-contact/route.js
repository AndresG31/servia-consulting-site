import { Resend } from 'resend'
import { generatePdf } from '../../lib/auditPdf'
import { auditCategories } from '../../audit/auditData'

export const maxDuration = 60

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { fullName, email, phone, scores } = await request.json()

  const pdfBuffer = await generatePdf(scores)

  const overallPct = (() => {
    const totalItems = auditCategories.reduce((acc, cat) => acc + cat.items.length, 0)
    const totalScore = Object.values(scores).reduce((acc, v) => acc + v, 0)
    const maxScore = totalItems * 2
    return maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
  })()

  const fromInternal = process.env.RESEND_FROM_INTERNAL ?? 'Servia Consulting <notifications@serviaconsulting.com>'
  const fromExternal = process.env.RESEND_FROM_EMAIL ?? 'Servia Consulting <notifications@serviaconsulting.com>'
  const replyTo = process.env.RESEND_REPLY_TO ?? process.env.RESEND_TO_EMAIL

  const attachment = {
    filename: `servia-audit-${fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
    content: Buffer.from(pdfBuffer).toString('base64'),
  }

  await Promise.all([
    resend.emails.send({
      from: fromInternal,
      to: process.env.RESEND_TO_EMAIL,
      reply_to: replyTo,
      subject: `New Audit Lead — ${fullName} (${overallPct}%)`,
      html: `
        <h2>New Audit Lead</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Overall Score:</strong> ${overallPct}%</p>
        <p>Their full audit report is attached.</p>
      `,
      attachments: [attachment],
    }),
    resend.emails.send({
      from: fromExternal,
      to: email,
      subject: `Your Free Audit Report — ${overallPct}% Overall Score`,
      html: `
        <p>Hi ${fullName},</p>
        <p>Thanks for completing the Servia Restaurant Audit. Your full results report is attached to this email.</p>
        <p>Your overall score came in at <strong>${overallPct}%</strong>. One of our consultants will be in touch soon to help you turn these results into a focused action plan.</p>
        <p>In the meantime, feel free to reply to this email with any questions.</p>
        <br/>
        <p>— The Servia Consulting Team</p>
      `,
      attachments: [attachment],
    }),
  ])

  return Response.json({ ok: true })
}

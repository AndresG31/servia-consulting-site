import { Resend } from 'resend'
import { generatePdf } from '../../lib/auditPdf'
import { auditCategories } from '../../audit/auditData'

export const maxDuration = 60

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { fullName, email, phone, scores } = await request.json()

    const pdfBuffer = await generatePdf(scores)

    const totalItems = auditCategories.reduce((acc, cat) => acc + cat.items.length, 0)
    const totalScore = Object.values(scores).reduce((acc, v) => acc + v, 0)
    const maxScore = totalItems * 2
    const overallPct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0

    const fromInternal = process.env.RESEND_FROM_INTERNAL ?? 'Servia Consulting <onboarding@resend.dev>'
    const fromExternal = process.env.RESEND_FROM_EMAIL ?? 'Servia Consulting <onboarding@resend.dev>'
    const replyTo = process.env.RESEND_REPLY_TO ?? process.env.RESEND_TO_EMAIL

    const attachment = {
      filename: `servia-audit-${fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
      content: Buffer.from(pdfBuffer).toString('base64'),
    }

    const [internalResult, customerResult] = await Promise.allSettled([
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
        reply_to: replyTo,
        subject: `Your Free Restaurant Audit Report — ${overallPct}% Overall Score`,
        html: `
          <p>Hi ${fullName},</p>
          <p>Thanks for completing the Servia Restaurant Audit. Your full results report is attached to this email.</p>
          <p>Your overall score came in at <strong>${overallPct}%</strong>. One of our consultants will be in touch soon to help you turn these results into a focused action plan.</p>
          <p>In the meantime, feel free to reply to this email with any questions.</p>
          <br/>
          <p>— The Servia Consulting Team</p>
          <p style="color:#6b7280;font-size:12px;">Servia Consulting · serviaconsulting.com</p>
        `,
        attachments: [attachment],
      }),
    ])

    if (internalResult.status === 'rejected') {
      console.error('Internal email failed:', internalResult.reason)
    }
    if (customerResult.status === 'rejected') {
      console.error('Customer email failed:', customerResult.reason)
    }

    const anySucceeded = internalResult.status === 'fulfilled' || customerResult.status === 'fulfilled'
    if (!anySucceeded) {
      return Response.json({ ok: false, error: 'Both emails failed to send' }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('audit-contact route error:', err)
    return Response.json({ ok: false, error: err.message }, { status: 500 })
  }
}

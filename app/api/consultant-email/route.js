import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { firstName, lastName, email, phone, message, consultantName, consultantEmail, consultantTitle } = await request.json()

  if (!email || !message || !consultantEmail) {
    return Response.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  const fullName = `${firstName} ${lastName}`.trim()
  const from = process.env.RESEND_FROM_INTERNAL ?? 'Servia Consulting <notifications@serviaconsulting.com>'
  const ownerEmail = process.env.RESEND_TO_EMAIL

  // Recipients: the specific consultant + owner (deduplicated)
  const recipients = [...new Set([consultantEmail, ownerEmail])]

  await Promise.all([
    // Notification to consultant (and owner)
    resend.emails.send({
      from,
      to: recipients,
      reply_to: email,
      subject: `Direct Message for ${consultantName} — ${fullName}`,
      html: `
        <h2>Direct Message for ${consultantName}</h2>
        <p><strong>Consultant:</strong> ${consultantName} — ${consultantTitle}</p>
        <hr/>
        <p><strong>From:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }),

    // Confirmation to the sender
    resend.emails.send({
      from,
      to: email,
      subject: `Your message to ${consultantName} — Servia Consulting`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
          <div style="border-bottom:3px solid #059669;padding-bottom:16px;margin-bottom:24px;">
            <h1 style="color:#065f46;font-size:20px;margin:0;">Servia Consulting</h1>
          </div>

          <p>Hi ${firstName},</p>

          <p>Your message has been sent directly to <strong>${consultantName}</strong>. They'll be in touch with you shortly.</p>

          <div style="background:#f0fdf4;border:1px solid #d1fae5;border-radius:10px;padding:16px 20px;margin:24px 0;">
            <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;font-weight:700;letter-spacing:0.05em;">Your Message</p>
            <p style="margin:0;">${message.replace(/\n/g, '<br/>')}</p>
          </div>

          <p>In the meantime, feel free to explore our <a href="https://serviaconsulting.com/service" style="color:#059669;">services</a> or take the free <a href="https://serviaconsulting.com/audit" style="color:#059669;">Restaurant Audit</a>.</p>

          <br/>
          <p style="margin:0;">— The Servia Consulting Team</p>

          <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af;">
            <p style="margin:0;">Servia Consulting · <a href="mailto:agutierrez@serviaconsulting.com" style="color:#9ca3af;">agutierrez@serviaconsulting.com</a></p>
          </div>
        </div>
      `,
    }),
  ])

  return Response.json({ ok: true })
}

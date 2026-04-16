import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { firstName, lastName, email, phone, company, restaurantType, service, message } = await request.json()

  if (!email || !message) return Response.json({ ok: false, error: 'Missing required fields' }, { status: 400 })

  const fullName = `${firstName} ${lastName}`.trim()
  const fromInternal = process.env.RESEND_FROM_INTERNAL ?? 'Servia Consulting <notifications@serviaconsulting.com>'
  const fromExternal = process.env.RESEND_FROM_EMAIL ?? 'Servia Consulting <notifications@serviaconsulting.com>'

  await Promise.all([
    // Internal notification to Servia
    resend.emails.send({
      from: fromInternal,
      to: process.env.RESEND_TO_EMAIL,
      reply_to: email,
      subject: `New Contact Form Submission — ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${restaurantType ? `<p><strong>Restaurant Type:</strong> ${restaurantType}</p>` : ''}
        ${service ? `<p><strong>Interested In:</strong> ${service}</p>` : ''}
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }),

    // Confirmation email to submitter
    resend.emails.send({
      from: fromExternal,
      to: email,
      subject: `We received your message — Servia Consulting`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
          <div style="border-bottom:3px solid #059669;padding-bottom:16px;margin-bottom:24px;">
            <h1 style="color:#065f46;font-size:20px;margin:0;">Servia Consulting</h1>
          </div>

          <p>Hi ${firstName},</p>

          <p>Thank you for reaching out to Servia Consulting. We've received your message and one of our consultants will be in touch within <strong>24 hours</strong>.</p>

          <div style="background:#f0fdf4;border:1px solid #d1fae5;border-radius:10px;padding:16px 20px;margin:24px 0;">
            <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;font-weight:700;letter-spacing:0.05em;">Your Submission</p>
            ${company ? `<p style="margin:0 0 4px;"><strong>Company:</strong> ${company}</p>` : ''}
            ${restaurantType ? `<p style="margin:0 0 4px;"><strong>Restaurant Type:</strong> ${restaurantType}</p>` : ''}
            ${service ? `<p style="margin:0 0 4px;"><strong>Service Interest:</strong> ${service}</p>` : ''}
            <p style="margin:${company || restaurantType || service ? '8px' : '0'} 0 0;"><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
          </div>

          <p>In the meantime, feel free to explore our <a href="https://serviaconsulting.com/service" style="color:#059669;">service packages</a> or take our free <a href="https://serviaconsulting.com/audit" style="color:#059669;">Restaurant Audit</a> to get a head start on your assessment.</p>

          <br/>
          <p style="margin:0;">— The Servia Consulting Team</p>

          <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af;">
            <p style="margin:0;">Servia Consulting · Harlingen, Texas · <a href="mailto:agutierrez@serviaconsulting.com" style="color:#9ca3af;">agutierrez@serviaconsulting.com</a> · +1 (956) 543-1772</p>
          </div>
        </div>
      `,
    }),
  ])

  return Response.json({ ok: true })
}

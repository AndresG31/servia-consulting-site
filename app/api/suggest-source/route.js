import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { name, email, source, url, category, reason } = await request.json()

  if (!source) return Response.json({ ok: false, error: 'Source name is required' }, { status: 400 })

  const fromInternal = process.env.RESEND_FROM_INTERNAL ?? 'Servia Consulting <notifications@serviaconsulting.com>'
  const fromExternal = process.env.RESEND_FROM_EMAIL ?? 'Servia Consulting <notifications@serviaconsulting.com>'

  const sends = [
    resend.emails.send({
      from: fromInternal,
      to: process.env.RESEND_TO_EMAIL,
      reply_to: email || undefined,
      subject: `New Source Suggestion — ${source}`,
      html: `
        <h2>New Source Suggestion</h2>
        <p><strong>Source:</strong> ${source}</p>
        ${url ? `<p><strong>URL:</strong> <a href="${url}">${url}</a></p>` : ''}
        ${category ? `<p><strong>Category:</strong> ${category}</p>` : ''}
        ${reason ? `<p><strong>Why they recommend it:</strong> ${reason}</p>` : ''}
        <hr/>
        <p><strong>Submitted by:</strong> ${name || 'Anonymous'}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
      `,
    }),
  ]

  if (email) {
    sends.push(
      resend.emails.send({
        from: fromExternal,
        to: email,
        subject: `We received your suggestion — ${source}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
            <div style="border-bottom:3px solid #059669;padding-bottom:16px;margin-bottom:24px;">
              <h1 style="color:#065f46;font-size:20px;margin:0;">Servia Consulting</h1>
            </div>

            <p>Hi ${name || 'there'},</p>

            <p>Thank you for taking the time to suggest a source for our Insights Library. We've received your submission and our team will review it shortly.</p>

            <div style="background:#f0fdf4;border:1px solid #d1fae5;border-radius:10px;padding:16px 20px;margin:24px 0;">
              <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;font-weight:700;letter-spacing:0.05em;">Your Submission</p>
              <p style="margin:0 0 4px;"><strong>Source:</strong> ${source}</p>
              ${url ? `<p style="margin:0 0 4px;"><strong>URL:</strong> <a href="${url}" style="color:#059669;">${url}</a></p>` : ''}
              ${category ? `<p style="margin:0 0 4px;"><strong>Category:</strong> ${category}</p>` : ''}
              ${reason ? `<p style="margin:0;"><strong>Your note:</strong> ${reason}</p>` : ''}
            </div>

            <p>If your suggestion is approved, it will be added to our curated library of business and restaurant industry resources. We may reach out if we have any questions.</p>

            <p>In the meantime, feel free to explore our current <a href="https://serviaconsulting.com/insights" style="color:#059669;">Insights Library</a> or <a href="https://serviaconsulting.com/contact" style="color:#059669;">contact us</a> with any questions.</p>

            <br/>
            <p style="margin:0;">— The Servia Consulting Team</p>

            <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af;">
              <p style="margin:0;">Servia Consulting · Harlingen, Texas · <a href="mailto:agutierrez@serviaconsulting.com" style="color:#9ca3af;">agutierrez@serviaconsulting.com</a></p>
            </div>
          </div>
        `,
      })
    )
  }

  await Promise.all(sends)

  return Response.json({ ok: true })
}

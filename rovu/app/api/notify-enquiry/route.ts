import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, venue_name, email, phone, message } = body

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ skipped: true, reason: 'no_api_key' })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Rovu <alerts@rovu.com.au>',
        to: 'rovu.help@gmail.com',
        subject: `New Demo Request from ${venue_name}`,
        html: `<div style="font-family:Inter,system-ui;padding:32px;background:#0a0a0a;color:#fff"><h2 style="color:#5B4FE8">New Demo Request</h2><p><strong>Name:</strong> ${name}</p><p><strong>Venue:</strong> ${venue_name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || 'Not provided'}</p><p><strong>Message:</strong> ${message || 'None'}</p></div>`
      })
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Resend API error:', data)
      return NextResponse.json({ sent: false, status: res.status, error: data }, { status: 500 })
    }

    return NextResponse.json({ sent: true, id: data.id })
  } catch (err) {
    console.error('Notify enquiry error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

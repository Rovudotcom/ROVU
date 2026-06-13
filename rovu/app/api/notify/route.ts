import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { venueName, ownerEmail, rating, comment, customerName, staffName } = await req.json()

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ skipped: true }, { status: 200 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Rovu <alerts@rovu.com.au>',
        to: ownerEmail,
        subject: `⚠️ New private feedback — ${venueName}`,
        html: `
          <div style="font-family:Inter,system-ui,sans-serif;max-width:520px;margin:0 auto;background:#0a0a0a;color:#fff;border-radius:16px;overflow:hidden">
            <div style="background:#5B4FE8;padding:24px 32px">
              <div style="font-size:18px;font-weight:500;color:#fff">new private feedback</div>
              <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px">${venueName}</div>
            </div>
            <div style="padding:32px">
              <div style="display:flex;gap:4px;margin-bottom:16px">
                ${'★'.repeat(rating)}${'☆'.repeat(5-rating)}
                <span style="font-size:13px;color:rgba(255,255,255,0.5);margin-left:8px">${rating}/5 stars</span>
              </div>
              ${comment ? `<div style="background:#1a1a1a;border-radius:10px;padding:16px;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.6;margin-bottom:16px">"${comment}"</div>` : ''}
              <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-bottom:4px">from: ${customerName || 'anonymous'}</div>
              ${staffName ? `<div style="font-size:12px;color:rgba(255,255,255,0.4)">staff mentioned: ${staffName}</div>` : ''}
              <div style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:rgba(255,255,255,0.3)">
                this feedback was kept private and not posted publicly. log in to your rovu dashboard to respond.
              </div>
            </div>
          </div>
        `
      })
    })

    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json({ error: err }, { status: 500 })
    }

    return NextResponse.json({ sent: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
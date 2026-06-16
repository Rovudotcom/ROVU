'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function BookDemoPage() {
  const [name, setName] = useState('')
  const [venueName, setVenueName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    if (!name || !venueName || !email) {
      setError('Please fill in your name, venue, and email.')
      return
    }
    setSubmitting(true)
    setError('')

    try {
      const { error: dbErr } = await supabase.from('enquiries').insert({
        name,
        venue_name: venueName,
        email,
        phone: phone || null,
        message: message || null,
      })

      if (dbErr) {
        console.error('Supabase error:', dbErr)
        setError(`Database error: ${dbErr.message}`)
        setSubmitting(false)
        return
      }

      try {
        await fetch('/api/notify-enquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, venue_name: venueName, email, phone, message }),
        })
      } catch (emailErr) {
        console.error('Email failed but form saved:', emailErr)
      }

      setSubmitting(false)
      setDone(true)

    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 11, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase',
    letterSpacing: '0.08em', fontWeight: 500, display: 'block', marginBottom: 6,
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '0.5px solid rgba(255,255,255,0.12)',
    borderRadius: 10, color: '#fff', fontSize: 14,
    outline: 'none', fontFamily: 'Inter,system-ui,sans-serif',
    marginBottom: 16,
  }

  if (done) {
    return (
      <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'2rem'}}>
        <div>
          <div style={{fontSize:56,marginBottom:20}}>🎉</div>
          <h1 style={{fontSize:30,fontWeight:500,letterSpacing:'-0.03em',color:'#fff',marginBottom:12}}>You're On The List!</h1>
          <p style={{fontSize:15,color:'rgba(255,255,255,0.6)',lineHeight:1.75,maxWidth:380,margin:'0 auto 2.5rem'}}>We've received your details and will be in touch within 24 hours. Get ready to put your reviews on autopilot.</p>
          <a href="/" style={{display:'inline-block',background:'#5B4FE8',color:'#fff',padding:'13px 28px',borderRadius:10,fontSize:14,fontWeight:500,textDecoration:'none'}}>Back To Rovu</a>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',WebkitFontSmoothing:'antialiased'}}>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)',background:'rgba(10,10,10,0.97)',position:'sticky',top:0,zIndex:100,backdropFilter:'blur(20px)'}}>
        <a href="/" style={{textDecoration:'none'}}>
          <svg width="90" height="28" viewBox="0 0 160 52" fill="none">
            <defs><linearGradient id="nl" x1="12" y1="28" x2="30" y2="44" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="rgba(255,255,255,0.5)"/><stop offset="100%" stopColor="#5B4FE8"/></linearGradient></defs>
            <path d="M12 44 L12 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
            <path d="M12 10 Q30 10 30 19 Q30 28 12 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M12 28 L30 44" stroke="url(#nl)" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="52" cy="27" rx="11" ry="17" stroke="#fff" strokeWidth="3" fill="none"/>
            <path d="M80 10 L91 44" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
            <path d="M91 44 L102 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
            <path d="M117 10 L117 34 Q117 44 127 44 Q137 44 137 34 L137 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <circle cx="151" cy="44" r="4" fill="#5B4FE8"/>
          </svg>
        </a>
        <a href="/" style={{fontSize:12,color:'rgba(255,255,255,0.4)',textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.1)',padding:'5px 12px',borderRadius:7}}>Back</a>
      </nav>

      <div style={{maxWidth:560,margin:'0 auto',padding:'4rem 1.5rem'}}>
        <div style={{marginBottom:'2.5rem'}}>
          <div style={{fontSize:10,letterSpacing:'0.25em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1rem',fontWeight:500}}>Book A Demo</div>
          <h1 style={{fontSize:'clamp(30px,6vw,48px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.05,color:'#fff',marginBottom:'1rem'}}>Let's Get Your Venue<br/>On <span style={{color:'#5B4FE8'}}>Autopilot.</span></h1>
          <p style={{fontSize:15,color:'rgba(255,255,255,0.6)',lineHeight:1.75}}>Leave your details and we'll reach out within 24 hours to walk you through Rovu and get you set up.</p>
        </div>

        {error && (
          <div style={{background:'rgba(232,79,79,0.08)',border:'0.5px solid rgba(232,79,79,0.2)',borderRadius:10,padding:'12px 16px',fontSize:13,color:'#E84F4F',marginBottom:16,lineHeight:1.6}}>{error}</div>
        )}

        <label style={labelStyle}>Your Name *</label>
        <input style={inputStyle} placeholder="James Chen" value={name} onChange={e => setName(e.target.value)}/>

        <label style={labelStyle}>Venue Name *</label>
        <input style={inputStyle} placeholder="The Harbour Table" value={venueName} onChange={e => setVenueName(e.target.value)}/>

        <label style={labelStyle}>Email Address *</label>
        <input style={inputStyle} type="email" placeholder="james@theharbour.com.au" value={email} onChange={e => setEmail(e.target.value)}/>

        <label style={labelStyle}>Phone Number</label>
        <input style={inputStyle} type="tel" placeholder="0400 000 000" value={phone} onChange={e => setPhone(e.target.value)}/>

        <label style={labelStyle}>Anything Else?</label>
        <textarea
          style={{...inputStyle, resize:'none', minHeight:100, lineHeight:1.6}}
          placeholder="Tell us about your venue, how many locations, what you're looking for..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={submitting}
          style={{width:'100%',padding:'14px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:11,fontSize:15,fontWeight:500,cursor:submitting?'not-allowed':'pointer',opacity:submitting?0.6:1,fontFamily:'Inter,system-ui,sans-serif',transition:'opacity 0.15s'}}
        >
          {submitting ? 'Sending...' : 'Book My Demo →'}
        </button>

        <p style={{fontSize:11,color:'rgba(255,255,255,0.3)',textAlign:'center',marginTop:14,lineHeight:1.6}}>We will get back to you within 24 hours. No spam, no pressure.</p>

        <div style={{marginTop:'2.5rem',padding:'1.5rem',background:'rgba(91,79,232,0.06)',border:'0.5px solid rgba(91,79,232,0.2)',borderRadius:14}}>
          <div style={{fontSize:13,fontWeight:500,color:'#fff',marginBottom:'0.75rem'}}>What Happens Next?</div>
          {[
            'We will review your details and reach out within 24 hours.',
            'We will walk you through the full Rovu demo — takes 10 minutes.',
            'We will set up your venue, staff, and QR cards on the spot.',
            'You go live the same day. No tech skills needed.',
          ].map((s,i) => (
            <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',marginBottom:8}}>
              <div style={{width:18,height:18,borderRadius:'50%',background:'rgba(91,79,232,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,color:'#5B4FE8',fontWeight:600,flexShrink:0,marginTop:1}}>{i+1}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
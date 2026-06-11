'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Venue = { id: string; name: string; slug: string; google_review_url: string }
type Staff = { id: string; name: string }
type Screen = 'rate' | 'details' | 'thanks' | 'google'

export default function VenuePage({ params }: { params: { slug: string } }) {
  const [venue, setVenue] = useState<Venue | null>(null)
  const [staff, setStaff] = useState<Staff[]>([])
  const [screen, setScreen] = useState<Screen>('rate')
  const [rating, setRating] = useState(0)
  const [staffId, setStaffId] = useState('')
  const [comment, setComment] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: v } = await supabase
        .from('venues').select('*').eq('slug', params.slug).single()
      if (!v) { setLoading(false); return }
      setVenue(v)
      const { data: s } = await supabase
        .from('staff').select('*').eq('venue_id', v.id).eq('active', true)
      setStaff(s || [])
      setLoading(false)
    }
    load()
  }, [params.slug])

  async function handleSubmit() {
    if (!venue || rating === 0) return
    setSubmitting(true)
    const isPrivate = rating <= 3
    await supabase.from('feedback').insert({
      venue_id: venue.id,
      staff_id: staffId || null,
      rating,
      comment,
      customer_name: customerName,
      customer_email: customerEmail,
      is_private: isPrivate
    })
    setSubmitting(false)
    setScreen(isPrivate ? 'thanks' : 'google')
  }

  if (loading) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>loading...</div>
    </div>
  )

  if (!venue) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>venue not found</div>
    </div>
  )

  const s = {
    page: {minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',display:'flex',flexDirection:'column' as const,maxWidth:480,margin:'0 auto'},
    header: {padding:'3rem 1.5rem 1.5rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)'},
    vname: {fontSize:16,fontWeight:500,color:'#fff',letterSpacing:'-0.01em'},
    vsub: {fontSize:11,color:'rgba(255,255,255,0.35)',marginTop:3,letterSpacing:'0.02em'},
    body: {flex:1,padding:'2rem 1.5rem'},
    eyebrow: {fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase' as const,marginBottom:'0.75rem'},
    h: {fontSize:26,fontWeight:500,letterSpacing:'-0.03em',color:'#fff',marginBottom:'0.5rem',lineHeight:1.2},
    sub: {fontSize:14,color:'rgba(255,255,255,0.45)',marginBottom:'2rem',lineHeight:1.6},
    btn: {width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:'pointer',marginTop:8},
    btnDisabled: {width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:'not-allowed',marginTop:8,opacity:0.3},
    input: {width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.04)',border:'0.5px solid rgba(255,255,255,0.1)',borderRadius:10,color:'#fff',fontSize:14,outline:'none',marginBottom:10,fontFamily:'Inter,system-ui,sans-serif'},
    select: {width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.04)',border:'0.5px solid rgba(255,255,255,0.1)',borderRadius:10,color:'#fff',fontSize:14,outline:'none',marginBottom:10,fontFamily:'Inter,system-ui,sans-serif'},
    textarea: {width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.04)',border:'0.5px solid rgba(255,255,255,0.1)',borderRadius:10,color:'#fff',fontSize:14,outline:'none',marginBottom:10,fontFamily:'Inter,system-ui,sans-serif',resize:'none' as const,minHeight:100},
  }

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,background:'#5B4FE8',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:600,color:'#fff'}}>R</div>
          <div>
            <div style={s.vname}>{venue.name}</div>
            <div style={s.vsub}>share your experience</div>
          </div>
        </div>
      </div>

      <div style={s.body}>

        {screen === 'rate' && (
          <div>
            <div style={s.eyebrow}>step 1 of 2</div>
            <div style={s.h}>how was your visit?</div>
            <div style={s.sub}>tap a star to rate your experience</div>
            <div style={{display:'flex',gap:10,justifyContent:'center',marginBottom:12}}>
              {[1,2,3,4,5].map(i => (
                <button key={i} onClick={() => setRating(i)}
                  style={{background:'none',border:'none',fontSize:42,cursor:'pointer',opacity:i<=rating?1:0.2,filter:i<=rating?'none':'grayscale(1)',padding:4,transition:'all 0.1s'}}>★</button>
              ))}
            </div>
            <div style={{textAlign:'center',fontSize:13,color:'rgba(255,255,255,0.45)',minHeight:20,marginBottom:28}}>
              {rating>0 ? ['','Terrible','Poor','Ok','Good','Excellent'][rating]+' — '+['','very bad experience','quite disappointed','average experience','really enjoyed it','absolutely loved it'][rating] : 'tap a star to begin'}
            </div>
            <button style={rating===0?s.btnDisabled:s.btn} disabled={rating===0} onClick={() => setScreen('details')}>continue</button>
          </div>
        )}

        {screen === 'details' && (
          <div>
            <div style={s.eyebrow}>step 2 of 2</div>
            <div style={s.h}>a little more detail</div>
            <div style={s.sub}>optional — helps us improve</div>
            {staff.length > 0 && (
              <select style={s.select} value={staffId} onChange={e => setStaffId(e.target.value)}>
                <option value="">who served you? (optional)</option>
                {staff.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            )}
            <textarea style={s.textarea} placeholder="any feedback for the team? (optional)" value={comment} onChange={e => setComment(e.target.value)}/>
            <input style={s.input} placeholder="your name (optional)" value={customerName} onChange={e => setCustomerName(e.target.value)}/>
            <input style={s.input} placeholder="your email (optional)" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)}/>
            <button style={s.btn} onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'submitting...' : 'submit feedback'}
            </button>
            <button onClick={() => setScreen('rate')} style={{width:'100%',padding:12,background:'none',border:'none',color:'rgba(255,255,255,0.3)',fontSize:13,cursor:'pointer',marginTop:4}}>← back</button>
          </div>
        )}

        {screen === 'thanks' && (
          <div style={{textAlign:'center',paddingTop:'3rem'}}>
            <div style={{fontSize:48,marginBottom:16}}>🙏</div>
            <div style={{fontSize:22,fontWeight:500,color:'#fff',marginBottom:12,letterSpacing:'-0.02em'}}>thank you for your feedback</div>
            <div style={{fontSize:14,color:'rgba(255,255,255,0.5)',lineHeight:1.7,maxWidth:320,margin:'0 auto'}}>your feedback has been shared with the management team. we really appreciate you taking the time.</div>
          </div>
        )}

        {screen === 'google' && (
          <div style={{textAlign:'center',paddingTop:'3rem'}}>
            <div style={{fontSize:48,marginBottom:16}}>⭐</div>
            <div style={{fontSize:22,fontWeight:500,color:'#fff',marginBottom:12,letterSpacing:'-0.02em'}}>glad you enjoyed it!</div>
            <div style={{fontSize:14,color:'rgba(255,255,255,0.5)',lineHeight:1.7,maxWidth:320,margin:'0 auto 2rem'}}>would you mind sharing your experience on google? it means the world to us.</div>
            {venue.google_review_url && (
              <a href={venue.google_review_url} target="_blank" rel="noopener noreferrer"
                style={{display:'inline-block',background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>
                leave a google review →
              </a>
            )}
          </div>
        )}

      </div>

      <div style={{padding:'1rem 1.5rem',borderTop:'0.5px solid rgba(255,255,255,0.06)',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
        <div style={{width:14,height:14,background:'#5B4FE8',borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:600,color:'#fff'}}>R</div>
        <span style={{fontSize:10,color:'rgba(255,255,255,0.2)',letterSpacing:'0.06em',textTransform:'uppercase'}}>powered by rovu</span>
      </div>
    </div>
  )
}
ENDOFFILEcat > app/venue/\[slug\]/page.tsx << 'ENDOFFILE'
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Venue = { id: string; name: string; slug: string; google_review_url: string }
type Staff = { id: string; name: string }
type Screen = 'rate' | 'details' | 'thanks' | 'google'

export default function VenuePage({ params }: { params: { slug: string } }) {
  const [venue, setVenue] = useState<Venue | null>(null)
  const [staff, setStaff] = useState<Staff[]>([])
  const [screen, setScreen] = useState<Screen>('rate')
  const [rating, setRating] = useState(0)
  const [staffId, setStaffId] = useState('')
  const [comment, setComment] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: v } = await supabase
        .from('venues').select('*').eq('slug', params.slug).single()
      if (!v) { setLoading(false); return }
      setVenue(v)
      const { data: s } = await supabase
        .from('staff').select('*').eq('venue_id', v.id).eq('active', true)
      setStaff(s || [])
      setLoading(false)
    }
    load()
  }, [params.slug])

  async function handleSubmit() {
    if (!venue || rating === 0) return
    setSubmitting(true)
    const isPrivate = rating <= 3
    await supabase.from('feedback').insert({
      venue_id: venue.id,
      staff_id: staffId || null,
      rating,
      comment,
      customer_name: customerName,
      customer_email: customerEmail,
      is_private: isPrivate
    })
    setSubmitting(false)
    setScreen(isPrivate ? 'thanks' : 'google')
  }

  if (loading) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>loading...</div>
    </div>
  )

  if (!venue) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>venue not found</div>
    </div>
  )

  const s = {
    page: {minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',display:'flex',flexDirection:'column' as const,maxWidth:480,margin:'0 auto'},
    header: {padding:'3rem 1.5rem 1.5rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)'},
    vname: {fontSize:16,fontWeight:500,color:'#fff',letterSpacing:'-0.01em'},
    vsub: {fontSize:11,color:'rgba(255,255,255,0.35)',marginTop:3,letterSpacing:'0.02em'},
    body: {flex:1,padding:'2rem 1.5rem'},
    eyebrow: {fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase' as const,marginBottom:'0.75rem'},
    h: {fontSize:26,fontWeight:500,letterSpacing:'-0.03em',color:'#fff',marginBottom:'0.5rem',lineHeight:1.2},
    sub: {fontSize:14,color:'rgba(255,255,255,0.45)',marginBottom:'2rem',lineHeight:1.6},
    btn: {width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:'pointer',marginTop:8},
    btnDisabled: {width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:'not-allowed',marginTop:8,opacity:0.3},
    input: {width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.04)',border:'0.5px solid rgba(255,255,255,0.1)',borderRadius:10,color:'#fff',fontSize:14,outline:'none',marginBottom:10,fontFamily:'Inter,system-ui,sans-serif'},
    select: {width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.04)',border:'0.5px solid rgba(255,255,255,0.1)',borderRadius:10,color:'#fff',fontSize:14,outline:'none',marginBottom:10,fontFamily:'Inter,system-ui,sans-serif'},
    textarea: {width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.04)',border:'0.5px solid rgba(255,255,255,0.1)',borderRadius:10,color:'#fff',fontSize:14,outline:'none',marginBottom:10,fontFamily:'Inter,system-ui,sans-serif',resize:'none' as const,minHeight:100},
  }

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,background:'#5B4FE8',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:600,color:'#fff'}}>R</div>
          <div>
            <div style={s.vname}>{venue.name}</div>
            <div style={s.vsub}>share your experience</div>
          </div>
        </div>
      </div>

      <div style={s.body}>

        {screen === 'rate' && (
          <div>
            <div style={s.eyebrow}>step 1 of 2</div>
            <div style={s.h}>how was your visit?</div>
            <div style={s.sub}>tap a star to rate your experience</div>
            <div style={{display:'flex',gap:10,justifyContent:'center',marginBottom:12}}>
              {[1,2,3,4,5].map(i => (
                <button key={i} onClick={() => setRating(i)}
                  style={{background:'none',border:'none',fontSize:42,cursor:'pointer',opacity:i<=rating?1:0.2,filter:i<=rating?'none':'grayscale(1)',padding:4,transition:'all 0.1s'}}>★</button>
              ))}
            </div>
            <div style={{textAlign:'center',fontSize:13,color:'rgba(255,255,255,0.45)',minHeight:20,marginBottom:28}}>
              {rating>0 ? ['','Terrible','Poor','Ok','Good','Excellent'][rating]+' — '+['','very bad experience','quite disappointed','average experience','really enjoyed it','absolutely loved it'][rating] : 'tap a star to begin'}
            </div>
            <button style={rating===0?s.btnDisabled:s.btn} disabled={rating===0} onClick={() => setScreen('details')}>continue</button>
          </div>
        )}

        {screen === 'details' && (
          <div>
            <div style={s.eyebrow}>step 2 of 2</div>
            <div style={s.h}>a little more detail</div>
            <div style={s.sub}>optional — helps us improve</div>
            {staff.length > 0 && (
              <select style={s.select} value={staffId} onChange={e => setStaffId(e.target.value)}>
                <option value="">who served you? (optional)</option>
                {staff.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            )}
            <textarea style={s.textarea} placeholder="any feedback for the team? (optional)" value={comment} onChange={e => setComment(e.target.value)}/>
            <input style={s.input} placeholder="your name (optional)" value={customerName} onChange={e => setCustomerName(e.target.value)}/>
            <input style={s.input} placeholder="your email (optional)" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)}/>
            <button style={s.btn} onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'submitting...' : 'submit feedback'}
            </button>
            <button onClick={() => setScreen('rate')} style={{width:'100%',padding:12,background:'none',border:'none',color:'rgba(255,255,255,0.3)',fontSize:13,cursor:'pointer',marginTop:4}}>← back</button>
          </div>
        )}

        {screen === 'thanks' && (
          <div style={{textAlign:'center',paddingTop:'3rem'}}>
            <div style={{fontSize:48,marginBottom:16}}>🙏</div>
            <div style={{fontSize:22,fontWeight:500,color:'#fff',marginBottom:12,letterSpacing:'-0.02em'}}>thank you for your feedback</div>
            <div style={{fontSize:14,color:'rgba(255,255,255,0.5)',lineHeight:1.7,maxWidth:320,margin:'0 auto'}}>your feedback has been shared with the management team. we really appreciate you taking the time.</div>
          </div>
        )}

        {screen === 'google' && (
          <div style={{textAlign:'center',paddingTop:'3rem'}}>
            <div style={{fontSize:48,marginBottom:16}}>⭐</div>
            <div style={{fontSize:22,fontWeight:500,color:'#fff',marginBottom:12,letterSpacing:'-0.02em'}}>glad you enjoyed it!</div>
            <div style={{fontSize:14,color:'rgba(255,255,255,0.5)',lineHeight:1.7,maxWidth:320,margin:'0 auto 2rem'}}>would you mind sharing your experience on google? it means the world to us.</div>
            {venue.google_review_url && (
              <a href={venue.google_review_url} target="_blank" rel="noopener noreferrer"
                style={{display:'inline-block',background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>
                leave a google review →
              </a>
            )}
          </div>
        )}

      </div>

      <div style={{padding:'1rem 1.5rem',borderTop:'0.5px solid rgba(255,255,255,0.06)',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
        <div style={{width:14,height:14,background:'#5B4FE8',borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:600,color:'#fff'}}>R</div>
        <span style={{fontSize:10,color:'rgba(255,255,255,0.2)',letterSpacing:'0.06em',textTransform:'uppercase'}}>powered by rovu</span>
      </div>
    </div>
  )
}

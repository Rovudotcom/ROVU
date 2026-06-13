'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Venue = { id: string; name: string; slug: string; google_review_url: string; owner_email: string }
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
      const { data: v } = await supabase.from('venues').select('*').eq('slug', params.slug).single()
      if (!v) { setLoading(false); return }
      setVenue(v)
      const { data: s } = await supabase.from('staff').select('*').eq('venue_id', v.id).eq('active', true)
      setStaff(s || [])
      setLoading(false)
    }
    load()
  }, [params.slug])

  async function handleSubmit() {
    if (!venue || rating === 0) return
    setSubmitting(true)
    const isPrivate = rating <= 3

    const { data: feedbackData } = await supabase.from('feedback').insert({
      venue_id: venue.id,
      staff_id: staffId || null,
      rating,
      comment,
      customer_name: customerName,
      customer_email: customerEmail,
      is_private: isPrivate
    }).select('*, staff(name)').single()

    if (isPrivate && venue.owner_email) {
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          venueName: venue.name,
          ownerEmail: venue.owner_email,
          rating,
          comment,
          customerName,
          staffName: feedbackData?.staff?.name || null
        })
      })
    }

    setSubmitting(false)
    setScreen(isPrivate ? 'thanks' : 'google')
  }

  if (loading) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>loading...</div>
  )

  if (!venue) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>venue not found</div>
  )

  const inp = {width:'100%',padding:'12px 14px',background:'rgba(255,255,255,.04)',border:'.5px solid rgba(255,255,255,.1)',borderRadius:10,color:'#fff',fontSize:14,outline:'none',fontFamily:'Inter,system-ui,sans-serif',marginBottom:10} as React.CSSProperties
  const btn = {width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:'pointer',fontFamily:'Inter,system-ui,sans-serif',marginTop:8} as React.CSSProperties

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',display:'flex',flexDirection:'column',maxWidth:480,margin:'0 auto'}}>

      <div style={{padding:'3rem 1.5rem 1.25rem',borderBottom:'.5px solid rgba(255,255,255,.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,background:'#5B4FE8',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:600,color:'#fff'}}>R</div>
          <div>
            <div style={{fontSize:15,fontWeight:500,letterSpacing:'-.01em'}}>{venue.name}</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,.35)',marginTop:2}}>share your experience</div>
          </div>
        </div>
        <a href="/" style={{fontSize:11,color:'rgba(255,255,255,.3)',border:'.5px solid rgba(255,255,255,.1)',padding:'5px 11px',borderRadius:7,textDecoration:'none'}}>← rovu</a>
      </div>

      <div style={{flex:1,padding:'2rem 1.5rem 3rem'}}>

        {screen==='rate' && (
          <div>
            <div style={{fontSize:10,letterSpacing:'.2em',color:'rgba(255,255,255,.3)',textTransform:'uppercase',marginBottom:8}}>step 1 of 2</div>
            <h1 style={{fontSize:24,fontWeight:500,letterSpacing:'-.03em',marginBottom:6,lineHeight:1.2}}>how was your visit?</h1>
            <p style={{fontSize:14,color:'rgba(255,255,255,.45)',lineHeight:1.6,marginBottom:28}}>your honest feedback helps this venue and guides other diners.</p>
            <div style={{display:'flex',justifyContent:'center',gap:10,marginBottom:12}}>
              {[1,2,3,4,5].map(i=>(
                <button key={i} onClick={()=>setRating(i)} style={{background:'none',border:'none',fontSize:42,cursor:'pointer',opacity:i<=rating?1:.18,filter:i<=rating?'none':'grayscale(1)',padding:'2px 4px',transition:'all .1s'}}>★</button>
              ))}
            </div>
            <p style={{textAlign:'center',fontSize:13,color:'rgba(255,255,255,.45)',minHeight:20,marginBottom:32}}>
              {rating>0?['','terrible','poor','ok','good','excellent'][rating]+' — '+['','very bad experience','quite disappointed','average experience','really enjoyed it','absolutely loved it'][rating]:'tap a star to begin'}
            </p>
            <button style={{...btn,opacity:rating===0?.3:1,cursor:rating===0?'not-allowed':'pointer'}} disabled={rating===0} onClick={()=>setScreen('details')}>continue</button>
            <div style={{marginTop:24,padding:'12px 16px',background:'rgba(255,255,255,.03)',borderRadius:10,border:'.5px solid rgba(255,255,255,.07)'}}>
              <p style={{color:'rgba(255,255,255,.3)',fontSize:11,textAlign:'center',lineHeight:1.6}}>anonymous · takes 30 seconds · helps real people</p>
            </div>
          </div>
        )}

        {screen==='details' && (
          <div>
            <div style={{fontSize:10,letterSpacing:'.2em',color:'rgba(255,255,255,.3)',textTransform:'uppercase',marginBottom:8}}>step 2 of 2</div>
            <h1 style={{fontSize:24,fontWeight:500,letterSpacing:'-.03em',marginBottom:6,lineHeight:1.2}}>a little more detail</h1>
            <p style={{fontSize:14,color:'rgba(255,255,255,.45)',lineHeight:1.6,marginBottom:24}}>optional — helps the team improve</p>
            {staff.length>0 && (
              <select style={{...inp,colorScheme:'dark'}} value={staffId} onChange={e=>setStaffId(e.target.value)}>
                <option value="">who served you? (optional)</option>
                {staff.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            )}
            <textarea style={{...inp,resize:'none',minHeight:100}} placeholder="any feedback for the team? (optional)" value={comment} onChange={e=>setComment(e.target.value)}/>
            <input style={inp} placeholder="your name (optional)" value={customerName} onChange={e=>setCustomerName(e.target.value)}/>
            <input style={inp} placeholder="your email (optional)" value={customerEmail} onChange={e=>setCustomerEmail(e.target.value)}/>
            <button style={{...btn,opacity:submitting?.5:1}} onClick={handleSubmit} disabled={submitting}>
              {submitting?'submitting...':'submit feedback'}
            </button>
            <button onClick={()=>setScreen('rate')} style={{width:'100%',padding:12,background:'none',border:'none',color:'rgba(255,255,255,.3)',fontSize:13,cursor:'pointer',marginTop:4,fontFamily:'Inter,system-ui'}}>← back</button>
          </div>
        )}

        {screen==='thanks' && (
          <div style={{textAlign:'center',paddingTop:'3rem'}}>
            <div style={{fontSize:48,marginBottom:16}}>🙏</div>
            <h1 style={{fontSize:22,fontWeight:500,letterSpacing:'-.02em',marginBottom:12}}>thank you for your feedback</h1>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.7,maxWidth:300,margin:'0 auto 2rem'}}>your feedback has been shared with the management team. they take every piece seriously.</p>
            <button onClick={()=>{setScreen('rate');setRating(0);setStaffId('');setComment('');setCustomerName('');setCustomerEmail('')}} style={btn}>rate another visit</button>
            <a href="/" style={{display:'block',textAlign:'center',marginTop:12,fontSize:13,color:'rgba(255,255,255,.3)',textDecoration:'none'}}>← back to rovu</a>
          </div>
        )}

        {screen==='google' && (
          <div style={{textAlign:'center',paddingTop:'3rem'}}>
            <div style={{fontSize:48,marginBottom:16}}>⭐</div>
            <h1 style={{fontSize:22,fontWeight:500,letterSpacing:'-.02em',marginBottom:12}}>glad you enjoyed it!</h1>
            <p style={{fontSize:14,color:'rgba(255,255,255,.5)',lineHeight:1.7,maxWidth:300,margin:'0 auto 2rem'}}>would you mind sharing your experience on google? it means the world to the team.</p>
            {venue.google_review_url && (
              <a href={venue.google_review_url} target="_blank" rel="noopener noreferrer" style={{...btn,display:'block',textDecoration:'none',textAlign:'center'}}>leave a google review →</a>
            )}
            <button onClick={()=>{setScreen('rate');setRating(0);setStaffId('');setComment('');setCustomerName('');setCustomerEmail('')}} style={{...btn,background:'transparent',border:'.5px solid rgba(255,255,255,.1)',color:'rgba(255,255,255,.4)',marginTop:8}}>rate another visit</button>
            <a href="/" style={{display:'block',textAlign:'center',marginTop:12,fontSize:13,color:'rgba(255,255,255,.3)',textDecoration:'none'}}>← back to rovu</a>
          </div>
        )}

      </div>

      <div style={{padding:'1rem 1.5rem',borderTop:'.5px solid rgba(255,255,255,.06)',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
        <div style={{width:14,height:14,background:'#5B4FE8',borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:600,color:'#fff'}}>R</div>
        <span style={{fontSize:10,color:'rgba(255,255,255,.2)',letterSpacing:'.06em',textTransform:'uppercase'}}>powered by rovu</span>
      </div>
    </div>
  )
}
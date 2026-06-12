'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Feedback = {
  id: string
  rating: number
  comment: string
  customer_name: string
  is_private: boolean
  created_at: string
  staff: { name: string } | null
}

export default function DashboardPage({ params }: { params: { slug: string } }) {
  const [venue, setVenue] = useState<{ id: string; name: string } | null>(null)
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [staffMentions, setStaffMentions] = useState<{ name: string; count: number }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: v } = await supabase
        .from('venues').select('*').eq('slug', params.slug).single()
      if (!v) { setLoading(false); return }
      setVenue(v)
      const { data: f } = await supabase
        .from('feedback')
        .select('*, staff(name)')
        .eq('venue_id', v.id)
        .order('created_at', { ascending: false })
        .limit(50)
      const items = f || []
      setFeedback(items)
      const mentions: Record<string, number> = {}
      items.forEach((fb: Feedback) => {
        if (fb.staff?.name) mentions[fb.staff.name] = (mentions[fb.staff.name] || 0) + 1
      })
      setStaffMentions(Object.entries(mentions).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count))
      setLoading(false)
    }
    load()
  }, [params.slug])

  if (loading) return <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>loading...</div>
  if (!venue) return <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>venue not found</div>

  const total = feedback.length
  const positive = feedback.filter(f => !f.is_private).length
  const priv = feedback.filter(f => f.is_private).length
  const avg = total > 0 ? (feedback.reduce((s, f) => s + f.rating, 0) / total).toFixed(1) : '—'

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif'}}>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)',position:'sticky',top:0,background:'rgba(10,10,10,0.96)',zIndex:100}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:26,height:26,background:'#5B4FE8',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:600,color:'#fff'}}>R</div>
          <span style={{fontSize:14,fontWeight:500}}>{venue.name}</span>
          <span style={{fontSize:11,color:'rgba(255,255,255,0.25)'}}>/ dashboard</span>
        </div>
        <a href={`/venue/${params.slug}`} style={{fontSize:12,color:'rgba(255,255,255,0.35)',textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.1)',padding:'5px 12px',borderRadius:7}}>view feedback page →</a>
      </nav>

      <div style={{maxWidth:960,margin:'0 auto',padding:'2.5rem 1.5rem'}}>
        <div style={{marginBottom:'2rem'}}>
          <h1 style={{fontSize:24,fontWeight:500,letterSpacing:'-0.03em',marginBottom:4}}>overview</h1>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.35)'}}>all feedback for {venue.name}</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:'2rem'}}>
          {[
            {val:avg+'★',label:'avg rating',col:'#5B4FE8'},
            {val:String(total),label:'total feedback',col:'#fff'},
            {val:String(positive),label:'positive',col:'#1D9E75'},
            {val:String(priv),label:'private',col:'#E8934F'},
          ].map(m => (
            <div key={m.label} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'1.25rem'}}>
              <div style={{fontSize:30,fontWeight:500,letterSpacing:'-0.04em',color:m.col,marginBottom:6}}>{m.val}</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.35)',textTransform:'uppercase',letterSpacing:'0.08em'}}>{m.label}</div>
            </div>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div>
            <div style={{fontSize:11,fontWeight:500,color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'1rem'}}>recent feedback</div>
            {feedback.length === 0 && <div style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'1.25rem',color:'rgba(255,255,255,0.3)',fontSize:13}}>no feedback yet</div>}
            {feedback.slice(0,10).map(f => (
              <div key={f.id} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderLeft:`2px solid ${f.is_private?'#E8934F':'#1D9E75'}`,borderRadius:14,padding:'1rem 1.25rem',marginBottom:8}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:6}}>
                  <div>{[1,2,3,4,5].map(i => <span key={i} style={{fontSize:12,color:i<=f.rating?'#f59e0b':'rgba(255,255,255,0.15)'}}>★</span>)}</div>
                  <span style={{fontSize:10,color:f.is_private?'#E8934F':'#1D9E75',background:f.is_private?'rgba(232,147,79,0.1)':'rgba(29,158,117,0.1)',padding:'2px 8px',borderRadius:20,letterSpacing:'0.06em',textTransform:'uppercase'}}>{f.is_private?'private':'positive'}</span>
                </div>
                {f.comment && <div style={{fontSize:13,color:'rgba(255,255,255,0.6)',lineHeight:1.6,marginBottom:6}}>{f.comment}</div>}
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <span style={{fontSize:11,color:'rgba(255,255,255,0.25)'}}>{f.customer_name||'anonymous'}</span>
                  {f.staff && <span style={{fontSize:11,color:'#5B4FE8'}}>{f.staff.name}</span>}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{fontSize:11,fontWeight:500,color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'1rem'}}>staff leaderboard</div>
            {staffMentions.length === 0 && <div style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'1.25rem',color:'rgba(255,255,255,0.3)',fontSize:13}}>no mentions yet</div>}
            {staffMentions.map((s, i) => (
              <div key={s.name} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'1rem 1.25rem',marginBottom:8,display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:28,height:28,borderRadius:'50%',background:'#5B4FE8',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:600,color:'#fff'}}>{i+1}</div>
                <div style={{flex:1,fontSize:14,fontWeight:500}}>{s.name}</div>
                <div style={{fontSize:20,fontWeight:500,color:'#5B4FE8'}}>{s.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

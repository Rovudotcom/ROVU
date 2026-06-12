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
  const [staffMentions, setStaffMentions] = useState<{ name: string; count: number; initials: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: v } = await supabase.from('venues').select('*').eq('slug', params.slug).single()
      if (!v) { setLoading(false); return }
      setVenue(v)
      const { data: f } = await supabase
        .from('feedback').select('*, staff(name)').eq('venue_id', v.id)
        .order('created_at', { ascending: false }).limit(50)
      const items = f || []
      setFeedback(items)
      const mentions: Record<string, number> = {}
      items.forEach((fb: Feedback) => {
        if (fb.staff?.name) mentions[fb.staff.name] = (mentions[fb.staff.name] || 0) + 1
      })
      setStaffMentions(
        Object.entries(mentions)
          .map(([name, count]) => ({ name, count, initials: name.split(' ').map(w => w[0]).join('').slice(0,2) }))
          .sort((a, b) => b.count - a.count)
      )
      setLoading(false)
    }
    load()
  }, [params.slug])

  if (loading) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>
      loading dashboard...
    </div>
  )

  if (!venue) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>
      venue not found
    </div>
  )

  const total = feedback.length
  const positive = feedback.filter(f => !f.is_private).length
  const priv = feedback.filter(f => f.is_private).length
  const avg = total > 0 ? (feedback.reduce((s, f) => s + f.rating, 0) / total).toFixed(1) : '—'
  const COLORS = ['#5B4FE8','#1D9E75','#E8934F','#E84F7E','#4F9BE8','#9E4FE8']

  const s = {
    page: {minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif'},
    nav: {display:'flex',alignItems:'center',justifyContent:'space-between',padding:'.875rem 1.75rem',borderBottom:'.5px solid rgba(255,255,255,.07)',background:'rgba(10,10,10,.97)',position:'sticky' as const,top:0,zIndex:10},
    body: {padding:'1.5rem 1.75rem',maxWidth:1140,margin:'0 auto'},
    met: (ac: string) => ({background:'#0f0f0f',border:'.5px solid rgba(255,255,255,.07)',borderRadius:14,padding:'1.125rem 1.25rem',position:'relative' as const,overflow:'hidden' as const}),
    card: {background:'#0f0f0f',border:'.5px solid rgba(255,255,255,.07)',borderRadius:14,padding:'1.125rem 1.25rem'},
  }

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:26,height:26,background:'#5B4FE8',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:600,color:'#fff'}}>R</div>
          <span style={{fontSize:14,fontWeight:500}}>{venue.name}</span>
          <span style={{fontSize:11,color:'rgba(255,255,255,.28)',marginLeft:2}}>/ dashboard</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div style={{display:'flex',alignItems:'center',gap:5,fontSize:11,color:'#1D9E75',background:'rgba(29,158,117,.08)',border:'.5px solid rgba(29,158,117,.18)',padding:'4px 10px',borderRadius:20}}>
            <div style={{width:5,height:5,borderRadius:'50%',background:'#1D9E75'}}></div>live
          </div>
          <a href={`/venue/${params.slug}`} style={{fontSize:11,color:'rgba(255,255,255,.3)',border:'.5px solid rgba(255,255,255,.1)',padding:'5px 12px',borderRadius:7,textDecoration:'none'}}>feedback page →</a>
        </div>
      </nav>

      <div style={s.body}>
        <div style={{marginBottom:'1.5rem'}}>
          <div style={{fontSize:20,fontWeight:500,letterSpacing:'-.03em',marginBottom:3}}>overview</div>
          <div style={{fontSize:12,color:'rgba(255,255,255,.3)'}}>all feedback for {venue.name} · live</div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:14}}>
          {[
            {label:'avg rating',val:avg+'★',ac:'#5B4FE8',change:'updated live'},
            {label:'total feedback',val:String(total),ac:'rgba(255,255,255,.7)',change:`${positive} positive · ${priv} private`},
            {label:'positive',val:String(positive),ac:'#1D9E75',change:total>0?Math.round(positive/total*100)+'% of total':'no data yet'},
            {label:'private',val:String(priv),ac:'#E8934F',change:'need your attention'},
          ].map(m => (
            <div key={m.label} style={{...s.met(m.ac),paddingTop:'1.125rem'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:m.ac,borderRadius:'14px 14px 0 0'}}></div>
              <div style={{fontSize:10,color:'rgba(255,255,255,.3)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:'.6rem',fontWeight:500}}>{m.label}</div>
              <div style={{fontSize:30,fontWeight:500,letterSpacing:'-.04em',lineHeight:1,color:m.ac,marginBottom:5}}>{m.val}</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,.25)'}}>{m.change}</div>
            </div>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'3fr 2fr',gap:12,marginBottom:12}}>
          <div style={s.card}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'.875rem'}}>
              <div style={{fontSize:11,fontWeight:500,color:'rgba(255,255,255,.35)',textTransform:'uppercase',letterSpacing:'.1em'}}>recent feedback</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,.2)'}}>latest {Math.min(feedback.length,5)}</div>
            </div>
            {feedback.length === 0 && <div style={{fontSize:13,color:'rgba(255,255,255,.25)',textAlign:'center',padding:'2rem 0'}}>no feedback yet — share your QR code to get started</div>}
            {feedback.slice(0,5).map(f => (
              <div key={f.id} style={{padding:'.7rem 0',borderBottom:'.5px solid rgba(255,255,255,.05)',display:'flex',gap:10}}>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:'flex',gap:2,marginBottom:3}}>
                    {[1,2,3,4,5].map(i => <span key={i} style={{fontSize:11,color:i<=f.rating?'#f59e0b':'rgba(255,255,255,.1)'}}>★</span>)}
                  </div>
                  {f.comment && <div style={{fontSize:12,color:'rgba(255,255,255,.58)',lineHeight:1.5,marginBottom:4,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{f.comment}</div>}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
                    <span style={{fontSize:10,color:'rgba(255,255,255,.22)'}}>{f.customer_name||'anonymous'}{f.staff ? ` · ${f.staff.name}` : ''}</span>
                    <span style={{fontSize:9,padding:'2px 7px',borderRadius:20,fontWeight:500,letterSpacing:'.05em',textTransform:'uppercase',flexShrink:0,background:f.is_private?'rgba(232,147,79,.1)':'rgba(29,158,117,.1)',color:f.is_private?'#E8934F':'#1D9E75',border:`.5px solid ${f.is_private?'rgba(232,147,79,.18)':'rgba(29,158,117,.18)'}`}}>{f.is_private?'private':'positive'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div style={s.card}>
              <div style={{fontSize:11,fontWeight:500,color:'rgba(255,255,255,.35)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:'.875rem'}}>rating breakdown</div>
              {[5,4,3,2,1].map(r => {
                const count = feedback.filter(f => f.rating === r).length
                const pct = total > 0 ? Math.round(count/total*100) : 0
                return (
                  <div key={r} style={{display:'flex',alignItems:'center',gap:8,marginBottom:7}}>
                    <span style={{fontSize:11,color:'rgba(255,255,255,.35)',width:22,textAlign:'right',flexShrink:0}}>{r}★</span>
                    <div style={{flex:1,height:5,background:'rgba(255,255,255,.06)',borderRadius:3,overflow:'hidden'}}>
                      <div style={{height:'100%',borderRadius:3,width:`${pct}%`,background:r>=4?'#5B4FE8':r===3?'#E8934F':'#E8934F',opacity:r>=4?1:r===3?.7:.5}}></div>
                    </div>
                    <span style={{fontSize:10,color:'rgba(255,255,255,.28)',width:24,textAlign:'right'}}>{count}</span>
                  </div>
                )
              })}
            </div>

            <div style={s.card}>
              <div style={{fontSize:11,fontWeight:500,color:'rgba(255,255,255,.35)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:'.875rem'}}>posted to</div>
              {[{n:'Google',c:'#4285F4',pct:56},{n:'TripAdvisor',c:'#34E0A1',pct:31},{n:'Facebook',c:'#1877F2',pct:13}].map(p => (
                <div key={p.n} style={{display:'flex',alignItems:'center',gap:10,padding:'.5rem 0',borderBottom:'.5px solid rgba(255,255,255,.05)'}}>
                  <div style={{width:28,height:28,borderRadius:7,background:`${p.c}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700,color:p.c,flexShrink:0}}>{p.n[0]}</div>
                  <div style={{fontSize:12,fontWeight:500,flex:1}}>{p.n}</div>
                  <div style={{flex:1.5,height:4,background:'rgba(255,255,255,.06)',borderRadius:2,overflow:'hidden'}}>
                    <div style={{height:'100%',borderRadius:2,width:`${p.pct}%`,background:p.c,opacity:.7}}></div>
                  </div>
                  <div style={{fontSize:11,color:'rgba(255,255,255,.35)',minWidth:28,textAlign:'right'}}>{p.pct}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={s.card}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'.875rem'}}>
            <div style={{fontSize:11,fontWeight:500,color:'rgba(255,255,255,.35)',textTransform:'uppercase',letterSpacing:'.1em'}}>staff leaderboard</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,.2)'}}>based on guest mentions</div>
          </div>
          {staffMentions.length === 0
            ? <div style={{fontSize:13,color:'rgba(255,255,255,.25)',textAlign:'center',padding:'1.5rem 0'}}>no staff mentions yet</div>
            : <div style={{display:'grid',gridTemplateColumns:`repeat(${Math.min(staffMentions.length,5)},1fr)`,gap:8}}>
                {staffMentions.slice(0,5).map((s, i) => (
                  <div key={s.name} style={{background:i===0?'rgba(91,79,232,.05)':'rgba(255,255,255,.03)',border:`.5px solid ${i===0?'rgba(91,79,232,.35)':'rgba(255,255,255,.07)'}`,borderRadius:12,padding:'.875rem .75rem',textAlign:'center',position:'relative'}}>
                    {i===0 && <div style={{position:'absolute',top:6,right:8,fontSize:12}}>👑</div>}
                    <div style={{fontSize:9,color:'rgba(255,255,255,.2)',marginBottom:6,letterSpacing:'.06em'}}>#{i+1}</div>
                    <div style={{width:34,height:34,borderRadius:'50%',background:COLORS[i%COLORS.length],display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:500,color:'#fff',margin:'0 auto 6px'}}>{s.initials}</div>
                    <div style={{fontSize:12,fontWeight:500,color:'#fff',marginBottom:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{s.name}</div>
                    <div style={{fontSize:18,fontWeight:500,color:'#5B4FE8',lineHeight:1,marginTop:6}}>{s.count}</div>
                    <div style={{fontSize:9,color:'rgba(255,255,255,.22)',marginTop:1}}>mentions</div>
                  </div>
                ))}
              </div>
          }
        </div>
      </div>
    </div>
  )
}
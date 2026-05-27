'use client'
import { useState } from 'react'
import Link from 'next/link'

const CHIPS: Record<number, string[]> = {
  5: ['Amazing food','Friendly staff','Beautiful atmosphere','Exceptional service','Great cocktails','Perfect for a date','Will definitely return','Best meal in ages','Loved every dish','Quick and attentive'],
  4: ['Great food','Lovely atmosphere','Good service','Solid experience','Worth a visit','Good value','Attentive staff','Nice cocktail menu'],
  3: ['Decent food','Average service','Ok atmosphere','A bit slow','Nothing special','Could be better'],
  2: ['Disappointing food','Slow service','Too noisy','Overpriced','Felt rushed','Cold food'],
  1: ['Poor quality food','Terrible service','Very disappointing','Would not return','Rude staff','Long wait times'],
}
const LABELS: Record<number, string> = {5:'Excellent — absolutely loved it',4:'Good — really enjoyed the visit',3:'Ok — average experience',2:'Poor — quite disappointed',1:'Terrible — very bad experience'}
const STAFF = [
  {name:'Marco R.',role:'Head Chef',initials:'MR',color:'#5B4FE8'},
  {name:'Sofia L.',role:'Waitress',initials:'SL',color:'#1D9E75'},
  {name:'James K.',role:'Bartender',initials:'JK',color:'#E8934F'},
  {name:'Priya M.',role:'Waitress',initials:'PM',color:'#E84F7E'},
  {name:'Leon T.',role:'Host',initials:'LT',color:'#4F9BE8'},
  {name:'Aisha B.',role:'Manager',initials:'AB',color:'#9E4FE8'},
]
const PLATFORMS = [
  {key:'google',label:'Google',icon:'G',color:'#4285F4'},
  {key:'tripadvisor',label:'TripAdvisor',icon:'T',color:'#34E0A1'},
  {key:'facebook',label:'Facebook',icon:'f',color:'#1877F2'},
]
type Screen = 'rate'|'chips'|'staff'|'review'|'gate'|'thanks'

export default function VenuePage() {
  const [screen, setScreen] = useState<Screen>('rate')
  const [rating, setRating] = useState(0)
  const [selChips, setSelChips] = useState<string[]>([])
  const [selStaff, setSelStaff] = useState<string[]>([])
  const [selPlats, setSelPlats] = useState<string[]>([])
  const [reviewText, setReviewText] = useState('')
  const [ownText, setOwnText] = useState('')
  const [mode, setMode] = useState<'ai'|'own'>('ai')

  function handleRating(v: number) { setRating(v); setSelChips([]) }
  function toggleChip(c: string) { setSelChips(p=>p.includes(c)?p.filter(x=>x!==c):[...p,c]) }
  function toggleStaff(n: string) { setSelStaff(p=>p.includes(n)?p.filter(x=>x!==n):[...p,n]) }
  function togglePlat(p: string) { setSelPlats(prev=>prev.includes(p)?prev.filter(x=>x!==p):[...prev,p]) }
  function reset() { setScreen('rate');setRating(0);setSelChips([]);setSelStaff([]);setSelPlats([]);setReviewText('');setOwnText('') }
  function goBack() { if(screen==='chips')setScreen('rate'); else if(screen==='staff')setScreen('chips'); else if(screen==='review')setScreen('staff') }
  function goToReview() {
    const mid=selChips.length>0?`Highlights included: ${selChips.join(', ')}.`:'The experience was memorable.'
    let sl=''
    if(selStaff.length===1)sl=` Special mention to ${selStaff[0]} who was absolutely brilliant.`
    else if(selStaff.length>1){const last=selStaff[selStaff.length-1];const rest=selStaff.slice(0,-1).join(', ');sl=` Special mention to ${rest} and ${last} — all fantastic.`}
    const o:Record<number,string>={5:"We had an absolutely wonderful evening — one of the best dining experiences in a long time. ",4:"Had a really enjoyable dinner and will definitely be back. ",3:"It was a decent experience overall, though a few areas could be improved. ",2:"Unfortunately our visit was quite disappointing. ",1:"Had a very poor experience and cannot recommend it. "}
    const c:Record<number,string>={5:" The whole team clearly takes great pride in what they do. Highly recommend!",4:" Overall a very solid restaurant and we'd happily recommend it to friends.",3:" Worth a visit nearby but needs some improvements.",2:" Hopefully management takes this on board.",1:" We will not be returning."}
    setReviewText(o[rating]+mid+sl+c[rating])
    setScreen('review')
  }

  const showBack = ['chips','staff','review'].includes(screen)
  const showProgress = !['gate','thanks'].includes(screen)

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'flex-start',justifyContent:'center'}}>
      <div style={{width:'100%',maxWidth:430,minHeight:'100vh',background:'#0a0a0a',display:'flex',flexDirection:'column',position:'relative'}}>

        {/* Header */}
        <div style={{borderBottom:'0.5px solid #1e1e1e',padding:'56px 24px 18px',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#0a0a0a'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:38,height:38,borderRadius:10,background:'#5B4FE8',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:600,fontSize:16}}>R</div>
            <div>
              <div style={{color:'#fff',fontWeight:500,fontSize:15,letterSpacing:'-0.01em'}}>Meza Kitchen &amp; Bar</div>
              <div style={{color:'rgba(255,255,255,0.35)',fontSize:11,marginTop:2,letterSpacing:'0.02em'}}>Share your experience</div>
            </div>
          </div>
          <Link href="/" style={{color:'rgba(255,255,255,0.35)',fontSize:12,border:'0.5px solid rgba(255,255,255,0.1)',padding:'6px 12px',borderRadius:8,textDecoration:'none',letterSpacing:'0.01em'}}>← Rovu</Link>
        </div>

        {/* Progress dots */}
        {showProgress&&(
          <div style={{display:'flex',gap:6,justifyContent:'center',padding:'16px 0 8px'}}>
            {['rate','chips','staff','review'].map(s=>(
              <div key={s} style={{height:4,borderRadius:4,transition:'all 0.3s',background:s===screen?'#5B4FE8':'rgba(255,255,255,0.12)',width:s===screen?16:4}}/>
            ))}
          </div>
        )}

        {/* Back */}
        {showBack&&(
          <button onClick={goBack} style={{background:'none',border:'none',color:'rgba(255,255,255,0.3)',fontSize:13,padding:'8px 24px 0',textAlign:'left',cursor:'pointer',letterSpacing:'0.01em'}}>← Back</button>
        )}

        {/* Content */}
        <div style={{flex:1,padding:'20px 24px 40px',overflowY:'auto'}}>

          {screen==='rate'&&(
            <div>
              <div style={{marginBottom:32}}>
                <h1 style={{color:'#fff',fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6,lineHeight:1.2}}>How was your visit?</h1>
                <p style={{color:'rgba(255,255,255,0.4)',fontSize:14,lineHeight:1.6}}>Your honest feedback helps this venue improve and helps others make great choices.</p>
              </div>
              <div style={{display:'flex',justifyContent:'center',gap:12,marginBottom:12}}>
                {[1,2,3,4,5].map(i=>(
                  <button key={i} onClick={()=>handleRating(i)} style={{background:'none',border:'none',fontSize:44,cursor:'pointer',transition:'all 0.12s',opacity:i<=rating?1:0.2,filter:i<=rating?'none':'grayscale(1)',transform:'scale(1)',padding:4}}>★</button>
                ))}
              </div>
              <p style={{textAlign:'center',fontSize:13,color:'rgba(255,255,255,0.45)',minHeight:20,marginBottom:36,letterSpacing:'0.01em'}}>{rating>0?LABELS[rating]:'Tap a star to begin'}</p>
              <button onClick={()=>setScreen('chips')} disabled={rating===0} style={{width:'100%',padding:'15px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:14,fontSize:15,fontWeight:500,cursor:rating===0?'not-allowed':'pointer',opacity:rating===0?0.3:1,letterSpacing:'0.01em'}}>Continue</button>
              <div style={{marginTop:40,padding:20,background:'#111',borderRadius:14,border:'0.5px solid #1e1e1e'}}>
                <p style={{color:'rgba(255,255,255,0.25)',fontSize:12,textAlign:'center',lineHeight:1.7,letterSpacing:'0.01em'}}>🔒 Your review is anonymous. Takes less than 30 seconds.</p>
              </div>
            </div>
          )}

          {screen==='chips'&&(
            <div>
              <div style={{marginBottom:24}}>
                <h1 style={{color:'#fff',fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6,lineHeight:1.2}}>{rating>=4?'What stood out?':'What went wrong?'}</h1>
                <p style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>Select everything that applies</p>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:32}}>
                {CHIPS[rating]?.map(chip=>(
                  <button key={chip} onClick={()=>toggleChip(chip)} style={{padding:'9px 16px',borderRadius:24,border:`0.5px solid ${selChips.includes(chip)?'#5B4FE8':'rgba(255,255,255,0.12)'}`,fontSize:13,fontWeight:500,cursor:'pointer',background:selChips.includes(chip)?'#5B4FE8':'rgba(255,255,255,0.04)',color:selChips.includes(chip)?'#fff':'rgba(255,255,255,0.65)',transition:'all 0.1s',letterSpacing:'0.01em'}}>{chip}</button>
                ))}
              </div>
              <button onClick={()=>setScreen('staff')} disabled={selChips.length===0} style={{width:'100%',padding:'15px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:14,fontSize:15,fontWeight:500,cursor:selChips.length===0?'not-allowed':'pointer',opacity:selChips.length===0?0.3:1}}>Continue</button>
            </div>
          )}

          {screen==='staff'&&(
            <div>
              <div style={{marginBottom:24}}>
                <h1 style={{color:'#fff',fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6,lineHeight:1.2}}>Who served you?</h1>
                <p style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>Give a shoutout to the team — they'll see it</p>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:12}}>
                {STAFF.map(s=>(
                  <button key={s.name} onClick={()=>toggleStaff(s.name)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8,padding:'16px 8px',borderRadius:14,border:`0.5px solid ${selStaff.includes(s.name)?'#5B4FE8':'rgba(255,255,255,0.08)'}`,background:selStaff.includes(s.name)?'rgba(91,79,232,0.1)':'rgba(255,255,255,0.02)',cursor:'pointer',transition:'all 0.12s'}}>
                    <div style={{width:44,height:44,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:14,fontWeight:500,background:s.color}}>{s.initials}</div>
                    <div style={{color:'#fff',fontSize:13,fontWeight:500}}>{s.name}</div>
                    <div style={{color:'rgba(255,255,255,0.35)',fontSize:11}}>{s.role}</div>
                  </button>
                ))}
              </div>
              <button onClick={goToReview} disabled={selStaff.length===0} style={{width:'100%',padding:'15px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:14,fontSize:15,fontWeight:500,cursor:selStaff.length===0?'not-allowed':'pointer',opacity:selStaff.length===0?0.3:1,marginBottom:10}}>Continue</button>
              <button onClick={goToReview} style={{width:'100%',padding:'12px',background:'none',border:'none',color:'rgba(255,255,255,0.3)',fontSize:13,cursor:'pointer'}}>Skip this step</button>
            </div>
          )}

          {screen==='review'&&(
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              <div>
                <h1 style={{color:'#fff',fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6}}>Your review</h1>
                <p style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>Edit freely or send as-is</p>
              </div>
              <div style={{display:'flex',background:'#141414',borderRadius:12,padding:4,border:'0.5px solid #1e1e1e'}}>
                {(['ai','own'] as const).map(m=>(
                  <button key={m} onClick={()=>setMode(m)} style={{flex:1,padding:'10px',borderRadius:9,fontSize:13,fontWeight:500,cursor:'pointer',border:'none',background:mode===m?'#5B4FE8':'transparent',color:mode===m?'#fff':'rgba(255,255,255,0.35)',transition:'all 0.15s'}}>
                    {m==='ai'?'AI-written for you':'Write my own'}
                  </button>
                ))}
              </div>
              {mode==='ai'
                ?<textarea value={reviewText} onChange={e=>setReviewText(e.target.value)} rows={9} style={{background:'#111',border:'0.5px solid #1e1e1e',borderRadius:14,padding:'14px',color:'#fff',fontSize:14,lineHeight:1.7,resize:'none',outline:'none',fontFamily:'inherit',width:'100%'}}/>
                :<textarea value={ownText} onChange={e=>setOwnText(e.target.value)} placeholder="Tell others about the food, service, atmosphere — anything that stood out..." rows={9} style={{background:'#111',border:'0.5px solid #1e1e1e',borderRadius:14,padding:'14px',color:'#fff',fontSize:14,lineHeight:1.7,resize:'none',outline:'none',fontFamily:'inherit',width:'100%',colorScheme:'dark'}}/>
              }
              <div style={{textAlign:'right',fontSize:11,color:'rgba(255,255,255,0.2)'}}>{(mode==='ai'?reviewText:ownText).length} characters</div>
              <div>
                <p style={{fontSize:11,color:'rgba(255,255,255,0.35)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:10}}>Post to</p>
                <div style={{display:'flex',gap:8}}>
                  {PLATFORMS.map(p=>(
                    <button key={p.key} onClick={()=>togglePlat(p.key)} style={{flex:1,padding:'12px 4px',borderRadius:14,border:`0.5px solid ${selPlats.includes(p.key)?'#5B4FE8':'rgba(255,255,255,0.08)'}`,background:selPlats.includes(p.key)?'rgba(91,79,232,0.1)':'rgba(255,255,255,0.02)',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:5,transition:'all 0.12s'}}>
                      <span style={{fontSize:16,fontWeight:700,color:selPlats.includes(p.key)?'#fff':p.color}}>{p.icon}</span>
                      <span style={{fontSize:11,color:selPlats.includes(p.key)?'rgba(255,255,255,0.8)':'rgba(255,255,255,0.35)',fontWeight:500}}>{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={()=>setScreen(rating<=3?'gate':'thanks')} disabled={selPlats.length===0||(mode==='ai'?!reviewText.trim():!ownText.trim())} style={{width:'100%',padding:'15px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:14,fontSize:15,fontWeight:500,cursor:'pointer',opacity:selPlats.length===0||(mode==='ai'?!reviewText.trim():!ownText.trim())?0.3:1}}>Submit review</button>
            </div>
          )}

          {screen==='gate'&&(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',paddingTop:32}}>
              <div style={{width:72,height:72,borderRadius:'50%',background:'rgba(234,179,8,0.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,marginBottom:20}}>💬</div>
              <h1 style={{color:'#fff',fontSize:24,fontWeight:500,letterSpacing:'-0.02em',marginBottom:12}}>Thank you for your feedback</h1>
              <p style={{color:'rgba(255,255,255,0.4)',fontSize:14,lineHeight:1.7,marginBottom:24,maxWidth:300}}>We're sorry your experience wasn't perfect. Your feedback has gone directly to the management team.</p>
              <div style={{width:'100%',background:'#111',border:'0.5px solid #1e1e1e',borderRadius:14,padding:16,marginBottom:32,textAlign:'left'}}>
                <p style={{color:'rgba(255,255,255,0.35)',fontSize:13,lineHeight:1.7,fontStyle:'italic'}}>"{mode==='ai'?reviewText:ownText}"</p>
              </div>
              <div style={{width:'100%',display:'flex',flexDirection:'column',gap:10}}>
                <button onClick={reset} style={{width:'100%',padding:'14px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:14,fontSize:14,fontWeight:500,cursor:'pointer'}}>Rate another visit</button>
                <Link href="/" style={{display:'block',width:'100%',padding:'14px',textAlign:'center',border:'0.5px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.4)',borderRadius:14,fontSize:14,textDecoration:'none'}}>← Back to Rovu</Link>
              </div>
            </div>
          )}

          {screen==='thanks'&&(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',paddingTop:32}}>
              <div style={{width:72,height:72,borderRadius:'50%',background:'rgba(29,158,117,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,marginBottom:20,color:'#1D9E75',fontWeight:600}}>✓</div>
              <h1 style={{color:'#fff',fontSize:24,fontWeight:500,letterSpacing:'-0.02em',marginBottom:12}}>Thank you!</h1>
              <p style={{color:'rgba(255,255,255,0.4)',fontSize:14,lineHeight:1.7,marginBottom:28,maxWidth:300}}>Your review has been posted. The team at Meza really appreciates your kind words.</p>
              <div style={{width:'100%',display:'flex',flexDirection:'column',gap:8,marginBottom:28}}>
                {PLATFORMS.filter(p=>selPlats.includes(p.key)).map(p=>(
                  <a key={p.key} href="#" style={{display:'flex',alignItems:'center',gap:12,background:'#111',border:'0.5px solid #1e1e1e',padding:'14px 16px',borderRadius:14,textDecoration:'none'}}>
                    <span style={{fontSize:18,fontWeight:700,color:p.color}}>{p.icon}</span>
                    <span style={{fontSize:13,color:'rgba(255,255,255,0.5)',flex:1,textAlign:'left'}}>Open {p.label} to confirm</span>
                    <span style={{color:'rgba(255,255,255,0.2)',fontSize:12}}>→</span>
                  </a>
                ))}
              </div>
              <div style={{width:'100%',display:'flex',flexDirection:'column',gap:10}}>
                <button onClick={reset} style={{width:'100%',padding:'14px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:14,fontSize:14,fontWeight:500,cursor:'pointer'}}>Rate another visit</button>
                <Link href="/" style={{display:'block',width:'100%',padding:'14px',textAlign:'center',border:'0.5px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.4)',borderRadius:14,fontSize:14,textDecoration:'none'}}>← Back to Rovu</Link>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginTop:32}}>
                <div style={{width:20,height:20,borderRadius:5,background:'#5B4FE8',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:10,fontWeight:600}}>R</div>
                <span style={{color:'rgba(255,255,255,0.2)',fontSize:11,letterSpacing:'0.06em'}}>POWERED BY ROVU</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

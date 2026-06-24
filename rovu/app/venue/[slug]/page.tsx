'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const CHIPS: Record<number, string[]> = {
  5: ['Amazing Food','Friendly Staff','Beautiful Atmosphere','Exceptional Service','Great Cocktails','Perfect For A Date','Will Definitely Return','Best Meal In Ages','Loved Every Dish','Quick & Attentive','Generous Portions','Great Value','Perfect For Groups','Fresh Ingredients','Cosy Setting','Great Music','Impeccable Presentation','Made Us Feel Welcome'],
  4: ['Great Food','Lovely Atmosphere','Good Service','Solid Experience','Worth A Visit','Good Value','Attentive Staff','Nice Cocktail Menu','Tasty Dishes','Comfortable Seating','Decent Wait Time','Nice Ambience','Good Portion Sizes','Friendly Team'],
  3: ['Decent Food','Average Service','Ok Atmosphere','A Bit Slow','Nothing Special','Could Be Better','Average Wait','Mixed Experience','Some Highlights','Room For Improvement'],
  2: ['Disappointing Food','Slow Service','Too Noisy','Overpriced','Felt Rushed','Cold Food','Long Wait','Small Portions','Inattentive Staff','Below Expectations'],
  1: ['Poor Quality Food','Terrible Service','Very Disappointing','Would Not Return','Rude Staff','Long Wait Times','Order Was Wrong','Overpriced For Quality','Unclean Tables','Felt Ignored'],
}

const LABELS: Record<number, string> = {
  5: 'Excellent — absolutely loved it',
  4: 'Good — really enjoyed the visit',
  3: 'Ok — average experience',
  2: 'Poor — quite disappointed',
  1: 'Terrible — very bad experience',
}

const OPENERS: Record<number, string[]> = {
  5: [
    "We had an absolutely wonderful evening — one of the best dining experiences we've had in a long time. ",
    "What a fantastic visit! Everything about tonight exceeded our expectations. ",
    "We honestly can't stop talking about how good this place is. ",
    "From the moment we sat down, it was clear this was going to be a great night. ",
    "Easily one of the highlights of our week — we had an incredible time here. ",
  ],
  4: [
    "We had a really enjoyable dinner and will definitely be back. ",
    "Overall a great experience — exactly what we were hoping for. ",
    "Had a lovely time here and left feeling very satisfied. ",
    "A solid night out with good food and good company. ",
    "We thoroughly enjoyed our visit and would happily come again. ",
  ],
  3: [
    "It was a decent experience overall, though a few areas could be improved. ",
    "Our visit was fine, nothing extraordinary but nothing terrible either. ",
    "A fairly average experience — some good moments, some not so good. ",
    "It was an okay visit, though we expected a little more. ",
  ],
  2: [
    "Unfortunately our visit was quite disappointing. We had high hopes but it didn't quite deliver. ",
    "We left feeling a bit let down by the experience tonight. ",
    "Sadly this visit didn't go as well as we'd hoped. ",
    "We were looking forward to this but it fell short in a few areas. ",
  ],
  1: [
    "We had a very poor experience and unfortunately cannot recommend it based on our visit. ",
    "Tonight was a real disappointment from start to finish. ",
    "We're sorry to say this was one of our worst dining experiences recently. ",
    "Unfortunately we cannot recommend this venue based on tonight's visit. ",
  ],
}

const CLOSERS: Record<number, string[]> = {
  5: [
    " The whole team clearly takes great pride in what they do. Highly recommend — we will definitely be back very soon!",
    " Can't wait to come back. This is exactly the kind of place we love supporting.",
    " Five stars without hesitation. A genuinely brilliant experience all round.",
    " We'll be recommending this to everyone we know.",
  ],
  4: [
    " Overall a very solid restaurant and we would happily recommend it to friends and family.",
    " A great spot — we'll definitely be returning.",
    " Would recommend this place without hesitation.",
    " A genuinely good night out, can't complain.",
  ],
  3: [
    " Worth a visit if you are nearby, but we would not go out of our way without some improvements.",
    " It's an okay option but there are areas that need attention.",
    " Not bad, but not quite what we expected either.",
    " Might give it another shot in future, but it didn't blow us away.",
  ],
  2: [
    " Hopefully management takes this feedback on board — with some changes this place has real potential.",
    " We hope this feedback helps improve things going forward.",
    " There's clearly potential here, but tonight wasn't it.",
    " We'd consider returning if these issues were addressed.",
  ],
  1: [
    " We will not be returning and would encourage management to review their standards urgently.",
    " This needs serious attention before we'd consider coming back.",
    " A disappointing experience that we hope gets addressed soon.",
    " We won't be returning unless real changes are made.",
  ],
}

const STAFF_COLORS = ['#5B4FE8','#1D9E75','#E8934F','#E84F7E','#4F9BE8','#9E4FE8']

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function buildHumanReview(rating: number, chips: string[], staffName: string | null): string {
  const opener = pick(OPENERS[rating])
  const closer = pick(CLOSERS[rating])

  let middle = ''
  if (chips.length === 0) {
    middle = 'The overall experience was memorable.'
  } else if (chips.length === 1) {
    middle = `One thing that stood out: ${chips[0].toLowerCase()}.`
  } else if (chips.length === 2) {
    middle = `What stood out most was the ${chips[0].toLowerCase()} and ${chips[1].toLowerCase()}.`
  } else {
    const shuffled = [...chips].sort(() => Math.random() - 0.5)
    const last = shuffled[shuffled.length - 1]
    const rest = shuffled.slice(0, -1).join(', ').toLowerCase()
    middle = pick([
      `A few things really stood out: ${rest}, and ${last.toLowerCase()}.`,
      `Highlights included ${rest}, as well as ${last.toLowerCase()}.`,
      `What we appreciated most was the ${rest}, along with ${last.toLowerCase()}.`,
    ])
  }

  let staffLine = ''
  if (staffName) {
    staffLine = ' ' + pick([
      `Special mention to ${staffName} who was absolutely brilliant and really made the visit special.`,
      `A particular shoutout to ${staffName} for going above and beyond.`,
      `${staffName} in particular deserves a mention — fantastic service from start to finish.`,
      `We have to mention ${staffName}, who made the whole experience even better.`,
    ])
  }

  return opener + middle + staffLine + closer
}

type Screen = 'rate' | 'chips' | 'staff' | 'review' | 'thanks' | 'google'
type StaffMember = { id: string; name: string }
type Venue = { id: string; name: string; slug: string; google_review_url: string; owner_email: string }

export default function VenuePage({ params }: { params: { slug: string } }) {
  const [venue, setVenue] = useState<Venue | null>(null)
  const [staffList, setStaffList] = useState<StaffMember[]>([])
  const [loading, setLoading] = useState(true)
  const [screen, setScreen] = useState<Screen>('rate')
  const [rating, setRating] = useState(0)
  const [selChips, setSelChips] = useState<string[]>([])
  const [selStaff, setSelStaff] = useState<StaffMember | null>(null)
  const [reviewText, setReviewText] = useState('')
  const [ownText, setOwnText] = useState('')
  const [mode, setMode] = useState<'ai' | 'own'>('ai')
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    async function load() {
      const { data: v } = await supabase.from('venues').select('*').eq('slug', params.slug).single()
      if (!v) { setLoading(false); return }
      setVenue(v)
      const { data: s } = await supabase.from('staff').select('*').eq('venue_id', v.id).eq('active', true)
      setStaffList(s || [])
      setLoading(false)
    }
    load()
  }, [params.slug])

  function toggleChip(chip: string) {
    setSelChips(p => p.includes(chip) ? p.filter(c => c !== chip) : [...p, chip])
  }

  function buildReview() {
    const text = buildHumanReview(rating, selChips, selStaff?.name || null)
    setReviewText(text)
    setScreen('review')
  }

  async function handleSubmit() {
    if (!venue) return
    setSubmitting(true)
    const isPrivate = rating <= 3
    const finalText = mode === 'ai' ? reviewText : ownText

    const { data: feedbackData } = await supabase.from('feedback').insert({
      venue_id: venue.id,
      staff_id: selStaff?.id || null,
      rating,
      comment: finalText,
      customer_name: customerName,
      customer_email: customerEmail,
      is_private: isPrivate,
    }).select('*, staff(name)').single()

    if (isPrivate && venue.owner_email) {
      try {
        await fetch('/api/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            venueName: venue.name,
            ownerEmail: venue.owner_email,
            rating,
            comment: finalText,
            customerName,
            staffName: feedbackData?.staff?.name || null,
          })
        })
      } catch (e) {
        console.error('Email notify failed:', e)
      }
    }

    setSubmitting(false)
    setScreen(isPrivate ? 'thanks' : 'google')
  }

  function reset() {
    setScreen('rate'); setRating(0); setSelChips([]); setSelStaff(null)
    setReviewText(''); setOwnText(''); setCustomerName(''); setCustomerEmail('')
    setMode('ai')
  }

  if (loading) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>
      Loading...
    </div>
  )

  if (!venue) return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui',color:'rgba(255,255,255,0.4)',fontSize:14}}>
      Venue not found.
    </div>
  )

  const progress = ['rate','chips','staff','review'].indexOf(screen)
  const showProgress = !['thanks','google'].includes(screen)
  const showBack = ['chips','staff','review'].includes(screen)

  function goBack() {
    if (screen === 'chips') setScreen('rate')
    else if (screen === 'staff') setScreen('chips')
    else if (screen === 'review') setScreen('staff')
  }

  const inp: React.CSSProperties = {
    width:'100%', padding:'12px 14px', background:'rgba(255,255,255,0.04)',
    border:'0.5px solid rgba(255,255,255,0.12)', borderRadius:10, color:'#fff',
    fontSize:14, outline:'none', fontFamily:'Inter,system-ui,sans-serif', marginBottom:10,
  }

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',WebkitFontSmoothing:'antialiased'}}>
      <div style={{maxWidth:480,margin:'0 auto',minHeight:'100vh',display:'flex',flexDirection:'column'}}>

        <div style={{padding:'3rem 1.5rem 1.25rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#0a0a0a',position:'sticky',top:0,zIndex:10}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:32,height:32,background:'#5B4FE8',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:600,color:'#fff'}}>R</div>
            <div>
              <div style={{fontSize:15,fontWeight:500,letterSpacing:'-0.01em'}}>{venue.name}</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.4)',marginTop:1}}>Share Your Experience</div>
            </div>
          </div>
          <a href="/" style={{fontSize:11,color:'rgba(255,255,255,0.4)',border:'0.5px solid rgba(255,255,255,0.12)',padding:'5px 11px',borderRadius:7,textDecoration:'none'}}>← Rovu</a>
        </div>

        {showProgress && (
          <div style={{display:'flex',gap:4,padding:'14px 1.5rem 0'}}>
            {['rate','chips','staff','review'].map((s,i) => (
              <div key={s} style={{height:3,borderRadius:3,flex:i===progress?2:1,background:i<=progress?'#5B4FE8':'rgba(255,255,255,0.1)',transition:'all 0.3s'}}/>
            ))}
          </div>
        )}

        {showBack && (
          <button onClick={goBack} style={{background:'none',border:'none',color:'rgba(255,255,255,0.4)',fontSize:13,padding:'10px 1.5rem 0',textAlign:'left',cursor:'pointer',fontFamily:'Inter,system-ui'}}>← Back</button>
        )}

        <div style={{flex:1,padding:'1.5rem 1.5rem 3rem',overflowY:'auto'}}>

          {screen === 'rate' && (
            <div>
              <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:8,fontWeight:500}}>Step 1 of 4</div>
              <h1 style={{fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6,lineHeight:1.2}}>How Was Your Visit?</h1>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.55)',lineHeight:1.6,marginBottom:32}}>Your honest feedback helps this venue and guides other diners.</p>
              <div style={{display:'flex',justifyContent:'center',gap:10,marginBottom:12}}>
                {[1,2,3,4,5].map(i => (
                  <button key={i} onClick={() => setRating(i)} style={{background:'none',border:'none',fontSize:44,cursor:'pointer',opacity:i<=rating?1:0.18,filter:i<=rating?'none':'grayscale(1)',padding:'2px 4px',transition:'all 0.12s'}}>★</button>
                ))}
              </div>
              <p style={{textAlign:'center',fontSize:13,color:'rgba(255,255,255,0.55)',minHeight:20,marginBottom:32,letterSpacing:'0.01em'}}>{rating > 0 ? LABELS[rating] : 'Tap a star to begin'}</p>
              <button
                disabled={rating === 0}
                onClick={() => setScreen('chips')}
                style={{width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:rating===0?'not-allowed':'pointer',opacity:rating===0?0.25:1,fontFamily:'Inter,system-ui',transition:'opacity 0.15s'}}
              >Continue</button>
              <div style={{marginTop:24,padding:'12px 16px',background:'rgba(255,255,255,0.03)',borderRadius:10,border:'0.5px solid rgba(255,255,255,0.07)'}}>
                <p style={{color:'rgba(255,255,255,0.4)',fontSize:11,textAlign:'center',lineHeight:1.6}}>Anonymous · Takes 30 seconds · Helps real people</p>
              </div>
            </div>
          )}

          {screen === 'chips' && (
            <div>
              <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:8,fontWeight:500}}>Step 2 of 4</div>
              <h1 style={{fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6,lineHeight:1.2}}>{rating >= 4 ? 'What Stood Out?' : 'What Went Wrong?'}</h1>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.55)',marginBottom:24}}>Select everything that applies.</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:32}}>
                {CHIPS[rating]?.map(chip => (
                  <button
                    key={chip}
                    onClick={() => toggleChip(chip)}
                    style={{
                      padding:'9px 15px', borderRadius:24,
                      border:`0.5px solid ${selChips.includes(chip) ? '#5B4FE8' : 'rgba(255,255,255,0.14)'}`,
                      fontSize:13, fontWeight:500, cursor:'pointer',
                      background:selChips.includes(chip) ? '#5B4FE8' : 'rgba(255,255,255,0.03)',
                      color:selChips.includes(chip) ? '#fff' : 'rgba(255,255,255,0.7)',
                      transition:'all 0.1s', fontFamily:'Inter,system-ui',
                    }}
                  >{chip}</button>
                ))}
              </div>
              <button
                disabled={selChips.length === 0}
                onClick={() => setScreen('staff')}
                style={{width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:selChips.length===0?'not-allowed':'pointer',opacity:selChips.length===0?0.25:1,fontFamily:'Inter,system-ui'}}
              >Continue</button>
            </div>
          )}

          {screen === 'staff' && (
            <div>
              <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:8,fontWeight:500}}>Step 3 of 4</div>
              <h1 style={{fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6,lineHeight:1.2}}>Who Served You?</h1>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.55)',marginBottom:24}}>Give them a shoutout — they'll see it.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:9,marginBottom:12}}>
                {staffList.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setSelStaff(selStaff?.id === s.id ? null : s)}
                    style={{
                      display:'flex', flexDirection:'column', alignItems:'center', gap:8,
                      padding:'16px 8px', borderRadius:14,
                      border:`0.5px solid ${selStaff?.id === s.id ? '#5B4FE8' : 'rgba(255,255,255,0.09)'}`,
                      background:selStaff?.id === s.id ? 'rgba(91,79,232,0.1)' : 'rgba(255,255,255,0.02)',
                      cursor:'pointer', transition:'all 0.12s', fontFamily:'Inter,system-ui',
                    }}
                  >
                    <div style={{width:44,height:44,borderRadius:'50%',background:STAFF_COLORS[i % STAFF_COLORS.length],display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:500,color:'#fff'}}>
                      {s.name.split(' ').map((w:string) => w[0]).join('').slice(0,2)}
                    </div>
                    <div style={{fontSize:13,fontWeight:500,color:'#fff',textAlign:'center'}}>{s.name}</div>
                  </button>
                ))}
              </div>
              <button onClick={buildReview} style={{width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:'pointer',marginBottom:8,fontFamily:'Inter,system-ui'}}>Continue</button>
              <button onClick={buildReview} style={{width:'100%',padding:11,background:'none',border:'none',color:'rgba(255,255,255,0.35)',fontSize:13,cursor:'pointer',fontFamily:'Inter,system-ui'}}>Skip This Step</button>
            </div>
          )}

          {screen === 'review' && (
            <div>
              <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:8,fontWeight:500}}>Step 4 of 4</div>
              <h1 style={{fontSize:26,fontWeight:500,letterSpacing:'-0.03em',marginBottom:6,lineHeight:1.2}}>Your Review</h1>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.55)',marginBottom:20}}>Our AI wrote this based on your selections. Edit freely or send as-is.</p>

              <div style={{display:'flex',background:'rgba(255,255,255,0.04)',borderRadius:10,padding:3,border:'0.5px solid rgba(255,255,255,0.08)',marginBottom:14}}>
                {(['ai','own'] as const).map(m => (
                  <button key={m} onClick={() => setMode(m)} style={{flex:1,padding:'9px',borderRadius:8,fontSize:12,fontWeight:500,cursor:'pointer',border:'none',background:mode===m?'#5B4FE8':'transparent',color:mode===m?'#fff':'rgba(255,255,255,0.4)',transition:'all 0.15s',fontFamily:'Inter,system-ui'}}>
                    {m === 'ai' ? '✨ AI-Written For You' : '✏️ Write My Own'}
                  </button>
                ))}
              </div>

              {mode === 'ai' ? (
                <textarea
                  value={reviewText}
                  onChange={e => setReviewText(e.target.value)}
                  rows={8}
                  style={{...inp,resize:'none',lineHeight:1.7,marginBottom:6}}
                />
              ) : (
                <textarea
                  value={ownText}
                  onChange={e => setOwnText(e.target.value)}
                  placeholder="Tell others what made this visit memorable..."
                  rows={8}
                  style={{...inp,resize:'none',lineHeight:1.7,marginBottom:6,colorScheme:'dark'}}
                />
              )}
              <div style={{textAlign:'right',fontSize:11,color:'rgba(255,255,255,0.3)',marginBottom:20}}>
                {(mode === 'ai' ? reviewText : ownText).length} characters
              </div>

              <div style={{marginBottom:8}}>
                <input style={inp} placeholder="Your name (optional)" value={customerName} onChange={e => setCustomerName(e.target.value)}/>
                <input style={inp} placeholder="Your email (optional)" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)}/>
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitting || (mode === 'ai' ? !reviewText.trim() : !ownText.trim())}
                style={{width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,cursor:'pointer',opacity:submitting?0.5:1,fontFamily:'Inter,system-ui'}}
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </div>
          )}

          {screen === 'thanks' && (
            <div style={{textAlign:'center',paddingTop:'3rem'}}>
              <div style={{fontSize:52,marginBottom:16}}>🙏</div>
              <h1 style={{fontSize:24,fontWeight:500,letterSpacing:'-0.03em',marginBottom:12}}>Thank You For Your Feedback</h1>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.6)',lineHeight:1.75,maxWidth:300,margin:'0 auto 2.5rem'}}>Your feedback has been shared directly with the management team. They take every piece seriously.</p>
              <button onClick={reset} style={{width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:14,fontWeight:500,cursor:'pointer',marginBottom:10,fontFamily:'Inter,system-ui'}}>Rate Another Visit</button>
              <a href="/" style={{display:'block',textAlign:'center',fontSize:13,color:'rgba(255,255,255,0.4)',textDecoration:'none',marginTop:8}}>← Back To Rovu</a>
            </div>
          )}

          {screen === 'google' && (
            <div style={{textAlign:'center',paddingTop:'3rem'}}>
              <div style={{fontSize:52,marginBottom:16}}>⭐</div>
              <h1 style={{fontSize:24,fontWeight:500,letterSpacing:'-0.03em',marginBottom:12}}>Glad You Enjoyed It!</h1>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.6)',lineHeight:1.75,maxWidth:300,margin:'0 auto 2rem'}}>Would you mind sharing your experience on Google? It means the world to the team.</p>
              {venue.google_review_url && (
                <a href={venue.google_review_url} target="_blank" rel="noopener noreferrer"
                  style={{display:'block',width:'100%',padding:14,background:'#5B4FE8',color:'#fff',border:'none',borderRadius:12,fontSize:15,fontWeight:500,textDecoration:'none',marginBottom:10,textAlign:'center',fontFamily:'Inter,system-ui'}}>
                  Leave A Google Review →
                </a>
              )}
              <button onClick={reset} style={{width:'100%',padding:13,background:'transparent',border:'0.5px solid rgba(255,255,255,0.12)',color:'rgba(255,255,255,0.5)',borderRadius:12,fontSize:14,cursor:'pointer',marginBottom:8,fontFamily:'Inter,system-ui'}}>Rate Another Visit</button>
              <a href="/" style={{display:'block',textAlign:'center',fontSize:13,color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>← Back To Rovu</a>
            </div>
          )}

        </div>

        <div style={{padding:'1rem 1.5rem',borderTop:'0.5px solid rgba(255,255,255,0.06)',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
          <div style={{width:14,height:14,background:'#5B4FE8',borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:600,color:'#fff'}}>R</div>
          <span style={{fontSize:10,color:'rgba(255,255,255,0.25)',letterSpacing:'0.06em',textTransform:'uppercase'}}>Powered By Rovu</span>
        </div>

      </div>
    </div>
  )
}

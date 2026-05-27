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
const LABELS: Record<number, string> = { 5:'Excellent — absolutely loved it', 4:'Good — really enjoyed the visit', 3:'Ok — average experience', 2:'Poor — quite disappointed', 1:'Terrible — very bad experience' }
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
  {key:'tripadvisor',label:'TripAdvisor',icon:'✈',color:'#34E0A1'},
  {key:'facebook',label:'Facebook',icon:'f',color:'#1877F2'},
]
type Screen = 'rate'|'chips'|'staff'|'review'|'gate'|'thanks'

export default function VenuePage({ params }: { params: { slug: string } }) {
  const [screen, setScreen] = useState<Screen>('rate')
  const [rating, setRating] = useState(0)
  const [selChips, setSelChips] = useState<string[]>([])
  const [selStaff, setSelStaff] = useState<string[]>([])
  const [selPlats, setSelPlats] = useState<string[]>([])
  const [reviewText, setReviewText] = useState('')
  const [ownText, setOwnText] = useState('')
  const [mode, setMode] = useState<'ai'|'own'>('ai')

  function handleRating(v: number) { setRating(v); setSelChips([]) }
  function toggleChip(c: string) { setSelChips(p => p.includes(c)?p.filter(x=>x!==c):[...p,c]) }
  function toggleStaff(n: string) { setSelStaff(p => p.includes(n)?p.filter(x=>x!==n):[...p,n]) }
  function togglePlat(p: string) { setSelPlats(prev => prev.includes(p)?prev.filter(x=>x!==p):[...prev,p]) }

  function goToReview() {
    const mid = selChips.length>0?`Highlights included: ${selChips.join(', ')}.`:'The experience was memorable.'
    let staffLine = ''
    if(selStaff.length===1) staffLine=` Special mention to ${selStaff[0]} who was absolutely brilliant.`
    else if(selStaff.length>1){const last=selStaff[selStaff.length-1];const rest=selStaff.slice(0,-1).join(', ');staffLine=` Special mention to ${rest} and ${last} — all fantastic.`}
    const openers: Record<number,string> = {5:"We had an absolutely wonderful evening — one of the best dining experiences in a long time. ",4:"Had a really enjoyable dinner. The overall experience was great and we will definitely be back. ",3:"It was a decent experience overall, though a few areas could be improved. ",2:"Unfortunately our visit was quite disappointing. We had high hopes but it didn't quite deliver. ",1:"Had a very poor experience and unfortunately cannot recommend it. "}
    const closers: Record<number,string> = {5:" The whole team clearly takes great pride in what they do. Highly recommend — we will definitely be back!",4:" Overall a very solid restaurant and we'd happily recommend it to friends.",3:" Worth a visit if you're nearby, but we wouldn't go out of our way without some improvements.",2:" Hopefully management takes this on board — with some changes this place has potential.",1:" We won't be returning and would encourage management to review their standards."}
    setReviewText(openers[rating]+mid+staffLine+closers[rating])
    setScreen('review')
  }

  function goBack() {
    if(screen==='chips') setScreen('rate')
    else if(screen==='staff') setScreen('chips')
    else if(screen==='review') setScreen('staff')
  }

  const screens = ['rate','chips','staff','review']
  const showBack = ['chips','staff','review'].includes(screen)

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col max-w-sm mx-auto relative">
      {/* Header */}
      <div className="border-b border-[#1e1e1e] px-6 pt-14 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#5B4FE8] flex items-center justify-center text-white font-semibold">R</div>
          <div>
            <div className="text-white font-medium">Meza Kitchen & Bar</div>
            <div className="text-white/35 text-xs mt-0.5">Share your experience</div>
          </div>
        </div>
        <Link href="/" className="text-white/30 text-xs border border-white/10 px-3 py-1.5 rounded-lg hover:text-white/60 hover:border-white/20 transition-all">← Back to Rovu</Link>
      </div>

      {/* Progress */}
      {!['gate','thanks'].includes(screen)&&(
        <div className="flex gap-1.5 justify-center pt-5 pb-2">
          {screens.map(s=><div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s===screen?'bg-[#5B4FE8] w-4':'bg-white/15 w-1.5'}`}/>)}
        </div>
      )}

      {/* Back button */}
      {showBack&&!['gate','thanks'].includes(screen)&&(
        <button onClick={goBack} className="flex items-center gap-1.5 text-white/35 text-sm px-6 pt-3 hover:text-white/60 transition-all">
          ← Back
        </button>
      )}

      <div className="flex-1 px-6 py-5 overflow-y-auto">

        {/* RATE */}
        {screen==='rate'&&(
          <div>
            <h1 className="text-2xl font-medium text-white mb-1">How was your visit?</h1>
            <p className="text-white/45 text-sm mb-8">Tap the stars to rate your experience</p>
            <div className="flex justify-center gap-3 mb-3">
              {[1,2,3,4,5].map(i=><button key={i} onClick={()=>handleRating(i)} className={`text-4xl transition-all hover:scale-110 ${i<=rating?'opacity-100':'opacity-20 grayscale'}`}>★</button>)}
            </div>
            <p className="text-center text-sm text-white/50 min-h-5 mb-10">{rating>0?LABELS[rating]:'Select your rating'}</p>
            <button onClick={()=>setScreen('chips')} disabled={rating===0} className="w-full py-4 bg-[#5B4FE8] text-white rounded-2xl font-medium disabled:opacity-30">Continue</button>
          </div>
        )}

        {/* CHIPS */}
        {screen==='chips'&&(
          <div>
            <h1 className="text-2xl font-medium text-white mb-1">{rating>=4?'What stood out?':'What went wrong?'}</h1>
            <p className="text-white/45 text-sm mb-6">Select everything that applies</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {CHIPS[rating]?.map(chip=><button key={chip} onClick={()=>toggleChip(chip)} className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${selChips.includes(chip)?'bg-[#5B4FE8] border-[#5B4FE8] text-white':'border-white/15 text-white/70 bg-white/5 hover:border-[#5B4FE8]'}`}>{chip}</button>)}
            </div>
            <button onClick={()=>setScreen('staff')} disabled={selChips.length===0} className="w-full py-4 bg-[#5B4FE8] text-white rounded-2xl font-medium disabled:opacity-30">Continue</button>
          </div>
        )}

        {/* STAFF */}
        {screen==='staff'&&(
          <div>
            <h1 className="text-2xl font-medium text-white mb-1">Who served you?</h1>
            <p className="text-white/45 text-sm mb-6">Give a shoutout to the team</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {STAFF.map(s=><button key={s.name} onClick={()=>toggleStaff(s.name)} className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${selStaff.includes(s.name)?'border-[#5B4FE8] bg-[#5B4FE8]/10':'border-white/10 bg-white/3 hover:border-white/20'}`}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{background:s.color}}>{s.initials}</div>
                <div className="text-white text-sm font-medium">{s.name}</div>
                <div className="text-white/40 text-xs">{s.role}</div>
              </button>)}
            </div>
            <button onClick={goToReview} disabled={selStaff.length===0} className="w-full py-4 bg-[#5B4FE8] text-white rounded-2xl font-medium disabled:opacity-30 mb-2">Continue</button>
            <button onClick={goToReview} className="w-full py-3 text-white/40 text-sm hover:text-white/60 transition-all">Skip this step</button>
          </div>
        )}

        {/* REVIEW */}
        {screen==='review'&&(
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-medium text-white mb-1">Your review</h1>
              <p className="text-white/45 text-sm">Edit or send as-is</p>
            </div>
            <div className="flex bg-[#141414] rounded-xl p-1 border border-[#1e1e1e]">
              {(['ai','own'] as const).map(m=><button key={m} onClick={()=>setMode(m)} className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${mode===m?'bg-[#5B4FE8] text-white':'text-white/40 hover:text-white/60'}`}>{m==='ai'?'AI-written for you':'Write my own'}</button>)}
            </div>
            {mode==='ai'
              ?<textarea value={reviewText} onChange={e=>setReviewText(e.target.value)} className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 text-white text-sm leading-relaxed resize-none focus:outline-none focus:border-[#5B4FE8]" rows={8}/>
              :<textarea value={ownText} onChange={e=>setOwnText(e.target.value)} placeholder="Tell others about the food, service, atmosphere..." className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 text-white text-sm leading-relaxed resize-none focus:outline-none focus:border-[#5B4FE8] placeholder:text-white/30" rows={8}/>
            }
            <div className="text-right text-xs text-white/25">{(mode==='ai'?reviewText:ownText).length} characters</div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Post to</p>
              <div className="flex gap-2">
                {PLATFORMS.map(p=><button key={p.key} onClick={()=>togglePlat(p.key)} className={`flex-1 py-3 rounded-2xl border text-sm font-medium transition-all flex flex-col items-center gap-1 ${selPlats.includes(p.key)?'border-[#5B4FE8] bg-[#5B4FE8]/10 text-white':'border-white/10 text-white/40 hover:border-white/25'}`}>
                  <span className="text-base">{p.icon}</span><span className="text-xs">{p.label}</span>
                </button>)}
              </div>
            </div>
            <button onClick={()=>setScreen(rating<=3?'gate':'thanks')} disabled={selPlats.length===0||(mode==='ai'?!reviewText.trim():!ownText.trim())} className="w-full py-4 bg-[#5B4FE8] text-white rounded-2xl font-medium disabled:opacity-30">Submit review</button>
          </div>
        )}

        {/* GATE — negative review */}
        {screen==='gate'&&(
          <div className="flex flex-col items-center text-center pt-8">
            <div className="w-16 h-16 rounded-full bg-amber-500/15 flex items-center justify-center text-2xl mb-5">💬</div>
            <h1 className="text-2xl font-medium text-white mb-3">Thank you for your feedback</h1>
            <p className="text-white/45 text-sm leading-relaxed mb-8">We're sorry your experience wasn't perfect. Your feedback has been sent directly to the management team so they can improve.</p>
            <div className="w-full bg-[#141414] border border-[#1e1e1e] rounded-2xl p-4 mb-8">
              <p className="text-white/40 text-xs leading-relaxed italic">"{mode==='ai'?reviewText:ownText}"</p>
            </div>
            <p className="text-white/25 text-xs mb-8">We take every piece of feedback seriously. Thank you.</p>
            <div className="flex flex-col gap-3 w-full">
              <button onClick={()=>{setScreen('rate');setRating(0);setSelChips([]);setSelStaff([]);setSelPlats([]);setReviewText('');setOwnText('');}} className="w-full py-3 border border-white/10 text-white/50 rounded-2xl text-sm hover:border-white/20 hover:text-white/70 transition-all">Rate another visit</button>
              <Link href="/" className="w-full py-3 text-center text-white/30 text-sm hover:text-white/50 transition-all">← Back to Rovu</Link>
            </div>
          </div>
        )}

        {/* THANKS */}
        {screen==='thanks'&&(
          <div className="flex flex-col items-center text-center pt-8">
            <div className="w-16 h-16 rounded-full bg-[#1D9E75]/20 flex items-center justify-center text-3xl mb-5">✓</div>
            <h1 className="text-2xl font-medium text-white mb-3">Thank you!</h1>
            <p className="text-white/45 text-sm leading-relaxed mb-8">Your review has been posted. The whole team really appreciates your kind words.</p>
            <div className="flex flex-col gap-3 w-full mb-8">
              {PLATFORMS.filter(p=>selPlats.includes(p.key)).map(p=>(
                <a key={p.key} href="#" className="flex items-center gap-3 bg-[#141414] border border-[#1e1e1e] p-4 rounded-2xl hover:border-white/15 transition-all">
                  <span className="text-lg font-bold" style={{color:p.color}}>{p.icon}</span>
                  <span className="text-sm text-white/60 flex-1 text-left">Open {p.label} to confirm →</span>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 w-full">
              <button onClick={()=>{setScreen('rate');setRating(0);setSelChips([]);setSelStaff([]);setSelPlats([]);setReviewText('');setOwnText('');}} className="w-full py-3 bg-[#5B4FE8] text-white rounded-2xl text-sm font-medium hover:opacity-80 transition-all">Rate another visit</button>
              <Link href="/" className="w-full py-3 text-center text-white/30 text-sm hover:text-white/50 transition-all">← Back to Rovu</Link>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <div className="w-5 h-5 rounded bg-[#5B4FE8] flex items-center justify-center text-white text-xs font-medium">R</div>
              <span className="text-white/20 text-xs tracking-wide">Powered by Rovu</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

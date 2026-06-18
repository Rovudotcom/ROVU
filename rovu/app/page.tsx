'use client'
import { useEffect, useRef } from 'react'

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount('c2', 30, 's')
          countObserver.disconnect()
        }
      })
    }, { threshold: 0.5 })
    if (statsRef.current) countObserver.observe(statsRef.current)

    function animateCount(id: string, target: number, suffix: string) {
      const el = document.getElementById(id)
      if (!el) return
      let start = 0
      const step = () => {
        start += 1
        el.textContent = start + suffix
        if (start < target) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    return () => { observer.disconnect(); countObserver.disconnect() }
  }, [])

  return (
    <main style={{background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',WebkitFontSmoothing:'antialiased',overflowX:'hidden'}}>
      <style>{`
        .reveal{opacity:0;transform:translateY(24px);transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1),transform 0.7s cubic-bezier(0.4,0,0.2,1)}
        .reveal.in{opacity:1;transform:translateY(0)}
        .reveal-d1{transition-delay:0.1s}.reveal-d2{transition-delay:0.2s}.reveal-d3{transition-delay:0.3s}
        .product-card{transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),border-color 0.3s}
        .product-card:hover{transform:translateY(-6px)}
        .product-card:hover .card-glow{opacity:0.7!important}
        .nav-link:hover{color:rgba(255,255,255,0.9)!important}
        .btn-primary:hover{opacity:0.85}
        .btn-secondary:hover{border-color:rgba(255,255,255,0.4)!important;color:#fff!important}
        .price-card{transition:transform 0.3s cubic-bezier(0.4,0,0.2,1),border-color 0.3s,box-shadow 0.3s}
        .price-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(91,79,232,0.15)}
        .price-btn{transition:all 0.2s}
        .price-btn:hover{opacity:0.85;transform:scale(1.02)}
        details summary::-webkit-details-marker{display:none}
        details[open] summary .faq-icon{transform:rotate(45deg);background:#5B4FE8!important;border-color:#5B4FE8!important;color:#fff!important}
        details[open] summary{color:#fff!important}
        @media(max-width:900px){
          .nav-links{display:none!important}
          .nav-mobile{display:flex!important}
          .hero-btns{flex-direction:column!important;align-items:center!important}
          .hero-btns a{width:100%!important;max-width:300px!important;text-align:center!important}
          .steps-grid{grid-template-columns:1fr!important}
          .feat-grid{grid-template-columns:1fr!important}
          .price-grid{grid-template-columns:1fr!important}
          .product-grid{grid-template-columns:1fr!important}
          .testi-grid{grid-template-columns:1fr!important}
          .footer-inner{flex-direction:column!important;align-items:flex-start!important;gap:1.5rem!important}
          .sticky-section{grid-template-columns:1fr!important}
          .sticky-phone{display:none!important}
          .proof-nums{grid-template-columns:1fr!important;max-width:100%!important}
          .hero-stats-grid{gap:2rem!important}
        }
        @media(max-width:480px){
          .hero-h{font-size:clamp(40px,12vw,56px)!important}
          .finale-h{font-size:clamp(36px,11vw,52px)!important}
        }
      `}</style>

      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2.5rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)',position:'sticky',top:0,background:'rgba(10,10,10,0.97)',backdropFilter:'blur(20px)',zIndex:100}}>
        <svg width="110" height="35" viewBox="0 0 160 52" fill="none">
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
        <div className="nav-links" style={{display:'flex',alignItems:'center',gap:'2rem'}}>
          <a href="#how" className="nav-link" style={{color:'rgba(255,255,255,0.55)',fontSize:13,textDecoration:'none',transition:'color 0.2s'}}>How It Works</a>
          <a href="#features" className="nav-link" style={{color:'rgba(255,255,255,0.55)',fontSize:13,textDecoration:'none',transition:'color 0.2s'}}>Features</a>
          <a href="#pricing" className="nav-link" style={{color:'rgba(255,255,255,0.55)',fontSize:13,textDecoration:'none',transition:'color 0.2s'}}>Pricing</a>
          <a href="/book-demo" className="btn-primary" style={{background:'#5B4FE8',color:'#fff',padding:'7px 18px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none',transition:'opacity 0.15s'}}>Book a 10-Min Demo</a>
        </div>
        <a href="/book-demo" className="nav-mobile" style={{display:'none',background:'#5B4FE8',color:'#fff',padding:'7px 14px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>Demo</a>
      </nav>

      <section style={{minHeight:'90vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'5rem 2rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:700,height:700,borderRadius:'50%',background:'rgba(91,79,232,0.06)',pointerEvents:'none',filter:'blur(40px)'}}/>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'rgba(255,255,255,0.45)',textTransform:'uppercase',marginBottom:'2rem',fontWeight:500}}>Built For Australian Hospitality</div>
        <h1 className="reveal reveal-d1 hero-h" style={{fontSize:'clamp(50px,9vw,88px)',fontWeight:500,letterSpacing:'-0.05em',lineHeight:0.94,marginBottom:'1.5rem',color:'#fff'}}>Your Reviews.<br/>On <span style={{color:'#5B4FE8'}}>Autopilot.</span></h1>
        <p className="reveal reveal-d2" style={{fontSize:17,color:'rgba(255,255,255,0.65)',maxWidth:440,lineHeight:1.75,margin:'0 auto 2.5rem',fontWeight:400}}>Capture guest feedback instantly. Grow your public reputation. Give every guest a voice.</p>
        <div className="hero-btns reveal reveal-d3" style={{display:'flex',gap:12,justifyContent:'center',marginBottom:'1.25rem',flexWrap:'wrap'}}>
          <a href="/book-demo" className="btn-primary" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none',transition:'opacity 0.15s'}}>Book a 10-Min Demo</a>
          <a href="/venue/meza-kitchen-bar" className="btn-secondary" style={{background:'transparent',color:'rgba(255,255,255,0.75)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.2)',transition:'all 0.2s'}}>See a Demo →</a>
        </div>
        <p className="reveal reveal-d3" style={{fontSize:12,color:'rgba(255,255,255,0.4)',marginBottom:'4rem'}}>No contracts. Setup in one afternoon. Built for Australian venues.</p>
        <div ref={statsRef} className="reveal reveal-d3 hero-stats-grid" style={{display:'flex',gap:'4rem',justifyContent:'center',flexWrap:'wrap',alignItems:'flex-start'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:34,fontWeight:500,letterSpacing:'-0.04em',lineHeight:1,color:'#5B4FE8'}}>More</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.55)',marginTop:7,letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:500}}>Guest Feedback</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:40,fontWeight:500,letterSpacing:'-0.04em',lineHeight:1,color:'#5B4FE8'}} id="c2">30s</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.55)',marginTop:7,letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:500}}>Per Review</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:34,fontWeight:500,letterSpacing:'-0.04em',lineHeight:1,color:'#5B4FE8'}}>Every Guest</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.55)',marginTop:7,letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:500}}>Heard</div>
          </div>
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.07)'}}/>

      <section className="reveal" style={{padding:'7rem 2rem',maxWidth:720,margin:'0 auto',textAlign:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.25em',color:'rgba(255,255,255,0.35)',textTransform:'uppercase',marginBottom:'1.75rem',fontWeight:500}}>Why Rovu</div>
        <h2 style={{fontSize:'clamp(32px,5vw,50px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'1.5rem'}}>Most Happy Guests<br/>Never Say A Word.<br/><span style={{color:'#5B4FE8'}}>Yours Will.</span></h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.65)',lineHeight:1.85,marginBottom:'1rem'}}>You cook great food. Your team works hard. Your guests leave happy. And then — <strong style={{color:'#fff',fontWeight:500}}>silence.</strong></p>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.65)',lineHeight:1.85}}>Every guest can leave feedback. Guests can also continue to public review platforms — giving you a direct line to your reputation, and a chance to make things right when something goes wrong.</p>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.07)'}}/>

      <section style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <div style={{fontSize:10,letterSpacing:'0.25em',color:'rgba(255,255,255,0.35)',textTransform:'uppercase',marginBottom:'1.25rem',fontWeight:500}}>The Product</div>
          <h2 style={{fontSize:'clamp(28px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff'}}>Three Moments.<br/><span style={{color:'#5B4FE8'}}>One Seamless Flow.</span></h2>
        </div>
        <div className="product-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          {[
            {bg:'#0f0a1a',border:'rgba(91,79,232,0.25)',glow:'rgba(91,79,232,0.2)',tag:'Table Card',tagCol:'rgba(155,145,245,0.9)',tagBg:'rgba(91,79,232,0.12)',h:'Scan & Review.\nAny Table.'},
            {bg:'#0a0f0a',border:'rgba(29,158,117,0.2)',glow:'rgba(29,158,117,0.18)',tag:'AI Review Flow',tagCol:'rgba(29,158,117,0.9)',tagBg:'rgba(29,158,117,0.1)',h:'30 Seconds.\nGenuine Review.'},
            {bg:'#0f0f0a',border:'rgba(232,147,79,0.2)',glow:'rgba(232,147,79,0.18)',tag:'Owner Dashboard',tagCol:'rgba(232,147,79,0.9)',tagBg:'rgba(232,147,79,0.1)',h:'Your Ratings.\nIn Real Time.'},
          ].map((c,i)=>(
            <div key={i} className="product-card reveal" style={{background:c.bg,border:`0.5px solid ${c.border}`,borderRadius:20,overflow:'hidden',minHeight:380,display:'flex',flexDirection:'column',position:'relative'}}>
              <div className="card-glow" style={{position:'absolute',bottom:-60,left:'50%',transform:'translateX(-50%)',width:220,height:220,background:c.glow,borderRadius:'50%',filter:'blur(50px)',opacity:0.4,transition:'opacity 0.3s',pointerEvents:'none'}}/>
              <div style={{padding:'1.5rem',position:'relative',zIndex:1}}>
                <div style={{display:'inline-flex',alignItems:'center',background:c.tagBg,borderRadius:8,padding:'4px 10px',marginBottom:'1.25rem'}}>
                  <span style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:c.tagCol}}>{c.tag}</span>
                </div>
                <div style={{fontSize:22,fontWeight:500,letterSpacing:'-0.03em',lineHeight:1.2,color:'#fff',marginBottom:'1rem',whiteSpace:'pre-line'}}>{c.h}</div>
              </div>
              <div style={{flex:1,display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'1rem',position:'relative',zIndex:1}}>
                {i===0&&<svg width="150" height="185" viewBox="0 0 150 185" fill="none">
                  <rect x="5" y="5" width="140" height="175" rx="14" fill="#1a1228" stroke="rgba(91,79,232,0.35)" strokeWidth="0.5"/>
                  <rect x="20" y="18" width="110" height="26" rx="6" fill="rgba(91,79,232,0.08)"/>
                  <path d="M34 36 L34 24" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M34 24 Q42 24 42 29 Q42 34 34 34" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <path d="M34 34 L43 40" stroke="#5B4FE8" strokeWidth="1.8" strokeLinecap="round"/>
                  <text x="50" y="36" fontFamily="Inter,system-ui" fontSize="11" fontWeight="500" fill="#fff">ovu</text>
                  <circle cx="82" cy="34" r="2.5" fill="#5B4FE8"/>
                  <rect x="22" y="55" width="106" height="100" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/>
                  <rect x="30" y="63" width="26" height="26" rx="4" fill="rgba(91,79,232,0.45)"/>
                  <rect x="33" y="66" width="20" height="20" rx="3" fill="#0f0a1a"/>
                  <rect x="36" y="69" width="14" height="14" rx="2" fill="#5B4FE8"/>
                  <rect x="92" y="63" width="26" height="26" rx="4" fill="rgba(91,79,232,0.45)"/>
                  <rect x="95" y="66" width="20" height="20" rx="3" fill="#0f0a1a"/>
                  <rect x="98" y="69" width="14" height="14" rx="2" fill="#5B4FE8"/>
                  <rect x="30" y="117" width="26" height="26" rx="4" fill="rgba(91,79,232,0.45)"/>
                  <rect x="33" y="120" width="20" height="20" rx="3" fill="#0f0a1a"/>
                  <rect x="36" y="123" width="14" height="14" rx="2" fill="#5B4FE8"/>
                  <text x="75" y="166" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.4)" letterSpacing="0.08em">SCAN TO LEAVE A REVIEW</text>
                  <text x="75" y="175" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(91,79,232,0.7)">rovu.com.au</text>
                </svg>}
                {i===1&&<svg width="125" height="200" viewBox="0 0 125 200" fill="none">
                  <rect x="5" y="5" width="115" height="190" rx="22" fill="#0f0f0f" stroke="#1e1e1e" strokeWidth="1"/>
                  <rect x="10" y="10" width="105" height="180" rx="18" fill="#0a0a0a"/>
                  <text x="18" y="26" fontFamily="Inter,system-ui" fontSize="8" fontWeight="500" fill="#fff">9:41</text>
                  <text x="90" y="26" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.4)">100%</text>
                  <text x="62" y="50" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="8" fontWeight="500" fill="#fff">Meza Kitchen</text>
                  <text x="62" y="68" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.5)" letterSpacing="0.08em">HOW WAS YOUR VISIT?</text>
                  <text x="17" y="91" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                  <text x="35" y="91" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                  <text x="53" y="91" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                  <text x="71" y="91" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                  <text x="89" y="91" fontFamily="Inter,system-ui" fontSize="18" fill="rgba(255,255,255,0.15)">★</text>
                  <rect x="13" y="100" width="38" height="13" rx="6.5" fill="rgba(29,158,117,0.15)" stroke="rgba(29,158,117,0.4)" strokeWidth="0.5"/>
                  <text x="32" y="110" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="#1D9E75">Great food</text>
                  <rect x="55" y="100" width="32" height="13" rx="6.5" fill="rgba(91,79,232,0.15)" stroke="rgba(91,79,232,0.4)" strokeWidth="0.5"/>
                  <text x="71" y="110" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="#9b91f5">Friendly staff</text>
                  <rect x="13" y="117" width="46" height="13" rx="6.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                  <text x="36" y="127" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.55)">Will return</text>
                  <rect x="13" y="140" width="99" height="22" rx="8" fill="#5B4FE8"/>
                  <text x="62" y="155" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="500" fill="#fff">Generate My Review →</text>
                  <rect x="43" y="182" width="39" height="3" rx="1.5" fill="rgba(255,255,255,0.18)"/>
                </svg>}
                {i===2&&<svg width="180" height="185" viewBox="0 0 180 185" fill="none">
                  <rect x="5" y="5" width="170" height="175" rx="14" fill="#111008" stroke="rgba(232,147,79,0.18)" strokeWidth="0.5"/>
                  <rect x="14" y="14" width="44" height="38" rx="7" fill="#1a1808" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
                  <text x="36" y="30" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="500" fill="#fff">4.8</text>
                  <text x="47" y="29" fontFamily="Inter,system-ui" fontSize="9" fill="#f59e0b">★</text>
                  <text x="36" y="46" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.45)" letterSpacing="0.04em">RATING</text>
                  <rect x="64" y="14" width="44" height="38" rx="7" fill="#1a1808" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
                  <text x="86" y="30" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="500" fill="#fff">248</text>
                  <text x="86" y="46" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.45)" letterSpacing="0.04em">REVIEWS</text>
                  <rect x="114" y="14" width="50" height="38" rx="7" fill="#1a1808" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
                  <text x="139" y="30" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="500" fill="#fff">84%</text>
                  <text x="139" y="46" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.45)" letterSpacing="0.04em">5-STAR</text>
                  <text x="14" y="66" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.4)" letterSpacing="0.08em">RATING BREAKDOWN</text>
                  {([['5★',84],['4★',10],['3★',4],['2★',2]] as [string,number][]).map(([l,p],idx)=>(
                    <g key={l}>
                      <text x="14" y={80+idx*13} fontFamily="Inter,system-ui" fontSize="7.5" fill="rgba(255,255,255,0.55)">{l}</text>
                      <rect x="30" y={73+idx*13} width="112" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
                      <rect x="30" y={73+idx*13} width={112*p/100} height="5" rx="2.5" fill="#E8934F" opacity={1-idx*0.2}/>
                    </g>
                  ))}
                  <text x="14" y="135" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.4)" letterSpacing="0.08em">STAFF LEADERBOARD</text>
                  {([{i:'SL',n:'Sofia L.',c:'#5B4FE8',m:'47',y:150},{i:'MR',n:'Marco R.',c:'#1D9E75',m:'38',y:165}] as {i:string,n:string,c:string,m:string,y:number}[]).map(s=>(
                    <g key={s.i}>
                      <circle cx="23" cy={s.y} r="9" fill={s.c}/>
                      <text x="23" y={s.y+3} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fontWeight="500" fill="#fff">{s.i}</text>
                      <text x="37" y={s.y+4} fontFamily="Inter,system-ui" fontSize="9" fontWeight="500" fill="#fff">{s.n}</text>
                      <text x="160" y={s.y+4} fontFamily="Inter,system-ui" fontSize="9" fontWeight="500" fill="#E8934F" textAnchor="middle">{s.m}</text>
                    </g>
                  ))}
                </svg>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.07)'}}/>

      <section id="how" style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem',fontWeight:500}}>How It Works</div>
        <h2 className="reveal" style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'2.5rem'}}>Scan. Rate. <span style={{color:'#5B4FE8'}}>Grow.</span></h2>
        <div className="steps-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(255,255,255,0.07)',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:20,overflow:'hidden'}}>
          {[
            ['01 — Scan','Guest Scans The QR On The Table','A printed card on every table. One scan opens your feedback page instantly — no app, no login, no friction.'],
            ['02 — Rate','Leaves A Star Rating And Short Feedback','Guests rate their visit, mention a staff member, and leave a comment. Takes under 30 seconds.'],
            ['03 — AI Writes','Rovu Builds A Genuine Review','Our AI turns their selections into a detailed, natural review — then gives them the option to post it to Google, TripAdvisor, or Facebook.'],
            ['04 — You Stay Informed','Unhappy Guests Are Heard Privately','Private feedback comes directly to you — so you can reach out, make it right, and recover the relationship.'],
          ].map(([n,t,b])=>(
            <div key={n} className="reveal" style={{background:'#0a0a0a',padding:'2.25rem'}}>
              <div style={{fontSize:10,color:'#5B4FE8',letterSpacing:'0.14em',fontWeight:500,textTransform:'uppercase',marginBottom:'1.25rem'}}>{n}</div>
              <div style={{fontSize:19,fontWeight:500,color:'#fff',letterSpacing:'-0.03em',marginBottom:'0.75rem',lineHeight:1.2}}>{t}</div>
              <div style={{fontSize:14,color:'rgba(255,255,255,0.65)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.07)'}}/>

      <section id="features" style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem',fontWeight:500}}>Features</div>
        <h2 className="reveal" style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>Everything Your Venue <span style={{color:'#5B4FE8'}}>Needs.</span></h2>
        <div className="feat-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[
            ['AI-Written Reviews','Our AI turns guest selections into a full, natural review — no typing required. Posted to Google, TripAdvisor, or Facebook in one tap.'],
            ['Private Feedback Recovery','Guests who had a poor experience are heard privately — giving you the chance to respond, make it right, and recover the relationship.'],
            ['Staff Recognition','Guests mention the team member who made their night. See who is driving satisfaction and reward the right people.'],
            ['Owner Dashboard','Total feedback, average rating, positive vs private count, recent comments, and staff mentions — all in one real-time view.'],
            ['Google, TripAdvisor & Facebook','Every platform Australian diners actually use. One tap from your guest, all three covered.'],
            ['Email Alerts','Get notified the moment private feedback comes in — so you can act fast and recover the relationship.'],
          ].map(([t,b])=>(
            <div key={t} className="reveal" style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'1.5rem',transition:'border-color 0.2s'}}>
              <div style={{fontSize:15,fontWeight:500,color:'#fff',marginBottom:'0.5rem',letterSpacing:'-0.01em'}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.65)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'5.5rem 2rem',textAlign:'center',background:'linear-gradient(180deg,#0a0a0a 0%,#0d0b1a 50%,#0a0a0a 100%)'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:'1.5rem',fontWeight:500}}>The Numbers</div>
        <h2 className="reveal" style={{fontSize:'clamp(32px,6vw,52px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.0,color:'#fff',marginBottom:'0.75rem'}}>The Proof<br/><span style={{color:'#5B4FE8'}}>Writes Itself.</span></h2>
        <p className="reveal" style={{fontSize:15,color:'rgba(255,255,255,0.6)',marginBottom:'3.5rem'}}>What happens when every guest has a simple way to share feedback.</p>
        <div className="proof-nums reveal" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,maxWidth:580,margin:'0 auto'}}>
          {[
            {v:'More',l:'Guest Feedback',bg:'rgba(91,79,232,0.08)',border:'rgba(91,79,232,0.2)',col:'#9b91f5'},
            {v:'30s',l:'Per Feedback Submission',bg:'rgba(232,147,79,0.08)',border:'rgba(232,147,79,0.2)',col:'#E8934F'},
            {v:'100%',l:'Of Feedback Captured',bg:'rgba(29,158,117,0.08)',border:'rgba(29,158,117,0.2)',col:'#1D9E75'},
          ].map(p=>(
            <div key={p.l} style={{background:p.bg,border:`0.5px solid ${p.border}`,borderRadius:14,padding:'2rem 1rem',textAlign:'center'}}>
              <div style={{fontSize:p.v==='More'?34:42,fontWeight:500,letterSpacing:'-0.04em',color:p.col,lineHeight:1}}>{p.v}</div>
              <div style={{fontSize:10,color:'rgba(255,255,255,0.55)',marginTop:8,letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:500}}>{p.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem',fontWeight:500}}>Pricing</div>
        <h2 className="reveal" style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>Honest Pricing.<br/><span style={{color:'#5B4FE8'}}>No Surprises.</span></h2>
        <div className="price-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          {[
            {n:'Starter',p:'A$49',d:'Single venue, getting started',f:['QR feedback flow','5 staff profiles','Google review link','Basic dashboard'],hot:false},
            {n:'Growth',p:'A$99',d:'Serious about your reputation',f:['Everything in Starter','Private feedback recovery','Unlimited staff profiles','All review platforms','Weekly digest email'],hot:true},
            {n:'Chain',p:'A$249',d:'Multiple locations',f:['Up to 5 locations','Multi-venue dashboard','White-label branding','Priority support'],hot:false},
          ].map(t=>(
            <div key={t.n} className="reveal price-card" style={{background:t.hot?'#0c0a18':'#0f0f0f',border:`0.5px solid ${t.hot?'rgba(91,79,232,0.5)':'rgba(255,255,255,0.08)'}`,borderRadius:14,padding:'1.5rem',cursor:'default'}}>
              {t.hot&&<div style={{fontSize:9,fontWeight:500,background:'rgba(91,79,232,0.18)',color:'#9b91f5',padding:'3px 9px',borderRadius:20,display:'inline-block',marginBottom:10,letterSpacing:'0.08em',textTransform:'uppercase'}}>Most Popular</div>}
              <div style={{fontSize:10,color:'rgba(255,255,255,0.4)',marginBottom:8,letterSpacing:'0.12em',textTransform:'uppercase',fontWeight:500}}>{t.n}</div>
              <div style={{fontSize:34,fontWeight:500,color:'#fff',letterSpacing:'-0.04em',lineHeight:1}}>{t.p}<span style={{fontSize:12,color:'rgba(255,255,255,0.4)',fontWeight:400}}>/mo</span></div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.45)',margin:'8px 0 14px',paddingBottom:12,borderBottom:'0.5px solid rgba(255,255,255,0.07)'}}>{t.d}</div>
              <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:'1.25rem'}}>
                {t.f.map(f=><div key={f} style={{display:'flex',alignItems:'center',gap:7,fontSize:12,color:'rgba(255,255,255,0.65)'}}><div style={{width:3,height:3,borderRadius:'50%',background:'#5B4FE8',flexShrink:0}}></div>{f}</div>)}
              </div>
              <a href="/book-demo" className="price-btn" style={{display:'block',padding:'10px',borderRadius:8,fontSize:12,fontWeight:500,textAlign:'center',background:t.hot?'#5B4FE8':'transparent',border:`0.5px solid ${t.hot?'#5B4FE8':'rgba(255,255,255,0.12)'}`,color:t.hot?'#fff':'rgba(255,255,255,0.6)',textDecoration:'none'}}>Book a 10-Min Demo</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:'1.5rem',fontWeight:500}}>Early Days</div>
        <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'1.5rem',lineHeight:1.1}}>Built For Real Venues.<br/><span style={{color:'#5B4FE8'}}>Pilot Results Coming Soon.</span></h2>
        <div className="reveal" style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.08)',borderRadius:16,padding:'2.5rem',textAlign:'center'}}>
          <p style={{fontSize:15,color:'rgba(255,255,255,0.65)',lineHeight:1.8,maxWidth:520,margin:'0 auto'}}>We're working directly with Australian hospitality venues to refine Rovu before wider rollout. Real results from real pilot venues will be shared here soon.</p>
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.07)'}}/>

      <section style={{padding:'5rem 2rem',maxWidth:700,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:'1.5rem',fontWeight:500}}>Honest Answers</div>
        <h2 className="reveal" style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2rem',lineHeight:1.1}}>Things People Ask<br/>Before Signing Up.</h2>
        {[
          ['Does it work if customers are in a hurry?','Yes — that\'s the whole point. Scan, rate, tap a few details, done. Takes under 30 seconds. No app, no login, no friction.'],
          ['What happens when a guest had a poor experience?','Their feedback comes directly and privately to you — so you can reach out, make it right, and recover the relationship.'],
          ['Do customers need to download an app?','No. Rovu is entirely web-based. Guests scan the QR and the feedback page opens instantly in their browser.'],
          ['Is there a lock-in contract?','No contract, no lock-in. Month to month, cancel any time. We are confident enough in the results that we don\'t need to trap you.'],
          ['Is this compliant with Google\'s review policies?','Yes. Every review is genuine, written by a real guest about their real experience. We make it easy for happy guests to share — and give every guest a fair option to leave a public review.'],
        ].map(([q,a],i)=>(
          <div key={i} className="reveal" style={{borderBottom:'0.5px solid rgba(255,255,255,0.07)'}}>
            <details>
              <summary style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 0',cursor:'pointer',fontSize:14,fontWeight:500,color:'rgba(255,255,255,0.8)',letterSpacing:'-0.01em',lineHeight:1.4,listStyle:'none',transition:'color 0.2s'}}>
                {q}
                <span className="faq-icon" style={{width:22,height:22,borderRadius:'50%',border:'0.5px solid rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:14,color:'rgba(255,255,255,0.5)',marginLeft:16,transition:'all 0.3s'}}>+</span>
              </summary>
              <div style={{padding:'0 0 1rem',fontSize:13,color:'rgba(255,255,255,0.65)',lineHeight:1.85}}>{a}</div>
            </details>
          </div>
        ))}
      </section>

      <section style={{textAlign:'center',padding:'8rem 2rem 7rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',bottom:-80,left:'50%',transform:'translateX(-50%)',width:500,height:300,background:'rgba(91,79,232,0.06)',borderRadius:'50%',pointerEvents:'none',filter:'blur(40px)'}}/>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.25em',color:'rgba(255,255,255,0.35)',textTransform:'uppercase',marginBottom:'2rem',fontWeight:500}}>Ready When You Are</div>
        <h2 className="reveal finale-h" style={{fontSize:'clamp(40px,7vw,64px)',fontWeight:500,letterSpacing:'-0.05em',color:'#fff',lineHeight:1.05,marginBottom:'1.25rem'}}>Turn Every Visit<br/>Into <span style={{color:'#5B4FE8'}}>Useful Feedback.</span></h2>
        <p className="reveal" style={{fontSize:16,color:'rgba(255,255,255,0.6)',marginBottom:'1rem'}}>Join Australian venues building their reputation the right way.</p>
        <p className="reveal" style={{fontSize:12,color:'rgba(255,255,255,0.4)',marginBottom:'2.5rem'}}>No contracts. Setup in one afternoon. Built for Australian venues.</p>
        <div className="hero-btns reveal" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/book-demo" className="btn-primary" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none',display:'block',transition:'opacity 0.15s'}}>Book a 10-Min Demo</a>
          <a href="/venue/meza-kitchen-bar" className="btn-secondary" style={{background:'transparent',color:'rgba(255,255,255,0.75)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.2)',display:'block',transition:'all 0.2s'}}>See a Demo →</a>
        </div>
      </section>

      <footer style={{borderTop:'0.5px solid rgba(255,255,255,0.07)',padding:'2rem 2.5rem'}}>
        <div className="footer-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1.5rem',maxWidth:1100,margin:'0 auto'}}>
          <div>
            <svg width="100" height="32" viewBox="0 0 160 52" fill="none" style={{marginBottom:8}}>
              <defs><linearGradient id="fl2" x1="12" y1="28" x2="30" y2="44" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="rgba(255,255,255,0.5)"/><stop offset="100%" stopColor="#5B4FE8"/></linearGradient></defs>
              <path d="M12 44 L12 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M12 10 Q30 10 30 19 Q30 28 12 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M12 28 L30 44" stroke="url(#fl2)" strokeWidth="3" strokeLinecap="round"/>
              <ellipse cx="52" cy="27" rx="11" ry="17" stroke="#fff" strokeWidth="3" fill="none"/>
              <path d="M80 10 L91 44" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M91 44 L102 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M117 10 L117 34 Q117 44 127 44 Q137 44 137 34 L137 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <circle cx="151" cy="44" r="4" fill="#5B4FE8"/>
            </svg>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.4)',letterSpacing:'0.01em'}}>Built For Australian Hospitality Operators.</div>
          </div>
          <div style={{display:'flex',gap:'1.5rem',flexWrap:'wrap'}}>
            <a href="#" style={{fontSize:12,color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>Privacy Policy</a>
            <a href="#" style={{fontSize:12,color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>Terms</a>
            <a href="mailto:hello@rovu.com.au" style={{fontSize:12,color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>Contact</a>
          </div>
          <span style={{fontSize:11,color:'rgba(255,255,255,0.3)'}}>© 2026 Rovu. Built In Australia.</span>
        </div>
      </footer>

    </main>
  )
}

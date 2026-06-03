'use client'
import { RovuLogo } from './logo'

export default function HomePage() {
  return (
    <main style={{background:'#0a0a0a',color:'#fff',fontFamily:"'Inter',system-ui,sans-serif",WebkitFontSmoothing:'antialiased',overflowX:'hidden'}}>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes countUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .reveal{opacity:0;transform:translateY(24px);transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1),transform 0.7s cubic-bezier(0.4,0,0.2,1)}
        .reveal.in{opacity:1;transform:translateY(0)}
        .reveal-delay-1{transition-delay:0.1s}
        .reveal-delay-2{transition-delay:0.2s}
        .reveal-delay-3{transition-delay:0.3s}
        .product-card{transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),border-color 0.3s}
        .product-card:hover{transform:translateY(-6px)!important}
        .product-card:hover .card-glow{opacity:1!important}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height 0.42s cubic-bezier(0.4,0,0.2,1),opacity 0.3s}
        .faq-item.open .faq-answer{max-height:200px;opacity:1}
        .faq-item.open .faq-icon{background:#5B4FE8!important;border-color:#5B4FE8!important;color:#fff!important;transform:rotate(45deg)}
        .faq-item.open .faq-question-text{color:#fff!important}
        @media(max-width:900px){
          .product-grid{grid-template-columns:1fr!important}
          .nav-links{display:none!important}
          .nav-mobile{display:flex!important}
          .hero-btns{flex-direction:column!important;align-items:center}
          .hero-btns a{width:100%;max-width:300px;text-align:center;display:block}
          .hero-stats{gap:2rem!important;justify-content:flex-start!important}
          .steps-grid{grid-template-columns:1fr!important}
          .feat-grid{grid-template-columns:1fr!important}
          .price-grid{grid-template-columns:1fr!important}
          .proof-nums{grid-template-columns:1fr!important;max-width:100%!important}
          .testi-grid{grid-template-columns:1fr!important}
          .footer-inner{flex-direction:column!important;gap:1rem!important;align-items:flex-start!important}
        }
        @media(max-width:480px){
          .hero-h{font-size:clamp(42px,13vw,62px)!important}
          .finale-h{font-size:clamp(40px,12vw,60px)!important}
        }
      `}</style>

      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem',borderBottom:'0.5px solid rgba(255,255,255,0.06)',position:'sticky',top:0,background:'rgba(10,10,10,0.96)',backdropFilter:'blur(20px)',zIndex:100}}>
        <RovuLogo width={110} height={35}/>
        <div className="nav-links" style={{display:'flex',alignItems:'center',gap:'1.75rem'}}>
          <a href="#how" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>how it works</a>
          <a href="#features" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>features</a>
          <a href="#pricing" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>pricing</a>
          <a href="/venue/meza-kitchen-bar" style={{background:'#5B4FE8',color:'#fff',padding:'7px 18px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>see a demo →</a>
        </div>
        <a className="nav-mobile" href="/venue/meza-kitchen-bar" style={{display:'none',background:'#5B4FE8',color:'#fff',padding:'7px 14px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>demo →</a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:'88vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'5rem 1.5rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:600,borderRadius:'50%',background:'rgba(91,79,232,0.05)',pointerEvents:'none'}}/>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase',marginBottom:'2rem'}}>built for australian hospitality</div>
        <h1 className="hero-h reveal reveal-delay-1" style={{fontSize:'clamp(50px,9vw,88px)',fontWeight:500,letterSpacing:'-0.05em',lineHeight:0.94,marginBottom:'1.5rem',color:'#fff'}}>your reviews.<br/>on <span style={{color:'#5B4FE8'}}>autopilot.</span></h1>
        <p className="reveal reveal-delay-2" style={{fontSize:17,color:'rgba(255,255,255,0.55)',maxWidth:400,lineHeight:1.75,margin:'0 auto 2.5rem'}}>most happy customers walk out your door and say nothing publicly. rovu changes that — permanently.</p>
        <div className="hero-btns reveal reveal-delay-3" style={{display:'flex',gap:12,justifyContent:'center',marginBottom:'5rem',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>start free trial →</a>
          <a href="#how" style={{background:'transparent',color:'rgba(255,255,255,0.6)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.14)'}}>see how it works</a>
        </div>
        <div className="hero-stats reveal reveal-delay-3" style={{display:'flex',gap:'3.5rem',justifyContent:'center',flexWrap:'wrap'}}>
          {[['3','x','more reviews'],['30','s','per review'],['0','','bad ones public']].map(([v,e,l])=>(
            <div key={l}><div className="stat-num" style={{fontSize:36,fontWeight:500,letterSpacing:'-0.04em',lineHeight:1}} data-target={v}>{v}<span style={{color:'#5B4FE8'}}>{e}</span></div><div style={{fontSize:10,color:'rgba(255,255,255,0.3)',marginTop:6,letterSpacing:'0.08em',textTransform:'uppercase'}}>{l}</div></div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* STORY */}
      <section className="reveal" style={{padding:'7rem 1.5rem',maxWidth:680,margin:'0 auto',textAlign:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.22)',textTransform:'uppercase',marginBottom:'1.75rem'}}>why we built this</div>
        <h2 style={{fontSize:'clamp(32px,5vw,50px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'1.5rem'}}>most happy guests<br/>never say a word.<br/><span style={{color:'#5B4FE8'}}>yours will.</span></h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.55)',lineHeight:1.85,marginBottom:'1rem'}}>you cook great food. your team works hard. your guests leave happy. and then — <strong style={{color:'#fff',fontWeight:500}}>silence.</strong></p>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.55)',lineHeight:1.85}}>meanwhile the one unhappy customer wrote a three-paragraph google review at midnight. rovu fixes that imbalance. permanently.</p>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* PRODUCT SHOWCASE — CRED style */}
      <section style={{padding:'5rem 1.5rem',maxWidth:1000,margin:'0 auto'}}>
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.25rem'}}>the product</div>
          <h2 style={{fontSize:'clamp(28px,5vw,42px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff'}}>three moments.<br/><span style={{color:'#5B4FE8'}}>one seamless flow.</span></h2>
        </div>
        <div className="product-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          {[
            {bg:'#0f0a1a',border:'rgba(91,79,232,0.25)',glow:'rgba(91,79,232,0.25)',tagCol:'rgba(155,145,245,0.7)',tagBg:'rgba(91,79,232,0.15)',tag:'table card',h:'scan & review.\nany table.',btn:'learn more'},
            {bg:'#0a0f0a',border:'rgba(29,158,117,0.2)',glow:'rgba(29,158,117,0.2)',tagCol:'rgba(29,158,117,0.8)',tagBg:'rgba(29,158,117,0.12)',tag:'review flow',h:'30 seconds.\ngenuine review.',btn:'see how it works'},
            {bg:'#0f0f0a',border:'rgba(232,147,79,0.2)',glow:'rgba(232,147,79,0.2)',tagCol:'rgba(232,147,79,0.8)',tagBg:'rgba(232,147,79,0.12)',tag:'owner dashboard',h:'your ratings.\nin real time.',btn:'explore dashboard'},
          ].map((c,i)=>(
            <div key={i} className="product-card reveal" style={{background:c.bg,border:`0.5px solid ${c.border}`,borderRadius:20,overflow:'hidden',minHeight:400,display:'flex',flexDirection:'column',position:'relative'}}>
              <div className="card-glow" style={{position:'absolute',bottom:-60,left:'50%',transform:'translateX(-50%)',width:220,height:220,background:c.glow,borderRadius:'50%',filter:'blur(50px)',opacity:0.4,transition:'opacity 0.3s',pointerEvents:'none'}}/>
              <div style={{padding:'1.5rem 1.5rem 0',position:'relative',zIndex:1}}>
                <div style={{display:'inline-flex',alignItems:'center',gap:7,background:c.tagBg,borderRadius:8,padding:'4px 10px',marginBottom:'1.25rem'}}>
                  <span style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:c.tagCol}}>{c.tag}</span>
                </div>
                <div style={{fontSize:22,fontWeight:500,letterSpacing:'-0.03em',lineHeight:1.2,color:'#fff',marginBottom:'1rem',whiteSpace:'pre-line'}}>{c.h}</div>
                <div style={{display:'inline-flex',alignItems:'center',gap:6,border:'0.5px solid rgba(255,255,255,0.15)',borderRadius:8,padding:'7px 14px',fontSize:11,fontWeight:500,color:'rgba(255,255,255,0.55)',letterSpacing:'0.04em',textTransform:'uppercase',cursor:'pointer'}}>{c.btn} →</div>
              </div>
              <div style={{flex:1,display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'1.5rem',position:'relative',zIndex:1}}>
                {i===0&&(
                  <svg width="160" height="200" viewBox="0 0 160 200" fill="none">
                    <rect x="10" y="5" width="140" height="190" rx="14" fill="#1a1228" stroke="rgba(91,79,232,0.4)" stroke-width="0.5"/>
                    <rect x="26" y="20" width="108" height="30" rx="6" fill="rgba(91,79,232,0.08)"/>
                    <path d="M40 42 L40 28" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
                    <path d="M40 28 Q48 28 48 33 Q48 38 40 38" stroke="#fff" stroke-width="1.8" stroke-linecap="round" fill="none"/>
                    <path d="M40 38 L49 44" stroke="#5B4FE8" stroke-width="1.8" stroke-linecap="round"/>
                    <text x="56" y="39" fontFamily="Inter,system-ui" fontSize="12" fontWeight="500" fill="#fff" letterSpacing="-0.5">ovu</text>
                    <circle cx="93" cy="40" r="2.5" fill="#5B4FE8"/>
                    <rect x="28" y="62" width="104" height="104" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
                    <rect x="36" y="70" width="28" height="28" rx="4" fill="rgba(91,79,232,0.5)"/>
                    <rect x="39" y="73" width="22" height="22" rx="3" fill="#0f0a1a"/>
                    <rect x="42" y="76" width="16" height="16" rx="2" fill="#5B4FE8"/>
                    <rect x="96" y="70" width="28" height="28" rx="4" fill="rgba(91,79,232,0.5)"/>
                    <rect x="99" y="73" width="22" height="22" rx="3" fill="#0f0a1a"/>
                    <rect x="102" y="76" width="16" height="16" rx="2" fill="#5B4FE8"/>
                    <rect x="36" y="130" width="28" height="28" rx="4" fill="rgba(91,79,232,0.5)"/>
                    <rect x="39" y="133" width="22" height="22" rx="3" fill="#0f0a1a"/>
                    <rect x="42" y="136" width="16" height="16" rx="2" fill="#5B4FE8"/>
                    {[70,76,82,88].map((x,j)=>[98,104,112,118,126].map((y,k)=>(
                      <rect key={`${j}${k}`} x={x} y={y} width="4" height="4" rx="1" fill={`rgba(255,255,255,${0.15+Math.random()*0.3})`}/>
                    )))}
                    <text x="80" y="178" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="0.08em">SCAN TO LEAVE A REVIEW</text>
                    <text x="80" y="188" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(91,79,232,0.6)" letterSpacing="0.06em">rovu.com.au</text>
                  </svg>
                )}
                {i===1&&(
                  <svg width="130" height="210" viewBox="0 0 130 210" fill="none">
                    <rect x="5" y="5" width="120" height="200" rx="22" fill="#0f0f0f" stroke="#1e1e1e" stroke-width="1"/>
                    <rect x="10" y="10" width="110" height="190" rx="18" fill="#0a0a0a"/>
                    <text x="18" y="26" fontFamily="Inter,system-ui" fontSize="8" fontWeight="500" fill="#fff">9:41</text>
                    <text x="98" y="26" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.4)">100%</text>
                    <rect x="10" y="30" width="110" height="24" fill="rgba(0,0,0,0.5)"/>
                    <path d="M18 46 L18 35" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M18 35 Q24 35 24 39 Q24 43 18 43" stroke="#fff" stroke-width="1.5" stroke-linecap="round" fill="none"/>
                    <path d="M18 43 L25 47" stroke="#5B4FE8" stroke-width="1.5" stroke-linecap="round"/>
                    <text x="30" y="45" fontFamily="Inter,system-ui" fontSize="7.5" fontWeight="500" fill="#fff">Meza Kitchen</text>
                    <text x="65" y="72" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">HOW WAS YOUR VISIT?</text>
                    <text x="18" y="95" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                    <text x="36" y="95" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                    <text x="54" y="95" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                    <text x="72" y="95" fontFamily="Inter,system-ui" fontSize="18" fill="#f59e0b">★</text>
                    <text x="90" y="95" fontFamily="Inter,system-ui" fontSize="18" fill="rgba(255,255,255,0.15)">★</text>
                    <text x="65" y="108" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.45)">Good — really enjoyed it</text>
                    <rect x="40" y="115" width="18" height="3" rx="1.5" fill="#1D9E75"/>
                    <rect x="62" y="116" width="5" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
                    <rect x="70" y="116" width="5" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
                    <rect x="78" y="116" width="5" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
                    <rect x="13" y="124" width="38" height="14" rx="7" fill="rgba(29,158,117,0.15)" stroke="rgba(29,158,117,0.4)" stroke-width="0.5"/>
                    <text x="32" y="134" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="#1D9E75">Great food</text>
                    <rect x="55" y="124" width="34" height="14" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                    <text x="72" y="134" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.45)">Good value</text>
                    <rect x="93" y="124" width="26" height="14" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                    <text x="106" y="134" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.45)">Cosy</text>
                    <rect x="13" y="142" width="46" height="14" rx="7" fill="rgba(91,79,232,0.15)" stroke="rgba(91,79,232,0.4)" stroke-width="0.5"/>
                    <text x="36" y="152" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="#9b91f5">Friendly staff</text>
                    <rect x="63" y="142" width="46" height="14" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                    <text x="86" y="152" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.45)">Will return</text>
                    <rect x="13" y="165" width="104" height="24" rx="8" fill="#1D9E75"/>
                    <text x="65" y="181" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="9" fontWeight="500" fill="#fff">Continue</text>
                    <rect x="44" y="196" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.18)"/>
                  </svg>
                )}
                {i===2&&(
                  <svg width="185" height="195" viewBox="0 0 185 195" fill="none">
                    <rect x="5" y="5" width="175" height="185" rx="14" fill="#111008" stroke="rgba(232,147,79,0.18)" stroke-width="0.5"/>
                    <rect x="14" y="14" width="46" height="40" rx="7" fill="#1a1808" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
                    <text x="37" y="31" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="500" fill="#fff">4.8</text>
                    <text x="47" y="30" fontFamily="Inter,system-ui" fontSize="9" fill="#f59e0b">★</text>
                    <text x="37" y="48" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.35)" letterSpacing="0.04em">RATING</text>
                    <rect x="66" y="14" width="46" height="40" rx="7" fill="#1a1808" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
                    <text x="89" y="31" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="500" fill="#fff">248</text>
                    <text x="89" y="48" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.35)" letterSpacing="0.04em">REVIEWS</text>
                    <rect x="118" y="14" width="52" height="40" rx="7" fill="#1a1808" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
                    <text x="144" y="31" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="14" fontWeight="500" fill="#fff">84%</text>
                    <text x="144" y="48" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.35)" letterSpacing="0.04em">5-STAR</text>
                    <text x="14" y="70" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">BREAKDOWN</text>
                    {[['5★',84,208],['4★',10,25],['3★',4,10],['2★',2,3]].map(([label,pct,count],idx)=>(
                      <g key={idx}>
                        <text x="14" y={85+idx*13} fontFamily="Inter,system-ui" fontSize="8" fill="rgba(255,255,255,0.4)">{label}</text>
                        <rect x="30" y={78+idx*13} width="118" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
                        <rect x="30" y={78+idx*13} width={118*Number(pct)/100} height="5" rx="2.5" fill="#E8934F" opacity={1-idx*0.2}/>
                        <text x="152" y={84+idx*13} fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.28)">{count}</text>
                      </g>
                    ))}
                    <text x="14" y="140" fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">STAFF LEADERBOARD</text>
                    {[{i:'SL',n:'Sofia L.',r:'Waitress',c:'#5B4FE8',m:'47',y:157},{i:'MR',n:'Marco R.',r:'Head Chef',c:'#1D9E75',m:'38',y:175}].map((s,idx)=>(
                      <g key={idx}>
                        <circle cx="23" cy={s.y} r="9" fill={s.c}/>
                        <text x="23" y={s.y+4} textAnchor="middle" fontFamily="Inter,system-ui" fontSize="7" fontWeight="500" fill="#fff">{s.i}</text>
                        <text x="37" y={s.y-3} fontFamily="Inter,system-ui" fontSize="9" fontWeight="500" fill="#fff">{s.n}</text>
                        <text x="37" y={s.y+8} fontFamily="Inter,system-ui" fontSize="7" fill="rgba(255,255,255,0.35)">{s.r}</text>
                        <text x="163" y={s.y+4} fontFamily="Inter,system-ui" fontSize="9" fontWeight="500" fill="#E8934F" textAnchor="middle">{s.m}</text>
                      </g>
                    ))}
                    <rect x="14" y="184" width="157" height="10" rx="5" fill="rgba(91,79,232,0.12)" stroke="rgba(91,79,232,0.2)" stroke-width="0.5"/>
                    <circle cx="21" cy="189" r="2" fill="#5B4FE8"/>
                    <text x="27" y="192" fontFamily="Inter,system-ui" fontSize="6.5" fill="rgba(255,255,255,0.5)">1 private review today — tap to respond</text>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* HOW IT WORKS */}
      <section id="how" style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>how it works</div>
        <h2 className="reveal" style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'2.5rem'}}>scan. rate. <span style={{color:'#5B4FE8'}}>publish.</span></h2>
        <div className="steps-grid reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(255,255,255,0.06)',borderRadius:20,overflow:'hidden'}}>
          {[['01 — scan','guest scans the qr on the table','a printed card on every table. one scan opens your review page instantly — no app, no login, no friction.'],['02 — rate','taps stars and picks highlights','pre-built chips, staff shoutouts, one-tap selections. under 30 seconds every time.'],['03 — ai writes','rovu builds a genuine review','ai turns their selections into a natural review and posts it to google, tripadvisor, or facebook.'],['04 — protected','bad reviews go to you. not google.','1–3 star feedback goes privately to you first. fix it before it ever goes public.']].map(([n,t,b])=>(
            <div key={n} style={{background:'#0a0a0a',padding:'2.25rem'}}>
              <div style={{fontSize:10,color:'#5B4FE8',letterSpacing:'0.14em',fontWeight:500,textTransform:'uppercase',marginBottom:'1.25rem'}}>{n}</div>
              <div style={{fontSize:19,fontWeight:500,color:'#fff',letterSpacing:'-0.03em',marginBottom:'0.75rem',lineHeight:1.2}}>{t}</div>
              <div style={{fontSize:14,color:'rgba(255,255,255,0.55)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* FEATURES */}
      <section id="features" style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>features</div>
        <h2 className="reveal" style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>everything your venue <span style={{color:'#5B4FE8'}}>needs.</span></h2>
        <div className="feat-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[['ai-written reviews','full, natural reviews from customer selections. no more one-word posts.'],['negative review gating','low ratings never hit google. they go privately to you before any damage is done.'],['staff recognition','guests name the team member who made their night. great for morale and retention.'],['owner dashboard','real-time analytics, staff leaderboard, top tags, and platform breakdown.'],['google, tripadvisor & facebook','every platform australian diners use. one tap, all three covered.'],['print-ready qr cards','branded pdf table card. on your tables the same day you sign up.']].map(([t,b])=>(
            <div key={t} className="reveal" style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'1.5rem',transition:'border-color 0.2s'}}>
              <div style={{fontSize:15,fontWeight:500,color:'#fff',marginBottom:'0.5rem',letterSpacing:'-0.01em'}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.55)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF — mixed colour */}
      <section style={{padding:'5.5rem 1.5rem',textAlign:'center',background:'linear-gradient(180deg,#0a0a0a 0%,#0d0b1a 40%,#0a0a0a 100%)'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>the numbers</div>
        <h2 className="reveal" style={{fontSize:'clamp(32px,6vw,52px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.0,color:'#fff',marginBottom:'0.75rem'}}>the proof<br/><span style={{color:'#5B4FE8'}}>writes itself.</span></h2>
        <p className="reveal" style={{fontSize:15,color:'rgba(255,255,255,0.45)',marginBottom:'3.5rem'}}>what happens when happy customers can leave a review in 30 seconds.</p>
        <div className="proof-nums reveal" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,maxWidth:580,margin:'0 auto'}}>
          {[{v:'3x',l:'more reviews',bg:'rgba(91,79,232,0.08)',border:'rgba(91,79,232,0.2)',col:'#9b91f5'},{v:'4.9★',l:'avg rating',bg:'rgba(232,147,79,0.08)',border:'rgba(232,147,79,0.2)',col:'#E8934F'},{v:'0',l:'bad ones public',bg:'rgba(29,158,117,0.08)',border:'rgba(29,158,117,0.2)',col:'#1D9E75'}].map(p=>(
            <div key={p.l} style={{background:p.bg,border:`0.5px solid ${p.border}`,borderRadius:14,padding:'2rem 1rem',textAlign:'center'}}>
              <div style={{fontSize:42,fontWeight:500,letterSpacing:'-0.04em',color:p.col,lineHeight:1}}>{p.v}</div>
              <div style={{fontSize:10,color:'rgba(255,255,255,0.4)',marginTop:8,letterSpacing:'0.08em',textTransform:'uppercase'}}>{p.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>pricing</div>
        <h2 className="reveal" style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>honest pricing.<br/><span style={{color:'#5B4FE8'}}>no surprises.</span></h2>
        <div className="price-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          {[{n:'starter',p:'A$49',d:'single venue',f:['qr review flow','5 staff profiles','google + tripadvisor','basic analytics'],hot:false},{n:'growth',p:'A$99',d:'serious about your rating',f:['everything in starter','negative review gating','unlimited staff','all 3 platforms','weekly digest'],hot:true},{n:'chain',p:'A$249',d:'multiple locations',f:['up to 5 locations','multi-venue dashboard','white-label branding','priority support'],hot:false}].map(t=>(
            <div key={t.n} className="reveal" style={{background:t.hot?'#0c0a18':'#0f0f0f',border:`0.5px solid ${t.hot?'rgba(91,79,232,0.5)':'rgba(255,255,255,0.07)'}`,borderRadius:14,padding:'1.5rem'}}>
              {t.hot&&<div style={{fontSize:9,fontWeight:500,background:'rgba(91,79,232,0.18)',color:'#9b91f5',padding:'3px 9px',borderRadius:20,display:'inline-block',marginBottom:10,letterSpacing:'0.08em',textTransform:'uppercase'}}>most popular</div>}
              <div style={{fontSize:10,color:'rgba(255,255,255,0.3)',marginBottom:8,letterSpacing:'0.12em',textTransform:'uppercase'}}>{t.n}</div>
              <div style={{fontSize:34,fontWeight:500,color:'#fff',letterSpacing:'-0.04em',lineHeight:1}}>{t.p}<span style={{fontSize:12,color:'rgba(255,255,255,0.28)',fontWeight:400}}>/mo</span></div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.28)',margin:'8px 0 14px',paddingBottom:12,borderBottom:'0.5px solid rgba(255,255,255,0.06)'}}>{t.d}</div>
              <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:'1.25rem'}}>
                {t.f.map(f=><div key={f} style={{display:'flex',alignItems:'center',gap:7,fontSize:12,color:'rgba(255,255,255,0.55)'}}><div style={{width:3,height:3,borderRadius:'50%',background:'#5B4FE8',flexShrink:0}}></div>{f}</div>)}
              </div>
              <a href="mailto:hello@rovu.com.au" style={{display:'block',padding:'10px',borderRadius:8,fontSize:12,fontWeight:500,textAlign:'center',background:t.hot?'#5B4FE8':'transparent',border:`0.5px solid ${t.hot?'#5B4FE8':'rgba(255,255,255,0.1)'}`,color:t.hot?'#fff':'rgba(255,255,255,0.5)',textDecoration:'none'}}>get started</a>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>from the venues</div>
        <h2 className="reveal" style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>what owners <span style={{color:'#5B4FE8'}}>actually say.</span></h2>
        <div className="testi-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:12}}>
          {[{q:'we went from 12 google reviews a month to 47. the negative review gating alone is worth every cent — caught two unhappy tables before they went public.',n:'James Chen',r:'owner, the harbour table — sydney',i:'JC',c:'#5B4FE8'},{q:'my staff actually compete to get mentioned in reviews now. the leaderboard changed the whole culture of the restaurant.',n:'Sarah Mitchell',r:'manager, circa bistro — melbourne',i:'SM',c:'#1D9E75'},{q:'set up in an afternoon. our google rating went from 4.1 to 4.7 in six weeks. wish i found this two years ago.',n:'Raj Patel',r:'owner, spice route — brisbane',i:'RP',c:'#E8934F'}].map(t=>(
            <div key={t.n} className="reveal" style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:16,padding:'1.5rem'}}>
              <div style={{fontSize:30,color:'#5B4FE8',lineHeight:1,marginBottom:10,fontFamily:'Georgia,serif'}}>"</div>
              <div style={{fontSize:14,color:'rgba(255,255,255,0.65)',lineHeight:1.75,marginBottom:'1.25rem',fontStyle:'italic'}}>{t.q}</div>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:34,height:34,borderRadius:'50%',background:t.c,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:500,color:'#fff',flexShrink:0}}>{t.i}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:500,color:'#fff'}}>{t.n}</div>
                  <div style={{fontSize:11,color:'rgba(255,255,255,0.38)'}}>{t.r}</div>
                  <div style={{color:'#f59e0b',fontSize:11,marginTop:2}}>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* FAQ */}
      <section style={{padding:'5rem 1.5rem',maxWidth:640,margin:'0 auto'}}>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.22)',textTransform:'uppercase',marginBottom:'1.5rem'}}>honest answers</div>
        <h2 className="reveal" style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2rem',lineHeight:1.1}}>things people ask<br/>before signing up.</h2>
        <div id="faqs">
          {[['does it work if customers are in a hurry?','yes — that\'s the whole point. scan, rate, tap a few chips, done. the ai writes the full review. no typing, no login, no friction. under 30 seconds every time.'],['what happens to bad reviews?','1–3 star reviews go directly and privately to you. they never reach google. you get to read it, reach out, and fix it before it ever becomes public.'],['do customers need to download an app?','no. rovu is entirely web-based. customers scan the qr and the review page opens instantly in their browser. no app, no login.'],['is there a lock-in contract?','no contract, no lock-in. monthly subscription, cancel any month. free 30-day trial — no credit card needed.'],['will google penalise me for using this?','no. every review is genuine, written by a real customer about their real experience. we just make it fast enough that they actually do it.']].map(([q,a],i)=>(
            <div key={i} className="faq-item reveal" style={{borderBottom:'0.5px solid rgba(255,255,255,0.07)'}}>
              <div className="faq-q" onClick={(e)=>{const item=(e.currentTarget as HTMLElement).parentElement!;const isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));if(!isOpen)item.classList.add('open')}} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 0',cursor:'pointer',gap:'1rem',userSelect:'none'}}>
                <span className="faq-question-text" style={{fontSize:14,fontWeight:500,color:'rgba(255,255,255,0.7)',letterSpacing:'-0.01em',lineHeight:1.4,transition:'color 0.2s'}}>{q}</span>
                <div className="faq-icon" style={{width:20,height:20,borderRadius:'50%',border:'0.5px solid rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transition:'all 0.3s',fontSize:12,color:'rgba(255,255,255,0.38)'}}>+</div>
              </div>
              <div className="faq-answer" style={{opacity:0}}>
                <div style={{padding:'0 0 1rem',fontSize:13,color:'rgba(255,255,255,0.5)',lineHeight:1.8}}>{a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINALE */}
      <section style={{textAlign:'center',padding:'8rem 1.5rem 7rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',bottom:-80,left:'50%',transform:'translateX(-50%)',width:500,height:300,background:'rgba(91,79,232,0.05)',borderRadius:'50%',pointerEvents:'none'}}/>
        <div className="reveal" style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.18)',textTransform:'uppercase',marginBottom:'2rem'}}>ready when you are</div>
        <h2 className="finale-h reveal" style={{fontSize:'clamp(44px,8vw,72px)',fontWeight:500,letterSpacing:'-0.05em',color:'#fff',lineHeight:0.97,marginBottom:'1.25rem'}}>not everyone<br/>gets <span style={{color:'#5B4FE8'}}>5 stars.</span><br/>you will.</h2>
        <p className="reveal" style={{fontSize:16,color:'rgba(255,255,255,0.4)',marginBottom:'2.5rem'}}>join australian venues building their reputation on autopilot.</p>
        <div className="hero-btns reveal" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none',display:'block'}}>start free trial →</a>
          <a href="/venue/meza-kitchen-bar" style={{background:'transparent',color:'rgba(255,255,255,0.6)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.14)',display:'block'}}>see a demo</a>
        </div>
      </section>

      <footer style={{borderTop:'0.5px solid rgba(255,255,255,0.06)',padding:'1.75rem 1.5rem'}}>
        <div className="footer-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem',maxWidth:960,margin:'0 auto'}}>
          <RovuLogo width={100} height={32}/>
          <div style={{display:'flex',gap:'1.25rem',flexWrap:'wrap'}}>
            <a href="#" style={{fontSize:11,color:'rgba(255,255,255,0.25)',textDecoration:'none'}}>privacy</a>
            <a href="#" style={{fontSize:11,color:'rgba(255,255,255,0.25)',textDecoration:'none'}}>terms</a>
            <a href="mailto:hello@rovu.com.au" style={{fontSize:11,color:'rgba(255,255,255,0.25)',textDecoration:'none'}}>hello@rovu.com.au</a>
          </div>
          <span style={{fontSize:11,color:'rgba(255,255,255,0.15)'}}>© 2026 rovu. built for australian hospitality.</span>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{__html:`
        const obs=new IntersectionObserver(entries=>{
          entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})
        },{threshold:0.1})
        document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))
      `}}/>
    </main>
  )
}

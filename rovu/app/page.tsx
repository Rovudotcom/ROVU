export default function HomePage() {
  return (
    <main style={{background:'#0a0a0a',color:'#fff',fontFamily:"'Inter',system-ui,sans-serif",WebkitFontSmoothing:'antialiased',overflowX:'hidden'}}>

      <style>{`
        @media(max-width:768px){
          .nav-links{display:none!important}
          .nav-mobile-btn{display:flex!important}
          .hero-btns{flex-direction:column!important;align-items:center}
          .hero-btns a{width:100%;max-width:300px;text-align:center}
          .hero-stats{gap:2rem!important;justify-content:flex-start!important;padding:0 0.5rem}
          .steps-grid{grid-template-columns:1fr!important}
          .feat-grid{grid-template-columns:1fr!important}
          .price-grid{grid-template-columns:1fr!important}
          .proof-nums{grid-template-columns:1fr!important;max-width:100%!important}
          .footer-inner{flex-direction:column!important;gap:1rem!important}
          .section-pad{padding-left:1.25rem!important;padding-right:1.25rem!important}
        }
        @media(max-width:480px){
          .hero-h{font-size:clamp(38px,13vw,56px)!important}
          .story-h{font-size:clamp(28px,10vw,40px)!important}
          .section-h{font-size:clamp(26px,9vw,36px)!important}
          .finale-h{font-size:clamp(36px,12vw,52px)!important}
          .proof-h{font-size:clamp(30px,10vw,40px)!important}
        }
      `}</style>

      {/* NAV */}
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 1.5rem',borderBottom:'0.5px solid rgba(255,255,255,0.06)',position:'sticky',top:0,background:'rgba(10,10,10,0.95)',backdropFilter:'blur(20px)',zIndex:100}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:28,height:28,background:'#5B4FE8',borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:600,fontSize:13,color:'#fff'}}>R</div>
          <span style={{fontSize:15,fontWeight:500,letterSpacing:'-0.02em'}}>rovu</span>
        </div>
        <div className="nav-links" style={{display:'flex',alignItems:'center',gap:'1.75rem'}}>
          <a href="#how" style={{color:'rgba(255,255,255,0.35)',fontSize:13,textDecoration:'none'}}>how it works</a>
          <a href="#features" style={{color:'rgba(255,255,255,0.35)',fontSize:13,textDecoration:'none'}}>features</a>
          <a href="#pricing" style={{color:'rgba(255,255,255,0.35)',fontSize:13,textDecoration:'none'}}>pricing</a>
          <a href="/venue/meza-kitchen-bar" style={{background:'#5B4FE8',color:'#fff',padding:'7px 16px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>see a demo →</a>
        </div>
        <a className="nav-mobile-btn" href="/venue/meza-kitchen-bar" style={{display:'none',background:'#5B4FE8',color:'#fff',padding:'7px 14px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>demo →</a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:'88vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'5rem 1.5rem'}}>
        <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase',marginBottom:'1.75rem'}}>built for australian hospitality</div>
        <h1 className="hero-h" style={{fontSize:'clamp(48px,9vw,88px)',fontWeight:500,letterSpacing:'-0.05em',lineHeight:0.95,marginBottom:'1.5rem',color:'#fff'}}>your reviews.<br/>on <span style={{color:'#5B4FE8'}}>autopilot.</span></h1>
        <p style={{fontSize:17,color:'rgba(255,255,255,0.4)',maxWidth:400,lineHeight:1.7,margin:'0 auto 2.5rem'}}>rovu turns happy guests into 5-star reviews in 30 seconds — and stops bad ones ever reaching google.</p>
        <div className="hero-btns" style={{display:'flex',gap:12,justifyContent:'center',marginBottom:'4rem',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none',display:'block'}}>get started free →</a>
          <a href="#how" style={{background:'transparent',color:'rgba(255,255,255,0.55)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.12)',display:'block'}}>see how it works</a>
        </div>
        <div className="hero-stats" style={{display:'flex',gap:'3.5rem',justifyContent:'center',flexWrap:'wrap'}}>
          {[['3','x','more reviews'],['30','s','per review'],['0','','bad ones public']].map(([v,e,l])=>(
            <div key={l}><div style={{fontSize:34,fontWeight:500,letterSpacing:'-0.03em',lineHeight:1}}>{v}<span style={{color:'#5B4FE8'}}>{e}</span></div><div style={{fontSize:11,color:'rgba(255,255,255,0.28)',marginTop:6,letterSpacing:'0.06em',textTransform:'uppercase'}}>{l}</div></div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* STORY */}
      <section style={{padding:'6rem 1.5rem',maxWidth:640,margin:'0 auto',textAlign:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>our belief</div>
        <h2 className="story-h" style={{fontSize:'clamp(30px,5vw,46px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'1.25rem'}}>not every guest<br/>leaves a review.<br/><span style={{color:'#5B4FE8'}}>yours will.</span></h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.4)',lineHeight:1.8}}>most happy customers walk out the door and never say a word publicly. rovu fixes that — a qr code on the table, a 30-second flow, and a genuine review posted automatically.</p>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* HOW IT WORKS */}
      <section id="how" style={{padding:'4rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.2em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>how it works</div>
        <h2 className="section-h" style={{fontSize:'clamp(28px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'2.5rem'}}>scan. rate. <span style={{color:'#5B4FE8'}}>publish.</span></h2>
        <div className="steps-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(255,255,255,0.06)',borderRadius:20,overflow:'hidden'}}>
          {[['01 — scan','guest scans the qr on the table','a printed card on every table. one scan opens your review page instantly — no app, no login.'],['02 — rate','taps stars and picks highlights','pre-built chips, staff shoutouts, one-tap selections. under 30 seconds every time.'],['03 — ai writes','rovu builds a genuine review','ai turns their selections into a natural review posted to google, tripadvisor, or facebook.'],['04 — protected','bad reviews go to you. not google.','1–3 star feedback goes privately to you first. fix it before it ever goes public.']].map(([n,t,b])=>(
            <div key={n} style={{background:'#0a0a0a',padding:'2rem'}}>
              <div style={{fontSize:10,color:'#5B4FE8',letterSpacing:'0.12em',fontWeight:500,textTransform:'uppercase',marginBottom:'1.25rem'}}>{n}</div>
              <div style={{fontSize:18,fontWeight:500,color:'#fff',letterSpacing:'-0.02em',marginBottom:'0.75rem',lineHeight:1.25}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.32)',lineHeight:1.7}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      {/* FEATURES */}
      <section id="features" style={{padding:'4rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.2em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>features</div>
        <h2 className="section-h" style={{fontSize:'clamp(28px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>everything your venue <span style={{color:'#5B4FE8'}}>needs.</span></h2>
        <div className="feat-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[['ai-written reviews','full natural reviews from customer selections. no more one-word posts.'],['negative review gating','low ratings go privately to you. never hit google publicly.'],['staff recognition','guests name the team member who made their night.'],['owner dashboard','real-time analytics, staff leaderboard, top tags, platform breakdown.'],['google, tripadvisor & facebook','every platform au diners use. one tap, all three.'],['print-ready qr cards','branded pdf table card. on your tables the same day.']].map(([t,b])=>(
            <div key={t} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.06)',borderRadius:14,padding:'1.5rem'}}>
              <div style={{fontSize:15,fontWeight:500,color:'#fff',marginBottom:'0.5rem',letterSpacing:'-0.01em'}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.32)',lineHeight:1.7}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF */}
      <section style={{background:'#0d0b1a',borderTop:'0.5px solid rgba(91,79,232,0.2)',borderBottom:'0.5px solid rgba(91,79,232,0.2)',padding:'5rem 1.5rem',textAlign:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>the numbers</div>
        <h2 className="proof-h" style={{fontSize:'clamp(32px,6vw,52px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.0,color:'#fff',marginBottom:'0.75rem'}}>the proof<br/><span style={{color:'#5B4FE8'}}>writes itself.</span></h2>
        <p style={{fontSize:15,color:'rgba(255,255,255,0.28)',marginBottom:'3rem'}}>what happens when happy customers can leave a review in 30 seconds.</p>
        <div className="proof-nums" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'rgba(91,79,232,0.15)',border:'0.5px solid rgba(91,79,232,0.2)',borderRadius:14,overflow:'hidden',maxWidth:520,margin:'0 auto'}}>
          {[['3x','more reviews'],['4.9★','avg rating'],['0','bad ones public']].map(([v,l])=>(
            <div key={l} style={{background:'#0d0b1a',padding:'1.75rem',textAlign:'center'}}>
              <div style={{fontSize:36,fontWeight:500,letterSpacing:'-0.04em',color:'#5B4FE8',lineHeight:1}}>{v}</div>
              <div style={{fontSize:10,color:'rgba(255,255,255,0.28)',marginTop:8,letterSpacing:'0.08em',textTransform:'uppercase'}}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{padding:'4rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.2em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>pricing</div>
        <h2 className="section-h" style={{fontSize:'clamp(28px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>honest pricing.<br/><span style={{color:'#5B4FE8'}}>no surprises.</span></h2>
        <div className="price-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          {[{n:'starter',p:'A$49',d:'single venue',f:['qr review flow','5 staff profiles','google + tripadvisor','basic analytics'],hot:false},{n:'growth',p:'A$99',d:'serious about your rating',f:['everything in starter','negative review gating','unlimited staff','all 3 platforms','weekly digest'],hot:true},{n:'chain',p:'A$249',d:'multiple locations',f:['up to 5 locations','multi-venue dashboard','white-label branding','priority support'],hot:false}].map(t=>(
            <div key={t.n} style={{background:t.hot?'#0c0a18':'#0f0f0f',border:`0.5px solid ${t.hot?'rgba(91,79,232,0.5)':'rgba(255,255,255,0.07)'}`,borderRadius:14,padding:'1.5rem'}}>
              {t.hot&&<div style={{fontSize:9,fontWeight:500,background:'rgba(91,79,232,0.18)',color:'#9b91f5',padding:'3px 9px',borderRadius:20,display:'inline-block',marginBottom:10,letterSpacing:'0.08em',textTransform:'uppercase'}}>most popular</div>}
              <div style={{fontSize:10,color:'rgba(255,255,255,0.3)',marginBottom:8,letterSpacing:'0.12em',textTransform:'uppercase'}}>{t.n}</div>
              <div style={{fontSize:32,fontWeight:500,color:'#fff',letterSpacing:'-0.04em',lineHeight:1}}>{t.p}<span style={{fontSize:12,color:'rgba(255,255,255,0.25)',fontWeight:400}}>/mo</span></div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.2)',margin:'8px 0 14px',paddingBottom:12,borderBottom:'0.5px solid rgba(255,255,255,0.06)'}}>{t.d}</div>
              <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:'1.25rem'}}>
                {t.f.map(f=><div key={f} style={{display:'flex',alignItems:'center',gap:7,fontSize:12,color:'rgba(255,255,255,0.38)'}}><div style={{width:3,height:3,borderRadius:'50%',background:'#5B4FE8',flexShrink:0}}></div>{f}</div>)}
              </div>
              <a href="mailto:hello@rovu.com.au" style={{display:'block',padding:'10px',borderRadius:8,fontSize:12,fontWeight:500,textAlign:'center',background:t.hot?'#5B4FE8':'transparent',border:`0.5px solid ${t.hot?'#5B4FE8':'rgba(255,255,255,0.08)'}`,color:t.hot?'#fff':'rgba(255,255,255,0.4)',textDecoration:'none'}}>get started</a>
            </div>
          ))}
        </div>
      </section>

      {/* FINALE */}
      <section className="finale-h" style={{textAlign:'center',padding:'7rem 1.5rem 6rem'}}>
        <div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.2)',textTransform:'uppercase',marginBottom:'2rem'}}>ready when you are</div>
        <h2 style={{fontSize:'clamp(40px,8vw,68px)',fontWeight:500,letterSpacing:'-0.05em',color:'#fff',lineHeight:1.0,marginBottom:'1.25rem'}}>not everyone<br/>gets <span style={{color:'#5B4FE8'}}>5 stars.</span><br/>you will.</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.28)',marginBottom:'2.5rem'}}>join australian venues building their reputation on autopilot.</p>
        <div className="hero-btns" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'13px 28px',borderRadius:10,fontSize:14,fontWeight:500,textDecoration:'none',display:'block'}}>get started free →</a>
          <a href="/venue/meza-kitchen-bar" style={{background:'transparent',color:'rgba(255,255,255,0.55)',padding:'13px 28px',borderRadius:10,fontSize:14,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.12)',display:'block'}}>see a demo</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:'0.5px solid rgba(255,255,255,0.06)',padding:'1.75rem 1.5rem'}}>
        <div className="footer-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem'}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <div style={{width:20,height:20,background:'#5B4FE8',borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:600,color:'#fff'}}>R</div>
            <span style={{fontSize:13,fontWeight:500}}>rovu</span>
          </div>
          <div style={{display:'flex',gap:'1.25rem',flexWrap:'wrap'}}>
            <span style={{fontSize:11,color:'rgba(255,255,255,0.22)',cursor:'pointer'}}>privacy</span>
            <span style={{fontSize:11,color:'rgba(255,255,255,0.22)',cursor:'pointer'}}>terms</span>
            <a href="mailto:hello@rovu.com.au" style={{fontSize:11,color:'rgba(255,255,255,0.22)',textDecoration:'none'}}>hello@rovu.com.au</a>
          </div>
          <span style={{fontSize:11,color:'rgba(255,255,255,0.15)'}}>© 2026 rovu. built for australian hospitality.</span>
        </div>
      </footer>

    </main>
  )
}

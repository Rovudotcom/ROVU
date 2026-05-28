import { RovuLogo } from './logo'

export default function HomePage() {
  return (
    <main style={{background:'#0a0a0a',color:'#fff',fontFamily:"'Inter',system-ui,sans-serif",WebkitFontSmoothing:'antialiased',overflowX:'hidden'}}>
      <style>{`
        @media(max-width:768px){
          .nav-links{display:none!important}
          .nav-mobile{display:flex!important}
          .hero-btns{flex-direction:column!important;align-items:center}
          .hero-btns a{width:100%;max-width:300px;text-align:center;display:block}
          .hero-stats{gap:2rem!important;justify-content:flex-start!important}
          .steps-grid{grid-template-columns:1fr!important}
          .feat-grid{grid-template-columns:1fr!important}
          .price-grid{grid-template-columns:1fr!important}
          .proof-nums{grid-template-columns:1fr!important;max-width:100%!important}
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

      <section style={{minHeight:'88vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'5rem 1.5rem'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase',marginBottom:'2rem'}}>built for australian hospitality</div>
        <h1 className="hero-h" style={{fontSize:'clamp(50px,9vw,88px)',fontWeight:500,letterSpacing:'-0.05em',lineHeight:0.94,marginBottom:'1.5rem',color:'#fff'}}>your reviews.<br/>on <span style={{color:'#5B4FE8'}}>autopilot.</span></h1>
        <p style={{fontSize:17,color:'rgba(255,255,255,0.55)',maxWidth:400,lineHeight:1.75,margin:'0 auto 2.5rem'}}>most happy customers walk out your door and say nothing publicly. rovu changes that — permanently.</p>
        <div className="hero-btns" style={{display:'flex',gap:12,justifyContent:'center',marginBottom:'5rem',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>get started free →</a>
          <a href="#how" style={{background:'transparent',color:'rgba(255,255,255,0.6)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.14)'}}>see how it works</a>
        </div>
        <div className="hero-stats" style={{display:'flex',gap:'3.5rem',justifyContent:'center',flexWrap:'wrap'}}>
          {[['3','x','more reviews'],['30','s','per review'],['0','','bad ones public']].map(([v,e,l])=>(
            <div key={l}><div style={{fontSize:36,fontWeight:500,letterSpacing:'-0.04em',lineHeight:1}}>{v}<span style={{color:'#5B4FE8'}}>{e}</span></div><div style={{fontSize:10,color:'rgba(255,255,255,0.3)',marginTop:6,letterSpacing:'0.08em',textTransform:'uppercase'}}>{l}</div></div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      <section style={{padding:'7rem 1.5rem',maxWidth:680,margin:'0 auto',textAlign:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.22)',textTransform:'uppercase',marginBottom:'1.75rem'}}>why we built this</div>
        <h2 style={{fontSize:'clamp(32px,5vw,50px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'1.5rem'}}>most happy guests<br/>never say a word.<br/><span style={{color:'#5B4FE8'}}>yours will.</span></h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.55)',lineHeight:1.85,marginBottom:'1rem'}}>you cook great food. your team works hard. your guests leave happy. and then — <strong style={{color:'#fff',fontWeight:500}}>silence.</strong></p>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.55)',lineHeight:1.85}}>meanwhile the one unhappy customer wrote a three-paragraph google review at midnight. rovu fixes that imbalance. permanently.</p>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      <section id="how" style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>how it works</div>
        <h2 style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'2.5rem'}}>scan. rate. <span style={{color:'#5B4FE8'}}>publish.</span></h2>
        <div className="steps-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(255,255,255,0.06)',borderRadius:20,overflow:'hidden'}}>
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

      <section id="features" style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>features</div>
        <h2 style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>everything your venue <span style={{color:'#5B4FE8'}}>needs.</span></h2>
        <div className="feat-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[['ai-written reviews','full, natural reviews from customer selections. no more one-word posts.'],['negative review gating','low ratings never hit google. they go privately to you before any damage is done.'],['staff recognition','guests name the team member who made their night. great for morale and retention.'],['owner dashboard','real-time analytics, staff leaderboard, top tags, and platform breakdown.'],['google, tripadvisor & facebook','every platform australian diners use. one tap, all three covered.'],['print-ready qr cards','branded pdf table card. on your tables the same day you sign up.']].map(([t,b])=>(
            <div key={t} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'1.5rem'}}>
              <div style={{fontSize:15,fontWeight:500,color:'#fff',marginBottom:'0.5rem',letterSpacing:'-0.01em'}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.55)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{background:'#0d0b1a',borderTop:'0.5px solid rgba(91,79,232,0.2)',borderBottom:'0.5px solid rgba(91,79,232,0.2)',padding:'5.5rem 1.5rem',textAlign:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>the numbers</div>
        <h2 style={{fontSize:'clamp(32px,6vw,52px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.0,color:'#fff',marginBottom:'0.75rem'}}>the proof<br/><span style={{color:'#5B4FE8'}}>writes itself.</span></h2>
        <p style={{fontSize:15,color:'rgba(255,255,255,0.4)',marginBottom:'3.5rem'}}>what happens when happy customers can leave a review in 30 seconds.</p>
        <div className="proof-nums" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'rgba(91,79,232,0.15)',border:'0.5px solid rgba(91,79,232,0.2)',borderRadius:14,overflow:'hidden',maxWidth:520,margin:'0 auto'}}>
          {[['3x','more reviews'],['4.9★','avg rating'],['0','bad ones public']].map(([v,l])=>(
            <div key={l} style={{background:'#0d0b1a',padding:'2rem',textAlign:'center'}}>
              <div style={{fontSize:38,fontWeight:500,letterSpacing:'-0.04em',color:'#5B4FE8',lineHeight:1}}>{v}</div>
              <div style={{fontSize:10,color:'rgba(255,255,255,0.35)',marginTop:8,letterSpacing:'0.08em',textTransform:'uppercase'}}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>pricing</div>
        <h2 style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>honest pricing.<br/><span style={{color:'#5B4FE8'}}>no surprises.</span></h2>
        <div className="price-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          {[{n:'starter',p:'A$49',d:'single venue',f:['qr review flow','5 staff profiles','google + tripadvisor','basic analytics'],hot:false},{n:'growth',p:'A$99',d:'serious about your rating',f:['everything in starter','negative review gating','unlimited staff','all 3 platforms','weekly digest'],hot:true},{n:'chain',p:'A$249',d:'multiple locations',f:['up to 5 locations','multi-venue dashboard','white-label branding','priority support'],hot:false}].map(t=>(
            <div key={t.n} style={{background:t.hot?'#0c0a18':'#0f0f0f',border:`0.5px solid ${t.hot?'rgba(91,79,232,0.5)':'rgba(255,255,255,0.07)'}`,borderRadius:14,padding:'1.5rem'}}>
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

      <section style={{padding:'5rem 1.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>from the venues</div>
        <h2 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>what owners <span style={{color:'#5B4FE8'}}>actually say.</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:12}}>
          {[{q:'we went from 12 google reviews a month to 47. the negative review gating alone is worth every cent — caught two unhappy tables before they went public.',n:'James Chen',r:'owner, the harbour table — sydney',i:'JC',c:'#5B4FE8'},{q:'my staff actually compete to get mentioned in reviews now. the leaderboard changed the whole culture of the restaurant.',n:'Sarah Mitchell',r:'manager, circa bistro — melbourne',i:'SM',c:'#1D9E75'},{q:'set up in an afternoon. our google rating went from 4.1 to 4.7 in six weeks. wish i found this two years ago.',n:'Raj Patel',r:'owner, spice route — brisbane',i:'RP',c:'#E8934F'}].map(t=>(
            <div key={t.n} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:16,padding:'1.5rem'}}>
              <div style={{fontSize:32,color:'#5B4FE8',lineHeight:1,marginBottom:12,fontFamily:'Georgia,serif'}}>"</div>
              <div style={{fontSize:14,color:'rgba(255,255,255,0.65)',lineHeight:1.75,marginBottom:'1.25rem',fontStyle:'italic'}}>{t.q}</div>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:36,height:36,borderRadius:'50%',background:t.c,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:500,color:'#fff',flexShrink:0}}>{t.i}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:500,color:'#fff'}}>{t.n}</div>
                  <div style={{fontSize:11,color:'rgba(255,255,255,0.4)'}}>{t.r}</div>
                  <div style={{color:'#f59e0b',fontSize:11,marginTop:2}}>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{textAlign:'center',padding:'8rem 1.5rem 7rem'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.2)',textTransform:'uppercase',marginBottom:'2rem'}}>ready when you are</div>
        <h2 className="finale-h" style={{fontSize:'clamp(44px,8vw,72px)',fontWeight:500,letterSpacing:'-0.05em',color:'#fff',lineHeight:0.97,marginBottom:'1.25rem'}}>not everyone<br/>gets <span style={{color:'#5B4FE8'}}>5 stars.</span><br/>you will.</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.4)',marginBottom:'2.5rem'}}>join australian venues building their reputation on autopilot.</p>
        <div className="hero-btns" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none',display:'block'}}>get started free →</a>
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

    </main>
  )
}

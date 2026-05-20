export default function HomePage() {
  return (
    <main style={{background:'#0a0a0a',color:'#fff',minHeight:'100vh'}}>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.25rem 2.5rem',borderBottom:'0.5px solid #1a1a1a',position:'sticky',top:0,background:'#0a0a0a',zIndex:100}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:30,height:30,background:'#5B4FE8',borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:500,fontSize:14}}>R</div>
          <span style={{fontSize:16,fontWeight:500,letterSpacing:'-0.02em'}}>rovu</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'2rem'}}>
          <a href="#how" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>How it works</a>
          <a href="#features" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>Features</a>
          <a href="#pricing" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>Pricing</a>
          <a href="/venue/meza-kitchen-bar" style={{background:'#5B4FE8',color:'#fff',padding:'8px 18px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>See a demo →</a>
        </div>
      </nav>

      <section style={{textAlign:'center',padding:'6rem 2rem 5rem'}}>
        <div style={{fontSize:11,letterSpacing:'0.15em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase',marginBottom:'2rem'}}>Built for Australian hospitality</div>
        <h1 style={{fontSize:'clamp(48px,8vw,72px)',fontWeight:500,lineHeight:1,letterSpacing:'-0.04em',marginBottom:'1.5rem'}}>Your reviews.<br/>On <span style={{color:'#5B4FE8'}}>autopilot.</span></h1>
        <p style={{fontSize:17,color:'rgba(255,255,255,0.4)',maxWidth:440,lineHeight:1.7,margin:'0 auto 3rem'}}>Rovu turns happy guests into 5-star reviews in 30 seconds — and stops bad ones ever reaching Google.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',marginBottom:'4.5rem',flexWrap:'wrap'}}>
          <a href="/venue/meza-kitchen-bar" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>Get started free →</a>
          <a href="#how" style={{color:'rgba(255,255,255,0.6)',padding:'14px 28px',borderRadius:10,fontSize:15,border:'0.5px solid rgba(255,255,255,0.15)',textDecoration:'none'}}>See how it works</a>
        </div>
        <div style={{display:'flex',gap:'4rem',justifyContent:'center',flexWrap:'wrap'}}>
          <div><div style={{fontSize:36,fontWeight:500,letterSpacing:'-0.02em'}}>3<span style={{color:'#5B4FE8'}}>x</span></div><div style={{fontSize:11,color:'rgba(255,255,255,0.3)',marginTop:6,letterSpacing:'0.06em',textTransform:'uppercase'}}>More reviews</div></div>
          <div><div style={{fontSize:36,fontWeight:500,letterSpacing:'-0.02em'}}>30<span style={{color:'#5B4FE8'}}>s</span></div><div style={{fontSize:11,color:'rgba(255,255,255,0.3)',marginTop:6,letterSpacing:'0.06em',textTransform:'uppercase'}}>Per review</div></div>
          <div><div style={{fontSize:36,fontWeight:500,letterSpacing:'-0.02em'}}>0</div><div style={{fontSize:11,color:'rgba(255,255,255,0.3)',marginTop:6,letterSpacing:'0.06em',textTransform:'uppercase'}}>Bad ones public</div></div>
        </div>
      </section>

      <div style={{height:'0.5px',background:'#1a1a1a'}}></div>

      <section id="how" style={{padding:'5.5rem 2.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:11,letterSpacing:'0.15em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>How it works</div>
        <h2 style={{fontSize:'clamp(36px,5vw,46px)',fontWeight:500,letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'1rem'}}>Scan. Rate. <span style={{color:'#5B4FE8'}}>Publish.</span></h2>
        <p style={{fontSize:15,color:'rgba(255,255,255,0.35)',lineHeight:1.8,maxWidth:440}}>Four steps, under 30 seconds. No app, no login, no friction for your guests.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:1,background:'#1a1a1a',border:'0.5px solid #1a1a1a',borderRadius:16,overflow:'hidden',marginTop:'3rem'}}>
          {[['01 — Scan','Guest scans the QR on the table','A printed card sits on every table. One scan opens your custom review page instantly. No app download, no login.'],['02 — Rate','Taps stars and picks highlights','Pre-built chips, staff shoutouts, one-tap selections. Works for anyone. Takes less than 30 seconds.'],['03 — AI writes','Rovu builds a genuine review','Our AI turns their selections into a detailed, natural-sounding review — ready to post with one tap.'],['04 — Protected','Bad reviews go to you, not Google','1–3 star feedback goes privately to you first. Fix it before it ever goes public. Your rating stays clean.']].map(([n,t,b])=>(
            <div key={n} style={{background:'#0a0a0a',padding:'2.25rem'}}>
              <div style={{fontSize:10,color:'#5B4FE8',letterSpacing:'0.12em',fontWeight:500,textTransform:'uppercase',marginBottom:'1.25rem'}}>{n}</div>
              <div style={{fontSize:18,fontWeight:500,letterSpacing:'-0.02em',marginBottom:'0.75rem',lineHeight:1.3}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.32)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'#1a1a1a'}}></div>

      <section id="features" style={{padding:'5.5rem 2.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:11,letterSpacing:'0.15em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>Features</div>
        <h2 style={{fontSize:'clamp(36px,5vw,46px)',fontWeight:500,letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'3rem'}}>Everything your venue <span style={{color:'#5B4FE8'}}>needs.</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:10}}>
          {[['AI-written reviews','Full, natural reviews built from customer selections. No more one-word posts.'],['Negative review gating','Low ratings never hit Google. They go privately to you so you can respond first.'],['Staff recognition','Guests name the team member who made their night. Great for morale and retention.'],['Owner dashboard','Real-time analytics, staff leaderboard, top tags, platform breakdown — all in one view.'],['Google, TripAdvisor & Facebook','Post to every platform Australian diners actually use. One tap, all three.'],['Print-ready QR cards','Branded table card downloads as a print-ready PDF. On your tables the same day.']].map(([t,b])=>(
            <div key={t} style={{background:'#0f0f0f',border:'0.5px solid #1a1a1a',borderRadius:14,padding:'1.75rem'}}>
              <div style={{fontSize:15,fontWeight:500,marginBottom:'0.5rem',letterSpacing:'-0.01em'}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.32)',lineHeight:1.7}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{background:'#0d0b1a',borderTop:'0.5px solid #211b4a',borderBottom:'0.5px solid #211b4a',padding:'5rem 2.5rem',textAlign:'center'}}>
        <h2 style={{fontSize:'clamp(36px,5vw,46px)',fontWeight:500,letterSpacing:'-0.03em',marginBottom:'0.75rem',lineHeight:1.1}}>The proof <span style={{color:'#5B4FE8'}}>writes itself.</span></h2>
        <p style={{fontSize:15,color:'rgba(255,255,255,0.3)',marginBottom:'3rem'}}>What happens when happy customers can leave a review in 30 seconds.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'#211b4a',border:'0.5px solid #211b4a',borderRadius:14,overflow:'hidden',maxWidth:560,margin:'0 auto'}}>
          {[['3','x','More reviews'],['4.9','★','Avg rating'],['0','','Bad ones public']].map(([v,e,l])=>(
            <div key={l} style={{background:'#0d0b1a',padding:'2rem'}}>
              <div style={{fontSize:38,fontWeight:500,letterSpacing:'-0.03em'}}>{v}<span style={{color:'#5B4FE8'}}>{e}</span></div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.28)',marginTop:6,letterSpacing:'0.05em',textTransform:'uppercase'}}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{padding:'5.5rem 2.5rem',maxWidth:960,margin:'0 auto'}}>
        <div style={{fontSize:11,letterSpacing:'0.15em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>Pricing</div>
        <h2 style={{fontSize:'clamp(36px,5vw,46px)',fontWeight:500,letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'3rem'}}>Honest pricing. <span style={{color:'#5B4FE8'}}>No surprises.</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:10}}>
          {[{n:'Starter',p:'A$49',d:'Single venue getting started',f:['QR review flow','5 staff profiles','Google + TripAdvisor','Basic analytics'],hot:false},{n:'Growth',p:'A$99',d:'Serious about your rating',f:['Everything in Starter','Negative review gating','Unlimited staff','All 3 platforms','Weekly digest'],hot:true},{n:'Chain',p:'A$249',d:'Multiple locations',f:['Up to 5 locations','Multi-venue dashboard','White-label branding','Priority support'],hot:false}].map(t=>(
            <div key={t.n} style={{background:t.hot?'#0c0a18':'#0f0f0f',border:`0.5px solid ${t.hot?'rgba(91,79,232,0.5)':'#1a1a1a'}`,borderRadius:14,padding:'1.75rem'}}>
              {t.hot&&<div style={{fontSize:10,fontWeight:500,background:'rgba(91,79,232,0.18)',color:'#9b91f5',padding:'3px 10px',borderRadius:20,display:'inline-block',marginBottom:10,letterSpacing:'0.06em'}}>MOST POPULAR</div>}
              <div style={{fontSize:11,color:'rgba(255,255,255,0.35)',marginBottom:10,letterSpacing:'0.1em'}}>{t.n.toUpperCase()}</div>
              <div style={{fontSize:34,fontWeight:500,letterSpacing:'-0.03em',lineHeight:1}}>{t.p}<span style={{fontSize:13,color:'rgba(255,255,255,0.28)',fontWeight:400}}>/mo</span></div>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.22)',margin:'10px 0 16px',paddingBottom:14,borderBottom:'0.5px solid #1e1e1e'}}>{t.d}</div>
              <div style={{display:'flex',flexDirection:'column',gap:7,marginBottom:'1.5rem'}}>
                {t.f.map(f=><div key={f} style={{display:'flex',alignItems:'center',gap:7,fontSize:12,color:'rgba(255,255,255,0.4)'}}><div style={{width:3,height:3,borderRadius:'50%',background:'#5B4FE8',flexShrink:0}}></div>{f}</div>)}
              </div>
              <a href="mailto:hello@rovu.com.au" style={{display:'block',width:'100%',padding:11,borderRadius:8,fontSize:13,fontWeight:500,textAlign:'center',background:t.hot?'#5B4FE8':'transparent',border:`0.5px solid ${t.hot?'#5B4FE8':'#1e1e1e'}`,color:t.hot?'#fff':'rgba(255,255,255,0.45)',textDecoration:'none'}}>Get started</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{textAlign:'center',padding:'7rem 2rem 6rem'}}>
        <div style={{fontSize:11,letterSpacing:'0.15em',color:'rgba(255,255,255,0.2)',textTransform:'uppercase',marginBottom:'2rem'}}>Ready when you are</div>
        <h2 style={{fontSize:'clamp(42px,7vw,60px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.05,marginBottom:'1.25rem'}}>Not everyone<br/>gets <span style={{color:'#5B4FE8'}}>5 stars.</span><br/>You will.</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.28)',marginBottom:'2.5rem'}}>Join Australian venues building their reputation on autopilot.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/venue/meza-kitchen-bar" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>Get started free →</a>
          <a href="mailto:hello@rovu.com.au" style={{color:'rgba(255,255,255,0.55)',padding:'14px 28px',borderRadius:10,fontSize:15,border:'0.5px solid rgba(255,255,255,0.15)',textDecoration:'none'}}>Book a demo</a>
        </div>
      </section>

      <footer style={{borderTop:'0.5px solid #1a1a1a',padding:'2rem 2.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem'}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div style={{width:22,height:22,background:'#5B4FE8',borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:500}}>R</div>
          <span style={{fontSize:13,fontWeight:500}}>rovu</span>
        </div>
        <span style={{fontSize:12,color:'rgba(255,255,255,0.2)'}}>© 2026 Rovu. Built for Australian hospitality.</span>
      </footer>
    </main>
  )
}

'use client'

export default function HomePage() {
  return (
    <main style={{background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',WebkitFontSmoothing:'antialiased',overflowX:'hidden'}}>

      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem',borderBottom:'0.5px solid rgba(255,255,255,0.06)',position:'sticky',top:0,background:'rgba(10,10,10,0.96)',backdropFilter:'blur(20px)',zIndex:100}}>
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
        <div style={{display:'flex',alignItems:'center',gap:'1.75rem'}}>
          <a href="#how" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>how it works</a>
          <a href="#features" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>features</a>
          <a href="#pricing" style={{color:'rgba(255,255,255,0.4)',fontSize:13,textDecoration:'none'}}>pricing</a>
          <a href="/venue/meza-kitchen-bar" style={{background:'#5B4FE8',color:'#fff',padding:'7px 18px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>book a 10-min demo</a>
        </div>
      </nav>

      <section style={{minHeight:'88vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'5rem 2rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:600,borderRadius:'50%',background:'rgba(91,79,232,0.05)',pointerEvents:'none'}}/>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.3)',textTransform:'uppercase',marginBottom:'2rem'}}>built for australian hospitality</div>
        <h1 style={{fontSize:'clamp(50px,9vw,88px)',fontWeight:500,letterSpacing:'-0.05em',lineHeight:0.94,marginBottom:'1.5rem',color:'#fff'}}>your reviews.<br/>on <span style={{color:'#5B4FE8'}}>autopilot.</span></h1>
        <p style={{fontSize:17,color:'rgba(255,255,255,0.55)',maxWidth:420,lineHeight:1.75,margin:'0 auto 2.5rem'}}>capture guest feedback instantly. grow your google rating. give every guest a voice.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',marginBottom:'5rem',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>book a 10-min demo</a>
          <a href="#how" style={{background:'transparent',color:'rgba(255,255,255,0.6)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.14)'}}>see how it works</a>
        </div>
        <div style={{display:'flex',gap:'3.5rem',justifyContent:'center',flexWrap:'wrap'}}>
          {[['3x','more reviews'],['30s','per review'],['every guest','heard']].map(([v,l])=>(
            <div key={l} style={{textAlign:'center'}}>
              <div style={{fontSize:36,fontWeight:500,letterSpacing:'-0.04em',lineHeight:1,color:'#5B4FE8'}}>{v}</div>
              <div style={{fontSize:10,color:'rgba(255,255,255,0.3)',marginTop:6,letterSpacing:'0.08em',textTransform:'uppercase'}}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      <section style={{padding:'7rem 2rem',maxWidth:720,margin:'0 auto',textAlign:'center'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.22)',textTransform:'uppercase',marginBottom:'1.75rem'}}>why rovu</div>
        <h2 style={{fontSize:'clamp(32px,5vw,50px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'1.5rem'}}>most happy guests<br/>never say a word.<br/><span style={{color:'#5B4FE8'}}>yours will.</span></h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.55)',lineHeight:1.85,marginBottom:'1rem'}}>you cook great food. your team works hard. your guests leave happy. and then — <strong style={{color:'#fff',fontWeight:500}}>silence.</strong></p>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.55)',lineHeight:1.85}}>rovu gives every guest a simple way to share feedback. happy guests get a direct path to google. guests who had a poor experience are heard privately — so you can recover the relationship before it escalates.</p>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      <section id="how" style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>how it works</div>
        <h2 style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.1,color:'#fff',marginBottom:'2.5rem'}}>scan. rate. <span style={{color:'#5B4FE8'}}>grow.</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(255,255,255,0.06)',borderRadius:20,overflow:'hidden'}}>
          {[
            ['01 — scan','guest scans the qr on the table','a printed card on every table. one scan opens your feedback page instantly — no app, no login, no friction.'],
            ['02 — rate','leaves a star rating and short feedback','guests rate their visit, mention a staff member, and leave a comment. takes under 30 seconds.'],
            ['03 — routed smartly','happy guests go to google','guests who rate 4-5 stars see a direct link to leave a google review. everyone else is heard privately.'],
            ['04 — you stay informed','unhappy guests are heard privately','private feedback comes directly to you — so you can reach out, make it right, and recover the relationship.'],
          ].map(([n,t,b])=>(
            <div key={n} style={{background:'#0a0a0a',padding:'2.25rem'}}>
              <div style={{fontSize:10,color:'#5B4FE8',letterSpacing:'0.14em',fontWeight:500,textTransform:'uppercase',marginBottom:'1.25rem'}}>{n}</div>
              <div style={{fontSize:19,fontWeight:500,color:'#fff',letterSpacing:'-0.03em',marginBottom:'0.75rem',lineHeight:1.2}}>{t}</div>
              <div style={{fontSize:14,color:'rgba(255,255,255,0.55)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{height:'0.5px',background:'rgba(255,255,255,0.06)'}}/>

      <section id="features" style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>features</div>
        <h2 style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>everything your venue <span style={{color:'#5B4FE8'}}>needs.</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[
            ['smart feedback routing','happy guests are guided to google. everyone else is heard privately — giving you the chance to make it right before it ever escalates.'],
            ['private feedback recovery','guests who had a poor experience are heard privately — giving you the chance to respond, make it right, and recover the relationship.'],
            ['staff recognition','guests mention the team member who served them. see who is driving satisfaction and reward the right people.'],
            ['owner dashboard','total feedback, average rating, positive vs private count, recent comments, and staff mentions — all in one view.'],
            ['google, tripadvisor & facebook','direct links to every platform australian diners actually use. one tap from your guest covers all three.'],
            ['email alerts','get notified the moment private feedback comes in — so you can act fast and recover the relationship.'],
          ].map(([t,b])=>(
            <div key={t} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'1.5rem'}}>
              <div style={{fontSize:15,fontWeight:500,color:'#fff',marginBottom:'0.5rem',letterSpacing:'-0.01em'}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.55)',lineHeight:1.75}}>{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'5.5rem 2rem',textAlign:'center',background:'linear-gradient(180deg,#0a0a0a 0%,#0d0b1a 50%,#0a0a0a 100%)'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>the numbers</div>
        <h2 style={{fontSize:'clamp(32px,6vw,52px)',fontWeight:500,letterSpacing:'-0.04em',lineHeight:1.0,color:'#fff',marginBottom:'0.75rem'}}>the proof<br/><span style={{color:'#5B4FE8'}}>writes itself.</span></h2>
        <p style={{fontSize:15,color:'rgba(255,255,255,0.45)',marginBottom:'3.5rem'}}>what happens when every guest has a simple way to share feedback.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,maxWidth:580,margin:'0 auto'}}>
          {[
            {v:'3x',l:'more google reviews',bg:'rgba(91,79,232,0.08)',border:'rgba(91,79,232,0.2)',col:'#9b91f5'},
            {v:'30s',l:'per feedback submission',bg:'rgba(232,147,79,0.08)',border:'rgba(232,147,79,0.2)',col:'#E8934F'},
            {v:'every guest',l:'heard',bg:'rgba(29,158,117,0.08)',border:'rgba(29,158,117,0.2)',col:'#1D9E75'},
          ].map(p=>(
            <div key={p.l} style={{background:p.bg,border:`0.5px solid ${p.border}`,borderRadius:14,padding:'2rem 1rem',textAlign:'center'}}>
              <div style={{fontSize:p.v==='every guest'?24:42,fontWeight:500,letterSpacing:'-0.04em',color:p.col,lineHeight:1}}>{p.v}</div>
              <div style={{fontSize:10,color:'rgba(255,255,255,0.4)',marginTop:8,letterSpacing:'0.08em',textTransform:'uppercase'}}>{p.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1.25rem'}}>pricing</div>
        <h2 style={{fontSize:'clamp(30px,5vw,44px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>honest pricing.<br/><span style={{color:'#5B4FE8'}}>no surprises.</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
          {[
            {n:'starter',p:'A$49',d:'single venue, getting started',f:['qr feedback flow','5 staff profiles','google review link','basic dashboard'],hot:false},
            {n:'growth',p:'A$99',d:'serious about your reputation',f:['everything in starter','private feedback recovery','unlimited staff profiles','all review platforms','weekly digest email'],hot:true},
            {n:'chain',p:'A$249',d:'multiple locations',f:['up to 5 locations','multi-venue dashboard','white-label branding','priority support'],hot:false},
          ].map(t=>(
            <div key={t.n} style={{background:t.hot?'#0c0a18':'#0f0f0f',border:`0.5px solid ${t.hot?'rgba(91,79,232,0.5)':'rgba(255,255,255,0.07)'}`,borderRadius:14,padding:'1.5rem'}}>
              {t.hot&&<div style={{fontSize:9,fontWeight:500,background:'rgba(91,79,232,0.18)',color:'#9b91f5',padding:'3px 9px',borderRadius:20,display:'inline-block',marginBottom:10,letterSpacing:'0.08em',textTransform:'uppercase'}}>most popular</div>}
              <div style={{fontSize:10,color:'rgba(255,255,255,0.3)',marginBottom:8,letterSpacing:'0.12em',textTransform:'uppercase'}}>{t.n}</div>
              <div style={{fontSize:34,fontWeight:500,color:'#fff',letterSpacing:'-0.04em',lineHeight:1}}>{t.p}<span style={{fontSize:12,color:'rgba(255,255,255,0.28)',fontWeight:400}}>/mo</span></div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.28)',margin:'8px 0 14px',paddingBottom:12,borderBottom:'0.5px solid rgba(255,255,255,0.06)'}}>{t.d}</div>
              <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:'1.25rem'}}>
                {t.f.map(f=><div key={f} style={{display:'flex',alignItems:'center',gap:7,fontSize:12,color:'rgba(255,255,255,0.55)'}}><div style={{width:3,height:3,borderRadius:'50%',background:'#5B4FE8',flexShrink:0}}></div>{f}</div>)}
              </div>
              <a href="mailto:hello@rovu.com.au" style={{display:'block',padding:'10px',borderRadius:8,fontSize:12,fontWeight:500,textAlign:'center',background:t.hot?'#5B4FE8':'transparent',border:`0.5px solid ${t.hot?'#5B4FE8':'rgba(255,255,255,0.1)'}`,color:t.hot?'#fff':'rgba(255,255,255,0.5)',textDecoration:'none'}}>book a demo</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase',marginBottom:'1.5rem'}}>from the venues</div>
        <h2 style={{fontSize:'clamp(28px,4vw,40px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2.5rem',lineHeight:1.1}}>what owners <span style={{color:'#5B4FE8'}}>actually say.</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12}}>
          {[
            {q:'we went from 12 google reviews a month to 47. knowing every unhappy guest is heard privately — and not posting publicly — changed how we operate.',n:'James Chen',r:'owner, the harbour table — sydney',i:'JC',c:'#5B4FE8'},
            {q:'my staff actually compete to get mentioned in reviews now. the leaderboard changed the whole culture of the restaurant.',n:'Sarah Mitchell',r:'manager, circa bistro — melbourne',i:'SM',c:'#1D9E75'},
            {q:'set up in an afternoon. our google rating went from 4.1 to 4.7 in six weeks. wish i found this two years ago.',n:'Raj Patel',r:'owner, spice route — brisbane',i:'RP',c:'#E8934F'},
          ].map(t=>(
            <div key={t.n} style={{background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:16,padding:'1.5rem'}}>
              <div style={{fontSize:30,color:'#5B4FE8',lineHeight:1,marginBottom:10,fontFamily:'Georgia,serif'}}>"</div>
              <div style={{fontSize:14,color:'rgba(255,255,255,0.65)',lineHeight:1.8,marginBottom:'1.25rem',fontStyle:'italic'}}>{t.q}</div>
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

      <section style={{padding:'5rem 2rem',maxWidth:700,margin:'0 auto'}}>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.22)',textTransform:'uppercase',marginBottom:'1.5rem'}}>honest answers</div>
        <h2 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'2rem',lineHeight:1.1}}>things people ask<br/>before signing up.</h2>
        {[
          ['does it work if customers are in a hurry?','yes — that\'s the whole point. scan, rate, tap a few details, done. takes under 30 seconds. no app, no login, no friction.'],
          ['what happens when a guest had a poor experience?','they come directly and privately to you — so you can reach out, make it right, and recover the relationship.'],
          ['do customers need to download an app?','no. rovu is entirely web-based. guests scan the qr and the feedback page opens instantly in their browser.'],
          ['is there a lock-in contract?','no contract, no lock-in. month to month, cancel any time. we are confident enough in the results that we do not need to trap you.'],
          ['is this compliant with google\'s review policies?','yes. every review is genuine, written by a real guest about their real experience. we make it easy for happy guests to share — and give every guest a fair option to leave a public review.'],
        ].map(([q,a],i)=>(
          <div key={i} style={{borderBottom:'0.5px solid rgba(255,255,255,0.07)'}}>
            <details style={{cursor:'pointer'}}>
              <summary style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 0',listStyle:'none',fontSize:14,fontWeight:500,color:'rgba(255,255,255,0.7)',letterSpacing:'-0.01em',lineHeight:1.4}}>
                {q}
                <span style={{width:20,height:20,borderRadius:'50%',border:'0.5px solid rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:13,color:'rgba(255,255,255,0.4)',marginLeft:16}}>+</span>
              </summary>
              <div style={{padding:'0 0 1rem',fontSize:13,color:'rgba(255,255,255,0.5)',lineHeight:1.85}}>{a}</div>
            </details>
          </div>
        ))}
      </section>

      <section style={{textAlign:'center',padding:'8rem 2rem 7rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',bottom:-80,left:'50%',transform:'translateX(-50%)',width:500,height:300,background:'rgba(91,79,232,0.05)',borderRadius:'50%',pointerEvents:'none'}}/>
        <div style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.18)',textTransform:'uppercase',marginBottom:'2rem'}}>ready when you are</div>
        <h2 style={{fontSize:'clamp(44px,8vw,72px)',fontWeight:500,letterSpacing:'-0.05em',color:'#fff',lineHeight:0.97,marginBottom:'1.25rem'}}>not everyone<br/>gets <span style={{color:'#5B4FE8'}}>5 stars.</span><br/>you will.</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,0.4)',marginBottom:'2.5rem'}}>join australian venues building their reputation the right way.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none',display:'block'}}>book a 10-min demo</a>
          <a href="/venue/meza-kitchen-bar" style={{background:'transparent',color:'rgba(255,255,255,0.6)',padding:'14px 28px',borderRadius:10,fontSize:15,textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.14)',display:'block'}}>see a demo</a>
        </div>
      </section>

      <footer style={{borderTop:'0.5px solid rgba(255,255,255,0.06)',padding:'1.75rem 2rem'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem',maxWidth:1100,margin:'0 auto'}}>
          <svg width="100" height="32" viewBox="0 0 160 52" fill="none">
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

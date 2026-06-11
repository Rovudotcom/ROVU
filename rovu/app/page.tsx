'use client'

export default function HomePage() {
  return (
    <main style={{background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif'}}>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem',borderBottom:'0.5px solid rgba(255,255,255,0.06)',position:'sticky',top:0,background:'rgba(10,10,10,0.96)',zIndex:100}}>
        <span style={{fontSize:18,fontWeight:500,color:'#fff',letterSpacing:'-0.02em'}}>rovu<span style={{color:'#5B4FE8'}}>.</span></span>
        <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'8px 18px',borderRadius:8,fontSize:13,fontWeight:500,textDecoration:'none'}}>book a demo</a>
      </nav>
      <section style={{minHeight:'90vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'4rem 2rem'}}>
        <h1 style={{fontSize:'clamp(48px,9vw,84px)',fontWeight:500,letterSpacing:'-0.05em',lineHeight:0.95,color:'#fff',marginBottom:'1.5rem'}}>your reviews.<br/>on <span style={{color:'#5B4FE8'}}>autopilot.</span></h1>
        <p style={{fontSize:17,color:'rgba(255,255,255,0.55)',maxWidth:420,lineHeight:1.75,margin:'0 auto 2.5rem'}}>capture guest feedback instantly. grow your google rating. recover unhappy customers privately.</p>
        <a href="mailto:hello@rovu.com.au" style={{background:'#5B4FE8',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:500,textDecoration:'none'}}>book a 10-min demo</a>
      </section>
    </main>
  )
}

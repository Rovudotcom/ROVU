export default function PrivacyPage() {
  const sectionTitle: React.CSSProperties = { fontSize: 18, fontWeight: 500, color: '#fff', marginTop: '2.25rem', marginBottom: '0.75rem', letterSpacing: '-0.01em' }
  const body: React.CSSProperties = { fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '0.75rem' }

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'Inter,system-ui,sans-serif',WebkitFontSmoothing:'antialiased'}}>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)',background:'rgba(10,10,10,0.97)',position:'sticky',top:0,zIndex:100,backdropFilter:'blur(20px)'}}>
        <a href="/" style={{textDecoration:'none'}}>
          <svg width="90" height="28" viewBox="0 0 160 52" fill="none">
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
        </a>
        <a href="/" style={{fontSize:12,color:'rgba(255,255,255,0.4)',textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.1)',padding:'5px 12px',borderRadius:7}}>Back</a>
      </nav>

      <div style={{maxWidth:680,margin:'0 auto',padding:'4rem 1.5rem 6rem'}}>
        <div style={{fontSize:10,letterSpacing:'0.25em',color:'#5B4FE8',textTransform:'uppercase',marginBottom:'1rem',fontWeight:500}}>Legal</div>
        <h1 style={{fontSize:'clamp(30px,5vw,42px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'0.5rem'}}>Privacy Policy</h1>
        <p style={{fontSize:13,color:'rgba(255,255,255,0.4)',marginBottom:'2rem'}}>Last updated: June 2026</p>

        <p style={body}>Rovu ("we", "us", "our") provides a feedback and review platform for Australian hospitality venues. This policy explains what information we collect, how we use it, and the choices you have. It applies to venue owners and staff who use the Rovu dashboard, and to guests who submit feedback through a Rovu QR page.</p>

        <h2 style={sectionTitle}>What We Collect</h2>
        <p style={body}>From venue owners and staff: your name, email address, phone number, venue details, and any information you provide when booking a demo or creating an account.</p>
        <p style={body}>From guests submitting feedback: a star rating, optional written feedback, and an optional name and email address if you choose to provide them. Feedback can be submitted anonymously.</p>
        <p style={body}>We do not collect payment card details directly — these are handled by our payment processor and never stored on our servers.</p>

        <h2 style={sectionTitle}>How We Use It</h2>
        <p style={body}>We use this information to operate the Rovu service: to display feedback on venue dashboards, to route feedback to the right destination (public review platform or private alert), to send email notifications, and to respond to enquiries about Rovu.</p>
        <p style={body}>We do not sell personal information to third parties, and we do not use guest feedback data for advertising purposes.</p>

        <h2 style={sectionTitle}>Where Data Is Stored</h2>
        <p style={body}>Rovu's data is stored using Supabase, with infrastructure located in the Asia-Pacific region. Email notifications are sent via Resend. Both providers maintain their own security and privacy practices, which you can review on their respective websites.</p>

        <h2 style={sectionTitle}>Your Rights</h2>
        <p style={body}>If you are a venue owner, you can request access to, correction of, or deletion of your account data at any time by contacting us. If you are a guest who submitted feedback and wish to have that feedback removed, contact us with the venue name and approximate date and we will action your request.</p>

        <h2 style={sectionTitle}>Cookies</h2>
        <p style={body}>Rovu uses minimal session-based technical cookies required for login and dashboard functionality. We do not use third-party advertising or tracking cookies.</p>

        <h2 style={sectionTitle}>Changes To This Policy</h2>
        <p style={body}>We may update this policy from time to time as Rovu evolves. We will update the date at the top of this page when changes are made.</p>

        <h2 style={sectionTitle}>Contact Us</h2>
        <p style={body}>If you have any questions about this policy or how your data is handled, contact us at <a href="mailto:hello@rovu.com.au" style={{color:'#9b91f5'}}>hello@rovu.com.au</a>.</p>
      </div>
    </div>
  )
}

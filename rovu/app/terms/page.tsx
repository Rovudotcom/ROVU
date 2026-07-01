export default function TermsPage() {
  const sectionTitle: React.CSSProperties = { fontSize: 18, fontWeight: 500, color: '#fff', marginTop: '2.25rem', marginBottom: '0.75rem', letterSpacing: '-0.01em' }
  const body: React.CSSProperties = { fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '0.75rem' }
  const subhead: React.CSSProperties = { fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginTop: '1.25rem', marginBottom: '0.5rem' }

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
        <h1 style={{fontSize:'clamp(30px,5vw,42px)',fontWeight:500,letterSpacing:'-0.04em',color:'#fff',marginBottom:'0.5rem'}}>Terms of Service</h1>
        <p style={{fontSize:13,color:'rgba(255,255,255,0.4)',marginBottom:'2rem'}}>Last updated: June 2026 · Governed by the laws of New South Wales, Australia</p>

        <p style={body}>These Terms of Service ("Terms") form a binding agreement between you ("Customer", "you") and the operator of Rovu ("Rovu", "we", "us", "our"), an Australian sole trader operating under an active ABN. By creating an account, booking a demo, or using Rovu in any way, you agree to be bound by these Terms. If you do not agree, do not use the service.</p>

        <h2 style={sectionTitle}>1. The Service</h2>
        <p style={body}>Rovu provides a QR-code-based guest feedback collection tool, an AI-assisted review writing flow, and an owner dashboard showing feedback, ratings, and staff mentions, for use by hospitality venues in Australia.</p>
        <p style={body}>Rovu makes no guarantee of any specific number of reviews, star rating, search ranking, revenue increase, or other business outcome. Results depend on factors outside our control, including guest behaviour and third-party platform policies.</p>

        <h2 style={sectionTitle}>2. Eligibility & Account Responsibility</h2>
        <p style={body}>You must be at least 18 years old and authorised to bind the venue you represent to use Rovu. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at hello@rovu.com.au if you suspect unauthorised access.</p>

        <h2 style={sectionTitle}>3. Subscriptions, Fees & Billing</h2>
        <p style={body}>Rovu is offered on a month-to-month subscription, billed in advance in Australian dollars (AUD) at the rate displayed on our website or otherwise agreed in writing at the time of signup. Fees are exclusive of GST unless stated otherwise, and GST will be added where applicable under Australian tax law.</p>
        <p style={body}>There is no fixed-term lock-in contract. You may cancel at any time, with cancellation taking effect at the end of the current paid billing period. Fees already paid are non-refundable except where required by the Australian Consumer Law (see Section 11).</p>
        <p style={body}>We may change our pricing with at least 30 days' notice. Continued use of the service after a price change takes effect constitutes acceptance of the new pricing.</p>

        <h2 style={sectionTitle}>4. Acceptable Use</h2>
        <p style={body}>You agree to use Rovu solely to collect genuine feedback from real guests of your venue. You must not:</p>
        <p style={body}>(a) fabricate, falsify, or solicit reviews from individuals who did not genuinely visit your venue; (b) offer payment, discounts, or other incentives conditioned on leaving a positive review, in a manner that breaches the policies of Google, TripAdvisor, Facebook, or any other relevant review platform; (c) use Rovu to selectively suppress, filter, or discourage negative reviews from reaching public platforms in a way that misleads consumers; (d) attempt to interfere with, reverse-engineer, or disrupt the Rovu platform or its infrastructure; or (e) use Rovu for any unlawful purpose under Australian law.</p>
        <p style={body}>Rovu is designed to give every guest who provides feedback a fair and genuine option to leave a public review where appropriate, consistent with the review platform policies referenced above.</p>

        <h2 style={sectionTitle}>5. Your Content & Data</h2>
        <p style={body}>Feedback, ratings, and comments submitted by guests through your venue's Rovu page ("Guest Content") are made available to you for the purpose of operating your business. You are responsible for how you use, store, respond to, or act upon Guest Content, including compliance with any applicable privacy obligations you owe to your own guests.</p>
        <p style={body}>You retain ownership of your venue's branding, name, and any content you upload to the platform ("Customer Content"). You grant Rovu a limited, non-exclusive licence to use Customer Content solely as necessary to provide the service to you.</p>

        <h2 style={subhead}>Indemnity</h2>
        <p style={body}>You agree to indemnify and hold Rovu harmless against any claim, loss, liability, or expense (including reasonable legal costs) arising from: your breach of these Terms; your misuse of Guest Content or guest personal information; or your violation of any third-party review platform's policies or applicable law in connection with your use of the service.</p>

        <h2 style={sectionTitle}>6. Intellectual Property</h2>
        <p style={body}>Rovu, including its software, design, AI review-generation logic, branding, and underlying technology, is owned by us and protected by Australian and international intellectual property law. Nothing in these Terms transfers any ownership of the Rovu platform to you. You are granted a limited, non-transferable, revocable licence to use the service for your internal business purposes only, for the duration of your active subscription.</p>

        <h2 style={sectionTitle}>7. Third-Party Services</h2>
        <p style={body}>Rovu relies on third-party infrastructure providers, including Supabase (database hosting), Vercel (application hosting), and Resend (email delivery). We are not responsible for outages, data loss, or service interruptions caused by the failure of these third-party providers, though we will use reasonable efforts to maintain service continuity and to notify you of any prolonged disruption.</p>

        <h2 style={sectionTitle}>8. Termination</h2>
        <p style={body}>We may suspend or terminate your access to Rovu, with or without notice, if: you breach these Terms (including the Acceptable Use provisions in Section 4); your payment fails or remains overdue; or we reasonably believe your use of the service poses a legal, security, or reputational risk to Rovu or to other users.</p>
        <p style={body}>You may terminate your account at any time by providing notice to hello@rovu.com.au, effective at the end of the current billing period in accordance with Section 3.</p>

        <h2 style={sectionTitle}>9. Service Availability & Changes</h2>
        <p style={body}>We aim to keep Rovu available and reliable but do not guarantee uninterrupted, error-free, or continuous access. We may modify, update, suspend, or discontinue features of the service at our discretion, and will provide reasonable notice of any change that materially reduces functionality you are actively paying for.</p>

        <h2 style={sectionTitle}>10. Limitation of Liability</h2>
        <p style={body}>To the maximum extent permitted by law, Rovu's total aggregate liability arising out of or relating to these Terms or your use of the service is limited to the total fees paid by you to Rovu in the three (3) months immediately preceding the event giving rise to the claim.</p>
        <p style={body}>To the maximum extent permitted by law, Rovu is not liable for any indirect, special, incidental, or consequential loss, including loss of profits, revenue, business opportunity, or reputational damage, even if advised of the possibility of such loss.</p>
        <p style={body}>Nothing in this Section 10 excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred on you under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or any other applicable law that cannot lawfully be excluded.</p>

        <h2 style={sectionTitle}>11. Australian Consumer Law</h2>
        <p style={body}>Our services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled to cancel your contract with us and receive a refund for the unused portion, or to compensation for the reduced value of the service. You are also entitled to choose a refund or replacement for major failures. If a failure does not amount to a major failure, you are entitled to have the failure rectified within a reasonable time. Nothing in these Terms is intended to exclude, restrict, or modify your rights under the Australian Consumer Law.</p>

        <h2 style={sectionTitle}>12. Force Majeure</h2>
        <p style={body}>Neither party will be liable for any failure or delay in performance under these Terms resulting from circumstances beyond their reasonable control, including natural disasters, internet or telecommunications outages, third-party infrastructure failures, or acts of government.</p>

        <h2 style={sectionTitle}>13. Dispute Resolution</h2>
        <p style={body}>If a dispute arises under these Terms, both parties agree to first attempt to resolve the matter through good-faith negotiation by contacting hello@rovu.com.au. If the dispute is not resolved within 30 days, either party may pursue any remedy available under law.</p>

        <h2 style={sectionTitle}>14. Governing Law</h2>
        <p style={body}>These Terms are governed by the laws of New South Wales, Australia. You and Rovu submit to the non-exclusive jurisdiction of the courts of New South Wales in relation to any dispute arising from these Terms.</p>

        <h2 style={sectionTitle}>15. Changes To These Terms</h2>
        <p style={body}>We may update these Terms from time to time as Rovu evolves. Material changes will be notified by email or via the dashboard at least 14 days before taking effect. Continued use of the service after an update takes effect constitutes acceptance of the revised Terms.</p>

        <h2 style={sectionTitle}>16. Severability</h2>
        <p style={body}>If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will continue in full force and effect.</p>

        <h2 style={sectionTitle}>Contact Us</h2>
        <p style={body}>Questions about these Terms can be sent to <a href="mailto:hello@rovu.com.au" style={{color:'#9b91f5'}}>hello@rovu.com.au</a>.</p>

        <div style={{marginTop:'2.5rem',padding:'1rem 1.25rem',background:'rgba(255,255,255,0.03)',border:'0.5px solid rgba(255,255,255,0.08)',borderRadius:10}}>
          <p style={{fontSize:11,color:'rgba(255,255,255,0.4)',lineHeight:1.7,margin:0}}>This document is provided as a general template and does not constitute legal advice. We recommend having these Terms reviewed by a qualified Australian solicitor as your business scales, particularly once you begin processing payments at volume.</p>
        </div>
      </div>
    </div>
  )
}

'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'login'|'reset'>('login')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleLogin() {
    if (!email || !password) { setError('Please enter your email and password'); return }
    setLoading(true); setError(''); setMessage('')
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) { setError(error.message); return }
    if (data.session) window.location.href = '/dashboard/meza-kitchen-bar'
  }

  async function handleReset() {
    if (!email) { setError('Please enter your email address'); return }
    setLoading(true); setError(''); setMessage('')
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`
    })
    setLoading(false)
    if (error) { setError(error.message); return }
    setMessage('Check your email for a password reset link.')
  }

  const inp: React.CSSProperties = {
    width:'100%', padding:'12px 14px', background:'rgba(255,255,255,0.04)',
    border:'0.5px solid rgba(255,255,255,0.1)', borderRadius:10, color:'#fff',
    fontSize:14, outline:'none', fontFamily:'Inter,system-ui,sans-serif', marginBottom:'1rem',
  }

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'Inter,system-ui,sans-serif',padding:'2rem'}}>
      <div style={{width:'100%',maxWidth:380,background:'#0f0f0f',border:'0.5px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'2rem'}}>
        <div style={{width:36,height:36,background:'#5B4FE8',borderRadius:9,display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,fontWeight:600,color:'#fff',margin:'0 auto 1.25rem'}}>R</div>
        <div style={{fontSize:22,fontWeight:500,color:'#fff',textAlign:'center',letterSpacing:'-0.03em',marginBottom:6}}>{mode==='login'?'Welcome Back':'Reset Password'}</div>
        <div style={{fontSize:13,color:'rgba(255,255,255,0.35)',textAlign:'center',marginBottom:'1.75rem'}}>{mode==='login'?'Sign in to your Rovu dashboard':'Enter your email and we\'ll send a reset link'}</div>

        {error && <div style={{background:'rgba(232,79,79,0.08)',border:'0.5px solid rgba(232,79,79,0.2)',borderRadius:9,padding:'10px 14px',fontSize:13,color:'#E84F4F',marginBottom:'1rem',lineHeight:1.5}}>{error}</div>}
        {message && <div style={{background:'rgba(29,158,117,0.08)',border:'0.5px solid rgba(29,158,117,0.2)',borderRadius:9,padding:'10px 14px',fontSize:13,color:'#1D9E75',marginBottom:'1rem',lineHeight:1.5}}>{message}</div>}

        <label style={{fontSize:11,color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.08em',fontWeight:500,display:'block',marginBottom:6}}>Email</label>
        <input style={inp} type="email" placeholder="hello@yourvenue.com.au" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key==='Enter' && mode==='login' && handleLogin()}/>

        {mode==='login' && (
          <>
            <label style={{fontSize:11,color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.08em',fontWeight:500,display:'block',marginBottom:6}}>Password</label>
            <input style={inp} type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key==='Enter' && handleLogin()}/>
          </>
        )}

        <button
          onClick={mode==='login' ? handleLogin : handleReset}
          disabled={loading}
          style={{width:'100%',padding:'13px',background:'#5B4FE8',color:'#fff',border:'none',borderRadius:11,fontSize:14,fontWeight:500,cursor:loading?'not-allowed':'pointer',opacity:loading?0.5:1,fontFamily:'Inter,system-ui,sans-serif'}}
        >
          {loading ? 'Please wait...' : mode==='login' ? 'Sign In' : 'Send Reset Link'}
        </button>

        <div style={{textAlign:'center',marginTop:'1.25rem'}}>
          {mode==='login'
            ? <button onClick={()=>{setMode('reset');setError('');setMessage('')}} style={{background:'none',border:'none',color:'rgba(255,255,255,0.3)',fontSize:13,cursor:'pointer',letterSpacing:'0.01em',fontFamily:'Inter,system-ui'}}>Forgot password?</button>
            : <button onClick={()=>{setMode('login');setError('');setMessage('')}} style={{background:'none',border:'none',color:'rgba(255,255,255,0.3)',fontSize:13,cursor:'pointer',letterSpacing:'0.01em',fontFamily:'Inter,system-ui'}}>← Back to sign in</button>
          }
        </div>
      </div>

      <div style={{display:'flex',alignItems:'center',gap:6,marginTop:'1.5rem'}}>
        <div style={{width:16,height:16,background:'#5B4FE8',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:600,color:'#fff'}}>R</div>
        <span style={{fontSize:11,color:'rgba(255,255,255,0.2)',letterSpacing:'0.06em',textTransform:'uppercase'}}>Powered By Rovu</span>
      </div>
    </div>
  )
}

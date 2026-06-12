
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
    if (!email || !password) { setError('please enter your email and password'); return }
    setLoading(true); setError(''); setMessage('')
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) { setError(error.message); return }
    if (data.session) window.location.href = '/dashboard/meza-kitchen-bar'
  }

  async function handleReset() {
    if (!email) { setError('please enter your email address'); return }
    setLoading(true); setError(''); setMessage('')
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`
    })
    setLoading(false)
    if (error) { setError(error.message); return }
    setMessage('check your email for a password reset link')
  }

  const s = {
    page: { minHeight:'100vh', background:'#0a0a0a', display:'flex', flexDirection:'column' as const, alignItems:'center', justifyContent:'center', fontFamily:'Inter,system-ui,sans-serif', padding:'2rem' },
    card: { width:'100%', maxWidth:380, background:'#0f0f0f', border:'.5px solid rgba(255,255,255,.08)', borderRadius:18, padding:'2rem' },
    logo: { width:36, height:36, background:'#5B4FE8', borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', fontSize:15, fontWeight:600, color:'#fff', margin:'0 auto 1.25rem' },
    title: { fontSize:22, fontWeight:500, color:'#fff', textAlign:'center' as const, letterSpacing:'-.03em', marginBottom:6 },
    sub: { fontSize:13, color:'rgba(255,255,255,.35)', textAlign:'center' as const, marginBottom:'1.75rem', lineHeight:1.5 },
    label: { fontSize:11, color:'rgba(255,255,255,.4)', textTransform:'uppercase' as const, letterSpacing:'.08em', fontWeight:500, marginBottom:6, display:'block' },
    input: { width:'100%', padding:'12px 14px', background:'rgba(255,255,255,.04)', border:'.5px solid rgba(255,255,255,.1)', borderRadius:10, color:'#fff', fontSize:14, outline:'none', fontFamily:'Inter,system-ui,sans-serif', marginBottom:'1rem' },
    btn: { width:'100%', padding:'13px', background:'#5B4FE8', color:'#fff', border:'none', borderRadius:11, fontSize:14, fontWeight:500, cursor:'pointer', letterSpacing:'.01em' },
    btnDisabled: { width:'100%', padding:'13px', background:'#5B4FE8', color:'#fff', border:'none', borderRadius:11, fontSize:14, fontWeight:500, cursor:'not-allowed', letterSpacing:'.01em', opacity:.5 },
    error: { background:'rgba(232,79,79,.08)', border:'.5px solid rgba(232,79,79,.2)', borderRadius:9, padding:'10px 14px', fontSize:13, color:'#E84F4F', marginBottom:'1rem', lineHeight:1.5 },
    success: { background:'rgba(29,158,117,.08)', border:'.5px solid rgba(29,158,117,.2)', borderRadius:9, padding:'10px 14px', fontSize:13, color:'#1D9E75', marginBottom:'1rem', lineHeight:1.5 },
  }

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={s.logo}>R</div>
        <div style={s.title}>{mode==='login'?'welcome back':'reset password'}</div>
        <div style={s.sub}>{mode==='login'?'sign in to your rovu dashboard':'enter your email and we\'ll send a reset link'}</div>

        {error && <div style={s.error}>{error}</div>}
        {message && <div style={s.success}>{message}</div>}

        <label style={s.label}>email</label>
        <input
          style={s.input}
          type="email"
          placeholder="hello@yourrestaurant.com.au"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key==='Enter' && mode==='login' && handleLogin()}
        />

        {mode==='login' && (
          <>
            <label style={s.label}>password</label>
            <input
              style={s.input}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key==='Enter' && handleLogin()}
            />
          </>
        )}

        <button
          style={loading ? s.btnDisabled : s.btn}
          disabled={loading}
          onClick={mode==='login' ? handleLogin : handleReset}
        >
          {loading ? 'please wait...' : mode==='login' ? 'sign in' : 'send reset link'}
        </button>

        <div style={{textAlign:'center',marginTop:'1.25rem'}}>
          {mode==='login'
            ? <button onClick={()=>{setMode('reset');setError('');setMessage('')}} style={{background:'none',border:'none',color:'rgba(255,255,255,.3)',fontSize:13,cursor:'pointer',letterSpacing:'.01em'}}>forgot password?</button>
            : <button onClick={()=>{setMode('login');setError('');setMessage('')}} style={{background:'none',border:'none',color:'rgba(255,255,255,.3)',fontSize:13,cursor:'pointer',letterSpacing:'.01em'}}>← back to sign in</button>
          }
        </div>
      </div>

      <div style={{display:'flex',alignItems:'center',gap:6,marginTop:'1.5rem'}}>
        <div style={{width:16,height:16,background:'#5B4FE8',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:600,color:'#fff'}}>R</div>
        <span style={{fontSize:11,color:'rgba(255,255,255,.2)',letterSpacing:'.06em',textTransform:'uppercase'}}>powered by rovu</span>
      </div>
    </div>
  )
}
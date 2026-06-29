path = "app/page.tsx"

with open(path, "r") as f:
    content = f.read()

replacements = [
    (
        "{n:'Starter',p:'A$49',d:'Single venue, getting started',f:['QR feedback flow','5 staff profiles','Google review link','Basic dashboard'],hot:false},",
        "{n:'Starter',p:'A$49',d:'Single venue, getting started',f:['QR feedback flow','5 staff profiles','Google review link','Basic dashboard'],hot:false,accent:'#5B4FE8'},"
    ),
    (
        "{n:'Growth',p:'A$99',d:'Serious about your reputation',f:['Everything in Starter','Private feedback recovery','Unlimited staff profiles','All review platforms','Weekly digest email'],hot:true},",
        "{n:'Growth',p:'A$99',d:'Serious about your reputation',f:['Everything in Starter','Private feedback recovery','Unlimited staff profiles','All review platforms','Weekly digest email'],hot:true,accent:'#5B4FE8'},"
    ),
    (
        "{n:'Chain',p:'A$249',d:'Multiple locations',f:['Up to 5 locations','Multi-venue dashboard','White-label branding','Priority support'],hot:false},",
        "{n:'Chain',p:'A$249',d:'Multiple locations',f:['Up to 5 locations','Multi-venue dashboard','White-label branding','Priority support'],hot:false,accent:'#E8934F'},"
    ),
    (
        "background:'#5B4FE8',flexShrink:0}}></div>{f}",
        "background:t.accent,flexShrink:0}}></div>{f}"
    ),
    (
        '''<a href="/book-demo" className="price-btn" style={{display:'block',padding:'10px',borderRadius:8,fontSize:12,fontWeight:500,textAlign:'center',background:t.hot?'#5B4FE8':'transparent',border:`0.5px solid ${t.hot?'#5B4FE8':'rgba(255,255,255,0.12)'}`,color:t.hot?'#fff':'rgba(255,255,255,0.6)',textDecoration:'none'}}>Book a 10-Min Demo</a>''',
        '''<a href={`/book-demo?plan=${t.n}`} className="price-btn" style={{display:'block',padding:'10px',borderRadius:8,fontSize:12,fontWeight:500,textAlign:'center',background:t.hot?t.accent:'transparent',border:`0.5px solid ${t.hot?t.accent:'rgba(255,255,255,0.12)'}`,color:t.hot?'#fff':'rgba(255,255,255,0.6)',textDecoration:'none',boxShadow:t.hot?`0 4px 24px ${t.accent}66`:'none',transition:'all 0.25s ease'}}>Book a 10-Min Demo</a>'''
    ),
    (
        '''<a href="#" style={{fontSize:12,color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>Privacy Policy</a>''',
        '''<a href="/privacy" style={{fontSize:12,color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>Privacy Policy</a>'''
    ),
    (
        '''<a href="#" style={{fontSize:12,color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>Terms</a>''',
        '''<a href="/terms" style={{fontSize:12,color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>Terms</a>'''
    ),
]

applied = 0
for old, new in replacements:
    count = content.count(old)
    if count == 1:
        content = content.replace(old, new)
        applied += 1
        print(f"OK: applied fix {applied}")
    elif count == 0:
        print(f"SKIP: pattern not found -> {old[:60]}...")
    else:
        print(f"WARNING: found {count} times -> {old[:60]}...")

with open(path, "w") as f:
    f.write(content)

print(f"\nDone. Applied {applied} of {len(replacements)} fixes.")

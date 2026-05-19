import Link from 'next/link'
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-12 h-12 rounded-2xl bg-[#5B4FE8] flex items-center justify-center text-white font-semibold text-xl">R</div>
        <span className="text-white text-3xl font-medium tracking-tight">rovu</span>
      </div>
      <h1 className="text-5xl font-medium text-white leading-tight mb-4 max-w-md">More reviews.<br />Less effort.</h1>
      <p className="text-white/45 text-lg max-w-sm leading-relaxed mb-12">Turn happy guests into 5-star reviews in under 30 seconds. Built for Australian restaurants.</p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link href="/venue/meza-kitchen-bar" className="bg-[#5B4FE8] text-white text-center py-4 rounded-2xl text-base font-medium hover:opacity-80 transition-all">See a live demo →</Link>
        <Link href="mailto:hello@rovu.app" className="border border-white/20 text-white text-center py-4 rounded-2xl text-base font-medium hover:border-white/40 transition-all">Get in touch</Link>
      </div>
      <div className="w-8 h-0.5 bg-[#5B4FE8] rounded-full mt-16 mb-4" />
      <p className="text-white/20 text-xs tracking-widest uppercase">Reviews that work for you</p>
    </main>
  )
}

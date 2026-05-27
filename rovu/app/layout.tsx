import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rovu — Reviews that work for you',
  description: 'Turn happy guests into 5-star reviews in under 30 seconds.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0a] antialiased" style={{background:'#0a0a0a'}}>
        {children}
      </body>
    </html>
  )
}

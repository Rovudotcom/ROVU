import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'rovu — reviews that work for you',
  description: 'Turn happy guests into 5-star reviews in 30 seconds. Built for Australian restaurants.',
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: { title: 'rovu', description: 'reviews that work for you', siteName: 'rovu' }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0,padding:0,background:'#0a0a0a',WebkitFontSmoothing:'antialiased'}}>
        {children}
      </body>
    </html>
  )
}

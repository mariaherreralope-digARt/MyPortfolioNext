import './globals.css'
import CookieConsentBanner from '@/components/en/CookieConsentBanner'

export const metadata = {
  title: 'Your Portfolio',
  description: 'Personal Portfolio built with Next.js and TypeScript',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}

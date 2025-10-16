import './globals.css'
import CookieConsentBanner from '@/components/en/CookieConsentBanner'

export const metadata = {
  title: "Maria Herrera | Front-End Developer & UI Animator",
  description:
    "Portfolio of Maria Herrera, a front-end developer specializing in React, Next.js, and Framer Motion. Explore projects featuring modern UI animation, responsive design, and 3D interactivity.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "Framer Motion",
    "UI Animation",
    "Web Design",
    "Maria Herrera",
    "Retreats Websites",
    "Yoga Websites",
    "Meditation Websites",
    "Wellness Websites",
    "Travel Websites",
    "Portfolio Website",
    "Developer Portfolio",  
    "Web Developer",
     "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
   "Responsive Design",
    "3D Web",
    "Interactive UI",
    "Web Development Portfolio",
    "Single Page Applications",
    "Progressive Web Apps",
    "Web Performance Optimization",
    "SEO for Developers",
    "Web Accessibility",
  ],
  authors: [{ name: "Maria Herrera" }],
  openGraph: {
    title: "Maria Herrera | Front-End Developer & UI Animator",
    description:
      "Explore Maria's portfolio — modern, animated, and responsive web experiences built with Next.js and Framer Motion.",
    url: "https://digitalartmariaherrera.com/", 
    siteName: "Maria Herrera Portfolio",
    images: [
      {
        url: "/images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Preview of Maria Herrera's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Herrera | Front-End Developer & UI Animator",
    description:
      "Explore modern web experiences built by Maria Herrera using React, Next.js, and Framer Motion.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}

// src/app/es/layout.tsx
import '../globals.css';

import CookieConsentBannerES from '@/components/es/CookieConsentBanner';

export const metadata = {
  title: 'Mi Portfolio',
  description: 'Portfolio Personal construido con Next.js y TypeScript',
};

export default function ESRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieConsentBannerES />
      </body>
    </html>
  );
}

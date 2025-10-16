// src/app/es/layout.tsx
import '../globals.css';

import CookieConsentBannerES from '@/components/es/CookieConsentBanner';

export const metadata = {
 title: "María Herrera | Desarrolladora Front-End y Animadora UI",
description:
  "Portafolio de María Herrera, desarrolladora front-end especializada en React, Next.js y Framer Motion. Explora proyectos con animaciones modernas, diseño responsive e interactividad 3D.",
keywords: [
  "Desarrolladora Front-End",
  "Desarrolladora React",
  "Portafolio Next.js",
  "Framer Motion",
  "Animaciones UI",
  "Diseño Web",
  "María Herrera",
  "Páginas de retiros",
  "Páginas de yoga",
  "Páginas de meditación",
  "Páginas de bienestar",
  "Páginas de viajes",
  "Portafolio web",
  "Portafolio de desarrolladora",  
  "Desarrollo Web",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Diseño Responsive",
  "Web 3D",
  "Interfaz interactiva",
  "Portafolio de desarrollo web",
  "Aplicaciones de una sola página",
  "Aplicaciones web progresivas",
  "Optimización del rendimiento web",
  "SEO para desarrolladores",
  "Accesibilidad web",
],
authors: [{ name: "María Herrera" }],
openGraph: {
  title: "María Herrera | Desarrolladora Front-End y Animadora UI",
  description:
    "Explora el portafolio de María: experiencias web modernas, animadas y responsive creadas con Next.js y Framer Motion.",
  url: "https://digitalartmariaherrera.com/es", 
  siteName: "Portfolio de María Herrera",
  images: [
    {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Vista previa del portfolio de María Herrera",
    },
  ],
  locale: "es_ES",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "María Herrera | Desarrolladora Front-End y Animadora UI",
  description:
    "Descubre experiencias web modernas creadas por María Herrera con React, Next.js y Framer Motion.",
  images: ["/images/og-image.png"],
},
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

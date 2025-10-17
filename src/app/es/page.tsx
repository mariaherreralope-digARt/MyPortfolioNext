import Hero from "@/components/es/Hero";
import NavbarES from "@/components/es/NavbarES";

import Footer from "@/components/es/Footer";
import ProjectsLaptop from "@/components/es/ProjectsLaptop";
import ProjectsiPhone from "@/components/es/ProjectsiPhone";
import PricingCards from "@/components/es/PricingCards";
import Newsletter from "@/components/es/Newsletter";
import CookieConsentBanner from "@/components/es/CookieConsentBanner";
import AboutMe from "@/components/es/AboutMe";
import Projects from "@/components/es/Projects";
import Script from "next/script";



  export const metadata = {
  title: "Projects | Maria Herrera Portfolio",
  description:
    "Explora una selección curada de los proyectos front-end de María Herrera que muestran un diseño web interactivo, animado y responsive.",
     alternates: {
    canonical: "https://digitalartmariaherrera.com/es",
    languages: {
      'en': 'https://digitalartmariaherrera.com/',
      'es': 'https://digitalartmariaherrera.com/es',
    },
  },
};
export default function HomePage() {

  return (
    <main
      className="relative h-screen overflow-y-scroll scroll-smooth"
    >
      <Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Maria Herrera",
      url: "https://digitalartmariaherrera.com/es",
      jobTitle: "Front-End Developer",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61580256954689",
        "https://www.linkedin.com/in/maria-herrera-336114382/",
        "https://www.instagram.com/digartmariaherrera/",
      ],
    }),
  }}
/>
      {/* Background gradient circle */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>

      {/* Page sections */}
      <div>
        <NavbarES />
        <Hero />
        <AboutMe />
        <ProjectsLaptop />
        <ProjectsiPhone />
        <Projects />
        <PricingCards />
        {/* <Testimonials /> */}
        <Newsletter />
        <Footer />
        <CookieConsentBanner />
      </div>
    </main>
  );
}

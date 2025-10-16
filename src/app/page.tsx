
import Hero from "@/components/en/Hero";
import AboutMe from "@/components/en/AboutMe";
import Newsletter from "@/components/en/Newsletter";
import Footer from "@/components/en/Footer";
import Testimonials from "@/components/en/Testimonials";
import CookieConsentBanner from "@/components/en/CookieConsentBanner";
import PricingCards from "@/components/en/PricingCards";
import ProjectsiPhone from "@/components/en/ProjectsiPhone";
import ProjectsLaptop from "@/components/en/ProjectsLaptop";
import NavbarEN from "@/components/en/NavbarEN";
import Projects from "@/components/en/Projects";
 import Script from "next/script";

<Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Maria Herrera",
      url: "https://digitalartmariaherrera.com/",
      jobTitle: "Front-End Developer",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61580256954689",
        "https://www.linkedin.com/in/maria-herrera-336114382/",
        "https://www.instagram.com/digartmariaherrera/",
      ],
    }),
  }}
/>

export const metadata = {
  title: "Projects | Maria Herrera Portfolio",
  description:
    "Explore a curated selection of Maria Herrera’s front-end projects showcasing interactive, animated, and responsive web design.",
     alternates: {
    canonical: "https://digitalartmariaherrera.com/",
    languages: {
      'en': 'https://digitalartmariaherrera.com/',
      'es': 'https://digitalartmariaherrera.com/es',
    },
  },
};
export default function HomePage(): JSX.Element {

  return (
    <main
      className="relative h-screen overflow-y-scroll scroll-smooth"
    >
      {/* Background gradient circle */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>

      {/* Page sections */}
      <div>
        <NavbarEN />
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

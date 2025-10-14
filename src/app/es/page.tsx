import Hero from "@/components/es/Hero";
import NavbarES from "@/components/es/NavbarES";
import About from "@/components/es/AboutMe";

import Testimonials from "@/components/es/Testimonials";
import Footer from "@/components/es/Footer";
import ProjectsLaptop from "@/components/es/ProjectsLaptop";
import ProjectsiPhone from "@/components/es/ProjectsiPhone";
import PricingCards from "@/components/es/PricingCards";
import Newsletter from "@/components/es/Newsletter";
import CookieConsentBanner from "@/components/es/CookieConsentBanner";
import AboutMe from "@/components/es/AboutMe";
import Projects from "@/components/es/Projects";

export default function HomePage(): JSX.Element {
  return (
    <main
      className="relative h-screen overflow-y-scroll scroll-smooth"
    >
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

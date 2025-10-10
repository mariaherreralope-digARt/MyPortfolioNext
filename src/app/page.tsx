
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
        <PricingCards />
        <Projects />
        {/* <Testimonials /> */}
        <Newsletter />
        <Footer />
        <CookieConsentBanner />
      </div>
    </main>
  );
}

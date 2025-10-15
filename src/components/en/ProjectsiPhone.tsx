'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactModal from "@/components/en/ContactFormModal";

const ProjectsiPhone = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="relative section section-gradient-bl overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 relative pt-0 md:"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 px-10">
          <motion.h3
            className="heading-accent"
            variants={fadeUp}
          >
            Full Responsive Websites
          </motion.h3>

          <motion.h2
            className="heading-gradient"
            variants={fadeUp}
          >
            Mobile View
          </motion.h2>

          <motion.p
            className="paragraph-muted"
            variants={fadeUp}
          >
            Websites that adapt perfectly to any mobile device, with
            fast-loading content, intuitive navigation, and clean animations for
            an excellent on-the-go experience. Built with React & Framer Motion.
          </motion.p>

          <motion.button
            onClick={openContactForm}
            className="btn-primary mt-4"
            variants={fadeUp}
          >
            Let’s Work Together
          </motion.button>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center pt-20 md:pt-0"
          variants={slideInRight}
        >
          <div className="relative w-[280px] md:h-[450px] h-[400px] mx-auto">
            {/* Mockup background */}
            <Image
              src="/images/iPhoneMockUp.png"
              alt="Mobile Mockup"
              fill
              className="z-10 object-contain"
            />

            {/* Screen viewport */}
            <div
              className="absolute 
              top-[35px] sm:top-[45px] md:top-[45px] lg:top-[55px]
              left-[60px] md:left-[64px] lg:left-[55px]
              w-[150px] md:w-[160px] lg:w-[170px]
              h-[320px] md:h-[360px] lg:h-[340px]
              overflow-y-auto rounded-[22px] z-20 no-scrollbar"
              aria-label="Mobile site screenshot preview"
              style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
            >
              <img
                src="/images/mobileSite.png"
                alt="Mobile site screenshot"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CONTACT MODAL */}
      <ContactModal isOpen={contactFormOpen} onClose={closeContactForm} />
    </section>
  );
};

export default ProjectsiPhone;

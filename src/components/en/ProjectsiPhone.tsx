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
      className="relative w-full md:h-screen flex bg-gradient-to-t from-[#0c0c1d] to-[#111132] px-6 md:px-16 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 relative pt-20 md:pt-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 px-10">
          <motion.h2
            className="text-lg text-emerald-400 uppercase font-extralight tracking-widest cursor-default"
            variants={fadeUp}
          >
            Full Responsive Websites
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-slate-200 to-slate-600 bg-clip-text text-transparent cursor-default"
            variants={fadeUp}
          >
            Mobile View
          </motion.h1>

          <motion.p
            className="text-yellow-300 text-base md:text-lg cursor-default"
            variants={fadeUp}
          >
            Websites that adapt perfectly to any mobile device, with
            fast-loading content, intuitive navigation, and clean animations for
            an excellent on-the-go experience. Built with React & Framer Motion.
          </motion.p>

          <motion.button
            onClick={openContactForm}
            className="mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-3xl transition-all duration-300 shadow hover:shadow-lg"
            variants={fadeUp}
          >
            Let’s Work Together
          </motion.button>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center pt-7 md:pt-10"
          variants={slideInRight}
        >
          <div className="relative w-[300px] md:h-[450px] h-[400px] mx-auto">
            {/* Mockup background */}
            <Image
              src="/images/iPhoneMockUp.png"
              alt="Mobile Mockup"
              fill
              className="z-10 object-contain"
            />

            {/* Screen viewport */}
            <div
              className="absolute top-[39px] left-[64px] w-[175px] md:h-[375px] h-[265px] overflow-y-auto rounded-[22px] z-20 no-scrollbar"
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

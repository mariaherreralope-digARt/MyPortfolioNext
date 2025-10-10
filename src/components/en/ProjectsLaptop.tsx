'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactModal from "@/components/en/ContactFormModal";
import ContainerComputer from "@/components/en/Laptop/ContainerComputer";

const ProjectsLaptop = () => {
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
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="relative w-full md:h-screen flex bg-gradient-to-b from-[#0c0c1d] to-[#111132] px-6 md:px-16 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* LEFT COLUMN - Laptop Mockup */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center pt-7"
          variants={fadeUp}
        >
          <div className="relative w-[500px] md:h-[450px] h-[280px] mx-auto flex items-center justify-center mb-10 ">
            <ContainerComputer />
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Text */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 md:px-10 md:pt-0">
          <motion.h2
            className="text-lg text-emerald-400 uppercase font-extralight tracking-widest cursor-default mt-10"
            variants={fadeUp}
          >
            Modern Animated Websites
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-slate-200 to-slate-600 bg-clip-text text-transparent cursor-default"
            variants={fadeUp}
          >
            Desktop View
          </motion.h1>

          <motion.p
            className="text-yellow-300 text-base md:text-lg cursor-default"
            variants={fadeUp}
          >
            Websites designed for a full desktop experience, featuring smooth
            animations, thoughtful layouts, and an engaging user interface.
            Built with React & Framer Motion for performance and style.
          </motion.p>

          <motion.button
            onClick={openContactForm}
            className="mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-3xl transition-all duration-300 shadow hover:shadow-lg"
            variants={fadeUp}
          >
            Let’s Work Together
          </motion.button>
        </div>
      </motion.div>

      <ContactModal isOpen={contactFormOpen} onClose={closeContactForm} />
    </section>
  );
};

export default ProjectsLaptop;

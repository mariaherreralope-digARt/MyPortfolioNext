'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactModal from "@/components/en/ContactFormModal";
import ContainerComputer from "./Laptop/ContainerComputer";

const ProjectsLaptop = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  // const containerVariants = {
  //   hidden: {},
  //   show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  // };

  // const fadeUp = {
  //   hidden: { opacity: 0, y: 30 },
  //   show: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeOut" } },
  // };

  // const slideInRight = {
  //   hidden: { opacity: 0, x: -80 },
  //   show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  // };

  return (
    <section
      id="projects"
      className="section section-gradient-tr overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 relative"
        // variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* LEFT COLUMN - Laptop Mockup */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center pt-7"
          // variants={slideInRight}
        >
          <div className="relative w-[500px] md:h-[450px] h-[280px] mx-auto flex items-center justify-center mb-10">
            <ContainerComputer />
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Text */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 md:px-10 md:pt-0">
          <motion.h2
            className="heading-accent cursor-default"
            // variants={fadeUp}
          >
            Web modernas y animadas
          </motion.h2>

          <motion.h1
            className="heading-gradient"
            // variants={fadeUp}
          >
            Versión de Escritorio
          </motion.h1>

          <motion.p
            className="paragraph-muted"
            // variants={fadeUp}
          >
           Diseños pensados para una experiencia de escritorio completa, con animaciones fluidas, maquetaciones cuidadas y una interfaz atractiva. Desarrollados con React y Framer Motion para ofrecer rendimiento y estilo.
          </motion.p>

          <motion.button
            onClick={openContactForm}
            className="btn-primary"
            // variants={fadeUp}
          >
            Trabajemos juntos
          </motion.button>
        </div>
      </motion.div>

      <ContactModal isOpen={contactFormOpen} onClose={closeContactForm} />
    </section>
  );
};

export default ProjectsLaptop;

'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import ContactModal from './ContactFormModal';

const Hero: React.FC = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative section section-gradient-tr  overflow-hidden flex items-center justify-center"
    >
      {/* Content Wrapper */}
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 px-10 pt-7 md:pt-0">
          <motion.h3
            className="heading-accent cursor-default"
            variants={fadeUp}
          >
            Maria Herrera
          </motion.h3>

          <motion.h1
            className="heading-gradient"
            variants={fadeUp}
          >
            Desarrolladora Front-End <br />y Animadora UI.
          </motion.h1>

          <motion.p
            className="paragraph-accent"
            variants={fadeUp}
          >
            Creo sitios web modernos, animados y totalmente adaptables con React y Framer Motion.
          </motion.p>

          <motion.button
            onClick={openContactForm}
            className="btn-primary"
            variants={fadeUp}
          >
            Trabajemos Juntos
          </motion.button>
        </div>

        {/* Scrolling background text */}
        <motion.div
          className="absolute text-[50vh] md:bottom-[-100px] bottom-[-250px] whitespace-nowrap text-[#fdf4f418] w-max font-bold pointer-events-none z-0 pb-20"
          initial={{ x: 850, opacity: 0 }}
          whileInView={{
            x: '-220%',
            opacity: 1,
            transition: {
              opacity: { delay: 2, duration: 0.5 },
              x: { delay: 2.5, repeat: Infinity, repeatType: 'mirror', duration: 150 },
            },
          }}
        >
          Creadora de ProJectos
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="w-full md:w-1/2 mt-3 md:mt-3 flex justify-center md:justify-end pt-7 md:pt-0"
          variants={slideInRight}
        >
          <Image
            src='/images/hero-image1.png'
            alt="Maria Herrera"
            width={300}   
            height={450} 
            className="w-[300px] md:w-[450px] object-contain drop-shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* Render modal when open */}
      <ContactModal isOpen={contactFormOpen} onClose={closeContactForm} />
    </section>
  );
};

export default Hero;

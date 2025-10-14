'use client';

import { motion, Variants } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiNextdotjs, SiJavascript, SiGit, SiTypescript, SiVercel, SiThreedotjs } from 'react-icons/si';

// Animation variants (typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full mx-auto max-w-screen-2xl px-8 sm:px-10 md:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-28 lg:py-32 flex flex-col justify-center items-center  bg-gradient-to-t from-[#0c0c1d] to-[#111132] text-center"
    >
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        👋{' '}
        <span className="bg-gradient-to-r from-slate-600 to-slate-200 bg-clip-text text-transparent tracking-tight cursor-default">
          Hi! I’m María,
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl leading-snug text-white cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      >
        a passionate front-end developer who loves turning ideas into smooth,
        modern websites.
      </motion.h2>

      {/* Paragraphs */}
      <motion.p
        className="mt-4 max-w-6xl text-base sm:text-lg md:text-xl text-white  cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
      >
        I specialize in building responsive, fast-loading, and beautifully
        animated interfaces using React, Tailwind CSS, and Framer Motion. My
        goal is to help small businesses, creatives, and entrepreneurs stand out
        online with websites that not only look great, but also work flawlessly
        on any device.
      </motion.p>

      <motion.p
        className="mt-4 max-w-6xl text-base sm:text-lg md:text-xl text-white cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
      >
        I recently completed a front-end developer program and now focus on
        writing clean code, crafting eye-catching layouts, and designing
        engaging user experiences. I’m constantly learning and improving, and I
        enjoy solving challenges with curiosity and creativity.
      </motion.p>

      <motion.p
        className="mt-4 max-w-6xl text-base sm:text-lg md:text-xl text-white cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
      >
        When I’m not coding, you’ll find me exploring design trends, watching
        development tutorials, or dreaming up my next side project. Let’s build
        something great together!
      </motion.p>

      {/* Icons */}
      <motion.div
        className="flex items-center justify-center w-full mx-auto max-w-screen-2xl px-8 sm:px-10 md:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-28 lg:py-32 gap-4 md:gap-10 text-4xl text-emerald-500"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={5}
      >
        <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <FaReact />
        </motion.div>
         <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiJavascript />
        </motion.div>
         <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiNextdotjs />
        </motion.div>
         <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiTypescript />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiFramer />
        </motion.div>
         <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiTailwindcss />
          
        </motion.div>
         <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiThreedotjs />
        </motion.div>
         <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiGit />
        </motion.div>
         <motion.div whileHover={{ scale: 1.2 }} className="transition-transform duration-300">
          <SiVercel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

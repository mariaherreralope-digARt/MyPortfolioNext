"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight, BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Website de Portfolio Creativo",
    image: "/images/project1.png",
    description:
      "Luxury Retreats es una experiencia web visualmente inmersiva diseñada para mostrar retiros de bienestar inspirados en el arte. El proyecto se centra en combinar un diseño elegante con un movimiento interactivo y fluido. Construido con Next.js y Framer Motion, el sitio presenta transiciones dinámicas, diseños responsivos y una estética limpia y moderna. Su paleta de degradados, animaciones suaves y estructura intuitiva guían a los visitantes a través de experiencias de retiro cuidadosamente curadas que combinan arte, mindfulness y relajación.",
    demoLink: "https://retreats.digitalartmariaherrera.com/",
  },
  // {
  //   id: 2,
  //   title: "E-Commerce Storefront",
  //   image: "/images/projects/project2.png",
  //   description:
  //     "A modern e-commerce platform with smooth animations, product filtering, and secure checkout built using React and Stripe.",
  //   demoLink: "https://example.com/project2",
  // },
  // {
  //   id: 3,
  //   title: "Event Planner Landing Page",
  //   image: "/images/projects/project3.png",
  //   description:
  //     "A dynamic one-page website for event planners, optimized for conversions and mobile performance.",
  //   demoLink: "https://example.com/project3",
  // },
  // {
  //   id: 4,
  //   title: "Photography Showcase",
  //   image: "/images/projects/project4.png",
  //   description:
  //     "A visually immersive gallery site showcasing high-resolution photography with parallax scrolling effects.",
  //   demoLink: "https://example.com/project4",
  // },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full mx-auto max-w-screen-2xl 
      px-6 sm:px-10 md:px-16 lg:px-20
      py-8 md:py-12
      section-gradient-tr"
    >
      {/* Title */}
      <motion.div
        className="flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-gradient">
          Projectos
        </h2>
        <p className="paragraph-muted">
          Una selección de proyectos recientes que muestran mi experiencia en desarrollo front-end,
          animación de UI y diseño.
        </p>
      </motion.div>

      {/* Swiper Carousel */}
      <motion.div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="projects-swiper md:mb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8  rounded-2xl overflow-hidden shadow-lg"
              >
                {/* LEFT: Screenshot */}
                <div className="relative w-full h-64 md:h-96 rounded-lg flex items-center justify-centeroverflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={500}
                    className=" hover:scale-105 transition-transform duration-500"
                    priority={project.id === 1}
                  />
                </div>

                {/* RIGHT: Content */}
                <div className="flex flex-col justify-center text-justify md:text-left space-y-4 px-2">
                  <h3 className="text-2xl heading-accent">
                    {project.title}
                  </h3>
                  <p className="paragraph-muted">
                    {project.description}
                  </p>

                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-2"
                  >
                    Live Demo <BsBoxArrowUpRight className="pl-4 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div className="flex justify-center gap-4 mt-8">
          <motion.button
            aria-label="Previous project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full text-yellow-400 flex items-center justify-center hover:bg-emerald-400 bg-emerald-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            aria-label="Next project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full text-yellow-400 flex items-center justify-center hover:bg-emerald-400 bg-emerald-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

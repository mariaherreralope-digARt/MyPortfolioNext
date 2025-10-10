'use client';

import { useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactFormModalEN from "./ContactFormModal";

const NavbarEN: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [cursorPosition, setCursorPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.nav className="top-0 left-0 right-0 bg-gradient-to-b from-[#111132] to-[#0c0c1d] z-10">
      <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 h-24 md:h-18">
        {/* Logo */}
        <Link href="#home" onClick={() => setActiveLink("#home")} className="flex-shrink-0 px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.8, delay: 0.5 }}
            className="relative z-10"
          >
            <Image src="/images/digARt-logo.png" alt="digARt Maria Herrera" 
            width={120}   
            height={32}  
            className="" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.8, delay: 0.5 }}
          onMouseLeave={() => setCursorPosition(prev => ({ ...prev, opacity: 0 }))}
          className="hidden md:flex relative w-fit gap-3 rounded-3xl border-2 border-emerald-500 bg-transparent z-20"
        >
          {navLinks.map((link, index) => {
            const ref = useRef<HTMLAnchorElement>(null);
            return (
              <a
                key={index}
                ref={ref}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                onMouseEnter={() => {
                  if (!ref.current) return;
                  const { width } = ref.current.getBoundingClientRect();
                  setCursorPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
                }}
                className="relative z-20 block cursor-pointer uppercase text-emerald-500 mix-blend-difference px-3 py-1.5 md:px-5 md:py-3 font-light text-xs"
              >
                {link.label}
              </a>
            );
          })}

          {/* Sliding Cursor */}
          <motion.div
            animate={cursorPosition}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="absolute z-10 h-5 md:h-10 bg-emerald-500 rounded-3xl"
          />
        </motion.div>

        {/* Spanish page link */}
        <div className="hidden md:flex items-center gap-3 pr-8 text-sm text-emerald-500">
          <Link href="/es" className="font-light hover:font-bold hover:text-yellow-400">
            ES
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.7 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX className="text-white w-6 h-6" /> : <HiMenu className="text-white w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-gradient-to-b from-slate-300/60 to-slate-300/30 border border-gray-100 py-4 text-center"
          >
            <div className="container mx-auto px-20 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href ? "text-yellow-500" : "text-slate-100 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <Link href="/es" className="block w-full bg-yellow-500 text-white px-2 py-2.5 rounded-xl hover:bg-yellow-400 transition-all hover:shadow-sm hover:shadow-yellow-600">
                ES
              </Link>

              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-yellow-500 text-white px-2 py-2.5 rounded-xl hover:bg-yellow-400 transition-all hover:shadow-sm hover:shadow-yellow-600"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactFormModalEN isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarEN;

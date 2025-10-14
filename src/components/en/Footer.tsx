import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const footerLinks: Record<string, { name: string; href: string }[]> = {
  Portfolio: [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  Services: [
    { name: 'Web Development', href: '#' },
    { name: 'UI Animation', href: '#' },
    { name: 'Responsive Design', href: '#' },
    { name: 'Custom Projects', href: '#' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Design Inspirations', href: '#' },
    { name: 'Code Snippets', href: '#' },
    { name: 'Free Templates', href: '#' },
  ],
  'Get in Touch': [
    { name: 'Work With Me', href: '#contact' },
    { name: 'Email', href: 'mailto:hello@yourdomain.com' },
    { name: 'Newsletter', href: '#' },
    { name: 'Social Media', href: '#' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0c0c1d] to-[#111132]">
      <div className="w-full mx-auto max-w-screen-2xl px-8 sm:px-10 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex gap-2 items-center">
              <Image
                src='/images/dARt.png'
                alt="María | Front-End Developer"
                width={120}   
                height={32} 
                className="h-20 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 object-contain"
              />
              <span className="text-sm text-emerald-400 uppercase font-extralight tracking-widest cursor-default">
                María Herrera
              </span>
            </div>

            <p className="text-slate-100 mb-6">
              I build modern, animated, and fully responsive websites with a
              focus on clean code, smooth UI, and engaging user experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580256954689"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/maria-herrera-336114382/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/digartmariaherrera/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="lg:col-span-8 pt-7  pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg mb-4 uppercase text-emerald-500 font-bold">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-300 hover:text-slate-100"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} María. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Designed & developed with ❤️ by María
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

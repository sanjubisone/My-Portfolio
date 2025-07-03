import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sanjubisone", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-900 border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-purple-600"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                John Doe
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Full Stack Developer passionate about creating innovative web solutions 
                and delivering exceptional user experiences.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>San Francisco, CA</p>
                <p>john.doe@example.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  Available for freelance work and full-time opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>
                  © {currentYear} John Doe. All rights reserved. Made with{' '}
                  <FaHeart className="inline text-red-500 mx-1" />
                  using React & Tailwind CSS
                </p>
              </div>

              {/* Back to Top Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                aria-label="Back to top"
              >
                <FaArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:hidden w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg z-50"
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer; 
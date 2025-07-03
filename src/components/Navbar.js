import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            DevPortfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://github.com/sanjubisone" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors duration-200"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors duration-200"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white hover:text-primary-400 transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/sanjubisone" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 
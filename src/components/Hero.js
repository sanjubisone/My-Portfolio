import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 font-medium text-lg"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white text-shadow-lg"
          >
            Sanju Bisone
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-16 flex items-center justify-center"
          >
            <motion.h2
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold gradient-text"
            >
              {texts[currentText]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            I create innovative web solutions that combine cutting-edge technology with 
            exceptional user experiences. Passionate about building scalable applications 
            that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="border-2 border-primary-500 text-primary-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href="https://github.com/sanjubisone" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white hover:text-primary-400 transition-colors duration-300"
        >
          <FaArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaUsers, FaRocket } from 'react-icons/fa';
import profileImage from './assets/1746492099434.jpg';
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { icon: FaCode, number: "10+", label: "Projects Completed" },
    { icon: FaLaptopCode, number: "2+", label: "Years Experience" },
    { icon: FaUsers, number: "8+", label: "Happy Clients" },
    { icon: FaRocket, number: "100%", label: "Success Rate" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-dark-900 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white text-6xl font-bold">
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 glass-effect rounded-xl"
                >
                  <stat.icon className="text-primary-400 text-3xl mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm a passionate Full Stack Developer with over 3 years of experience creating 
              innovative web applications. I specialize in modern JavaScript frameworks, 
              cloud technologies, and building scalable solutions that drive business growth.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              My journey in tech started with curiosity and has evolved into a deep passion 
              for solving complex problems through elegant code. I believe in writing clean, 
              maintainable code and staying up-to-date with the latest industry trends.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">What I Do:</h3>
              <ul className="space-y-3">
                {[
                  "Full-stack web development with modern frameworks",
                  "Database design and optimization",
                  "API development and integration",
                  "Cloud infrastructure and deployment",
                  "UI/UX design and implementation",
                  "Performance optimization and testing"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-400 px-6 py-3 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
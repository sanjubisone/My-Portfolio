import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [FaReact, FaNodeJs, SiMongodb],
      github: "https://github.com/sanjubisone",
      live: "https://fully-functional-e-commerce-website.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      icons: [FaReact, SiTypescript, SiFirebase],
      github: "https://github.com/sanjubisone",
      live: "",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts, interactive maps, and historical data visualization.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      icons: [FaReact],
      github: "https://github.com/sanjubisone",
      live: "",
      featured: false
    },
    {
      id: 4,
      title: "REST API Service",
      description: "A scalable REST API service with authentication, rate limiting, and comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      icons: [FaNodeJs, FaDatabase],
      github: "https://github.com/sanjubisone",
      live: "",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [FaReact],
      github: "https://github.com/sanjubisone",
      live: "",
      featured: false
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with user authentication, file sharing, and message encryption.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
      icons: [FaReact, FaNodeJs, SiMongodb],
      github: "https://github.com/sanjubisone",
      live: "",
      featured: true
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in 
            full-stack development, frontend design, and backend architecture.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="glass-effect rounded-xl overflow-hidden card-hover">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex items-center gap-2 mb-4">
                      {project.icons.map((Icon, index) => (
                        <Icon key={index} className="text-primary-400 text-lg" />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        <FaGithub size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt size={16} />
                          <span className="text-sm">Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary-500 text-primary-400 px-8 py-3 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
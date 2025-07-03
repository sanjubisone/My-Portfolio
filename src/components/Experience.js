import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies.",
      achievements: [
        "Led a team of 5 developers in building a scalable e-commerce platform",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
      link: "https://techcorp.com"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "InnovateTech",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed and maintained multiple web applications for clients across various industries.",
      achievements: [
        "Built 15+ client projects with 100% client satisfaction",
        "Reduced bug reports by 50% through improved testing practices",
        "Implemented responsive design principles across all projects",
        "Collaborated with design team to improve user experience"
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Firebase", "TypeScript"],
      link: "https://innovatetech.com"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebSolutions Inc",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: "Focused on creating responsive and interactive user interfaces for web applications.",
      achievements: [
        "Developed 10+ responsive websites for various clients",
        "Optimized website loading speeds by 35%",
        "Implemented modern CSS frameworks and animations",
        "Worked closely with UX/UI designers"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
      link: "https://websolutions.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey in software development, showcasing my growth and 
            contributions to various organizations and projects.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-effect rounded-xl p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <FaBriefcase size={14} />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt size={14} />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <FaMapMarkerAlt size={14} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={16} />
                      </motion.a>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded text-xs border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            <span className="gradient-text">Education</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-2">Bachelor of Computer Science</h4>
              <p className="text-gray-400 mb-2">University of Technology</p>
              <p className="text-gray-400 text-sm mb-3">2015 - 2019</p>
              <p className="text-gray-300 text-sm">
                Graduated with honors. Specialized in software engineering and web development.
                Completed capstone project on real-time collaboration tools.
              </p>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-2">Certifications</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium">AWS Certified Developer</p>
                  <p className="text-gray-400 text-sm">Amazon Web Services - 2022</p>
                </div>
                <div>
                  <p className="text-white font-medium">React Developer Certification</p>
                  <p className="text-gray-400 text-sm">Meta - 2021</p>
                </div>
                <div>
                  <p className="text-white font-medium">MongoDB Database Administrator</p>
                  <p className="text-gray-400 text-sm">MongoDB University - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
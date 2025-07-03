import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
  FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiVercel, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: FaReact, level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", icon: SiTypescript, level: 85, color: "from-blue-600 to-blue-700" },
        { name: "HTML5", icon: FaHtml5, level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "from-cyan-500 to-blue-500" },
        { name: "Bootstrap", icon: FaBootstrap, level: 85, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 88, color: "from-green-500 to-green-600" },
        { name: "Python", icon: FaPython, level: 82, color: "from-blue-500 to-yellow-500" },
        { name: "MongoDB", icon: SiMongodb, level: 85, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Firebase", icon: SiFirebase, level: 85, color: "from-orange-500 to-yellow-500" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", icon: FaAws, level: 75, color: "from-orange-500 to-yellow-500" },
        { name: "Docker", icon: FaDocker, level: 70, color: "from-blue-500 to-blue-600" },
        { name: "Git", icon: FaGitAlt, level: 90, color: "from-orange-500 to-red-500" },
        { name: "Vercel", icon: SiVercel, level: 85, color: "from-black to-gray-600" }
      ]
    }
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
    <section id="skills" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I've worked with a variety of technologies to create robust and scalable applications. 
            Here are the key skills I've developed over the years.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white text-center">
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
                        <skill.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                        <p className="text-gray-400 text-sm">{skill.level}%</p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Other Skills & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Redux", "Next.js", "Express.js", "GraphQL", "REST APIs", "Jest",
              "Webpack", "Babel", "ESLint", "Prettier", "Figma", "Adobe XD",
              "Linux", "Nginx", "Redis", "JWT", "OAuth", "Stripe"
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-primary-500 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
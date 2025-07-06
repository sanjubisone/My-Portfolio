'use client';

import { useEffect, useState, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with MERN stack, featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20product%20listings%2C%20shopping%20cart%2C%20clean%20design%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20web%20design%2C%20high%20quality%20mockup%2C%20responsive%20layout&width=600&height=400&seq=ecommerce-project&orientation=landscape',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://fully-functional-e-commerce-website.vercel.app/',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://readdy.ai/api/search-image?query=Task%20management%20dashboard%20interface%20with%20kanban%20boards%2C%20colorful%20task%20cards%2C%20clean%20modern%20UI%20design%2C%20productivity%20app%20mockup%2C%20professional%20web%20application%20design&width=600&height=400&seq=task-app-project&orientation=landscape',
      technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL'],
      liveLink: '',
      githubLink: '#'
    },
    {
      title: 'Restaurant Website',
      description: 'A beautiful restaurant website with online reservation system, menu display, and customer review management.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20restaurant%20website%20homepage%20with%20food%20photography%2C%20warm%20colors%2C%20professional%20restaurant%20web%20design%2C%20menu%20interface%2C%20booking%20system%2C%20high%20quality%20web%20design%20mockup&width=600&height=400&seq=restaurant-project&orientation=landscape',
      technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
      liveLink: '',
      githubLink: '#'
    },
    {
      title: 'Portfolio Dashboard',
      description: 'A comprehensive dashboard for managing portfolio projects, client communications, and project analytics.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20dashboard%20interface%20with%20charts%2C%20analytics%2C%20project%20management%20features%2C%20modern%20dark%20theme%20UI%2C%20clean%20admin%20panel%20design%2C%20web%20app%20mockup&width=600&height=400&seq=dashboard-project&orientation=landscape',
      technologies: ['Vue.js', 'Chart.js', 'Laravel', 'MySQL'],
      liveLink: '',
      githubLink: '#'
    },
    {
      title: 'Social Media App',
      description: 'A social networking platform with real-time messaging, post sharing, and community features.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20social%20media%20app%20interface%20with%20posts%2C%20messaging%2C%20clean%20mobile-first%20design%2C%20social%20networking%20platform%20mockup%2C%20contemporary%20web%20design&width=600&height=400&seq=social-app-project&orientation=landscape',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      liveLink: '',
      githubLink: '#'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course management, student progress tracking, and interactive learning modules.',
      image: 'https://readdy.ai/api/search-image?query=Educational%20learning%20platform%20interface%20with%20course%20listings%2C%20student%20dashboard%2C%20modern%20e-learning%20web%20design%2C%20professional%20education%20website%20mockup&width=600&height=400&seq=lms-project&orientation=landscape',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'AWS'],
      liveLink: '',
      githubLink: '#'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional web experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveLink}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200 w-8 h-8 flex items-center justify-center"
                    >
                      <i className="ri-external-link-line text-sm"></i>
                    </a>
                    <a 
                      href={project.githubLink}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200 w-8 h-8 flex items-center justify-center"
                    >
                      <i className="ri-github-line text-sm"></i>
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform whitespace-nowrap
                      ${project.liveLink
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 cursor-pointer'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`
                    }
                    onClick={() => {
                      if (project.liveLink) window.open(project.liveLink, '_blank');
                    }}
                    disabled={!project.liveLink}
                  >
                    {project.liveLink ? 'Live Demo' : 'Live Early'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

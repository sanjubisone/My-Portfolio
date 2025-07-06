
'use client';

import { useEffect, useState, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars one by one
          const skills = ['frontend', 'backend', 'database', 'tools'];
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skill]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      percentage: 92,
      skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: 'ri-window-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      percentage: 88,
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL'],
      icon: 'ri-server-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      percentage: 85,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Docker', 'Redis'],
      icon: 'ri-database-2-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'tools',
      title: 'Tools & Others',
      percentage: 90,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Linux'],
      icon: 'ri-tools-line',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I specialize in modern web technologies and continuously update my skills to stay current with industry trends.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={category.id}
                className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 ${
                  isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <i className={`${category.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animatedSkills.includes(category.id) ? `${category.percentage}%` : '0%' 
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 inline-block">
                      {category.percentage}% Proficiency
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '20+',
                label: 'Projects Completed',
                icon: 'ri-code-box-line',
                color: 'text-blue-600 dark:text-blue-400'
              },
              {
                number: '2+',
                label: 'Years Experience',
                icon: 'ri-time-line',
                color: 'text-green-600 dark:text-green-400'
              },
              {
                number: '8+',
                label: 'Happy Clients',
                icon: 'ri-heart-line',
                color: 'text-purple-600 dark:text-purple-400'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} flex items-center justify-center`}>
                  <i className={`${stat.icon} text-3xl`}></i>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

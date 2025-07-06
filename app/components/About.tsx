'use client';

import { useEffect, useState, useRef } from 'react';

export default function About() {
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-white dark:bg-gray-900 inline-block px-2 rounded-md">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'}`}>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dvf209ph1/image/upload/v1751783624/sanju_qdzvgs.jpg"
                  alt="Sanju Bisone"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover object-top"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                  <i className="ri-code-s-slash-line text-white text-3xl"></i>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
                Passionate Web Developer from Betul, MP
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
                I'm a creative and dedicated web developer with a passion for crafting exceptional digital experiences. 
                Based in the beautiful city of Betul, Madhya Pradesh, I bring a unique perspective to every project, 
                combining technical expertise with creative vision.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
                My journey in web development started with curiosity and has evolved into a deep passion for creating 
                solutions that not only look great but also solve real-world problems. I believe in clean code, 
                beautiful design, and seamless user experiences.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: 'ri-stack-line', title: 'Full-Stack Development', desc: 'End-to-end web solutions' },
                  { icon: 'ri-reactjs-line', title: 'MERN Stack', desc: 'Modern JavaScript ecosystem' },
                  { icon: 'ri-palette-line', title: 'UI/UX Design', desc: 'Beautiful user interfaces' },
                  { icon: 'ri-smartphone-line', title: 'Responsive Design', desc: 'Mobile-first approach' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${item.icon} text-blue-600 dark:text-blue-400 text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  React.js
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                  MongoDB
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                  Express.js
                </span>
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

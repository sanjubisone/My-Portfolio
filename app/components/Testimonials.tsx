
'use client';

import { useEffect, useState, useRef } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CEO, TechStart Solutions',
      company: 'Mumbai, Maharashtra',
      content: 'Sanju delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. The website is fast, beautiful, and user-friendly.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Indian%20business%20woman%20CEO%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%2C%20high%20quality%20photography%2C%20business%20professional%20attire&width=100&height=100&seq=testimonial1&orientation=squarish'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Founder, Digital Marketing Pro',
      company: 'Delhi, India',
      content: 'Working with Sanju was a fantastic experience. He understood our requirements perfectly and delivered a stunning website that has significantly boosted our online presence. Highly recommend his services!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Indian%20businessman%20founder%2C%20friendly%20expression%2C%20modern%20office%20setting%2C%20business%20headshot%2C%20professional%20photography%2C%20confident%20pose&width=100&height=100&seq=testimonial2&orientation=squarish'
    },
    {
      name: 'Anita Patel',
      role: 'Restaurant Owner',
      company: 'Gujarat, India',
      content: 'Sanju created a beautiful website for our restaurant chain. The online reservation system works flawlessly, and our customers love the design. Sales have increased by 40% since launch!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Indian%20restaurant%20owner%20woman%2C%20warm%20smile%2C%20restaurant%20background%2C%20business%20professional%20photo%2C%20friendly%20demeanor%2C%20high%20quality%20headshot&width=100&height=100&seq=testimonial3&orientation=squarish'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what some of my amazing clients have to say about working with me.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover object-top mr-4"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.company}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-yellow-400"></i>
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <i className="ri-double-quotes-l text-4xl text-blue-600 dark:text-blue-400 opacity-20 absolute -top-2 -left-2"></i>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-8">
                          {testimonial.content}
                        </p>
                        <i className="ri-double-quotes-r text-4xl text-blue-600 dark:text-blue-400 opacity-20 absolute -bottom-2 -right-2"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 w-12 h-12 flex items-center justify-center"
            >
              <i className="ri-arrow-left-line"></i>
            </button>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 w-12 h-12 flex items-center justify-center"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

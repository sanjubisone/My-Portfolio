'use client';

import { useEffect, useState, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    // Platform detection
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

    if (isMobile) {
      // WhatsApp link
      const phone = '917354691582'; // WhatsApp number without +
      const text = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      );
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
      setIsSubmitting(false);
      setSubmitStatus('Opening WhatsApp...');
    } else {
      // Mailto link for all desktops (Mac & Windows)
      const subject = encodeURIComponent('Contact Form Submission');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      );
      window.open(
        `mailto:bshivakishor@gmail.com?subject=${subject}&body=${body}`,
        '_blank'
      );
      setIsSubmitting(false);
      setSubmitStatus('Opening your email client...');
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear from you and discuss how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'}`}>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: 'ri-map-pin-line',
                        title: 'Location',
                        content: 'Betul, Madhya Pradesh, India',
                        color: 'text-blue-600 dark:text-blue-400'
                      },
                      {
                        icon: 'ri-mail-line',
                        title: 'Email',
                        content: 'bshivakishor@gmail.com',
                        color: 'text-green-600 dark:text-green-400'
                      },
                      {
                        icon: 'ri-phone-line',
                        title: 'Phone',
                        content: '+91 7354691582',
                        color: 'text-purple-600 dark:text-purple-400'
                      },
                      {
                        icon: 'ri-time-line',
                        title: 'Available',
                        content: 'Mon - Sat, 9:00 AM - 8:00 PM',
                        color: 'text-orange-600 dark:text-orange-400'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center ${item.color}`}>
                          <i className={`${item.icon} text-xl`}></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {[
                    { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/tsb-tech-289897200/', color: 'hover:text-blue-600' },
                    { icon: 'ri-github-fill', href: 'https://github.com/sanjubisone', color: 'hover:text-gray-900 dark:hover:text-white' },
                    { icon: 'ri-instagram-line', href: 'https://www.instagram.com/sanjubisone/?next=%2F', color: 'hover:text-pink-600' },
                    { icon: 'ri-twitter-fill', href: '#', color: 'hover:text-blue-400' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {submitStatus && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      {submitStatus}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

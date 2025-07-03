import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Detect device type
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isAndroid = /android/i.test(userAgent);

      if (isAndroid) {
        // Send form data via WhatsApp
        const whatsappNumber = '917354691582'; // Your WhatsApp number in international format without '+'
        const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
      } else {
        // Send form data via Gmail (mailto)
        const mailto = `mailto:bshivakishor@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.open(mailto, '_blank');
      }

      // If you want to send via Gmail, you can open the user's email client with a pre-filled mailto link:
      // const mailto = `mailto:bshivakishor@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      //   `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      // )}`;
      // window.open(mailto, '_blank');
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "bshivakishor@gmail.com",
      link: "mailto:bshivakishor@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 7354691582",
      link: "tel:+917354691582"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Betul, MP",
      link: null
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sanjubisone", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/sanjubisone", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/sanjubisone", label: "Twitter" }
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
    <section id="contact" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 glass-effect rounded-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-center"
                  >
                    Thank you! Your message has been sent successfully. I'll get back to you soon!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
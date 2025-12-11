'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:bnsanjayxrmhs@gmail.com',
    color: 'from-red-500 to-pink-600',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com',
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/sanjay-bn-13580730a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: 'https://twitter.com',
    color: 'from-blue-400 to-blue-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Message */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                    >
                      <FaCheckCircle className="text-green-400" />
                      <span className="text-green-400">
                        Message sent successfully!
                      </span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                    >
                      <FaExclamationCircle className="text-red-400" />
                      <span className="text-red-400">
                        Failed to send message. Please try again.
                      </span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/60 text-sm mb-2">Email</p>
                    <a
                      href="mailto:bnsanjayxrmhs@gmail.com"
                      className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
                    >
                      <FaEnvelope />
                      <span>bnsanjayxrmhs@gmail.com</span>
                    </a>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-4">Social Links</p>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center justify-center p-4 bg-gradient-to-br ${social.color} rounded-lg text-white hover:shadow-lg transition-all`}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Icon className="text-2xl mb-2" />
                            <span className="text-sm font-semibold">
                              {social.name}
                            </span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4 text-gradient">
                  Let's Work Together
                </h4>
                <p className="text-white/70 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Whether you're a
                  developer, designer, or game enthusiast, feel free to reach
                  out!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


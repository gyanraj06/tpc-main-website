import { motion } from 'framer-motion';
import { useState } from 'react';
import flexibleBg from '../assets/flexible-2.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-section" className="py-20 md:py-28 pb-32 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl mx-6"
        style={{
          backgroundImage: `url(${flexibleBg})`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-white mb-6">
              Start your journey
            </h2>
            
            <p className="font-body text-lg text-white/80 leading-relaxed mb-12">
              Let's start building something great together.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <p className="text-white/90 text-lg"></p>
              <p className="text-white/90 text-lg">contact.trippechalo.in@gmail.com</p>
            </div>

          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/15 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@framer.com"
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/15 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/15 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Submit
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
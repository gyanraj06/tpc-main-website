import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-accent-bright/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
          

            <motion.h1
              variants={fadeInUp}
              className="font-hero text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-8"
            >
              Empowering Vendors.{' '}
              <span className="relative">
                <span className="text-blue-600">Simplifying Ticketing.</span>
              </span>
              <br />
              <span className="text-primary">Maximizing Revenue.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              The all-in-one dashboard for events, treks, and experiences. Transform your business with smarter booking management.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a 
                href="https://vendor.trippechalo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center gap-2"
              >
                Vendor Portal
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-outline group inline-flex items-center gap-2">
                Customer Portal
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              <img 
                src="/src/assets/gurpreet-singh-xaUQI3OnQZs-unsplash.jpg" 
                alt="Modern business dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent-green rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="font-ui font-bold text-gray-900 text-lg">50+</div>
                <div className="font-ui text-xs text-gray-700">Features</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
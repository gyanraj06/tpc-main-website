import { motion } from 'framer-motion';
import { useEffect } from 'react';
import defaultBg from '../assets/Default.png';
import heroComponent from '../assets/UI Hero Component.svg';

const LegacyHeroSection = () => {
  // Preload critical background image
  useEffect(() => {
    const img = new Image();
    img.src = defaultBg;
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-12 sm:pt-28 md:pt-32 pb-4 sm:pb-8 md:pb-4 lg:pb-16 overflow-hidden bg-transparent"
    >
      {/* PNG Overlay - Fixed Position for Seamless Background */}
      <div 
        className="fixed inset-0 opacity-100 -z-10"
        style={{
          backgroundImage: `url(${defaultBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="order-2 lg:order-1 lg:text-left text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-hero text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-900 leading-tight sm:leading-relaxed mb-6 sm:mb-8"
            >
              Launch Your Experience in <span className="text-blue-600">Minutes, Not Days</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-lg lg:mx-0 mx-auto"
            >
              Forget complicated setups. Our intuitive platform lets you create, customise, and launch any kind of event effortlessly. From single-ticket sales to recurring series, your entire operation is managed from one simple dashboard.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-row gap-3 sm:gap-4 mb-12 sm:mb-16"
            >
              <a
                href="https://vendor.trippechalo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full font-normal text-xs hover:bg-gray-800 transition-all duration-200 flex items-center gap-1.5 justify-center group flex-1 sm:flex-none"
              >
                Vendor Portal
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <button className="border border-gray-300 text-gray-700 bg-transparent px-6 py-3 rounded-full font-normal text-xs hover:bg-gray-50 transition-all duration-200 flex items-center gap-1.5 justify-center flex-1 sm:flex-none">
                Customer Portal
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center h-full order-1 lg:order-2"
          >
            <img 
              src={heroComponent} 
              alt="UI Hero Component" 
              className="w-full h-auto max-w-lg sm:max-w-xl lg:max-w-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegacyHeroSection;

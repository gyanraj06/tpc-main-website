import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';
import { useEffect } from 'react';
import defaultBg from '../assets/Default.png';
import heroComponent from '../assets/UI Hero Component.svg';

const HeroSection = () => {
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
      className="relative min-h-screen pt-32 pb-4 overflow-hidden bg-[#f4f2ee]"
    >
      {/* PNG Overlay */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${defaultBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className=""
          >
            <motion.h1
              variants={fadeInUp}
              className="font-hero text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-relaxed mb-8"
            >
              Empowering Businesses.{' '}
              <br />
              <span className="text-blue-600">Simplifying</span>
              <br />
              <span className="text-gray-900"> Ticketing.</span>
              <br />
              <span className="text-blue-600"> Maximizing</span>
              <br />
              <span className="text-gray-900"> Revenue!</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg text-gray-600 leading-relaxed mb-8 max-w-lg"
            >
              From local events to large-scale experiences, manage smarter bookings, streamline operations, and grow your events and adventure business with ease.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a 
                href="https://vendor.trippechalo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full font-normal text-sm hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 justify-center group"
              >
                Vendor Portal
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={10} weight="bold" className="text-black" />
                </div>
              </a>
              <button className="border border-gray-300 text-gray-700 bg-transparent px-6 py-3 rounded-full font-normal text-sm hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 justify-center">
                Customer Portal
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center h-full"
          >
            <img 
              src={heroComponent} 
              alt="UI Hero Component" 
              className="w-full h-auto max-w-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
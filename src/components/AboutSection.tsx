import { motion } from 'framer-motion';
import { useState } from 'react';
import getVerifiedImg from '../assets/Get Verified.png';
import submitListingsImg from '../assets/Submit Your Listings.png';
import receiveBookingsImg from '../assets/Receive Bookings.png';

const AboutSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 md:mb-32">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.h2 
          variants={fadeInUp}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-6"
        >
          Get Started In <span className="text-blue-600">3 Simple Steps</span>
        </motion.h2>
      </motion.div>

      {/* Mobile & iPad: Vertical Stack, Desktop: Horizontal Cards */}
      <div className="block xl:hidden space-y-6">
        {/* Mobile & iPad Layout - Vertical Cards */}
        {[
          {
            step: "01",
            title: "Get Verified",
            description: "Create your account and complete quick verification within 24 hours.",
            expandedContent: "Create your vendor account with basic business information. Complete verification in under 24 hours with our streamlined process.",
            image: getVerifiedImg
          },
          {
            step: "02", 
            title: "List Your Experiences",
            description: "Add photos, pricing, and descriptions to showcase your offerings.",
            expandedContent: "Upload high-quality photos, set competitive pricing, and create compelling descriptions that attract customers to your unique offerings.",
            image: submitListingsImg
          },
          {
            step: "03",
            title: "Receive Bookings",
            description: "Start getting customers, manage bookings, and track earnings via the dashboard.",
            expandedContent: "Go live instantly after approval. Manage bookings, track earnings, and grow your business with our dashboard.",
            image: receiveBookingsImg
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="text-3xl sm:text-4xl font-heading font-light text-gray-300 mb-2">
                    {card.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="font-heading text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {card.expandedContent}
                  </p>
                </div>
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover rounded-xl border-2 border-gray-100" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Layout - Horizontal Interactive Cards */}
      <div className="hidden xl:flex gap-4 h-80">
        {[
          {
            step: "01",
            title: "Get Verified",
            description: "Create your account and complete quick verification within 24 hours.",
            expandedContent: "Create your vendor account with basic business information. Complete verification in under 24 hours with our streamlined process.",
            image: getVerifiedImg
          },
          {
            step: "02", 
            title: "List Your Experiences",
            description: "Add photos, pricing, and descriptions to showcase your offerings.",
            expandedContent: "Upload high-quality photos, set competitive pricing, and create compelling descriptions that attract customers to your unique offerings.",
            image: submitListingsImg
          },
          {
            step: "03",
            title: "Receive Bookings",
            description: "Start getting customers, manage bookings, and track earnings via the dashboard.",
            expandedContent: "Go live instantly after approval. Manage bookings, track earnings, and grow your business with our dashboard.",
            image: receiveBookingsImg
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-white rounded-2xl border border-gray-200 transition-all duration-500 cursor-pointer overflow-hidden shadow-lg ${
              activeCard === index 
                ? 'flex-[2]' 
                : 'flex-1'
            }`}
            onClick={() => setActiveCard(index)}
            onMouseEnter={() => setActiveCard(index)}
          >
            <div className={`p-6 h-full transition-opacity duration-300 flex flex-col ${
              activeCard === index ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="text-4xl font-heading font-light text-gray-300 mb-4">
                {card.step}
              </div>
              <div className="flex-1"></div>
              <div className="mt-auto">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="font-heading text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>

            <div 
              className={`absolute inset-0 transition-opacity duration-300 ${
                activeCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Solid Background */}
              <div className="absolute inset-0" style={{backgroundColor: '#FFFFFF'}}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex gap-4">
                <div className="flex-1 flex flex-col">
                  <div className="text-4xl font-heading font-light text-gray-300 mb-4">
                    {card.step}
                  </div>
                  <div className="flex-1"></div>
                  <div className="mt-auto">
                    <h3 className="font-heading text-2xl font-bold text-black mb-2">
                      {card.title}
                    </h3>
                    <p className="font-heading text-black text-base leading-relaxed">
                      {card.expandedContent}
                    </p>
                  </div>
                </div>
                <div className="w-56">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover rounded-xl border-2 border-white" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
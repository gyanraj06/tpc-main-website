import { motion } from 'framer-motion';
import flexibleImg from '../assets/flexible.png';

const AboutSection = () => {
  const testimonials = [
    {
      quote: "Create your vendor account with basic business information. Complete verification in under 24 hours with our streamlined process.",
      author: "Get Verified",
      position: "Head of Product at Forma",
      avatar: flexibleImg
    },
    {
      quote: "Upload high-quality photos, set competitive pricing, and create compelling descriptions that attract customers to your unique offerings.",
      author: "List Your Experiences", 
      position: "COO at Metricon",
      avatar: flexibleImg
    },
    {
      quote: "Go live instantly after approval. Manage bookings, track earnings, and grow your business with our dashboard.",
      author: "Receive Bookings",
      position: "Founder at Bloomtech", 
      avatar: flexibleImg
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 relative bg-[#F4F2EE]"
    >
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            Get started in 3 simple steps
          </h2>
        </motion.div>

        {/* Testimonials Layout - Horizontal Single Row */}
        <div className="relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg h-full"
              >
                {/* Author Info - Name/Title and Avatar at top */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-heading font-semibold text-gray-900 text-base mb-1">
                      {testimonial.author}
                    </div>
                    <div className="font-heading text-gray-600 text-sm">
                      {testimonial.position}
                    </div>
                  </div>
                  <div className="relative">
                    <div 
                      className={`w-16 h-16 rounded-2xl flex-shrink-0 ${
                        index === 0 ? 'bg-gradient-to-br from-pink-400 via-yellow-400 to-cyan-400' :
                        index === 1 ? 'bg-gradient-to-br from-green-400 via-blue-400 to-purple-400' :
                        'bg-gradient-to-br from-orange-400 via-red-400 to-pink-400'
                      }`}
                      style={{
                        backgroundImage: `url(${testimonial.avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                    {/* Step Number Overlay - Centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                        <span className="font-heading text-sm font-bold text-gray-900">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Large Quote Mark */}
                <div className="text-6xl font-serif text-gray-300 mb-6 leading-none">
                  "
                </div>
                
                {/* Quote Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed font-heading">
                  {testimonial.quote}
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
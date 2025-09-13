import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can benefit from TripPeChalo?",
      answer: "TripPeChalo is designed for event organizers, tour operators, activity providers, and local businesses looking to streamline operations, simplify ticketing, and drive more bookings. Whether you're hosting a trek, a concert, or a workshop, our platform helps you manage and grow effortlessly."
    },
    {
      question: "How does TripPeChalo add value to my business?",
      answer: "We go beyond just ticketing. Our platform provides real-time sales insights, customer analytics, and performance metrics so you can optimize pricing, improve marketing campaigns, and maximize revenue, without juggling multiple tools."
    },
    {
      question: "Is TripPeChalo easy to use if I'm not tech-savvy?",
      answer: "Yes. TripPeChalo is built with simplicity at its core. The dashboard is intuitive and requires no technical background. If you can use everyday apps like WhatsApp or email, you'll be able to manage bookings and track performance with ease."
    },
    {
      question: "What's the onboarding process like?",
      answer: "Getting started is quick and guided. You sign up, list your events or experiences, and go live within minutes. Our team provides onboarding assistance to ensure you set up your offerings smoothly and start seeing results immediately."
    },
    {
      question: "What support do I get as a partner?",
      answer: "We offer end-to-end support, from setup to scaling. Our dedicated team is available through chat, email, and calls to assist with technical help, performance insights, or growth strategies so you're never on your own."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Left Side - Header */}
          <div>
            <div className="inline-block px-4 py-2 bg-black rounded-full mb-6 sm:mb-8">
              <span className="text-white text-sm font-medium">FAQ</span>
            </div>
            
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 sm:mb-6 leading-tight">
              Got questions?<br />
              We've got answers.
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Find answers to common questions about TripPeChalo and its capabilities.
            </p>
            
            <div className="mt-6 sm:mt-8">
              <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-2">
                Still have a question?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Contact us! We'll be happy to help you.
              </p>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between transition-colors duration-200 ${
                    openFAQ === index ? 'bg-white' : 'hover:bg-white'
                  }`}
                >
                  <span className="text-gray-900 font-medium text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={false}
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {openFAQ === index ? (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </motion.div>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 bg-white">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
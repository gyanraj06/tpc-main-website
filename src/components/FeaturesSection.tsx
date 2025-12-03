import { motion } from 'framer-motion';
import { useState } from 'react';
import { Desktop, ChartBar, TrendUp, CreditCard } from '@phosphor-icons/react';
import LazyImage from './LazyImage';
import vendorPortalImg from '../assets/Vendor Portal.png';
import bookingDataImg from '../assets/Booking Data.png';
import analyticsImg from '../assets/Analytics.png';
import counterBookingImg from '../assets/Counter Booking.png';
import flexibleImg from '../assets/flexible.png';
import DemoModal from './DemoModal';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activePricingPlan, setActivePricingPlan] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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

  const pillars = [
    {
      title: "Vendor Dashboard",
      cardTitle: "Complete Control Center",
      description: "One place to manage events, track bookings, and control your business operations with real-time insights.",
      icon: <Desktop className="w-4 h-4" />,
      image: vendorPortalImg
    },
    {
      title: "Booking Data",
      cardTitle: "Smart Customer Intelligence",
      description: "Real-time ticket insights, customer analytics, and performance metrics to optimize your sales strategy.",
      icon: <ChartBar className="w-4 h-4" />,
      image: bookingDataImg
    },
    {
      title: "Analytics",
      cardTitle: "Predictive Business Growth",
      description: "Advanced revenue tracking, customer demographics, and AI-powered predictions to grow your business.",
      icon: <TrendUp className="w-4 h-4" />,
      image: analyticsImg
    },
    {
      title: "Counter Booking",
      cardTitle: "Omnichannel Bookings",
      description: "Seamless offline to online sync. Accept bookings anywhere with our mobile-first approach.",
      icon: <CreditCard className="w-4 h-4" />,
      image: counterBookingImg
    }
  ];

  const pricingPlans = [
    {
      id: 0,
      name: "Starter",
      price: "Free",
      subtitle: "For early stage teams",
      description: "Ideal for early stage teams who wants to create limited events with basic functionality.",
      features: [
        "Access to Core Features",
        "Minimum commission upto 2 Months",
        "Basic CRM",
        "24X7 Customer Support",
        "Limited App Functionality"
      ]
    },
    {
      id: 1,
      name: "Growth",
      price: "INR 4,999",
      subtitle: "Most popular",
      description: "Perfect for growing businesses that need advanced analytics and priority support.",
      features: [
        "Everything in Starter",
        "Advanced analytics dashboard",
        "Priority phone support",
        "Custom integrations",
        "Better App Functionality",
        "Multi-user access"
      ]
    },
    {
      id: 2,
      name: "Scale",
      price: "Custom Pricing",
      subtitle: "For your custom needs",
      description: "Not sure which plan works best? We’re happy to create a customized, negotiable plan that suits your goals. Let’s talk!",
      features: []
    }
  ];

  return (
    <div className="py-0 md:py-2 space-y-12">
      {/* Products Section - Grovia Style */}
      {/* Settlement & Payout Transparency */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 md:mt-48">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
            Simplify Payouts and Build Trust
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
            Forget complicated setups. Our intuitive platform lets you create, customise, and launch any kind of event effortlessly. From single-ticket sales to recurring series, your entire operation is managed from one simple dashboard.
          </p>
        </motion.div>

        {/* Testimonials Layout - Responsive Grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                quote: "See sales and revenue in your wallet the moment a booking is confirmed.",
                author: "Instant Confirmation",
                position: "",
                avatar: flexibleImg
              },
              {
                quote: "Track your earnings, fees, and payouts in one transparent ledger.",
                author: "Clear Fund Management",
                position: "",
                avatar: flexibleImg
              },
              {
                quote: "Schedule and receive your payouts directly to your bank account with a clear and simple structure.",
                author: "Effortless Bank Transfers",
                position: "",
                avatar: flexibleImg
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/50 shadow-lg h-full"
              >
                {/* Author Info - Name/Title and Avatar at top */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-heading font-semibold text-gray-900 text-sm sm:text-base mb-1">
                      {testimonial.author}
                    </div>
                    <div className="font-heading text-gray-600 text-xs sm:text-sm">
                      {testimonial.position}
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex-shrink-0 ${index === 0 ? 'bg-gradient-to-br from-pink-400 via-yellow-400 to-cyan-400' :
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
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                        <span className="font-heading text-xs sm:text-sm font-bold text-gray-900">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-heading">
                  {testimonial.quote}
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 md:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4 sm:mb-6"
          >
            4 Core Pillars of Business <span className="text-blue-600">Growth</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            Everything you need to streamline operations, understand your customers, and scale your business efficiently.
          </motion.p>

          {/* Navigation Pills - Mobile: 1 column, Desktop: 4 columns */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 bg-[#f0ece6] p-3 rounded-[32px] max-w-4xl mx-auto mb-0"
          >
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-[28px] font-heading text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none ${activeTab === index
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-700 hover:bg-white hover:shadow-md hover:text-gray-900'
                  }`}
              >
                {pillar.icon}
                <span className="whitespace-nowrap">{pillar.title}</span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Dynamic Content Section - Responsive Layout */}
        <div className="max-w-6xl mx-auto mt-1">
          {/* Outer Rounded Container */}
          <div className="bg-[#FBFAF8] rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden p-4 sm:p-6">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center min-h-[300px] sm:min-h-[400px]">
              {/* Image Container - Responsive */}
              <motion.div
                key={`image-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl sm:rounded-2xl h-64 sm:h-80 md:h-96 overflow-hidden order-2 lg:order-1"
              >
                <LazyImage
                  src={pillars[activeTab].image}
                  alt={pillars[activeTab].title}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </motion.div>

              {/* Content Section - Responsive */}
              <motion.div
                key={`content-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6 py-4 sm:py-8 order-1 lg:order-2"
              >
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-heading text-xs font-medium uppercase tracking-wide">
                  {pillars[activeTab].title}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight">
                  {pillars[activeTab].cardTitle}
                </h3>

                <p className="font-heading text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {pillars[activeTab].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative bg-cover bg-center bg-no-repeat rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url(${flexibleImg})`
            }}
          >
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 px-6 sm:px-8 py-12 sm:py-16 lg:px-16 max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
                {/* Left Side - Pricing Plans */}
                <div className="lg:col-span-2">
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-8 sm:mb-12">
                    Flexible pricing
                  </h2>

                  <div className="space-y-3">
                    {pricingPlans.map((plan, index) => (
                      <div
                        key={plan.id}
                        onClick={() => setActivePricingPlan(index)}
                        className={`backdrop-blur-sm rounded-xl p-4 sm:p-5 cursor-pointer transition-all duration-200 ${activePricingPlan === index
                          ? 'bg-white/20'
                          : 'bg-white/5 hover:bg-white/10'
                          }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-heading text-base sm:text-lg font-medium text-white mb-1">
                              {plan.name}
                            </h3>
                            <p className={`font-heading text-xs sm:text-sm ${activePricingPlan === index ? 'text-white/80' : 'text-white/60'
                              }`}>
                              {plan.subtitle}
                            </p>
                          </div>
                          <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${activePricingPlan === index
                            ? 'border-white'
                            : 'border-white/30'
                            }`}>
                            {activePricingPlan === index && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Right Side - Detailed Pricing Card - More Responsive */}
                <div className="lg:col-span-3">
                  <motion.div
                    key={activePricingPlan}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl max-w-md mx-auto lg:mx-0"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                      <span className="text-white font-heading text-base sm:text-lg font-medium">
                        {pricingPlans[activePricingPlan].name}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-3xl sm:text-4xl font-heading font-bold text-white">
                        {pricingPlans[activePricingPlan].price}
                      </span>
                      <span className="text-white/60 font-heading text-base sm:text-lg">/mo</span>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mb-6 sm:mb-8">
                      {pricingPlans[activePricingPlan].description}
                    </p>

                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-200 mb-6 sm:mb-8 flex items-center justify-center gap-2"
                    >
                      Schedule a demo
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>

                    <div className="space-y-3">
                      {pricingPlans[activePricingPlan].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90 font-heading text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
};

export default FeaturesSection;
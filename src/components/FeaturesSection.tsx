import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Compass, 
  Users, 
  MagnifyingGlass,
  CalendarCheck,
  ArrowRight
} from 'phosphor-react';
import vendorPortalImg from '../assets/Vendor Portal.png';
import bookingDataImg from '../assets/Booking Data.png';
import analyticsImg from '../assets/Analytics.png';
import counterBookingImg from '../assets/Counter Booking.png';
import flexibleImg from '../assets/flexible.png';
import DemoModal from './DemoModal';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
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
      description: "One place to manage events, track bookings, and control your business operations with real-time insights.",
      icon: <Compass size={16} weight="regular" />,
      image: vendorPortalImg
    },
    {
      title: "Booking Data", 
      description: "Real-time ticket insights, customer analytics, and performance metrics to optimize your sales strategy.",
      icon: <Users size={16} weight="regular" />,
      image: bookingDataImg
    },
    {
      title: "Analytics",
      description: "Advanced revenue tracking, customer demographics, and AI-powered predictions to grow your business.",
      icon: <MagnifyingGlass size={16} weight="regular" />,
      image: analyticsImg
    },
    {
      title: "Counter Booking",
      description: "Seamless offline to online sync. Accept bookings anywhere with our mobile-first approach.",
      icon: <CalendarCheck size={16} weight="regular" />,
      image: counterBookingImg
    }
  ];

  const pricingPlans = [
    {
      id: 0,
      name: "Starter",
      price: "₹2,400",
      subtitle: "For early stage teams",
      description: "Ideal for early stage teams who want actionable insights to move forward.",
      features: [
        "Access to core features",
        "Basic performance reporting", 
        "Email support",
        "Strategy onboarding guide",
        "Monthly check-in summary"
      ]
    },
    {
      id: 1,
      name: "Growth",
      price: "₹4,800",
      subtitle: "Most popular",
      description: "Perfect for growing businesses that need advanced analytics and priority support.",
      features: [
        "Everything in Starter",
        "Advanced analytics dashboard",
        "Priority phone support",
        "Custom integrations",
        "Weekly strategy sessions",
        "Multi-user access"
      ]
    },
    {
      id: 2,
      name: "Scale",
      price: "₹8,400",
      subtitle: "For fast-scaling startups",
      description: "Enterprise-grade solution for businesses ready to scale operations rapidly.",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "White-label solutions",
        "API access",
        "Daily performance insights",
        "Unlimited users",
        "Custom reporting"
      ]
    }
  ];



  return (
    <div className="py-2 md:py-4 space-y-12">
      {/* Products Section - Grovia Style */}
      <section id="products" className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-4"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-5xl font-normal text-primary mb-6"
          >
            4 Core Pillars of Business <span className="text-blue-600">Growth</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Everything you need to streamline operations, understand your customers, and scale your business efficiently.
          </motion.p>
          
          {/* Exact Grovia Navigation Pills */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-[#f0ece6] p-3 rounded-[32px] max-w-4xl mx-auto mb-0"
          >
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-[28px] font-heading text-sm font-medium transition-all duration-200 focus:outline-none ${
                  activeTab === index
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-700 hover:bg-white hover:shadow-md hover:text-gray-900'
                }`}
              >
                {pillar.icon}
                {pillar.title}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Dynamic Content Section - Exact Grovia Rounded Container */}
        <div className="max-w-6xl mx-auto mt-1">
          {/* Outer Rounded Container */}
          <div className="bg-[#FBFAF8] rounded-3xl border border-gray-200 overflow-hidden p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[400px]">
              {/* Left - Rounded Image Container */}
              <motion.div 
                key={`image-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl h-96 overflow-hidden"
              >
                <img 
                  src={pillars[activeTab].image}
                  alt={pillars[activeTab].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
              
              {/* Right - Content Section */}
              <motion.div 
                key={`content-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 py-8"
              >
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-heading text-xs font-medium uppercase tracking-wide">
                  {pillars[activeTab].title}
                </div>
                
                <h3 className="font-heading text-3xl lg:text-4xl font-normal text-gray-900 leading-tight">
                  {pillars[activeTab].title}
                </h3>
                
                <p className="font-heading text-lg text-gray-600 leading-relaxed">
                  {pillars[activeTab].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement & Payout Transparency Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-5xl font-normal text-primary mb-6"
          >
            Settlement & Payout <span className="text-blue-600">Transparency</span>
          </motion.h2>
        </motion.div>

        {/* Expanding Card Gallery */}
        <div className="flex gap-4 h-80">
          {[
            {
              step: "01",
              title: "Booking Confirmed",
              description: "Customer completes payment and booking is instantly confirmed in the system.",
              expandedContent: "Instant confirmation with real-time notifications to both customer and vendor.",
              subtitle: "Instant"
            },
            {
              step: "02", 
              title: "Funds in Wallet",
              description: "Money is secured in your vendor wallet within 24 hours of confirmed booking.",
              expandedContent: "Secure escrow system ensures funds are protected until service completion.",
              subtitle: "24 hours"
            },
            {
              step: "03",
              title: "Bank Transfer",
              description: "Direct deposit to your bank account happens within 48 hours automatically.",
              expandedContent: "Automated bank transfers with full transparency and tracking capabilities.",
              subtitle: "48 hours"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border border-gray-200 transition-all duration-500 cursor-pointer overflow-hidden ${
                activeCard === index 
                  ? 'flex-[2] shadow-xl' 
                  : 'flex-1 hover:shadow-lg'
              }`}
              onClick={() => setActiveCard(index)}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Compressed State */}
              <div className={`p-6 h-full transition-opacity duration-300 ${
                activeCard === index ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="text-4xl font-heading font-light text-gray-300 mb-4">
                  {card.step}
                </div>
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-heading text-xs font-medium mb-4">
                  {card.subtitle}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="font-heading text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Expanded State */}
              <motion.div 
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                initial={false}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0 
                }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="text-5xl font-heading font-light text-white/30 mb-4">
                    {card.step}
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full font-heading text-sm font-medium mb-4 w-fit">
                    {card.subtitle}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="font-heading text-white/90 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flexible Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto px-6 lg:px-8">
          <div 
            className="relative bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url(${flexibleImg})`
            }}
          >
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            <div className="relative z-10 px-8 py-16 lg:px-16 max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-16 items-start">
                {/* Left Side - Pricing Plans */}
                <div className="lg:col-span-2">
                  <h2 className="font-heading text-4xl md:text-5xl font-normal text-white mb-12 whitespace-nowrap">
                    Flexible pricing
                  </h2>
                  
                  <div className="space-y-3">
                    {pricingPlans.map((plan, index) => (
                      <div 
                        key={plan.id}
                        onClick={() => setActivePricingPlan(index)}
                        className={`backdrop-blur-sm rounded-xl p-5 cursor-pointer transition-all duration-200 ${
                          activePricingPlan === index 
                            ? 'bg-white/20' 
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-heading text-lg font-medium text-white mb-1">
                              {plan.name}
                            </h3>
                            <p className={`font-heading text-sm ${
                              activePricingPlan === index ? 'text-white/80' : 'text-white/60'
                            }`}>
                              {plan.subtitle}
                            </p>
                          </div>
                          <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                            activePricingPlan === index 
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

                  <p className="text-white/70 text-sm mt-8 leading-relaxed text-center">
                    Not satisfied with our plans? We offer curated and negotiable pricing. 
                    <span className="text-white underline cursor-pointer hover:text-yellow-400 transition-colors">Contact us</span>
                  </p>
                </div>

                {/* Right Side - Detailed Pricing Card - More Glassy & Narrower */}
                <div className="lg:col-span-3">
                  <motion.div 
                    key={activePricingPlan}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-md"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                      <span className="text-white font-heading text-lg font-medium">
                        {pricingPlans[activePricingPlan].name}
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-4xl font-heading font-bold text-white">
                        {pricingPlans[activePricingPlan].price}
                      </span>
                      <span className="text-white/60 font-heading text-lg">/mo</span>
                    </div>
                    
                    <p className="text-white/70 text-sm mb-8 leading-relaxed">
                      {pricingPlans[activePricingPlan].description}
                    </p>

                    <button 
                      onClick={() => setIsDemoModalOpen(true)}
                      className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-200 mb-8 flex items-center justify-center gap-2"
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
                          <span className="text-white/90 font-heading text-sm">{feature}</span>
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

      {/* Vendor Success Toolkit Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-normal text-gray-900 mb-6">
                Vendor Success Toolkit
              </h2>
              <p className="font-heading text-lg text-gray-600 leading-relaxed mb-8">
                Complete guide with templates, checklists, and strategies to maximize your revenue.  
              </p>
              
              {/* Get Started Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-full font-heading font-medium text-sm hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group"
              >
                Get notified
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" className="text-black" />
                </div>
              </motion.button>
              
              
              {/* Steps List */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-heading text-sm font-bold">
                    01
                  </div>
                  <span className="font-heading text-gray-700">Explore revenue stratagies</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-heading text-sm font-bold">
                    02
                  </div>
                  <span className="font-heading text-gray-700">Understand better techniques</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-heading text-sm font-bold">
                    03
                  </div>
                  <span className="font-heading text-gray-700">Sync your current operations</span>
                </div>
              </div>
            </motion.div>

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
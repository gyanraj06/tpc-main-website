import { motion } from 'framer-motion';
import { 
  Compass, 
  Users, 
  Shield, 
  Lightning, 
  MagnifyingGlass,
  CalendarCheck
} from 'phosphor-react';

const FeaturesSection = () => {
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
      icon: <Compass size={40} weight="regular" />,
    },
    {
      title: "Booking Data", 
      description: "Real-time ticket insights, customer analytics, and performance metrics to optimize your sales strategy.",
      icon: <Users size={40} weight="regular" />,
    },
    {
      title: "Analytics",
      description: "Advanced revenue tracking, customer demographics, and AI-powered predictions to grow your business.",
      icon: <MagnifyingGlass size={40} weight="regular" />,
    },
    {
      title: "Counter Booking",
      description: "Seamless offline to online sync. Accept bookings anywhere with our mobile-first approach.",
      icon: <CalendarCheck size={40} weight="regular" />,
    }
  ];



  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-5xl font-semibold text-primary mb-6"
          >
            4 Core Pillars of Business <span className="text-blue-600">Growth</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to streamline operations, understand your customers, and scale your business efficiently.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 flex justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-3xl md:text-5xl font-medium text-primary mb-6"
            >
              Why Choose <span className="text-blue-600">Mounterra?</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="font-body text-lg md:text-xl text-blue-600 font-semibold max-w-3xl mx-auto"
            >
              More revenue, more control, without hidden fees
            </motion.p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-bold text-primary">Features</th>
                    <th className="px-6 py-4 text-center font-heading font-bold text-blue-600">Mounterra</th>
                    <th className="px-6 py-4 text-center font-heading font-bold text-gray-600">BookMyShow</th>
                    <th className="px-6 py-4 text-center font-heading font-bold text-gray-600">Thrillophilia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-ui font-semibold text-gray-900">Commission Rate</td>
                    <td className="px-6 py-4 text-center font-ui font-bold text-green-600">3-8%</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">10-15%</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">12-18%</td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="px-6 py-4 font-ui font-semibold text-gray-900">Settlement Time</td>
                    <td className="px-6 py-4 text-center font-ui font-bold text-green-600">48 hours</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">7-10 days</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">15-21 days</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-ui font-semibold text-gray-900">Vendor Tools</td>
                    <td className="px-6 py-4 text-center font-ui font-bold text-green-600">AI-powered</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">Basic</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">Limited</td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="px-6 py-4 font-ui font-semibold text-gray-900">Transparency</td>
                    <td className="px-6 py-4 text-center font-ui font-bold text-green-600">Commission Shield</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">No cap</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">Hidden fees</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-ui font-semibold text-gray-900">Setup Fees</td>
                    <td className="px-6 py-4 text-center font-ui font-bold text-green-600">₹0</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">₹25,000+</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">₹15,000+</td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="px-6 py-4 font-ui font-semibold text-gray-900">Customer Support</td>
                    <td className="px-6 py-4 text-center font-ui font-bold text-green-600">24/7 Dedicated</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">Business hours</td>
                    <td className="px-6 py-4 text-center font-ui text-gray-600">Email only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Ready to make the switch?
            </h3>
            <p className="font-body text-gray-600 text-lg mb-8">
              Join hundreds of vendors who've already upgraded their business with Mounterra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-outline">
                Compare Features
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Settlement & Payout Transparency Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Settlement & Payout <span className="text-blue-600">Transparency</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Booking Confirmed",
              subtitle: "Instant",
              description: "Customer completes payment",
              icon: <CalendarCheck size={32} weight="regular" />,
              color: "blue"
            },
            {
              step: "2", 
              title: "Funds in Wallet",
              subtitle: "24 hours",
              description: "Money secured in vendor wallet",
              icon: <Shield size={32} weight="regular" />,
              color: "green"
            },
            {
              step: "3",
              title: "Bank Transfer", 
              subtitle: "48 hours",
              description: "Direct deposit to your account",
              icon: <Lightning size={32} weight="regular" />,
              color: "purple"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className={`mb-6 text-${step.color}-600 flex justify-center`}>
                  {step.icon}
                </div>
                <div className={`inline-block px-3 py-1 bg-${step.color}-100 text-${step.color}-600 rounded-full font-ui font-bold text-sm mb-4`}>
                  {step.subtitle}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting Arrow */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vendor Success Toolkit Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              Free Download: Vendor Success <span className="text-white-600">Toolkit</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Complete guide with templates, checklists, and strategies to maximize your revenue. Used by 1000+ successful vendors.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-button font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Notified
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default FeaturesSection;
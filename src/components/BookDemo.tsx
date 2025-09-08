import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Calendar} from 'phosphor-react';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    businessSize: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div id="book-demo" className="min-h-screen bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white rounded-2xl p-12 shadow-lg"
          >
            <div className="mb-6 text-green-600 flex justify-center">
              <CheckCircle size={64} weight="regular" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Demo Request Submitted!
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8">
              Thank you for your interest in our vendor platform. Our team will reach out to you within 24 hours to schedule your personalized demo.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary inline-flex items-center gap-2"
            >
              Submit Another Request
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div id="book-demo" className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Book a Personalized Demo
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how our vendor platform can transform your business. Get a tailored demonstration of our features and discover how to maximize your revenue.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="font-heading text-2xl font-bold text-primary mb-8">
              What You'll Learn in Your Demo:
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Calendar size={24} weight="regular" className="text-blue-600" />,
                  title: "Dashboard Overview",
                  description: "Comprehensive tour of your vendor dashboard and all available tools"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-heading font-bold text-blue-600 mb-2">
                🎯 Perfect for:
              </h3>
              <ul className="font-body text-blue-700 space-y-1">
                <li>• Tour operators & activity providers</li>
                <li>• Event organizers & experience hosts</li>
                <li>• Hotels & accommodation providers</li>
                <li>• Local guides & cultural experts</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-ui font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block font-ui font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block font-ui font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-ui font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block font-ui font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your business name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-ui font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="tour-operator">Tour Operator</option>
                    <option value="activity-provider">Activity Provider</option>
                    <option value="event-organizer">Event Organizer</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-ui font-medium text-gray-700 mb-2">
                    Business Size
                  </label>
                  <select
                    name="businessSize"
                    value={formData.businessSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select size</option>
                    <option value="solo">Solo Entrepreneur</option>
                    <option value="small">Small (2-10 employees)</option>
                    <option value="medium">Medium (11-50 employees)</option>
                    <option value="large">Large (50+ employees)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-ui font-medium text-gray-700 mb-2">
                  Preferred Demo Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <div>
                <label className="block font-ui font-medium text-gray-700 mb-2">
                  Tell us about your goals
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="What are you hoping to achieve with our platform? Any specific questions?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Scheduling Demo...
                  </>
                ) : (
                  <>
                    Schedule My Demo
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <p className="font-ui text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll only use your information to schedule your demo.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
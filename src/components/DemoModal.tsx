import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import flexibleBg from '../assets/flexible-2.png';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.company
      };

      await emailjs.send(
        'service_vdyohab',
        'template_y875dyu',
        templateParams,
        'Qomz2R7msZcdKQP1b'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '' });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
      style={{
        margin: 0,
        padding: '0.5rem',
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] lg:max-h-[80vh] overflow-y-auto shadow-2xl scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-2 min-h-full">
          {/* Left Side - Background Image */}
          <div className="relative hidden lg:block">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${flexibleBg})`
              }}
            >
              {/* Black Tint Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Optional Content on Left Side */}
            <div className="relative z-10 p-12 h-full flex flex-col justify-center text-white">
              <h3 className="font-heading text-2xl font-normal mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="font-body text-white/80 leading-relaxed">
                Join hundreds of businesses that have streamlined their operations and maximized their revenue with our platform.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Close Button */}
            <div className="flex justify-end mb-4 sm:mb-6">
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="w-full max-w-md mx-auto">
              <h2 className="font-heading text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
                Schedule a Demo
              </h2>
              <p className="font-body text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Let's explore how our platform can transform your business operations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your business email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-yellow-400 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Schedule Demo'}
                  {!isLoading && (
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-600 text-sm text-center"
                  >
                    Demo request sent successfully! We'll contact you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-600 text-sm text-center"
                  >
                    Failed to send request. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DemoModal;
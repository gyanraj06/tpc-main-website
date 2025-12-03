import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CaretDown, Check, CircleNotch } from '@phosphor-icons/react';

interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
}

const CustomDropdown = ({ options, value, onChange, placeholder, required }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-4 bg-transparent border rounded-xl text-base text-left flex items-center justify-between transition-all duration-200 group ${
          isOpen 
            ? 'border-gray-400 ring-1 ring-gray-400' 
            : 'border-[#dcdad5] hover:border-gray-400'
        }`}
      >
        <span className={`truncate mr-2 ${value ? 'text-gray-900' : 'text-gray-500'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <CaretDown 
          weight="bold"
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Hidden input for HTML5 form validation if needed, though we handle it manually mostly */}
      <input 
        type="text" 
        className="sr-only" 
        value={value} 
        onChange={() => {}} 
        required={required} 
        tabIndex={-1}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden py-1"
          >
            <div className="max-h-60 overflow-y-auto scrollbar-hide">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full px-5 py-3 text-left text-base hover:bg-gray-50 flex items-center justify-between group transition-colors"
                >
                  <span className={`truncate mr-2 ${option.value === value ? 'text-gray-900 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {option.label}
                  </span>
                  {option.value === value && (
                    <Check weight="bold" className="w-5 h-5 text-[#BEFF50] flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BookDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    companySize: '',
    interest: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownChange = (name: string, value: string) => {
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
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.companyName,
        company_size: formData.companySize,
        interest: formData.interest,
        message: `Company Size: ${formData.companySize}, Interested In: ${formData.interest}`
      };

      await emailjs.send(
        'service_vdyohab',
        'template_y875dyu',
        templateParams,
        'Qomz2R7msZcdKQP1b'
      );

      setSubmitStatus('success');
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        companyName: '',
        companySize: '',
        interest: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const companySizeOptions = [
    { label: '1-10 employees', value: '1-10' },
    { label: '11-50 employees', value: '11-50' },
    { label: '51-200 employees', value: '51-200' },
    { label: '201-500 employees', value: '201-500' },
    { label: '500+ employees', value: '500+' },
  ];

  const interestOptions = [
    { label: 'Event Builder', value: 'Event Builder' },
    { label: 'Ticketing', value: 'Ticketing' },
    { label: 'Analytics', value: 'Analytics' },
    { label: 'Vendor Management', value: 'Vendor Management' },
    { label: 'Other', value: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f2ee] pt-32 pb-20 px-4 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-[#fbfaf8] rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e6e4df]"
      >
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-medium text-gray-900 mb-3">
            Ready to book a demo?
          </h1>
          <p className="font-body text-gray-600 text-base leading-relaxed">
            Fill in your details and one of our advisors will be in touch to schedule a walk-through and answer any questions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@company.com"
              className="w-full px-5 py-4 bg-transparent border border-[#dcdad5] rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-base"
            />
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="w-full px-5 py-4 bg-transparent border border-[#dcdad5] rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-base"
            />
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name"
              className="w-full px-5 py-4 bg-transparent border border-[#dcdad5] rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-base"
            />
          </div>

          {/* Company Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company name"
              className="w-full px-5 py-4 bg-transparent border border-[#dcdad5] rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-base"
            />
            <CustomDropdown
              options={companySizeOptions}
              value={formData.companySize}
              onChange={(value) => handleDropdownChange('companySize', value)}
              placeholder="Your company size"
              required
            />
          </div>

          {/* Interest Field */}
          <CustomDropdown
            options={interestOptions}
            value={formData.interest}
            onChange={(value) => handleDropdownChange('interest', value)}
            placeholder="I'm interested in"
            required
          />

          {/* Privacy Policy */}
          <p className="text-sm text-gray-500 leading-relaxed">
            We will record your data for marketing purposes. Read more in our <a href="/privacy-policy" className="underline hover:text-gray-800">Privacy Policy</a>.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#BEFF50] hover:bg-[#b1ee4b] text-black text-lg font-medium px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed w-fit"
          >
            {isLoading ? 'Sending...' : 'Schedule a demo'}
            {!isLoading && (
              isLoading ? (
                <CircleNotch className="w-5 h-5 animate-spin" />
              ) : (
                <CaretDown className="w-5 h-5 -rotate-90" weight="bold" />
              )
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
            >
              Request sent successfully! We'll be in touch.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
            >
              Something went wrong. Please try again.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default BookDemo;

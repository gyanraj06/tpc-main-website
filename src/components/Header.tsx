import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'phosphor-react';
import logoImage from '../assets/LogoImage.jpg';
import logoWritten from '../assets/LogoWritten.jpg';

interface HeaderProps {
  onNavigateToDemo: () => void;
  onNavigateToHome: () => void;
}

const Header = ({ onNavigateToDemo, onNavigateToHome }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation data - scroll to sections
  const navLinks = [
    { id: 'hero', label: 'About' },
    { id: 'products', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    if (!isOpen) return;

    const closeMenu = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isOpen]);

  // Subtle diagonal gradient from black to light gray
  const glassClasses = 'bg-gradient-to-br from-black via-gray-900 to-gray-800';

  return (
    <nav
      className="font-nav fixed top-0 z-50 w-full md:py-4 md:px-4"
    >
      {/* Desktop Header */}
      <div
        className={`mx-auto w-fit rounded-full px-6 py-3 ${glassClasses} shadow-[0_4px_25px_rgba(0,0,0,0.25)] hidden md:block`}
      >
        <div className="flex items-center gap-10">
          {/* Left Section - Logo */}
          <button onClick={onNavigateToHome} className="flex items-center">
            <div 
              className="h-6 w-6 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${logoImage})` }}
            ></div>
            <div 
              className="-ml-1 h-6 w-24 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${logoWritten})` }}
            ></div>
          </button>

          {/* Center Section - Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="font-nav text-base text-white/90 transition-colors duration-200 hover:text-white font-normal focus:outline-none"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right Section - CTA Button */}
          <button
            onClick={onNavigateToDemo}
            className="font-button bg-white hover:bg-gray-100 text-black font-medium px-5 py-2 text-sm rounded-full transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg group"
          >
            Contact us
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={12} weight="regular" className="text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={`${glassClasses} py-3 md:hidden w-full`}>
        <div className="flex items-center justify-between px-4">
          {/* Mobile Logo */}
          <button onClick={onNavigateToHome} className="flex items-center">
            <div 
              className="h-8 w-8 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${logoImage})` }}
            ></div>
            <div 
              className="-ml-1 h-8 w-32 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${logoWritten})` }}
            ></div>
          </button>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-1">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-ui bg-[#1E63EF] hover:bg-[#1750CC] text-white font-medium px-3.5 py-0.5 text-2xl rounded-full transition-all duration-200 transform hover:scale-105"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? '✕' : '+'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] md:hidden ${glassClasses} transform shadow-xl transition-all duration-300 z-50 ${
          isOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} weight="regular" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 mb-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className="font-nav block text-lg text-white/90 transition-colors hover:text-white py-2 font-normal tracking-wide w-full text-left focus:outline-none"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Contact Us Button */}
          <button
            onClick={() => {
              onNavigateToDemo();
              setIsOpen(false);
            }}
            className="font-button flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-black font-medium px-6 py-3 rounded-full transition-all duration-200 mb-6 group"
          >
            Contact us
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={14} weight="regular" className="text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Header;
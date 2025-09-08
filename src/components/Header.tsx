import { useState, useEffect } from 'react';
import { X } from 'phosphor-react';

interface HeaderProps {
  onNavigateToDemo: () => void;
  onNavigateToHome: () => void;
}

const Header = ({ onNavigateToDemo, onNavigateToHome }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation data - scroll to sections
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'products', label: 'Features' },
    { id: 'about', label: 'How It Works' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Glass morphism - always dark
  const glassClasses = 'bg-gradient-to-r from-black/60 to-gray-800/60 backdrop-blur-md';

  return (
    <nav
      className={`font-nav fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'md:py-2 md:px-4' : 'md:py-7 md:px-4'
      }`}
    >
      {/* Desktop Header */}
      <div
        className={`mx-auto max-w-7xl rounded-full px-6 py-4 ${glassClasses} shadow-[0_4px_25px_rgba(0,0,0,0.25)] hidden md:block`}
      >
        <div className="flex items-center justify-between">
          {/* Left Section - Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="font-nav text-sm text-white/90 transition-colors duration-200 hover:text-white lg:text-base font-normal tracking-wide"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Center Section - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button onClick={onNavigateToHome} className="flex items-center">
              <div className="h-8 w-8 bg-[url('/src/assets/LogoImage.jpg')] bg-contain bg-no-repeat"></div>
              <div className="-ml-1 h-8 w-32 bg-[url('/src/assets/LogoWritten.jpg')] bg-contain bg-no-repeat"></div>
            </button>
          </div>

          {/* Right Section - CTA Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Button */}
            <button
              onClick={onNavigateToDemo}
              className="font-button bg-[#1E63EF] hover:bg-[#1750CC] text-white font-medium px-4 py-1.5 text-sm rounded-full transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={`${glassClasses} py-3 md:hidden w-full`}>
        <div className="flex items-center justify-between px-4">
          {/* Mobile Logo */}
          <button onClick={onNavigateToHome} className="flex items-center">
            <div className="h-8 w-8 bg-[url('/src/assets/LogoImage.jpg')] bg-contain bg-no-repeat"></div>
            <div className="-ml-1 h-8 w-32 bg-[url('/src/assets/LogoWritten.jpg')] bg-contain bg-no-repeat"></div>
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
                className="font-nav block text-lg text-white/90 transition-colors hover:text-white py-2 font-normal tracking-wide w-full text-left"
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
            className="font-button block w-full text-center bg-[#1E63EF] hover:bg-[#1750CC] text-white font-medium px-6 py-3 rounded-full transition-all duration-200 mb-6"
          >
            Contact Us
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
import { useState, useEffect } from 'react';
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
      className="font-nav fixed top-0 z-50 w-full lg:py-4 lg:px-4"
    >
      {/* Desktop Header */}
      <div
        className={`mx-auto w-fit rounded-full px-6 py-3 ${glassClasses} shadow-[0_4px_25px_rgba(0,0,0,0.25)] hidden lg:block`}
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
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden py-4 px-4 flex justify-center">
        <div className={`${glassClasses} rounded-full px-6 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.25)] w-fit`}>
          <div className="flex items-center gap-10">
            {/* Mobile Logo */}
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

            {/* Mobile Menu Button - Styled like PC contact button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-button bg-white hover:bg-gray-100 text-black font-medium px-5 py-2 text-sm rounded-full transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg group"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              Menu
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <div className="lg:hidden relative">
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-96 max-w-[calc(100vw-1rem)] ${glassClasses} rounded-2xl shadow-xl transition-all duration-500 ease-out z-[60] ${
            isOpen
              ? 'opacity-100 translate-y-2 visible scale-100'
              : 'opacity-0 -translate-y-6 invisible scale-95'
          }`}
        >
          <div className="p-6">
            {/* Navigation Links */}
            <nav className="space-y-4 mb-6">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsOpen(false);
                  }}
                  className="font-nav block text-base text-white/90 transition-colors hover:text-white py-2 font-normal tracking-wide w-full text-center focus:outline-none"
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
              className="font-button flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-black font-medium px-6 py-3 rounded-full transition-all duration-200 group"
            >
              Contact us
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div
            className={`fixed inset-0 bg-black/30 z-[50] transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
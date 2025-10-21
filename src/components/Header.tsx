import { useState, useEffect, useRef } from 'react';
import logoImage from '../assets/LogoImage.jpg';
import logoWritten from '../assets/LogoWritten.jpg';
import {
  CalendarCheck,
  ArrowsClockwise,
  SquaresFour,
  Users,
  Article,
  Ticket,
  ChartBar,
  ChatCircleDots,
  ShareNetwork,
  Globe,
  Handshake,
  BookOpen,
  Newspaper,
  ChartLineUp,
  Headset,
  Question,
  GitCommit,
  Info,
  UsersThree,
  Briefcase,
  CurrencyDollar,
  UsersFour
} from '@phosphor-icons/react';

interface HeaderProps {
  onNavigateToDemo: () => void;
  onNavigateToHome: () => void;
}

const Header = ({ onNavigateToDemo, onNavigateToHome }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Navigation data
  const navLinks = [
    { id: 'products', label: 'Product' },
    { id: 'resources', label: 'Resources' },
    { id: 'company', label: 'Company' },
    { id: 'solutions', label: 'Solutions' },
  ];

  // Product dropdown menu data
  const productMenuData = [
    {
      category: 'Core Experience and Ops',
      items: [
        { label: 'Easy Experience Setup', icon: CalendarCheck, onClick: () => scrollToSection('products') },
        { label: 'Recurring Events', icon: ArrowsClockwise, onClick: () => scrollToSection('products') },
        { label: 'Vendor Dashboard Panel', icon: SquaresFour, onClick: () => scrollToSection('products') },
        { label: 'Attendee Tracking and Insights', icon: Users, onClick: () => scrollToSection('products') },
        { label: 'Custom Registration Form', icon: Article, onClick: () => scrollToSection('products') },
      ]
    },
    {
      category: 'Operations and Management',
      items: [
        { label: 'Smart Ticketing and Payments', icon: Ticket, onClick: () => scrollToSection('products') },
        { label: 'Reporting and Analytics', icon: ChartBar, onClick: () => scrollToSection('products') },
        { label: 'Auto Communication System', icon: ChatCircleDots, onClick: () => scrollToSection('products') },
      ]
    },
    {
      category: 'Marketing and Growth',
      items: [
        { label: 'Social Media Management', icon: ShareNetwork, onClick: () => scrollToSection('products') },
        { label: 'Website Builders and Microsites', icon: Globe, onClick: () => scrollToSection('products') },
      ]
    },
    {
      category: 'Vendor and Brand',
      items: [
        { label: 'Sponsor and Brand Management', icon: Handshake, onClick: () => scrollToSection('products') },
      ]
    }
  ];

  // Resources dropdown menu data
  const resourcesMenuData = [
    {
      category: 'Learn and Grow',
      items: [
        { label: 'Case Studies', icon: BookOpen, onClick: () => scrollToSection('resources') },
        { label: 'Blogs', icon: Newspaper, onClick: () => scrollToSection('resources') },
        { label: 'Comparison', icon: ChartLineUp, onClick: () => scrollToSection('resources') },
      ]
    },
    {
      category: 'Support and Community',
      items: [
        { label: 'Support', icon: Headset, onClick: () => scrollToSection('resources') },
        { label: 'FAQs', icon: Question, onClick: () => scrollToSection('resources') },
        { label: 'Changelogs', icon: GitCommit, onClick: () => scrollToSection('resources') },
      ]
    }
  ];

  // Company dropdown menu data
  const companyMenuData = [
    { label: 'About Us', icon: Info, onClick: () => scrollToSection('company') },
    { label: 'Our Team', icon: UsersThree, onClick: () => scrollToSection('company') },
    { label: 'Career', icon: Briefcase, onClick: () => scrollToSection('company') },
    { label: 'Pricing', icon: CurrencyDollar, onClick: () => scrollToSection('company') },
    { label: 'Partner with Us', icon: UsersFour, onClick: () => scrollToSection('company') },
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
    <nav className="font-nav fixed top-0 z-50 w-full lg:py-4 lg:px-4">
      {/* Backdrop Blur - Desktop */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm transition-all duration-300 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      {/* Desktop Header */}
      <div
        ref={navbarRef}
        className={`mx-auto w-fit rounded-full px-8 py-3 ${glassClasses} shadow-[0_4px_25px_rgba(0,0,0,0.25)] hidden lg:block relative z-50`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
          <div className="flex items-center gap-12">
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

            {/* Center Section - Navigation Links with Dropdowns */}
            <div className="flex items-center gap-8">
              {navLinks.map(({ id, label }) => (
                <div
                  key={id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(id)}
                >
                  <button className="font-nav text-base text-white/90 transition-colors duration-200 hover:text-white font-normal focus:outline-none py-2">
                    {label}
                  </button>
                </div>
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
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>

        {/* Invisible bridge between navbar and dropdown */}
        {activeDropdown && (
          <div className="absolute top-full left-0 right-0 h-6 z-50" />
        )}

        {/* Dropdown Container - Full Width of Navbar */}
        {activeDropdown && (
          <div
            className={`absolute top-full left-0 right-0 pt-6 z-50 ${
              activeDropdown
                ? 'opacity-100 translate-y-0 visible'
                : 'opacity-0 -translate-y-2 invisible pointer-events-none'
            }`}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className={`${glassClasses} rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out`}>
            {activeDropdown === 'products' ? (
              <div className="p-6">
                <div className="flex gap-x-8">
                  <div className="flex-1 space-y-6">
                    {/* Core Experience and Ops */}
                    <div>
                      <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                        {productMenuData[0].category}
                      </h3>
                      <div className="space-y-1">
                        {productMenuData[0].items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={itemIndex}
                              onClick={() => {
                                item.onClick();
                                setActiveDropdown(null);
                              }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group text-left"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                                <Icon className="w-5 h-5 text-white/90" weight="regular" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white/90 text-sm font-normal group-hover:text-white transition-colors duration-200">
                                  {item.label}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Marketing and Growth */}
                    <div>
                      <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                        {productMenuData[2].category}
                      </h3>
                      <div className="space-y-1">
                        {productMenuData[2].items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={itemIndex}
                              onClick={() => {
                                item.onClick();
                                setActiveDropdown(null);
                              }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group text-left"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                                <Icon className="w-5 h-5 text-white/90" weight="regular" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white/90 text-sm font-normal group-hover:text-white transition-colors duration-200">
                                  {item.label}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    {/* Operations and Management */}
                    <div>
                      <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                        {productMenuData[1].category}
                      </h3>
                      <div className="space-y-1">
                        {productMenuData[1].items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={itemIndex}
                              onClick={() => {
                                item.onClick();
                                setActiveDropdown(null);
                              }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group text-left"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                                <Icon className="w-5 h-5 text-white/90" weight="regular" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white/90 text-sm font-normal group-hover:text-white transition-colors duration-200">
                                  {item.label}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Vendor and Brand */}
                    <div>
                      <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                        {productMenuData[3].category}
                      </h3>
                      <div className="space-y-1">
                        {productMenuData[3].items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={itemIndex}
                              onClick={() => {
                                item.onClick();
                                setActiveDropdown(null);
                              }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group text-left"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                                <Icon className="w-5 h-5 text-white/90" weight="regular" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white/90 text-sm font-normal group-hover:text-white transition-colors duration-200">
                                  {item.label}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeDropdown === 'resources' ? (
              <div className="p-6">
                <div className="flex gap-x-8">
                  <div className="flex-1">
                    {/* Learn and Grow */}
                    <div>
                      <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                        {resourcesMenuData[0].category}
                      </h3>
                      <div className="space-y-1">
                        {resourcesMenuData[0].items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={itemIndex}
                              onClick={() => {
                                item.onClick();
                                setActiveDropdown(null);
                              }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group text-left"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                                <Icon className="w-5 h-5 text-white/90" weight="regular" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white/90 text-sm font-normal group-hover:text-white transition-colors duration-200">
                                  {item.label}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Support and Community */}
                    <div>
                      <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                        {resourcesMenuData[1].category}
                      </h3>
                      <div className="space-y-1">
                        {resourcesMenuData[1].items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={itemIndex}
                              onClick={() => {
                                item.onClick();
                                setActiveDropdown(null);
                              }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group text-left"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                                <Icon className="w-5 h-5 text-white/90" weight="regular" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white/90 text-sm font-normal group-hover:text-white transition-colors duration-200">
                                  {item.label}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeDropdown === 'company' ? (
              <div className="p-6">
                <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3 text-center">
                  Company
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-2xl mx-auto">
                  {companyMenuData.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={itemIndex}
                        onClick={() => {
                          item.onClick();
                          setActiveDropdown(null);
                        }}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group text-left"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                          <Icon className="w-5 h-5 text-white/90" weight="regular" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/90 text-sm font-normal group-hover:text-white transition-colors duration-200">
                            {item.label}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="p-6">
                <p className="text-white/70 text-sm text-center">
                  Content for {navLinks.find(link => link.id === activeDropdown)?.label}
                </p>
              </div>
            )}
            </div>
          </div>
        )}
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
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
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
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
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

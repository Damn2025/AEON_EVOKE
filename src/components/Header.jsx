import React, { useState, useEffect } from 'react';
import './Header.css';

/**
 * Header Component
 * Fixed header with navigation menu and mobile menu functionality
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [headerHeight, setHeaderHeight] = useState(80);
  const headerRef = React.useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  // Close menu when clicking overlay or links
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  // Calculate header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Handle scroll for header shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }

      // Determine active section based on scroll position
      const sections = ['reality', 'roi', 'features', 'evoke', 'pricing', 'testimonials', 'start'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Header - Not Fixed */}
      <header
        ref={headerRef}
        id="header"
        className="relative z-50 bg-transparent"
      >
        <div className="container mx-auto px-6 py-6 md:py-8 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter text-white hover:scale-105 transition-transform duration-300 group"
          >
            <span className="relative">
              EVOKE
              
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 px-4 py-4">
            {[
              { href: '#reality', label: 'Task Management' },
              { href: '#roi', label: 'ROI' },
              { href: '#features', label: 'Features' },
              { href: '#evoke', label: 'Why Choose AEON' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#start', label: 'Get Started' },
            ].map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-yellow-500'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full"></span>
                  )}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500/50 rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              );
            })}
          </nav>

          <a
            href="#"
            className="hidden md:block cta-button relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-6 py-2 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10">Try AEON Today</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-[60]">
            <button
              id="menu-btn"
              type="button"
              className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              onClick={toggleMenu}
            >
              <svg
                id="menu-open-icon"
                className={`w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'hidden opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                id="menu-close-icon"
                className={`w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'hidden opacity-0 -rotate-90'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Blur Ribbon - Below Header */}
      <div
        className={`fixed left-0 right-0 z-40 h-12 md:h-14 transition-all duration-300 flex items-center justify-between ${
          headerShadow
            ? 'backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-yellow-500/20 top-0'
            : 'backdrop-blur-md'
        }`}
        style={{
          backgroundColor: 'rgb(255 255 255 / 1%)',
          ...(headerShadow ? { top: '0px' } : { top: `${headerHeight}px` })
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between w-full">
          <span className="text-white text-sm md:text-base font-medium font-extrabold">
            AEON 
            <span className="text-yellow-500 ml-1"> AI Assistant </span>
            
          </span>
          <a
            href="#start"
            className="bg-gradient-to-r from-white to-white text-black font-semibold px-4 py-1.5 md:px-6 md:py-2 rounded-lg  transition-all duration-300 shadow-lg  hover:scale-105 text-sm md:text-base flex items-center gap-2 group"
          >
            GET Started
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 w-4/5 max-w-sm h-full bg-gradient-to-b from-[#0A0A0A] to-[#101010] shadow-2xl border-l border-yellow-500/20 transform transition-transform duration-300 flex flex-col p-8 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-grow">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter text-white mb-12 block hover:scale-105 transition-transform duration-300 inline-block"
            onClick={closeMenu}
          >
            EVOKE <span className="text-yellow-500">.</span>
          </a>
          <nav className="flex flex-col space-y-2">
            {[
              { href: '#reality', label: 'Task Management' },
              { href: '#roi', label: 'ROI' },
              { href: '#features', label: 'Features' },
              { href: '#evoke', label: 'Why Choose AEON' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#start', label: 'Get Started' },
            ].map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`mobile-menu-link relative px-4 py-3 text-lg rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-yellow-500 bg-yellow-500/10 border-l-2 border-yellow-500'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                  }`}
                  onClick={closeMenu}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
        <a
          href="#"
          className="w-full text-center cta-button bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-8 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
          onClick={closeMenu}
        >
          Try AEON Today
        </a>
      </div>

      {/* Menu Overlay */}
      <div
        id="menu-overlay"
        className={`md:hidden fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Header;


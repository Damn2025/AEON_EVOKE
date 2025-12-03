import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTopButton Component
 * Fixed floating button that appears when user scrolls down, allowing smooth scroll to top
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down more than 300px
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px down
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup: Remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        // Conditional classes: Show/hide with fade and slide animation
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-black" />
    </button>
  );
};

export default ScrollToTopButton;


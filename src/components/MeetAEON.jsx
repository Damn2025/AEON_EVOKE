import React from 'react';
import aeonImage from '../assets/AEON.png';
import aeonMobileImage from '../assets/Aeonmob.png';

/**
 * Meet AEON Section
 * Introduction section with large, bold text on white background
 */
const MeetAEON = () => {
  return (
    <section id="meet-aeon" className="w-full flex flex-col items-center justify-center ">
      {/* Hero Image Container - Responsive sizing with yellow border and glow effect */}
      <div className='w-full max-w-7xl mx-auto h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[990px] rounded-[38px] md:rounded-[83px] overflow-hidden mt-8 sm:mt-6 md:mt-8 relative flex items-start justify-center border-2' style={{ borderColor: '#FBCE33', boxShadow: '0 0 20px rgba(251, 206, 51, 0.6), 0 0 40px rgba(251, 206, 51, 1), 0 0 80px rgba(251, 206, 51, 0.2)' }} >
        {/* Mobile Image - Visible on small screens only */}
        <img 
          src={aeonMobileImage} 
          alt="AEON" 
          className="w-full h-full object-cover object-top md:hidden rounded-[38px]"
          style={{ objectPosition: 'center top' }}
        />
        {/* Desktop Image - Visible on medium screens and above */}
        <img 
          src={aeonImage} 
          alt="AEON" 
          className="hidden md:block w-full h-full object-cover object-top rounded-[83px]"
          style={{ objectPosition: 'center top' }}
        />
      </div>

      {/* Text Content Section - Below the image */}
      <div className="container mx-auto px-6 sm:px-6 md:px-12 mt-12 sm:mt-16 md:mt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading - "Meet AEON — your dedicated AI Assistant" */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800 }}
          >
            {/* Keep heading on one line using whitespace-nowrap */}
            <span className="whitespace-nowrap inline-block">
              Meet{" "}
              {/* Gradient text effect for "AEON —" */}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                AEON —
              </span>{" "}
              your dedicated{" "}
              {/* Gradient text effect for "AI Assistant" */}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">
                AI Assistant
              </span>
            </span>
          </h2>

          {/* Body Paragraph - Description of AEON */}
          <p
            className="mt-6 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            AEON is your first step towards{" "}
            {/* Highlighted text with gradient */}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-semibold">
              AI adoption.
            </span>{" "}
            Powered by{" "}
            {/* Highlighted "EVOKE" with gradient */}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">
              EVOKE
            </span>
            , AEON transforms your knowledge base into an intelligent assistant that engages customers,
            captures qualified leads, and automates responses with precision. It turns everyday interactions
            into{" "}
            {/* Highlighted text with gradient */}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">
              measurable business outcomes
            </span>{" "}
            effortlessly and at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetAEON;

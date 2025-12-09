import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import AstroremedisLogo from '../assets/Astroremedis.png';
import EduonixLogo from '../assets/eduonix.png';
import SipconLogo from '../assets/Sipcon.jpg';
import damnartLogo from '../assets/Damnart.png';
import eurocertLogo from '../assets/eurocert.webp';
import itcLogo from '../assets/itc.png';
import sustainableLogo from '../assets/Sustainable.png';
import grnataLogo from '../assets/Grnata.png';

/**
 * TrustedBy Component
 * Marquee section displaying trusted organizations with logos
 */
const TrustedBy = () => {
  const ref = useScrollAnimation();

  const companies = [
    { name: 'Damnart', logo: damnartLogo, displayName: 'Damnart' },
    { name: 'Eurocert', logo: eurocertLogo, displayName: 'Eurocert' },
    { name: 'ITC India', logo: itcLogo, displayName: 'ITC India' },
    { name: 'Sustainable Futures Trainings', logo: sustainableLogo, displayName: 'Sustainable Futures Trainings' },
    { name: 'Grnata', logo: grnataLogo, displayName: 'Grnata' },
    {name:'Sipcon', logo: SipconLogo, displayName:'Sipcon'},
    {name:'Astroremedis', logo: AstroremedisLogo, displayName:'Astroremedis'},
    {name:'Eduonix', logo: EduonixLogo, displayName:'Eduonix'}

  ];

  return (
    <section className="py-16 bg-[#0A0A0A] border-t border-b border-gray-900/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-400 font-semibold mb-10 tracking-wider uppercase">
          TRUSTED BY VISIONARY ORGANIZATIONS FOR 24/7 INTELLIGENCE
        </p>
        <div ref={ref} className="marquee animate-on-scroll fade-in">
          <div className="marquee-content">
            {/* Duplicate content multiple times for seamless endless loop */}
            {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
              <div 
                key={index} 
                className="marquee-item flex flex-col items-center justify-center gap-3 group"
              >
                {/* Logo */}
                <div className="relative w-12 h-16 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-125 bg-white rounded-lg p-1.5 md:p-2 group-hover:bg-gray-100 shadow-md group-hover:shadow-lg">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* Company Name */}
                <div className="text-gray-400 text-sm md:text-base font-semibold text-center whitespace-nowrap group-hover:text-gray-300 transition-colors duration-300">
                  {
                    company.displayName
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;


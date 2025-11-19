import React from 'react';

/**
 * Meet AEON Section
 * Introduction section with large, bold text on white background
 */
const MeetAEON = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl">
          <p 
            className="text-2xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-left leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Meet AEON —</span> <span className='font-semibold text-white'>your smart platform to build <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">custom AI chatbots</span> that drive <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">real business results</span>. Engage visitors, capture <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">high-intent leads</span>, and automate responses with <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">precision</span>. AEON helps you convert everyday interactions into <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">meaningful outcomes</span> — effortlessly and at scale. </span>
          </p>
        </div>
      </div>
      <div className='w-[80%] h-[600px] bg-yellow-500/10 rounded-lg'>
         
      </div>
    </section>
  );
};

export default MeetAEON;


import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import Orb from '../utilities/orb';


/**
 * Agent AEON Introduction Component
 * Introduction section for Agent AEON customer support AI
 */
const Hero = () => {
  const titleRef = useScrollAnimation();
  const badgeRef = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] overflow-hidden  md:py-32">
      {/* Orb Background */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] absolute top-[45%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-1/3 w-48 h-48 md:w-96 md:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 md:w-96 md:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex justify-center">
          <div className="text-center max-w-6xl">
          

            <h2
              ref={titleRef}
              className="animate-on-scroll fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">AEON</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold text-gray-300 mt-2 block text-center" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Your First Step Towards
                <br />
                AI Adoption
              </span>
            </h2>

            {/* Animated Text Section */}
            {/* <div
              ref={animatedTextRef}
              className="animate-on-scroll fade-in-up delay-200 mt-8 mb-6"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Turn conversations into more{' '}
                <span className="relative inline-block overflow-hidden ">
                  <span
                    key={currentWordIndex}
                    className={`inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-extrabold ${
                      isAnimating ? 'animate-slide-up-out' : 'animate-slide-up-in'
                    }`}
                  >
                    {words[currentWordIndex]}
                  </span>
                </span>
              </p>
            </div> */}

            {/* <p
              ref={subtitleRef}
              className="animate-on-scroll fade-in-up delay-100 mt-6 max-w-6xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Designed to deliver <span className="text-yellow-400 font-semibold">instant, intelligent and personalized </span> interactions for your visitors  <span className="text-yellow-400 font-semibold">— anytime, anywhere </span>. Whether guiding users, capturing leads, or <span className="text-yellow-400 font-semibold">answering complex questions </span>, AEON elevates every customer moment with smart automation and human-like clarity.
            </p> */}

            {/* Buttons - Hidden on mobile, flex row for big screens */}
            <div className="hidden md:flex flex-row animate-on-scroll fade-in-up delay-200 mt-10 items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-6 py-3 md:px-8 md:py-3.5 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 text-base flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                GET Started
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              <a
                href="#capabilities"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#capabilities');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-transparent border-2 border-yellow-500/50 text-yellow-400 font-semibold px-6 py-3 md:px-8 md:py-3.5 rounded-lg hover:border-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105 text-base"
              >
                Know More
              </a>
            </div>

             {/* Badge - Hidden on mobile, shown below buttons */}
             <div
              ref={badgeRef}
              className="hidden md:block animate-on-scroll fade-in-up mt-10 inline-block"
            >
              <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                  Powered By Evoke
              </span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Buttons and Badge for Mobile - Positioned below orb */}
      <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 w-full px-6 z-20">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Buttons */}
          <div className="animate-on-scroll fade-in-up delay-200 flex items-center justify-center gap-4">
            <a
              href="#start"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#start');
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 text-base flex items-center justify-center gap-2 group w-full sm:w-auto whitespace-nowrap"
            >
              GET Started
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#features');
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-transparent border-2 border-yellow-500/50 text-yellow-400 font-semibold px-3 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105 text-base w-full sm:w-auto text-center"
            >
              Know More
            </a>
          </div>
          {/* Badge */}
          <div className="animate-on-scroll fade-in-up delay-300 inline-block mt-2">
            <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Powered By Evoke
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import proactiveEngagementImage from '../assets/Engagement.jpg';
import MultiLanguage from '../assets/MultiLingual.png';

import DeployImage from '../assets/Deploy3.png';
import UploadImage from '../assets/Upload.png';
import Customer from '../assets/Customerss.png'

/**
 * Agent AEON Capabilities Component
 * "What Can Agent AEON Do?" section with animated cards
 */
const AgentAEONCapabilities = () => {
  const titleRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();
  const card4Ref = useScrollAnimation();
  const card5Ref = useScrollAnimation();
  const card6Ref = useScrollAnimation();

  const capabilities = [
    {
      title: 'Proactive Engagement',
      description: ' AEON proactively guides users, recommends next steps, and highlights key actions to improve conversions, support outcomes, and user satisfaction.',
      image: proactiveEngagementImage,
    },
    {
      title: 'Deploy Anywhere You Need It',
      description: 'Embed your AEON chatbot across websites, landing pages, portals, or dashboards with a single script — keeping every touchpoint consistent, responsive, and brand-aligned.',
      image: DeployImage,
    },
    {
      title: 'Multi Language Support',
      description: 'AEON supports over 100 languages, making it easy to serve customers in their preferred language. Whether it\'s English, Spanish, French, German, or any other language, AEON can handle it all.',
      image: MultiLanguage,
    },
    {
      title: 'Powered by Your Knowledge',
      description: 'AEON is trained on your documents, URLs, FAQs, and product data, delivering responses that are always accurate, updated, and aligned with your brand messaging.',
      image: UploadImage,
    },
    // {
    //   title: 'Instant Checkout in Chat',
    //   description: 'Accept payments directly inside the chat to close sales the moment customers are ready to buy. Remove extra steps, reduce drop-offs, and turn your conversations into instant conversions with a smooth, secure in-chat checkout experience.',
    //   image: SeamlessIntegrationsImage,
    // },
 
  ];

  const refs = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

  return (
    <section id="capabilities" className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Key features that<span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> power</span> your business.
          </h2>
          <p className="text-base sm:text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Powerful capabilities designed to transform your customer support operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const delay = `delay-${(index + 1) * 100}`;
            return (
              <div
                key={index}
                ref={refs[index]}
                className={`animate-on-scroll fade-in-up ${delay} group`}
              >
                <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 bg-[#1A1A1A]">
                  {/* Content Section - Top */}
                  <div className="p-8 flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {capability.description}
                    </p>
                  </div>

                  {/* Image Section - Bottom */}
                  <div className="relative h-[350px] overflow-hidden">
                    <img 
                      src={capability.image} 
                      alt={capability.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Optional overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Full width last card with row layout */}
        <div
          key={6}
          ref={refs[5]}
          className="animate-on-scroll fade-in-up delay-600 group mt-8 max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 bg-[#1A1A1A]">
            {/* Content Section - Left */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Instant Checkout in Chat
              </h3>
              <p className="text-gray-300 leading-relaxed text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Accept payments directly inside the chat to close sales the moment customers are ready to buy. Remove extra steps, reduce drop-offs, and turn your conversations into instant conversions with a smooth, secure in-chat checkout experience.
              </p>
            </div>

            {/* Image Section - Right */}
            <div className="relative w-full lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
              <img 
                src={Customer} 
                alt="Instant Checkout in Chat"
                className="w-full  object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Optional overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentAEONCapabilities;
import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import proactiveEngagementImage from '../assets/Proactive_Engagement.png';
import knowledgeImage from '../assets/knowledge.png';
import seamlessIntegrationsImage from '../assets/Seamless_Integrations.png';

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
      gradient: 'from-yellow-500 to-yellow-600',
      image: proactiveEngagementImage,
    },
    {
      title: 'Deploy Anywhere You Need It',
      description: 'Embed your AEON chatbot across websites, landing pages, portals, or dashboards with a single script — keeping every touchpoint consistent, responsive, and brand-aligned.',
      gradient: 'from-yellow-600 to-yellow-700',
    },
    {
      title: 'Workflow & Task Automation',
      description: 'Automate repetitive interactions like lead capture, form submission, appointment booking, and data lookup so your team can focus on higher-impact work while AEON handles the rest.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Powered by Your Knowledge',
      description: 'AEON is trained on your documents, URLs, FAQs, and product data, delivering responses that are always accurate, updated, and aligned with your brand messaging.',
      gradient: 'from-yellow-500 to-yellow-600',
      image: knowledgeImage,
    },
    {
      title: 'Conversion-Focused Interactions',
      description: 'From identifying high-intent visitors to qualifying leads, AEON turns customer conversations into trackable business outcomes, helping you grow faster with less effort.',
      gradient: 'from-yellow-600 to-yellow-500',
    },
    {
      title: 'Seamless Integrations',
      description: 'Connect AEON with your tools — CRM, email platforms, analytics, or internal systems — to create an end-to-end automated customer experience.',
      gradient: 'from-yellow-500 to-orange-500',
      image: seamlessIntegrationsImage,
    },
  ];

  const refs = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

  return (
    <section id="capabilities" className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Can <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Agent AEON</span> Do?
          </h2>
          <p className="text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Powerful capabilities designed to transform your customer support operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const delay = `delay-${(index + 1) * 100}`;
            return (
              <div
                key={index}
                ref={refs[index]}
                className={`animate-on-scroll fade-in-up ${delay} group`}
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
                  {/* Image or Golden Yellow Background */}
                  {capability.image ? (
                    <div className="absolute inset-0">
                      <img 
                        src={capability.image} 
                        alt={capability.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20"></div>
                    </div>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} transition-all duration-500 group-hover:brightness-110`}></div>
                  )}

                  {/* Overlay with text - slides up from bottom on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/95 via-black/90 to-black/70">
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentAEONCapabilities;


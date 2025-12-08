import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * Testimonials Component
 * Marquee section displaying customer testimonials
 */
const Testimonials = () => {
  const titleRef = useScrollAnimation();
  const marqueeRef = useScrollAnimation();

  const testimonials = [
    {
      text: "AEON tripled our lead qualification rate in the first month. Our sales team now only talks to high-intent leads, and our pipeline has never been stronger.",
      name: 'Jane Smith',
      role: 'VP of Sales, Nexus Inc.',
      initials: 'JS',
    },
    {
      text: "We cut our support ticket AHT by 65%. AEON handles 90% of our tier-1 queries, freeing our support staff for complex issues. It's a game-changer.",
      name: 'Michael Doe',
      role: 'Director of Support, Quantum',
      initials: 'MD',
    },
    {
      text: "The no-code builder is incredibly powerful. We automated our entire partner onboarding workflow in an afternoon. What used to take days now takes minutes.",
      name: 'Alex Lee',
      role: 'Head of Operations, Aperture',
      initials: 'AL',
    },
    {
      text: "Finally, an AI that understands security. The compliance and data protection features gave our CISO the confidence to deploy this across the entire company.",
      name: 'Rachel Brown',
      role: 'CTO, Zenith Solutions',
      initials: 'RB',
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-[#101010] overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Don't Just Take  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Our Word For It</span>
          </h2>
          <p className="mt-4 text-gray-400">
            See how AEON is driving real results for visionary teams.
          </p>
        </div>

        <div ref={marqueeRef} className="mt-16 animate-on-scroll fade-in testimonial-container">
          <div className="testimonial-marquee-content">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card-item">
                <div className="testimonial-card">
                  <p className="text-lg text-gray-300">{testimonial.text}</p>
                  <div className="mt-6 flex items-center">
                    <img
                      src={`https://placehold.co/50x50/FFC700/0A0A0A?text=${testimonial.initials}`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-500"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


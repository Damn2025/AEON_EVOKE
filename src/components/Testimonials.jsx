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
  text: "AEON helped DamnArt automate customer conversations without writing a single line of code. We saw better engagement and higher-quality inquiries within the first few weeks.",
  name: 'Aarav Mehta',
  role: 'Growth Lead, DamnArt',
  initials: 'AM',
},
{
  text: "For Meddevices, accuracy and compliance are critical. AEON’s chatbot handles medical queries efficiently while maintaining data protection and reducing our response time drastically.",
  name: 'Dr. Neha Sharma',
  role: 'Product Lead, Meddevices',
  initials: 'NS',
},
{
  text: "AEON streamlined Eurocert’s certification support end-to-end. From application guidance to document queries, the chatbot reduced manual effort and improved turnaround time.",
  name: 'Rohit Verma',
  role: 'Operations Manager, Eurocert',
  initials: 'RV',
},
{
  text: "The AEON no-code builder integrated seamlessly with Zoho for Sipcoin. We automated lead handling, ticket routing, and follow-ups in hours instead of days.",
  name: 'Kunal Patel',
  role: 'Automation Head, Sipcoin',
  initials: 'KP',
},
{
  text: "AEON’s property chatbot transformed how Grnata engages buyers. It filters high-intent leads and provides instant responses, making property discovery faster and smarter.",
  name: 'Priya Nair',
  role: 'Business Director, Grnata',
  initials: 'PN',
},
{
  text: "AEON enabled Astro Remedies to launch a Kundali analysis chatbot with ease. Users now receive instant, personalized astrological insights and remedies without manual consultation.",
  name: 'Pandit Rakesh Mishra',
  role: 'Chief Astrologer, Astro Remedies',
  initials: 'RM',
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


import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "AWeroNVwYG4aGzG1D");
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    setSubmitStatus({ type: '', message: '' });
    setIsSubmitting(false);
  };

  const cards = [
    {
      title: "Starter Chatbot",
      desc: "Ideal for simple rule‑based chatbots",
      tag: "Tailored to Your Needs",
      features: ["Rule‑based or basic AI", "Simple flows & FAQs", "Integrations optional"],
      pain: ["Customers drop off due to slow responses", "Manual support takes too much time"],
      solution: ["Automate repetitive queries instantly", "Keep customers engaged 24/7"],
      button: "Request Quote"
    },
    {
      title: "Advanced AI Chatbot",
      desc: "For businesses needing custom AI & automation",
      tag: "Custom Pricing",
      features: ["NLP + AI capabilities", "Integrations & APIs", "Dashboard / automations"],
      pain: ["Hard to scale customer conversations", "Limited automation slows workflows"],
      solution: ["NLP + AI capabilities", "Integrations & APIs"],
      button: "Get Custom Quote",
    },
    {
      title: "Enterprise Chatbot",
      desc: "For large‑scale automation",
      tag: "Let's Discuss",
      features: ["Fully custom development", "Self‑host / On‑premise", "End‑to‑end automation"],
      pain: ["Managing huge conversation volumes is complex", "High security & compliance requirements", "Need for custom workflows across departments"],
      solution: ["Enterprise‑grade AI automation", "Custom integrations & secure on‑prem deployment", "Advanced NLP + AI automation across teams"],
      button: "Book Consultation",
    },
  ];

  return (
    <div id="pricingSection" className="min-h-screen bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 "style={{ fontFamily: "'Outfit', sans-serif" }}>
            Find the <span className="section-title">Perfect Plan</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg "style={{ fontFamily: "'Poppins', sans-serif" }}>
             Choose the AEON intelligence layer your business needs — tailored to support your goals, your workflows, and your customers.
          </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-8"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, borderColor: '#FFC700' }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-[320px] bg-[#121212] shadow-xl rounded-2xl p-8 border border-[#2A2A2A] flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
            <p className="text-gray-400 mt-2">{card.desc}</p>
            <div className="text-xl font-bold mt-4 text-yellow-400">{card.tag}</div>

            <ul className="mt-6 space-y-3 text-gray-300">
              {card.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-yellow-400">✔</span> {f}
                </li>
              ))}
            </ul>

            {/* Pain Points */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-red-500 mb-2">Pain Points</h4>
              <ul className="space-y-2 text-gray-400">
                {card.pain?.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2"><span>⚠️</span> {p}</li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-green-500 mb-2">Solution</h4>
              <ul className="space-y-2 text-gray-400">
                {card.solution?.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2"><span>✨</span> {s}</li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                setSelectedPlan(card);
                setIsModalOpen(true);
              }}
              className="mt-auto w-full py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition"
            >
              {card.button}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Form */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1A1A1A] rounded-2xl border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {selectedPlan?.button}
                  </h3>
                  <p className="text-gray-400">Selected Plan: <span className="text-yellow-500 font-semibold">{selectedPlan?.title}</span></p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus({ type: '', message: '' });

                  // Prepare EmailJS template parameters
                  const templateParams = {
                    fullName: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company || 'Not provided',
                    message: formData.message || 'No additional message',
                    subject: selectedPlan?.button || 'N/A',
                  
                  };

                  try {
                    // Send email using EmailJS service
                    await emailjs.send(
                      process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_1wzzo5z",
                      "template_pw54fxy",
                      templateParams
                    );

                    // Show success message
                    setSubmitStatus({ 
                      type: 'success', 
                      message: 'Thank you! We will contact you soon.' 
                    });

                    // Reset form and close modal after a short delay
                    setTimeout(() => {
                      closeModal();
                      setSubmitStatus({ type: '', message: '' });
                    }, 2000);
                  } catch (err) {
                    // Log error in development mode only
                    if (process.env.NODE_ENV === 'development') {
                      console.error('❌ EmailJS Error:', err);
                    }

                    // Show error message
                    setSubmitStatus({ 
                      type: 'error', 
                      message: 'Failed to send request. Please try again or contact us directly.' 
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements or any questions..."
                  />
                </div>

                {/* Selected Plan Info */}
                <div className="bg-[#0A0A0A] border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Selected Plan Details:</p>
                  <p className="text-white font-semibold">{selectedPlan?.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{selectedPlan?.desc}</p>
                  <p className="text-yellow-500 text-sm mt-2">{selectedPlan?.tag}</p>
                </div>

                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`p-3 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-yellow-500 text-black hover:bg-yellow-600'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 rounded-xl bg-transparent border-2 border-gray-600 text-gray-300 font-semibold hover:bg-gray-800 hover:border-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
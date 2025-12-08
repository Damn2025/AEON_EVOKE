import { motion } from "framer-motion";

export default function PricingSection() {
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
    <div className="min-h-screen bg-[#0A0A0A] py-20 px-4">
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

            <button className="mt-auto w-full py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition">
              {card.button}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
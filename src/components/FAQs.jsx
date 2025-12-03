import React, { useState } from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { 
  HelpCircle, 
  MessageCircleQuestion, 
  ChevronDown,
  FileQuestion,
  
  Lightbulb,
  Mail,
  UserCheck,
  Globe,
  Settings
} from 'lucide-react';

/**
 * FAQs Component
 * Frequently Asked Questions section with accordion-style expandable items
 */
const FAQs = () => {
  const titleRef = useScrollAnimation();
  const containerRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is AEON and how does it work?',
      answer: 'AEON is an AI-powered customer support assistant that learns from your knowledge base to provide instant, accurate responses. Simply upload your documents, FAQs, and policies, and AEON processes them to deliver intelligent support 24/7.',
      icon: <Settings className="w-6 h-6" />,
    },
    {
      question: 'What types of files can I upload to AEON?',
      answer: 'AEON supports multiple file formats including PDFs, Word documents (.DOCX), text files (.TXT), JSON files, images (.PNG), videos (.MP4, .WEBM), spreadsheets (.CSV), and web URLs. Your knowledge base can include product guides, FAQs, policy documents, and any other relevant information.',
      icon: <FileQuestion className="w-6 h-6" />,
    },
   
    {
      question: 'Can AEON integrate with my existing systems?',
      answer: 'Yes! AEON offers seamless integrations with popular CRM systems, email platforms, analytics tools, and internal systems. This allows you to create an end-to-end automated customer experience that connects with your existing workflow.',
      icon: <MessageCircleQuestion className="w-6 h-6" />,
    },
    {
      question: 'Do I need any technical or editing experience?',
      answer: 'No. The tool handles script writing, slide design, voiceovers, and formatting. You just upload your content and the AI builds the course.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      question: 'Does it support multiple languages?',
      answer: 'Yes. AEON’s language capabilities depend on the model selected, allowing you to build multilingual chatbots with ease.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
        question: 'I\'ve still got questions.',
        answer: 'No worries! Feel free to reach out at support@aeon.ai if you have any questions – just click the chat icon on the right side and ask AEON Assist anytime.”',
        icon: <Mail className="w-6 h-6" />,
      },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Floating revolving icons */}
      <div className="absolute top-[10%] left-[3%] w-14 h-14 text-yellow-500/50 animate-revolve-1 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <HelpCircle className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute top-[12%] right-[3%] w-12 h-12 text-yellow-600/50 animate-revolve-2 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <MessageCircleQuestion className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute bottom-[10%] left-[4%] w-16 h-16 text-yellow-500/45 animate-revolve-3 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <HelpCircle className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute bottom-[12%] right-[4%] w-13 h-13 text-yellow-600/50 animate-revolve-4 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Lightbulb className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Frequently Asked <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Everything you need to know about AEON
          </p>
        </div>

        {/* FAQs List */}
        <div ref={containerRef} className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const delay = `delay-${(index + 1) * 100}`;
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className={`animate-on-scroll fade-in-up ${delay} group`}
                >
                  <div className="relative bg-gradient-to-br from-[#121212] via-[#0F0F0F] to-[#121212] border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-500">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/5 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Question Button */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="relative z-10 w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          {faq.icon}
                        </div>
                        
                        {/* Question Text */}
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Chevron Icon */}
                      <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-6 h-6 text-yellow-500" />
                      </div>
                    </button>

                    {/* Answer Section */}
                    <div className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="pl-16 md:pl-20">
                          <p className="text-gray-400 leading-relaxed text-base md:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 transition-all duration-500 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;


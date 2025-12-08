import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import  Deploy  from '../assets/Deploy.png';
import Process from '../assets/Process3.png';
import { 
  Upload, 
  Brain, 
  Rocket,
  Folder,
  Server,
  Cpu,
  Zap,
  FileText,
  File,
  Download,
  BarChart3, 
  Settings,
  Mail,
 
} from 'lucide-react';

/**
 * How AEON Works Page Component
 * Three-step process: Upload Knowledge Base, Knowledge Processing, Deploy
 */
const HowAEONWorksPage = () => {
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const step1Ref = useScrollAnimation({ threshold: 0.15 });
  const step2Ref = useScrollAnimation({ threshold: 0.15 });
  const step3Ref = useScrollAnimation({ threshold: 0.15 });

  const steps = [
    {
      number: '1',
      title: 'Upload Your Knowledge Base',
      description: 'Add your knowledge. From product guides to FAQs, and even full policy documents. AEON processes everything you upload and keeps responses accurate, ensuring your chatbot uses the right information at the right time.',
      icon: <Upload className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      number: '2',
      title: 'Knowledge Processing',
      description: 'AEON\'s advanced AI processes and understands your content, extracting key information, relationships, and context. The system learns from your data to provide accurate, context-aware responses tailored to your business.',
      icon: <Brain className="w-8 h-8" />,
      image: Process,
    },
    {
      number: '3',
      title: 'Deploy',
      description: 'Once your knowledge base is processed, deploy AEON instantly with a single script. Your AI assistant goes live across your website, portals, or dashboards, ready to help your customers 24/7.',
      icon: <Rocket className="w-8 h-8" />,
      image: Deploy,
    },
  ];

  const refs = [step1Ref, step2Ref, step3Ref];

  // FileTypeVisualization Component
  const FileTypeVisualization = () => (
    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
      {/* File extensions positioned around center */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 sm:gap-2 p-2 sm:p-4 md:p-8">
        {/* Top row */}
        <div className="col-start-1 row-start-1 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .WEBM
          </div>
        </div>
        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .PDF
          </div>
        </div>
        <div className="col-start-3 row-start-1 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .JSON
          </div>
        </div>
        
        {/* Middle row */}
        <div className="col-start-1 row-start-2 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .PNG
          </div>
        </div>
        {/* Center is empty for the icon */}
        <div className="col-start-2 row-start-2"></div>
        <div className="col-start-3 row-start-2 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .TXT
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="col-start-1 row-start-3 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .MP4
          </div>
        </div>
        <div className="col-start-2 row-start-3 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .DOCX
          </div>
        </div>
        <div className="col-start-3 row-start-3 flex items-center justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#121212] border border-yellow-500/50 backdrop-blur-sm text-white text-xs md:text-sm font-medium shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:border-yellow-500 transition-all duration-300">
            .CSV
          </div>
        </div>
      </div>

      {/* Central document icon with download */}
      <div className="relative z-10 flex flex-col items-center justify-center  ">
        <div className="relative">
          {/* Document icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 text-yellow-500/80">
            <File className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
          {/* Download icon overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-yellow-400">
            <Download className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="how-aeon-works-page" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Floating revolving icons - positioned relative to section */}
      {/* Upload icon - Top left corner */}
      <div className="absolute top-[10%] left-[3%] w-14 h-14 text-yellow-500/50 animate-revolve-1 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Upload className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Brain icon - Top right corner */}
      <div className="absolute top-[12%] right-[3%] w-12 h-12 text-yellow-600/50 animate-revolve-2 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Brain className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Folder icon - Bottom left */}
      <div className="absolute bottom-[10%] left-[4%] w-16 h-16 text-yellow-500/45 animate-revolve-3 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Folder className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Rocket icon - Bottom right */}
      <div className="absolute bottom-[12%] right-[4%] w-13 h-13 text-yellow-600/50 animate-revolve-4 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Rocket className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* FileText icon - Top center-left */}
      <div className="absolute top-[8%] left-[20%] w-11 h-11 text-yellow-500/40 animate-revolve-5 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <FileText className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Server icon - Bottom center-right */}
      <div className="absolute bottom-[8%] right-[20%] w-14 h-14 text-yellow-600/45 animate-revolve-6 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Server className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Cpu icon - Top center-right */}
      <div className="absolute top-[6%] right-[18%] w-12 h-12 text-yellow-500/45 animate-revolve-7 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Cpu className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
        </div>
      </div>
        {/* Floating icons with randomized positions */}
        {/* BarChart3 icon - Random position */}
        <div className="absolute top-[5%] left-[15%] w-12 h-12 text-yellow-500/50 animate-revolve-1 hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow">
            <BarChart3 className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Brain icon - Random position */}
        <div className="absolute top-[25%] right-[8%] w-14 h-14 text-yellow-600/50 animate-revolve-2 hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow-reverse">
            <Brain className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Mail icon - Random position */}
        <div className="absolute bottom-[22%] left-[8%] w-13 h-13 text-yellow-500/45 animate-revolve-3 hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow">
            <Mail className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Zap icon - Random position */}
        <div className="absolute bottom-[8%] right-[12%] w-11 h-11 text-yellow-600/50 animate-revolve-4 hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow-reverse">
            <Zap className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Folder icon - Random position */}
        <div className="absolute top-[18%] left-[5%] w-10 h-10 text-yellow-500/40 animate-revolve-5 hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow">
            <Folder className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Server icon - Random position */}
        <div className="absolute bottom-[15%] right-[25%] w-14 h-14 text-yellow-600/45 animate-revolve-6 hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow-reverse">
            <Server className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Settings icon - Random position */}
        <div className="absolute top-[35%] right-[5%] w-13 h-13 text-yellow-500/45 animate-revolve-7 hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow">
            <Settings className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" strokeWidth={1.5} />
          </div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            How <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">AEON</span> Works
          </h2>
          <p className="text-base sm:text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Transform your knowledge base into an intelligent AI assistant in three simple steps
          </p>
        </div>

        {/* Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">

            {/* Steps in horizontal row */}
            <div className="grid grid-cols-1 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => {
              const delay = `delay-${(index + 1) * 100}`;
              const isEven = index % 2 === 1;
              // Animation direction: first and last from left, middle from right
              const animationClass = index === 1 ? 'fade-in-right' : 'fade-in-left';
              
              return (
                <div
                  key={index}
                  ref={refs[index]}
                  className={`animate-on-scroll ${animationClass} ${delay} group`}
                  style={{
                    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                    transitionDelay: `${(index + 1) * 100}ms`,
                  }}
                >
                  <div className="flex flex-col md:flex-row p-2 sm:p-4 md:p-6 lg:p-8 items-stretch h-full transform transition-all duration-500 gap-0 overflow-hidden rounded-2xl border border-gray-800 hover:border-yellow-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30 bg-gradient-to-br from-[#121212] via-[#0F0F0F] to-[#121212]">
                    {/* Image Section - Full Size */}
                    <div className={`relative w-full md:w-1/2 h-[300px] sm:h-[300px] md:h-[300px] lg:h-auto overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      {index === 0 ? (
                        // Custom file type visualization for first step
                        <FileTypeVisualization />
                      ) : (
                        // Regular images for other steps
                        <>
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Gradient overlay */}
                          {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                        </>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="relative w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      {/* Gradient overlay on hover */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                      
                      {/* Animated border glow */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/20 to-yellow-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div> */}
                      
                      <div className="relative z-10">
                        {/* Step number badge */}
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 mb-4 text-yellow-400 font-bold text-base">
                          {step.number}
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-yellow-400 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-grow group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAEONWorksPage;
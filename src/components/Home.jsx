import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MeetAEON from "./MeetAEON";
import AIAdoption from "./AIAdoption";
import TrustedBy from "./TrustedBy";
import HowAEONWorksPage from "./HowAEONWorksPage";
import AgentAEONCapabilities from "./AgentAEONCapabilities";
import DelightfulService from "./DelightfulService";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";
import Contact from "./Contact";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import FloatingContactButtons from "./FloatingContactButtons";
import ScrollToTopButton from "./ScrollToTopButton";
import { initScrollAnimations } from "../utils/animations";

/**
 * Home Component
 * Main landing page with all sections
 */
function Home() {
  // Initialize scroll animations on mount
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="App">
      {/* Main Navigation Header */}
      <Header />
      <main>
        {/* Landing Page Sections - In order of appearance */}
        <Hero /> {/* Hero section with main CTA */}
        <MeetAEON /> {/* Introduction to AEON */}
        <TrustedBy /> {/* Trust indicators */}
        <HowAEONWorksPage /> {/* How AEON works explanation */}
        <AgentAEONCapabilities /> {/* Key features section */}
        <DelightfulService /> {/* Service highlights */}
        <AIAdoption/> {/* AI adoption section */}
        <Pricing /> {/* Pricing plans */}
        <Testimonials /> {/* Customer testimonials */}
        <FAQs /> {/* Frequently asked questions */}
        <Contact /> {/* Contact form */}
        <FinalCTA /> {/* Final call-to-action */}
      </main>
      {/* Footer with links and information */}
      <Footer />
      {/* Floating action buttons (WhatsApp, Phone, Email) */}
      <FloatingContactButtons />
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}

export default Home;


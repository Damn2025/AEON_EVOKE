import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MeetAEON from "./components/MeetAEON";
import TrustedBy from "./components/TrustedBy";
import CurrentReality from "./components/CurrentReality";
import ROI from "./components/ROI";
import Features from "./components/Features";
import EvokeDifference from "./components/EvokeDifference";
import GetStarted from "./components/GetStarted";
import HowAEONWorks from "./components/HowAEONWorks";
import AgentAEONIntro from "./components/AgentAEONIntro";
import AgentAEONCapabilities from "./components/AgentAEONCapabilities";
import DelightfulService from "./components/DelightfulService";
import WhyChooseAEONSupport from "./components/WhyChooseAEONSupport";
import ElevateExperience from "./components/ElevateExperience";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import { initScrollAnimations } from "./utils/animations";

/**
 * Main App Component
 * Renders all sections of the AEON website
 */
function App() {
  // Initialize scroll animations on mount
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <MeetAEON />
        <TrustedBy />
        <HowAEONWorks />
        <AgentAEONCapabilities />
        <DelightfulService />
        <WhyChooseAEONSupport />
        <ElevateExperience />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Ticker from "../components/portfolio/Ticker";
import Navigation from "../components/portfolio/Navigation";
import HeroSection from "../components/portfolio/HeroSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Ticker />
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

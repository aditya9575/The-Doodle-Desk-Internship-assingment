import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NavbarElement from './components/NavbarElement';
import AboutUsSection from './components/AboutUsSection';
import OurMissionSection from './components/OurMissionSection';
import ChallengesSection from './components/ChallangesSection';

function App() {
  return (
    <div>
      <NavbarElement />
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <OurMissionSection />
      <ChallengesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;



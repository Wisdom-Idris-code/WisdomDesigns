import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessProblems } from './components/BusinessProblems';
import { Services } from './components/Services';
import { DemoPortfolio } from './components/DemoPortfolio';
import { WhyUs } from './components/WhyUs';
import { Pricing } from './components/Pricing';
import { CarePlans } from './components/CarePlans';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <BusinessProblems />
        <Services />
        <DemoPortfolio />
        <WhyUs />
        <Pricing />
        <CarePlans />
        <HowItWorks />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;

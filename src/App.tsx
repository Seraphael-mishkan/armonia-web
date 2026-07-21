import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { Experience } from './components/Experience';
import { Governance } from './components/Governance';
import { Benefits } from './components/Benefits';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppBtn } from './components/WhatsAppBtn';

function App() {
  return (
    <div className="font-sans text-brand-black bg-brand-bg selection:bg-brand-green selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Calculator />
        <Experience />
        <Governance />
        <Benefits />
        <Methodology />
        <Contact />
      </main>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
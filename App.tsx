
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrekkingSection from './components/TrekkingSection';
import JeepSection from './components/JeepSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import OptionalExperienceSection from './components/OptionalExperienceSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrekkingSection />
      <JeepSection />
      <OptionalExperienceSection/>
      <Gallery />
      <Testimonials />
      <MapSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;

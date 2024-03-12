// App.jsx
import React from 'react';
import HeaderSection from './Components/HeaderSection/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import DestinationsSection from './Components/DestinationsSection/DestinationsSection';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

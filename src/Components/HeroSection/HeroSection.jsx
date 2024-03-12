// HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">Explore the World with Us</h2>
        <p className="hero-description">Discover amazing destinations and plan your next adventure.</p>
        <button className="hero-btn">Explore Destinations</button>
      </div>
    </section>
  );
}

export default HeroSection;

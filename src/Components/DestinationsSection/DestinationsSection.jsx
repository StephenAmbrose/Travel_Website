// DestinationsSection.js
import React from 'react';
import './DestinationsSection.css';

function DestinationsSection() {
  return (
    <section id="destinations" className="destinations-section">
      <h1>Popular Destination</h1>
      <div className="destination-cards">
        <DestinationCard
          image="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="New York City"
          description="Explore the city that never sleeps."
        />
        <DestinationCard
          image="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Paris"
          description="Discover the romantic capital of the world."
        />
        <DestinationCard
        image="https://cdn.pixabay.com/photo/2017/09/06/18/22/island-2722471_1280.jpg"
        title="Carribean"
        description="Find the gorgeous beaches"
        />
        <DestinationCard
        image="https://cdn.pixabay.com/photo/2016/11/19/21/29/temple-1841296_1280.jpg"
        title="Japan"
        description="onsen hot springs and kabuki baths"
        />
        {/* Add more DestinationCard components for other destinations */}
      </div>
    </section>
  );
}

function DestinationCard({ image, title, description }) {
  return (
    <div className="destination-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DestinationsSection;

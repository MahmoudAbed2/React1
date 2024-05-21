import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Välkommen till Solaris Space Center</h1>
      <p>Utforska vårt solsystem och lär dig mer om planeterna!</p>
      <div className="planet-grid">
        {/* Här kan du lägga till visuella representationer av planeterna */}
      </div>
    </div>
  );
};

export default HomePage;

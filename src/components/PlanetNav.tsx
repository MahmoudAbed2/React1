import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlanetNav.css';

const planets = [
  { id: 'mercury', name: 'Mercury' },
  { id: 'venus', name: 'Venus' },
  { id: 'earth', name: 'Earth' },
  { id: 'mars', name: 'Mars' },
  { id: 'jupiter', name: 'Jupiter' },
  { id: 'saturn', name: 'Saturn' },
  { id: 'uranus', name: 'Uranus' },
  { id: 'neptune', name: 'Neptune' },
];

const PlanetNav: React.FC = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  return (
    <nav className="planet-nav">
      {planets.map((planet) => (
        <Link
          to={`/planet/${planet.id}`}
          key={planet.id}
          onMouseEnter={() => setHoveredPlanet(planet.name)}
          onMouseLeave={() => setHoveredPlanet(null)}
        >
          {planet.name}
        </Link>
      ))}
      {hoveredPlanet && <div className="hovered-planet-name">{hoveredPlanet}</div>}
    </nav>
  );
};

export default PlanetNav;

import React from 'react';
import { useParams } from 'react-router-dom';
import './PlanetPage.css';

const planets = [
  { id: 'mercury', name: 'Mercury', description: 'Description for Mercury', image: 'path/to/mercury.jpg' },
  { id: 'venus', name: 'Venus', description: 'Description for Venus', image: 'path/to/venus.jpg' },
  { id: 'earth', name: 'Earth', description: 'Description for Earth', image: 'path/to/earth.jpg' },
  { id: 'mars', name: 'Mars', description: 'Description for Mars', image: 'path/to/mars.jpg' },
  { id: 'jupiter', name: 'Jupiter', description: 'Description for Jupiter', image: 'path/to/jupiter.jpg' },
  { id: 'saturn', name: 'Saturn', description: 'Description for Saturn', image: 'path/to/saturn.jpg' },
  { id: 'uranus', name: 'Uranus', description: 'Description for Uranus', image: 'path/to/uranus.jpg' },
  { id: 'neptune', name: 'Neptune', description: 'Description for Neptune', image: 'path/to/neptune.jpg' },
  // Lägg till andra planeter här
];

const PlanetPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const planet = planets.find(p => p.id === id);

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <div className="planet-page">
      <h1>{planet.name}</h1>
      <img src={planet.image} alt={planet.name} />
      <p>{planet.description}</p>
    </div>
  );
};

export default PlanetPage;

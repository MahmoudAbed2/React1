import React from 'react';
import { PlanetType } from '../models/PlanetType';

interface PlanetProps {
  planet: PlanetType;
  onRemove: () => void;
}

const Planet: React.FC<PlanetProps> = ({ planet, onRemove }) => {
  return (
    <div className="planet">
      <h2>{planet.name}</h2>
      <img src={planet.image} alt={planet.name} />
      <p>{planet.description}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Planet;

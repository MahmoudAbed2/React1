import React from 'react';
import { useFavoritePlanets } from '../models/useFavoritePlanets';
import Planet from '../components/Planet';
import { PlanetType } from '../models/PlanetType';
import './FavoritePage.css';

const FavoritePage: React.FC = () => {
  const { favoritePlanets, removeFavorite } = useFavoritePlanets();

  return (
    <div className="favorite-page">
      <h1>Mina Favoritplaneter</h1>
      {favoritePlanets.length > 0 ? (
        <div className="planet-list">
          {favoritePlanets.map((planet: PlanetType) => (
            <Planet key={planet.id} planet={planet} onRemove={() => removeFavorite(planet.id)} />
          ))}
        </div>
      ) : (
        <p>Inga favoritplaneter tillagda ännu.</p>
      )}
    </div>
  );
};

export default FavoritePage;

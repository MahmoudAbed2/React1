// useFavoritePlanets.ts
import { useState } from 'react';
import { PlanetType } from './PlanetType';

export const useFavoritePlanets = () => {
  const [favoritePlanets, setFavoritePlanets] = useState<PlanetType[]>([]);

  const removeFavorite = (id: string) => {
    setFavoritePlanets(favoritePlanets.filter(planet => planet.id !== id));
  };

  return {
    favoritePlanets,
    removeFavorite,
  };
};

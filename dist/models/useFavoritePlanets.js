"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFavoritePlanets = void 0;
const react_1 = require("react");
const useFavoritePlanets = () => {
    const [favoritePlanets, setFavoritePlanets] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favoritePlanets') || '[]');
        setFavoritePlanets(savedFavorites);
    }, []);
    const addFavorite = (planet) => {
        const updatedFavorites = [...favoritePlanets, planet];
        setFavoritePlanets(updatedFavorites);
        localStorage.setItem('favoritePlanets', JSON.stringify(updatedFavorites));
    };
    const removeFavorite = (id) => {
        const updatedFavorites = favoritePlanets.filter((planet) => planet.id !== id);
        setFavoritePlanets(updatedFavorites);
        localStorage.setItem('favoritePlanets', JSON.stringify(updatedFavorites));
    };
    return { favoritePlanets, addFavorite, removeFavorite };
};
exports.useFavoritePlanets = useFavoritePlanets;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useFavoritePlanets_1 = require("../hooks/useFavoritePlanets");
const Planet_1 = __importDefault(require("../components/Planet"));
require("./FavoritePage.css");
const FavoritePage = () => {
    const { favoritePlanets, removeFavorite } = (0, useFavoritePlanets_1.useFavoritePlanets)();
    return (react_1.default.createElement("div", { className: "favorite-page" },
        react_1.default.createElement("h1", null, "Mina Favoritplaneter"),
        favoritePlanets.length > 0 ? (react_1.default.createElement("div", { className: "planet-list" }, favoritePlanets.map((planet) => (react_1.default.createElement(Planet_1.default, { key: planet.id, planet: planet, onRemove: () => removeFavorite(planet.id) }))))) : (react_1.default.createElement("p", null, "Inga favoritplaneter tillagda \u00E4nnu."))));
};
exports.default = FavoritePage;

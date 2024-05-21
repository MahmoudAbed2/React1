"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./PlanetPage.css");
const planets = [
    { id: 'mercury', name: 'Mercury', description: 'Description for Mercury', image: 'path/to/mercury.jpg' },
    { id: 'venus', name: 'Venus', description: 'Description for Venus', image: 'path/to/venus.jpg' },
    { id: 'earth', name: 'Earth', description: 'Description for Earth', image: 'path/to/earth.jpg' },
    // Lägg till andra planeter här
];
const PlanetPage = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const planet = planets.find(p => p.id === id);
    if (!planet) {
        return react_1.default.createElement("div", null, "Planet not found");
    }
    return (react_1.default.createElement("div", { className: "planet-page" },
        react_1.default.createElement("h1", null, planet.name),
        react_1.default.createElement("img", { src: planet.image, alt: planet.name }),
        react_1.default.createElement("p", null, planet.description)));
};
exports.default = PlanetPage;

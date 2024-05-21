"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./PlanetNav.css");
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
const PlanetNav = () => {
    const [hoveredPlanet, setHoveredPlanet] = (0, react_1.useState)(null);
    return (react_1.default.createElement("nav", { className: "planet-nav" },
        planets.map((planet) => (react_1.default.createElement(react_router_dom_1.Link, { to: `/planet/${planet.id}`, key: planet.id, onMouseEnter: () => setHoveredPlanet(planet.name), onMouseLeave: () => setHoveredPlanet(null) }, planet.name))),
        hoveredPlanet && react_1.default.createElement("div", { className: "hovered-planet-name" }, hoveredPlanet)));
};
exports.default = PlanetNav;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./HomePage.css");
const HomePage = () => {
    return (react_1.default.createElement("div", { className: "home-page" },
        react_1.default.createElement("h1", null, "V\u00E4lkommen till Solaris Space Center"),
        react_1.default.createElement("p", null, "Utforska v\u00E5rt solsystem och l\u00E4r dig mer om planeterna!"),
        react_1.default.createElement("div", { className: "planet-grid" })));
};
exports.default = HomePage;

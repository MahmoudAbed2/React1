"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Planet = ({ planet, onRemove }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h3", null, planet),
        react_1.default.createElement("button", { onClick: onRemove }, "Remove")));
};
exports.default = Planet;

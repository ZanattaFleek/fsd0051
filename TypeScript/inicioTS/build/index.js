"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClsCalculadoraCientifica_1 = require("./calculadora/ClsCalculadoraCientifica");
const ClsCalculadoraPadrao_1 = __importDefault(require("./calculadora/ClsCalculadoraPadrao"));
let calculadora = new ClsCalculadoraPadrao_1.default(15, 20);
let calculadoraCientifica = new ClsCalculadoraCientifica_1.ClsCalculadoraCientifica(5, 3);
calculadora.somar();
console.log(calculadora.getResultado());
calculadoraCientifica.potencia();
console.log(calculadoraCientifica.getResultado());
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClsCalculadoraPadrao_1 = __importDefault(require("./calculadora/ClsCalculadoraPadrao"));
const x = new ClsCalculadoraPadrao_1.default(10, 5);
x.somar();
console.log(x.getResultado());
//# sourceMappingURL=calculadora.js.map
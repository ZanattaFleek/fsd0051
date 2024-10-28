"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClsCalculadoraCientifica = void 0;
const ClsCalculadoraPadrao_1 = __importDefault(require("./ClsCalculadoraPadrao"));
class ClsCalculadoraCientifica extends ClsCalculadoraPadrao_1.default {
    potencia() {
        this.resultado = Math.pow(this.numero1, this.numero2);
    }
    raizQuadrada() {
        this.resultado = Math.sqrt(this.numero1);
    }
    raizCubica() {
        this.resultado = Math.cbrt(this.numero1);
    }
    fatorial() {
        let fatorial = 1;
        for (let i = 1; i <= this.numero1; i++) {
            fatorial *= i;
        }
        this.resultado = fatorial;
    }
}
exports.ClsCalculadoraCientifica = ClsCalculadoraCientifica;
//# sourceMappingURL=ClsCalculadoraCientifica.js.map
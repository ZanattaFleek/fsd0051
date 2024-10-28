"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClsCalculadoraPadrao {
    constructor(numero1, numero2) {
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultado = 0;
        console.log('Dentro do Construtor ClsCalculadoraPadrao.ts');
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    setNumero1(novoNumero1) {
        this.numero1 = novoNumero1;
    }
    setNumero2(novoNumero2) {
        this.numero2 = novoNumero2;
    }
    somar() {
        this.resultado = this.numero1 + this.numero2;
    }
    subtrair() {
        this.resultado = this.numero1 - this.numero2;
    }
    dividir() {
        this.resultado = this.numero1 / this.numero2;
    }
    multiplicar() {
        this.resultado = this.numero1 * this.numero2;
    }
    getResultado() {
        return this.resultado;
    }
}
exports.default = ClsCalculadoraPadrao;
//# sourceMappingURL=ClsCalculadoraPadrao.js.map
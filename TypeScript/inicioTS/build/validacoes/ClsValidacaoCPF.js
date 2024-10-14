"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClsFormatacao_1 = __importDefault(require("./ClsFormatacao"));
class ClsValidacaoCPF {
    constructor() {
        this.clsFormatacao = new ClsFormatacao_1.default();
    }
    /**
     * Valida um CPF de acordo com as regras da Receita Federal
     * @param cpf CPF a ser validado - Pode estar formatado ou somente números
     * 18803927808
     * 188.039.278-08
     */
    validarCPF(cpf) {
        if (this.clsFormatacao.validarFormatoCPF(cpf)) {
            return this.verificarCPFValido(cpf);
        }
        else {
            return false;
        }
    }
    verificarCPFValido(cpf) {
        const cpfNumeros = this.clsFormatacao.somenteNumeros(cpf);
        const novePrimeirosDigitos = cpfNumeros.substring(0, 9);
        const digitoFornecido1 = cpfNumeros[9];
        const digitoFornecido2 = cpfNumeros[10];
        const digitoCalculado1 = this.calcularDigitoVerificador(novePrimeirosDigitos);
        return true;
    }
    calcularDigitoVerificador(sequenciaNumerica) {
        const inicio = sequenciaNumerica.length + 1;
        for (let multiplicador = inicio; multiplicador >= 2; multiplicador--) {
            const indice = inicio - multiplicador;
            const digito = sequenciaNumerica[indice];
            console.log('Digito: ', digito);
            // const digito: string = sequenciaNumerica.substring(indice, indice + 1)
        }
        return '';
    }
}
exports.default = ClsValidacaoCPF;

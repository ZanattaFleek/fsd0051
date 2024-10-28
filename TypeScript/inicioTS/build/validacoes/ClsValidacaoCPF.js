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
        const digitoCalculado2 = this.calcularDigitoVerificador(novePrimeirosDigitos.concat(digitoCalculado1));
        return digitoFornecido1 == digitoCalculado1 && digitoFornecido2 == digitoCalculado2;
    }
    calcularDigitoVerificador(sequenciaNumerica) {
        const inicio = sequenciaNumerica.length + 1;
        let soma = 0;
        for (let multiplicador = inicio; multiplicador >= 2; multiplicador--) {
            const indice = inicio - multiplicador;
            const digito = sequenciaNumerica[indice];
            soma += parseInt(digito) * multiplicador;
            // console.log('Digito: ', digito, 'multiplicador', multiplicador)
            // const digito: string = sequenciaNumerica.substring(indice, indice + 1)
        }
        const restoDivisao = soma % 11;
        let digito = 0;
        if (restoDivisao >= 2) {
            digito = 11 - restoDivisao;
        }
        return digito.toString();
    }
}
exports.default = ClsValidacaoCPF;
//# sourceMappingURL=ClsValidacaoCPF.js.map
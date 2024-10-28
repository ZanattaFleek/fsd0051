"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClsValidacaoCPF_1 = __importDefault(require("./validacoes/ClsValidacaoCPF"));
let clsValidacaoCPF = new ClsValidacaoCPF_1.default();
const testesCPF = [
    '845-605-183.78', '84560518378',
    '845.605.183-78', '84560518387',
    '845.605.183-87', 'abc.def.ghi-jk',
    '123.456.789-00', '096.111.156-95', '019.475.196-11'
];
testesCPF.forEach((cpf) => {
    // console.log(`CPF: ${cpf} - Válido: ${clsValidacaoCPF.validarCPF(cpf)}`);
    console.log('===================');
    console.log('CPF:', cpf, ' - Válido:', clsValidacaoCPF.validarCPF(cpf));
    console.log('===================');
});
//# sourceMappingURL=index_cpf.js.map
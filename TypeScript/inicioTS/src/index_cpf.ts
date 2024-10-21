import ClsValidacaoCPF from "./validacoes/ClsValidacaoCPF";

let clsValidacaoCPF = new ClsValidacaoCPF();

const testesCPF: Array<string> = [
    '845-605-183.78', '84560518378',
    '845.605.183-78', '84560518387',
    '845.605.183-87', 'abc.def.ghi-jk',
    '123.456.789-00', '096.111.156-95', '019.475.196-11'
]

testesCPF.forEach((cpf) => {
    // console.log(`CPF: ${cpf} - Válido: ${clsValidacaoCPF.validarCPF(cpf)}`);
    console.log('===================')
    console.log('CPF:', cpf, ' - Válido:', clsValidacaoCPF.validarCPF(cpf));
    console.log('===================')
})


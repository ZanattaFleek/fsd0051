import ClsBuscarCEP from "./CEP/ClsBuscarCEP";
import ClsContarPalavras from "./duvidasRodrigo/clsContarPalavras";

const clsBuscaCep: ClsBuscarCEP = new ClsBuscarCEP();

clsBuscaCep.buscar('35500029').then((resposta) => {
    const clsQtdPalavras: ClsContarPalavras = new ClsContarPalavras();
    clsQtdPalavras.texto = resposta.bairro;
    console.log('O bairro é: ', resposta.bairro, ' com ', clsQtdPalavras.qtdPalavras, ' palavras');
}).catch(erro => {
    console.log(erro)
})

/*
const clsContarNome: ClsContarPalavras = new ClsContarPalavras();
const clsContarEndereco: ClsContarPalavras = new ClsContarPalavras();

clsContarNome.texto = 'Rodrigo Machado'

clsContarEndereco.setarTexto('R. Rio Grande do Sul, 3009')

console.log('O total de Palavras de Nome: ', clsContarNome.getTotalPalavras())
console.log('O total de Palavras de Endereco: ', clsContarEndereco.getTotalPalavras())

console.log('O total de Palavras de Nome: ', clsContarNome.qtdPalavras)
console.log('O total de Palavras de Endereco: ', clsContarEndereco.qtdPalavras)

*/
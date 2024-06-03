var faixas = [0, 7.5, 15, 22.5, 27.5];
var deducoes = [0, 142.8, 354.8, 636.13, 869.36];
var limites = [1903.98, 2826.65, 3751.05, 4664.68, 9999999];

var salario = 4000;

function procurarIndice(numero, posicao, linha) {
  return salario <= numero;
}

var indice = limites.findIndex(procurarIndice);

var imposto = (salario * faixas[indice]) / 100 - deducoes[indice];

console.log("O valor do Imposto é: ", imposto);
console.log("O Valor do Salário Líquido é: ", salario - imposto);

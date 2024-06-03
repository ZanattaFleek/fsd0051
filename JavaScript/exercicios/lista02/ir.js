var faixas = [0, 7.5, 15, 22.5, 27.5];
var deducoes = [0, 142.8, 354.8, 636.13, 869.36];
var limites = [1903.98, 2826.65, 3751.05, 4664.68, 9999999];

var salario = 2800;
var indice = 4;

/*

Criar variável chamada indice, que receberá inicialmente o valor 4:

- Se Salario for menor ou igual a Limite[0] ==> indice = 0
- Se Salario for menor ou igual a Limite[1] ==> indice = 1
- Se Salario for menor ou igual a Limite[2] ==> indice = 2
- Se Salario for menor ou igual a Limite[3] ==> indice = 3

*/

if (salario <= limites[0]) {
  indice = 0;
} else if (salario <= limites[1]) {
  indice = 1;
} else if (salario <= limites[2]) {
  indice = 2;
} else if (salario <= limites[3]) {
  indice = 3;
}

var imposto = (salario * faixas[indice]) / 100 - deducoes[indice];

console.log("O valor do Imposto é: ", imposto);
console.log("O Valor do Salário Líquido é: ", salario - imposto);

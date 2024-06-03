const indicePercentual = 0;
const indiceDeducao = 1;
const indiceLimite = 2;

var IR = [
  [0, 0, 1903.98],
  [7.5, 142.8, 2826.65],
  [15, 354.8, 3751.05],
  [22.5, 636.13, 4664.68],
  [27.5, 869.36, 9999999],
];

var salario = 4000;

function procurarIndice(vetor, posicao, linha) {
  return salario <= vetor[indiceLimite];
}

var indice = IR.findIndex(procurarIndice);

var imposto = (salario * IR[indice][indicePercentual]) / 100 - IR[indice][indiceDeducao];

console.log("O valor do Imposto é: ", imposto);
console.log("O Valor do Salário Líquido é: ", salario - imposto);

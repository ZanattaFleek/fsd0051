var numero01 = 75;
var numero02 = 50;
var numero03 = 100;

var maiorValor = numero01;
var menorValor = numero01;
var intermediario = 0;

if (maiorValor < numero02) {
  maiorValor = numero02;
}

if (maiorValor < numero03) {
  maiorValor = numero03;
}

if (numero02 < menorValor) {
  menorValor = numero02;
}

if (numero03 < menorValor) {
  menorValor = numero03;
}

console.log("Menor Valor: ", menorValor);
console.log("Maior Valor: ", maiorValor);

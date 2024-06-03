console.log("oi....");
//Definir os números
var num1 = 75;
var num2 = 50;
var num3 = 100;

// Encontar o maior número
var maior = num1;
if (num2 > maior) {
  maior = num2;
}

if (num3 > maior) {
  maior = num3;
}

// Encontar o menor número
var menor = num1;
if (num2 < menor) {
  menor = num2;
}

if (num3 < menor) {
  menor = num3;
}

// Encontar o número do meio ,
// && somente se os 2 valores forem verdadeiros, retornará verdadeiro

var meio;
if (num1 !== menor && num1 !== maior) {
  meio = num1;
} else if (num2 !== menor && num2 !== maior) {
  meio = num2;
} else {
  meio = num3;
}

//imprimir os numeros em ordem decrescente

console.log("Numeros em ordem descrescente:", maior, meio, menor);

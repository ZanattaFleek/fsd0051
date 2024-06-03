const inicio = 1;
const termino = 100;

var qtdPares = 0;
var qtdImpares = 0;

let numero = inicio;

while (numero <= termino) {

  if (numero % 2 === 0) {
    qtdPares++
  } else {
    qtdImpares++
  }

  numero++;
}

// console.log("Numero: ", numero);  ==> Numero existe

console.log("QTD Pares: ", qtdPares);

console.log("QTD Impares: ", qtdImpares);

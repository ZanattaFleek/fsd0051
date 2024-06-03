const inicio = 1;
const termino = 100;

var qtdPares = 0;
var qtdImpares = 0;

for (let numero = inicio; numero <= termino; numero++) {
  // console.log(numero);
  if (numero % 2 === 0) {
    qtdPares++;
  } else {
    qtdImpares++;
  }
}
// console.log("Numero: ", numero); ==> Número não existe

console.log("QTD Pares: ", qtdPares);

console.log("QTD Impares: ", qtdImpares);

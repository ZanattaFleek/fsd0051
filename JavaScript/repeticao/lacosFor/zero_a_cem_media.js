const inicio = 1;
const termino = 100;

var qtdTotal = 0;
var qtdPares = 0;
var qtdImpares = 0;

var somaTotal = 0;
var somaPares = 0;
var somaImpares = 0;

for (let numero = inicio; numero <= termino; numero++) {

  qtdTotal++
  somaTotal += numero

  if (numero % 2 === 0) {
    qtdPares++;
    somaPares = somaPares + numero;
  } else {
    qtdImpares++;
    somaImpares += numero;
  }

}

console.log("QTD Pares: ", qtdPares, "Soma Pares: ", somaPares, "Média Pares: ", somaPares / qtdPares);

console.log("QTD Ímpares: ", qtdImpares,"Soma Ímpares: ",somaImpares, "Média Ímpares: ", somaImpares / qtdImpares);

console.log("QTD Total: ", qtdTotal,"Soma Total: ",somaTotal, "Média Total: ", somaTotal / qtdTotal);

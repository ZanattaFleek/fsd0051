var resultado = "";
var numero01 = 10;
var numero02 = 20;
var numero03 = 30;

if (numero01 === 10 && numero02 > 30) {
  resultado = "01 - Numero 01 é igual a 10 e número 02 é maior que 30";
}

if (numero01 === 10 || numero02 === 30) {
  resultado = "02 - Numero 01 é igual a 10 ou número 02 é igual a 30";
}

if (numero01 === 10 && numero02 !== 30) {
  resultado = "03 - Numero 01 é igual a 10 e número 02 não é igual a 30";
}

if (numero01 === 10 && !(numero02 === 30)) {
  resultado = "04 - Numero 01 é igual a 10 e número 02 não é igual a 30";
}

console.log(resultado);

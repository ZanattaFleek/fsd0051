function potencia(base, expoente) {
  let calculo = 1;
  for (let contador = 0; contador < expoente; contador++) {
    calculo = calculo * base;
  }

  return calculo;
}

function somar(n1, n2) {
  return n1 + n2;
}

let resultado = somar(potencia(2, 3), potencia(3, 3));

console.log(somar(resultado, 10));

console.log(resultado);

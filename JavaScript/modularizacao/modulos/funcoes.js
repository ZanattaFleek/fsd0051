function fatorial(numero) {
  let retorno = 1;

  for (let contador = numero; contador >= 1; contador--) {
    retorno = retorno * contador;
  }

  return retorno;
}

function somar(n1, n2) {
  return n1 + n2;
}

function potencia(base, expoente) {
  let calculo = 1;
  for (let contador = 0; contador < expoente; contador++) {
    calculo = calculo * base;
  }

  return calculo;
}

export { fatorial, potencia, somar };

function fatorial(numero) {
  let retorno = 1;

  for (let contador = numero; contador >= 1; contador--) {
    retorno = retorno * contador;
  }

  return retorno;
}

let resultado = fatorial(5);

console.log("Fatorial de 5 é: ", resultado);

let contador = 10;

function imprimir() {
  let contador = 0;
  contador = contador + 1;
  console.log("Valor do Contador dentro do Imprimir: ", contador);
}

function imprimirOutraCoisa() {
  let contador = 100;
  console.log("Dentro do Outra Coisa: ", contador);
}

imprimirOutraCoisa();
imprimir();
console.log(contador);

let numeros = [10, 20, 10, 35, 40];

function somar(meusNumeros) {
  meusNumeros[0] = 100;
}

somar(numeros);

console.log("Numeros: ", numeros); // Valor Alterado

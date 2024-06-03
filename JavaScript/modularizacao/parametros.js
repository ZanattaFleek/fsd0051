let valor = 33;

function somar(numero1 = 30, numero2 = 100) {
  console.log("A soma é: ", numero1 + numero2);
}

somar(10, 25);

somar(70);

somar(valor, 45);

console.log("Conteúdo Valor no final: ", valor);

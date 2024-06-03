function imprimirTabuada(tabuada) {
  for (let condicao = 1; condicao <= 10; condicao++) {
    console.log(tabuada, "x", condicao, "=", tabuada * condicao);
  }
}

for (let jacare = 1; jacare <= 10; jacare++) {
  imprimirTabuada(jacare);
}


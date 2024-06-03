const nomes = [
  "Zanatta",
  "Frederico",
  "Rodrigo",
  "Wagner",
  "Rafael",
  "Ivo",
  "Gustavo",
];

const idades = [49, 43, 20, 39, 32, 26, 30];

nomes.forEach((nome, indice) => {
  // console.log(nome, idades[indice]);
  // console.log(nome, idades[indice], variavelCompleta[indice]);
  nomes[indice] = nome.toUpperCase();
  // console.log("Nome: ", nome, "Indice: ", indice);
});

console.log(nomes);

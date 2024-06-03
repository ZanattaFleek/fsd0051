function procurarNome(nome, indice) {
  return nome.toUpperCase() === "RODRIGO";
}

const nomes = ["Rafael", "rodrigo", "Gustavo", "Kauan", "Wagner"];
const indiceNome = nomes.findIndex(procurarNome);

if (indiceNome >= 0) {
  console.log("Encontrei o Nome", indiceNome, nomes[indiceNome]);
} else {
  console.log("Não Encontrei o Nome", indiceNome);
}

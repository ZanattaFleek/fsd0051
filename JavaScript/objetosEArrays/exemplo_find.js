function procurarNome(nome, indice) {
  return nome.toUpperCase() === "rodrigo";
}

const nomes = ["Rafael", "rodrigo", "Gustavo", "Kauan", "Wagner"];
const nomeEncontrado = nomes.find(procurarNome);

if (typeof nomeEncontrado !== "undefined") {
  console.log("Encontrei o Nome", nomeEncontrado);
} else {
  console.log("Não Encontrei o Nome");
}

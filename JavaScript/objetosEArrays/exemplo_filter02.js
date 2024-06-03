function filtrar_nomes(nome, indice) {
  return nome.toLowerCase().includes("r");
}

const nomes = ["Rafael", "rodrigo", "Gustavo", "Kauan", "Wagner"];
const nomesFiltrados = nomes.filter(filtrar_nomes);

console.log("Nomes Filtrados: ", nomesFiltrados);

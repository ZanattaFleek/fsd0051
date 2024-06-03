let incluir = true;

function filtrar_nomes(nome, indice) {
  incluir = !incluir;
  return incluir;
}

const nomes = ["Rafael", "Rodrigo", "Gustavo", "Kauan", "Wagner"];
const nomesFiltrados = nomes.filter(filtrar_nomes);

console.log("Nomes Filtrados: ", nomesFiltrados);

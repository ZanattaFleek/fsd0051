const presentes = ["Rodrigo", "Rafael", "Frederico", "Kauan", "Ian", "Gustavo"];
const idades = [20, 33, 42, 18, 19, 16];

const resultado = presentes.map((jacare, indice) => {
  return {
    nome: jacare,
    idade: idades[indice],
  };
});

console.log(JSON.stringify(resultado));
console.log(resultado[2].nome);

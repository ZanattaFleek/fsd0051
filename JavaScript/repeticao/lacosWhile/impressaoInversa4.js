let nomes = ["Rafael", "Fred", "Ian", "Rodrigo", "Gustavo", "Kauan"];

let ultimoIndice = nomes.length;

// Errado
// while (ultimoIndice-- >= 0) console.log(nomes[ultimoIndice]);

// Correto
while (ultimoIndice-- > 0) console.log(nomes[ultimoIndice]);

// Correto
// while (--ultimoIndice >= 0) console.log(nomes[ultimoIndice]);

// Errado

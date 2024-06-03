let nomes = [  "Rafael",  "Fred",  "Ian",  "Rodrigo",
  "Gustavo",  "Kauan",  "Zanatta",  "Marcelo",  "João",
];

let ultimoIndice = nomes.length;

// daqui para baixo

while (ultimoIndice > 0) {
  console.log(ultimoIndice, nomes[ultimoIndice - 1]);
  ultimoIndice = ultimoIndice - 1;
}

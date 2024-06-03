var cliente = {
  nome: "Zanatta",
  empresa: "Fleek",
  idade: 49,
  ativo: true,
};

cliente = {
  ...cliente,
  nome: "Gustavo",
  idade: 16,
};

console.log("Cliente após a troca: ", cliente);

// console.log("Nome Maiúsculo: ", cliente.nome.toUpperCase());
// console.log("Cliente antes da troca: ", cliente);

// console.log("Conteúdo do campo CLiente: ", cliente.nome);

var nome = "Maria";

var idade = 21;

var nomes = ["Maria", "Rafael", "Zanatta", 35];

// console.log(nome); // Maria
// console.log(nome[2]); // Maria

// console.log(nomes); // ['Maria','Rafael','Zanatta']

// console.log(nomes[0]); // Maria

// console.log(nomes[1]); // Rafael

var cadastro = {
  nome: "Maria",
  sobrenome: "Salvino",
  idade: 21,
  estudante: true,
};

var cadastros = [
  {
    nome: "Maria",
    sobrenome: "Salvino",
    idade: 21,
  },
  {
    nome: "Rafael",
    sobrenome: "Paula",
    idade: 31,
  },
  {
    nome: "Marcelo",
    sobrenome: "Zanatta",
    idade: 50,
  },
];

console.log(nome.toUpperCase());

console.log(nomes[1].toUpperCase());

console.log(cadastro.nome.toUpperCase());

console.log(cadastros[2].nome.toUpperCase());
console.log(cadastros[2].idade);
console.log(cadastros[2]);
console.log(cadastros);

let maiorDeIdade = idade >= 18; // True or false

let preco = 30;

if (cadastro.estudante) {
  console.log("Valor do ingresso: ", preco / 2);
} else {
  console.log("Valor do ingresso: ", preco);
}

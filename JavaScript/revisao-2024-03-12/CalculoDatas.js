var dataAtual = new Date();
// var dataNascimento = new Date(2007, 7, 22);
var dataNascimento = new Date(1991, 4, 25);
var diferencaEmMilissegundos = dataAtual - dataNascimento;

var qtdMilissegundosEm1Ano = 1000 * 60 * 60 * 24 * 365;

// 1000 * 60 * 60 * 24 * 365

console.log(diferencaEmMilissegundos / qtdMilissegundosEm1Ano);

// 522.531.679.563
// 522.531.739.444

// var milissegundosPorAno = 24 * 60 * 60 * 1000 * 365;
// console.log("Anos: ", diferencaEmMilissegundos / milissegundosPorAno);

// 1 Segundo tem quantos milissegundos? ==> 1000
// 1 minuto ==> 60 * 1000
// 1 hora ==> 60 * 60 * 1000
// 1 dia ==> 24 * 60 * 60 * 1000

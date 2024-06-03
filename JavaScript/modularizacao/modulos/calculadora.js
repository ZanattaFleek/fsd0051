import combinacoes from "./loteria.js";

const resultadosPossiveisMegaSena = combinacoes(60, 6);
const resultadosPossiveisQuina = combinacoes(80, 5);

console.log(
  "Você tem 1 chance em ",
  resultadosPossiveisMegaSena,
  " na Mega Sena "
);

console.log("Você tem 1 chance em ", resultadosPossiveisQuina, " na Quina ");

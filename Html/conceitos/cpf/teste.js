import { validarCPF } from "./validarCPF.js";

const cpf = "704.817.966-06";

if (validarCPF(cpf)) {
  console.log("CPF ", cpf, " é válido!");
} else {
  console.log("CPF ", cpf, "é INVÁLIDO!!!!");
}

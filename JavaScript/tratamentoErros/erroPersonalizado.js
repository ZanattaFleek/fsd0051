import { dividir } from "./funcoes.js";

try {
  const resultado = dividir("10", 1);
  console.log("O Resultado da Divisão é: ", resultado);
} catch (e) {
  console.log("Não foi possível executar a divisão motivo: ", e);
}

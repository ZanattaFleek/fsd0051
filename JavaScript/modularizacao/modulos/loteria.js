import { fatorial } from "./funcoes.js";

export default function combinacoes(qtdTotalResultados, qtdPossibilidades) {
  const nF = fatorial(qtdTotalResultados);
  const pF = fatorial(qtdPossibilidades);
  const dif = fatorial(qtdTotalResultados - qtdPossibilidades);
  return nF / (pF * dif);
}



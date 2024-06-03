"use strict";

export function dividir(dividendo, divisor) {

  if (typeof dividendo !== "number" || typeof divisor !== "number") {
    throw "Parâmetros de Tipo Inválido!";

  } else if (divisor === 0) {
    throw "Não é possível dividir por zero!";

  } else {
    return dividendo / divisor;
  }

}

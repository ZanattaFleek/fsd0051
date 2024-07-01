export function validarCPF(cpf) {
  let retorno = false;

  if (testarMascaraCPFValida(cpf)) {
    const cpfNumero = extrairNumeros(cpf);
    if (cpfNumero.length === 11) {
      retorno = true;
    }
  }

  // console.log("CPF Somente Números: ", cpfNumero);

  return retorno;
}

function extrairNumeros(oque) {
  let retorno = "";

  for (let contador = 0; contador <= oque.length; contador++) {
    let caracter = oque.charAt(contador);

    if ("0123456789".includes(caracter)) {
      retorno = retorno.concat(caracter);
    }
  }

  return retorno;
}

function testarMascaraCPFValida(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

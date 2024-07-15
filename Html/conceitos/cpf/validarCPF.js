export function validarCPF(cpf) {
  let retorno = false;

  if (testarMascaraCPFValida(cpf)) {
    const cpfNumero = extrairNumeros(cpf);
    if (cpfNumero.length === 11) {
      let digito01 = 0;

      const SomaPrimeiroDigito = multiplicarESomar(cpfNumero.substring(0, 9));
      const RestoDivisaoPrimeiroDigito = SomaPrimeiroDigito % 11;

      if (RestoDivisaoPrimeiroDigito >= 2) {
        digito01 = 11 - RestoDivisaoPrimeiroDigito;
      }

      console.log("digito01", digito01);

      retorno = true;
    }
  }

  // console.log("CPF Somente Números: ", cpfNumero);

  return retorno;
}

function multiplicarESomar(sequencia = "") {
  let multiplicador = sequencia.length + 1;
  let soma = 0;

  for (let contador = 0; contador < sequencia.length; contador++) {
    // console.log(sequencia.charAt(contador), "x", multiplicador--);
    soma = soma + parseInt(sequencia.charAt(contador)) * multiplicador--;
  }

  return soma;
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

function testarMascaraCEPValido(cep) {
  return /^\d{5}-\d{3}$/.test(cep);
}

function testarMascaraFoneValido(fone, novedigitos = true) {
  let retorno = /^\(\d{2}\)\d{4}-\d{4}$/.test(fone);

  if (!retorno && novedigitos) {
    retorno = /^\(\d{2}\)\d{5}-\d{4}$/.test(fone);
  }

  return retorno;
}

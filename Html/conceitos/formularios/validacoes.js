function validarVazio(idTxtElemento, idLblErro, mensagemErro) {
  let retorno = true;

  const txtCampo = document.getElementById(idTxtElemento);
  const lblErro = document.getElementById(idLblErro);

  if (txtCampo.value.length === 0) {
    retorno = false;
  }

  if (retorno) {
    lblErro.innerHTML = "";
  } else {
    lblErro.innerHTML = mensagemErro;
  }

  return retorno;
}

function validarSomenteNumeros(idTxtElemento, idLblErro, mensagemErro) {
  let retorno = true;

  const txtCampo = document.getElementById(idTxtElemento);
  const lblErro = document.getElementById(idLblErro);

  if (txtCampo.value.length === 0) {
    retorno = false;
  }

  if (retorno) {
    lblErro.innerHTML = "";
  } else {
    lblErro.innerHTML = mensagemErro;
  }

  return retorno;
}

console.log('Rafael Dentro de validacoes.js')

function validarVazioRadio(idRadioElemento, idLblErro, mensagemErro) {
  let retorno = true;

  const lblErro = document.getElementById(idLblErro);

  const txtCampo = document.querySelector(
    'input[id="'.concat(idRadioElemento, '"]:checked')
  );

  if (!txtCampo) {
    retorno = false;
  }

  if (retorno) {
    lblErro.innerHTML = "";
  } else {
    lblErro.innerHTML = mensagemErro;
  }

  return retorno;
}

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

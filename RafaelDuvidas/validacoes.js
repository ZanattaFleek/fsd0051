function validarVazio(idTxtElemento, idlblErro, mensagemErro) {
  let retorno = true;

  const txtCampo = document.getElementById(idTxtElemento);
  const lblErro = document.getElementById(idlblErro);

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

function btSalvar() {
  let retorno = true;

  retorno =
    validarVazio("txtNome", "lblErroNome", "Preencha o campo Nome!") && retorno;

  retorno =
    validarVazio("txtCPF", "lblErroCPF", "Preencha o campo CPF!") && retorno;

  retorno =
    validarVazio(
      "txtEndereco",
      "lblErroEndereco",
      "Preencha o campo Endereço!"
    ) && retorno;

  retorno =
    validarVazio("txtNumero", "lblErroNumero", "Preencha o campo Numero!") &&
    retorno;

  retorno =
    validarVazio(
      "txtComplemento",
      "lblErroComplemento",
      "Preencha o campo Complemento!"
    ) && retorno;

  retorno =
    validarVazio("txtBairro", "lblErroBairro", "Preencha o campo Bairro!") &&
    retorno;

  retorno =
    validarVazio("txtCidade", "lblErroCidade", "Preencha o campo Cidade!") &&
    retorno;

  retorno =
    validarVazio("txtUF", "lblErroUF", "Preencha o campo UF!") && retorno;

  retorno =
    validarVazio("txtCep", "lblErroCep", "Preencha o campo CEP!") && retorno;

  retorno =
    validarVazio(
      "txtTelefone",
      "lblErroTelefone",
      "Preencha o campo Telefone!"
    ) && retorno;

  retorno =
    validarVazio("txtIdade", "lblErroIdade", "Preencha o campo Idade!") &&
    retorno;

  retorno =
    validarVazio(
      "txtEstadoCivil",
      "lblErroEstadoCivil",
      "Preencha o campo Estado Civil!"
    ) && retorno;

  retorno =
    validarVazio(
      "txtRendaMensal",
      "lblErroRendaMensal",
      "Preencha o campo Renda!"
    ) && retorno;

  retorno =
    validarVazio(
      "txtDataDeNascimento",
      "lblErroDataDeNascimento",
      "Preencha o campo Data de Nascimento!"
    ) && retorno;

  retorno =
    validarVazio("txtEmail", "lblErroEmail", "Preencha o campo E-mail!") &&
    retorno;

  if (retorno) {
    alert("Cadastro Pode Ser Gravado!!!!");
  }
  
}

function permitirNumeros(ev) {
  const tecla = ev.key;

  if (!"0123456789-".includes(tecla)) {
    event.preventDefault();
  }
}

function exibirOnChange() {
  console.log("Aconteceu o On Change");
}

function exibirOnInput() {
  console.log("Aconteceu o On Input");
}

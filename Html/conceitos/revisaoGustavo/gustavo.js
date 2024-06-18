function alterarTitulo() {
  const h1Titulo = document.getElementById("titulo");
  const txtCorDoObjeto = document.getElementById("txtCorDoObjeto");

  h1Titulo.innerHTML = "Fleek Cursos - Escola de Programação";

  h1Titulo.style = "color: ".concat(txtCorDoObjeto.value, ";");

  // console.log(txtCorDoObjeto.value);
}

function alterarParagrafos() {
  const paragrafos = document.getElementsByTagName("p");

  for (let elementoP of paragrafos) {
    elementoP.style = "color: ".concat(txtCorDoObjeto.value, ";");
  }
}

function exibirNome() {
  const txtNome = document.getElementById("txtNome");

  console.log(txtNome.value);
}

function AlterarCorBotao(idElemento) {
  const btExibirNome = document.getElementById(idElemento);
  btExibirNome.style = "background-color: red; color: white;";
}

function VoltarCorBotao(idElemento) {
  const btExibirNome = document.getElementById(idElemento);
  btExibirNome.style = "background-color: gray;";
}

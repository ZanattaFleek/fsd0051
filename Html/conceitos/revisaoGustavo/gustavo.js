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

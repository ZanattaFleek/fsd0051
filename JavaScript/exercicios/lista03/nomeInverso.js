const nome = "Fleek Cursos";

let resultado = "";

for (let contador = nome.length - 1; contador >= 0; contador--) {
  resultado = resultado.concat(nome[contador]);
}

console.log(resultado);

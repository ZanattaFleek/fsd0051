var nota01 = 3;
var nota02 = 10;
var nota03 = 6;

var mediaDasNotas = (nota01 + (nota02 + nota03)) / 3;

console.log("A Média é: ", mediaDasNotas, "e esta aluno está");

if (mediaDasNotas < 5) {
  console.log("Reprovado");

} else if (mediaDasNotas >= 7) {
  console.log("Aprovado");

} else if (mediaDasNotas >= 5) {
  console.log("Recuperação");

}

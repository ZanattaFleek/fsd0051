const frase = "O rato roeu a roupa do rei de Roma e o rei de Roma reclamou";

//const novaFraseLocal = frase.replaceAll("Roma", "Divinópolis");
//const novaFraseCargo = frase.replaceAll("rei", "prefeito");

//const novaFraseCompleta = novaFraseLocal.replaceAll("rei", "prefeito");

console.log(
  frase
    .replaceAll("Roma", "Divinopolis")
    .replaceAll("rei", "Prefeito")
    .toUpperCase()
);

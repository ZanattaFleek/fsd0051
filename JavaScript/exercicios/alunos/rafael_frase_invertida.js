// } else if (caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122) {

const Frase = "O rato roeu a roupa do rei no dia 29/04/2024";

const final = Frase.length - 1;

let resultado = "";
let qtdVogais = 0;
let qtdConsoantes = 0;
let qtdEspaco = 0;
let qtdCarEsp = 0;
let qtdNumero = 0;

for (let contador = final; contador >= 0; contador--) {
  resultado = resultado.concat(Frase[contador]);

  const caracter = Frase.toLowerCase().charAt(contador);

  if ("aeiou".includes(caracter)) {
    qtdVogais++;
  } else if (caracter >= "a" && caracter <= "z") {
    qtdConsoantes++;
  } else if (caracter === " ") {
    qtdEspaco++;
  } else if (caracter >= "0" && caracter <= "9") {
    qtdNumero++;
  } else {
    qtdCarEsp++;
  }
}
console.log("Frase normal: ", Frase);
console.log("Frase ao contrário: ", resultado);
console.log("A qtd de vogais na frase são de: ", qtdVogais);
console.log("A qtd de espaço na frase são de: ", qtdEspaco);
console.log("A qtd de consoantes na frase são de: ", qtdConsoantes);
console.log("A qtd de números na frase são de: ", qtdNumero);
console.log("A qtd de caracteres especial na frase são de: ", qtdCarEsp);

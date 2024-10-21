import { ClsCalculadoraCientifica } from "./calculadora/ClsCalculadoraCientifica";
import ClsCalculadoraPadrao from "./calculadora/ClsCalculadoraPadrao";

let calculadora = new ClsCalculadoraPadrao(15, 20);
let calculadoraCientifica = new ClsCalculadoraCientifica(5, 3)

calculadora.somar()
console.log(calculadora.getResultado())

calculadoraCientifica.potencia()
console.log(calculadoraCientifica.getResultado())

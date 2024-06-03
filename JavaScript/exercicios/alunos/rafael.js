var Salario = 1000;
var calculo = 0;

if (Salario > 1903.98 && Salario <= 2826.65) {
  calculo = (Salario * 0.075 - 142.8).toLocaleString();

} else if (Salario <= 3751.05) {
  calculo = (Salario * 0.15 - 354.8).toLocaleString();

} else if (Salario <= 4664.68) {
  calculo = (Salario * 0.225 - 636.13).toLocaleString();

} else {
  console.log("Quando não entra em nenhum if ou else if....");
  
}

console.log("O IRRF a ser pago será de R$: ", calculo);

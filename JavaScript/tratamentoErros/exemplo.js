"use strict";

var empresa = "Fleek";

try {
  console.log(empresa);
  console.log(endereco);
} catch (e) {
  try {
    console.log("Houve um Erro na execução...", erro.message);
  } catch {
    console.log("Erro ao tratar o Erro Anterior....");
  }
} finally {
  console.log("Executado no Final....");
}

function onKeyUpCep() {
  const qualCep = document.getElementById("txtCep").value;

  if (qualCep.length === 8) {
    consultarCep(qualCep);
  }
}

function consultarCep(qualCep) {
  const url = "https://viacep.com.br/ws/".concat(qualCep).concat("/json/");

  fetch(url)
    .then((rs) => {
      // console.log("Resultado do Then do Fetch: ", rs.ok);
      // console.log("Formato de JSON", rs.json());
      if (rs.ok) {
        return rs.json();
      } else {
        return {
          bairro: "Não Localizado",
          cep: "Erro",
          complemento: "",
          ddd: "",
          gia: "",
          ibge: "",
          localidade: "Não localizado",
          logradouro: "Não localizado",
          siafi: "",
          uf: "",
          unidade: "",
        };
      }
    })
    .then((resultado) => {
      document.getElementById("txtLogradouro").value = resultado.logradouro;
      document.getElementById("txtCidade").value = resultado.localidade;
      document.getElementById("txtBairro").value = resultado.bairro;
    })
    .catch((e) => {
      console.log("Resultado do Catch do Fetch: ", e);
    });
}

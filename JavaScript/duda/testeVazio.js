
function validarCampoVazio(conteudo) {
    if (conteudo.trim().length === 0) {
        return false
    } else {
        return true
    }
}

if (validarCampoVazio('Wagner Mendes Breves')) {
    console.log('Wagner Mendes Breves - Não Vazio - OK')
}

if (!validarCampoVazio('')) {
    console.log('Campo é Vazio....')
}

/*
const nome = " Wagner Mendes Breves ";

const nomeSemEspaco = nome.trim();

if (nomeSemEspaco.length !== 0) {
  console.log("Esta String não é vazia", '"'.concat(nomeSemEspaco).concat('"'));
} else {
  console.log("Esta String é Vazia", nomeSemEspaco);
}
  */

/*
- Antes de testar, limpo os espaços vazios do início e do final
- Contar os caracteres --> QTD é 0, então está vazio
- Comparar com uma string vazio --> ""
- "" === " " --> False

- Alternativa --> charAt(0) existe e se é diferente de espaço em branco
*/

console.log('A - Executando Buscador de CEP')

fetch('https://viacep.com.br/ws/01001000/json/').then(rs => {

    return rs.json()

}).then(rsCEP => {

    console.log(rsCEP)

}).catch(erro => {

    console.log('C - Erro ao buscar CEP: ', erro)

})

console.log('D - Final do Buscador de CEP')

// Non Blocking


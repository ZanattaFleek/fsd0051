import ClsBuscarCEP, { rsCEPInterface } from "./CEP/ClsBuscarCEP";

const clsBuscarCEP: ClsBuscarCEP = new ClsBuscarCEP()

let promessas: Array<Promise<rsCEPInterface>> = []

promessas.push(clsBuscarCEP.buscar('35500324'))
promessas.push(clsBuscarCEP.buscar('35500010'))
promessas.push(clsBuscarCEP.buscar('35500173'))
promessas.push(clsBuscarCEP.buscar('35500001'))
promessas.push(clsBuscarCEP.buscar('35500069'))

Promise.all(promessas).then(rs => {

    console.log('CEP 35500324 - ', rs[0])
    console.log('CEP 35500010 - ', rs[1])
    console.log('CEP 35500173 - ', rs[2])
    console.log('CEP 35500001 - ', rs[3])
    console.log('CEP 35500069 - ', rs[4])

}).catch(erro => {

    console.log(erro)

})





/*

clsBuscarCEP.buscar('35500324').then(rs => {

    console.log('Primeiro: 35500324 - ', rs)

    clsBuscarCEP.buscar('35500010').then(rs => {

        console.log('Segundo: 35500010 - ', rs)

    }).catch(erro => {

        console.log(erro)

    })

}).catch(erro => {

    console.log(erro)

})

*/
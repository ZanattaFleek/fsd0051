import ClsFormatacao from "../validacoes/ClsFormatacao"

export interface rsCEPInterface {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

export default class ClsBuscarCEP {
    public buscar(cep: string): Promise<rsCEPInterface> {

        const clsFormatacao: ClsFormatacao = new ClsFormatacao()
        const cepFormatado: string = clsFormatacao.somenteNumeros(cep)

        const url: string = 'https://viacep.com.br/ws/'.concat(cep, '/json/')

        return new Promise((resolve, reject) => {

            if (cepFormatado.length !== 8 || cepFormatado.length !== cep.length) {
                reject('CEP inválido')
            } else {
                fetch(url).then(rs => {

                    return rs.json()

                }).then(rsCEP => {

                    resolve(rsCEP)

                }).catch(erro => {

                    reject('Erro ao Buscar CEP :'.concat(erro.message))

                })
            }

        })

    }
}
import { EstadoCivil, PessoaInterface } from "./interfaces/pessoaInterfaces"

let cadastro: PessoaInterface = {
    idade: 26,
    nome: 'Zanatta',
    estadoCivil: EstadoCivil.Casado,
    profissao: 'Desenvolvedor',
    filhos: [{
        estudante: true,
        idade: 25,
        nome: 'Gabriela'
    },
    {
        estudante: true,
        idade: 21,
        nome: 'Marcela'
    }]
}

console.log('Nome do Pai / Mãe: ', cadastro.nome, ' tem ', cadastro.filhos.length, ' filhos')
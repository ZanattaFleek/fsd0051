export enum EstadoCivil {
    'Casado',
    'Solteiro',
    'Divorciado',
    'Viuvo'
}

export interface PessoaInterface {
    nome: string
    idade: number
    estadoCivil: EstadoCivil
    profissao: string
    filhos: Array<FilhoInterface>
}

export interface FilhoInterface {
    nome: string
    idade: number
    estudante: boolean
}


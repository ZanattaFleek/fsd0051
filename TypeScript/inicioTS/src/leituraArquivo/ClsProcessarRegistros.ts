interface RegistroInterface {
    nome: string
    matricula: number
    nota01: number
    nota02: number
    nota03: number
}

export default class ClsProcessarRegistros {

    private registros: Array<RegistroInterface> = []

    public setarRegistros(registros: Array<string>): void {

        registros.forEach((linha: string, indice: number) => {

            if (indice > 0 && linha.length > 0) {
                const tmp: Array<string> = linha.split(';')
                this.registros.push({
                    matricula: parseInt(tmp[0]),
                    nome: tmp[1] as string,
                    nota01: parseFloat(tmp[2]),
                    nota02: parseFloat(tmp[3]),
                    nota03: parseFloat(tmp[4])
                })
            }

        })

        console.log('Registros Processados: ', this.registros)

    }

}
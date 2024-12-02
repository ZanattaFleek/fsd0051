import fs from "fs"

export default class ClsLerCSV {

    private nomeArquivo: string = ''
    private conteudo: string = ''

    public constructor(nomeArquivo: string) {
        this.nomeArquivo = nomeArquivo
    }

    public realizarLeitura(): Promise<boolean> {

        return new Promise((resolve, reject) => {

            fs.readFile(this.nomeArquivo, 'utf8', (err: any, data: any) => {

                if (err) {
                    console.log(err.code)
                    this.conteudo = ''
                    resolve(false)
                } else {
                    this.conteudo = data
                    resolve(true)
                }

            })

        })

    }

    public get conteudoArquivo(): string {
        return this.conteudo
    }

    public registros(): Array<string> {
        return this.conteudo.split('\r\n')
    }

}
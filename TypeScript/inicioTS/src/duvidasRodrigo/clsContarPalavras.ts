export default class ClsContarPalavras {

    private frase: string = ''
    private totalPalavras: number = 0

    public setarTexto(texto: string): void {
        this.frase = texto
        this.contar()
    }

    public set texto(qualTexto: string) {
        this.frase = qualTexto
        this.contar()
    }

    private contar(): void {
        const tmpArrayPalavras = this.frase.split(' ')
        this.totalPalavras = tmpArrayPalavras.length
    }

    public getTotalPalavras(): number {
        return this.totalPalavras
    }

    public get qtdPalavras(): number {
        return this.totalPalavras
    }

}
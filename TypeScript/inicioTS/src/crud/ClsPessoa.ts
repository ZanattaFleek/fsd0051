export default class ClsPessoa {

    private nome: string = ''

    public setNome(novoNome: string): void {
        this.nome = novoNome
    }

    public getNome(): string {
        return this.nome
    }

    public transformarEmMaiusculo(): void {
        this.nome = this.nome.toUpperCase()
    }

    public validacao(): boolean {
        if (this.nome.length > 0) {
            return true
        } else {
            return false
        }
    }

}

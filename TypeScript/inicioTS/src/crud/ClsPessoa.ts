export default class ClsPessoa {

    //Propriedade
    private nome: string

    //Propriedade
    public sobreNome: string = 'de Paula'

    //Propriedade
    protected idade: number = 30

    public constructor(nomePadrao: string) {
        this.nome = nomePadrao
    }

    public atribuirNomeESobrenome(nome: string, sobreNome: string): void {
        this.nome = nome.toUpperCase()
        this.sobreNome = sobreNome.toUpperCase()
    }

    // Método
    public getNomeCompleto(): string {
        return this.nome.concat(' ', this.sobreNome)
    }

    protected transformarNomeEmMaiusculo(): void {
        this.nome = this.nome.toUpperCase()
        this.sobreNome = this.sobreNome.toUpperCase()
    }

}

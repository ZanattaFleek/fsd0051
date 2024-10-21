export default class ClsCalculadoraPadrao {

    protected numero1: number = 0;
    protected numero2: number = 0;
    protected resultado: number = 0

    public constructor(numero1: number, numero2: number) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    public setNumero1(novoNumero1: number): void {
        this.numero1 = novoNumero1;
    }

    public setNumero2(novoNumero2: number): void {
        this.numero2 = novoNumero2;
    }

    public somar(): void {
        this.resultado = this.numero1 + this.numero2
    }

    public subtrair(): void {
        this.resultado = this.numero1 - this.numero2
    }

    public dividir(): void {
        this.resultado = this.numero1 / this.numero2
    }

    public multiplicar(): void {
        this.resultado = this.numero1 * this.numero2
    }

    public getResultado(): number {
        return this.resultado
    }

}
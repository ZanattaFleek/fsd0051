import ClsCalculadoraPadrao from "./ClsCalculadoraPadrao";

export class ClsCalculadoraCientifica extends ClsCalculadoraPadrao {
    public potencia(): void {
        this.resultado = Math.pow(this.numero1, this.numero2)
    }

    public raizQuadrada(): void {
        this.resultado = Math.sqrt(this.numero1)
    }

    public raizCubica(): void {
        this.resultado = Math.cbrt(this.numero1)
    }

    public fatorial(): void {
        let fatorial = 1
        for (let i = 1; i <= this.numero1; i++) {
            fatorial *= i
        }
        this.resultado = fatorial
    }
}
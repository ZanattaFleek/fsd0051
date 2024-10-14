import ClsFormatacao from "./ClsFormatacao"

export default class ClsValidacaoCPF {

    private clsFormatacao: ClsFormatacao = new ClsFormatacao();

    /**
     * Valida um CPF de acordo com as regras da Receita Federal
     * @param cpf CPF a ser validado - Pode estar formatado ou somente números
     */
    public validarCPF(cpf: string): boolean {

        if (this.clsFormatacao.validarFormatoCPF(cpf)) {

            return this.verificarCPFValido(cpf);

        } else {
            return false
        }

    }

    private verificarCPFValido(cpf: string): boolean {

        const cpfNumeros: string = this.clsFormatacao.somenteNumeros(cpf);
        const novePrimeirosDigitos: string = cpfNumeros.substring(0, 9);
        const digitoFornecido1: string = cpfNumeros[9];
        const digitoFornecido2: string = cpfNumeros[10];

        const digitoCalculado1: string = this.calcularDigitoVerificador(novePrimeirosDigitos);

        const digitoCalculado2: string = this.calcularDigitoVerificador(novePrimeirosDigitos.concat(digitoCalculado1));

        return digitoFornecido1 == digitoCalculado1 && digitoFornecido2 == digitoCalculado2
    }

    private calcularDigitoVerificador(sequenciaNumerica: string): string {

        const inicio: number = sequenciaNumerica.length + 1

        let soma: number = 0

        for (let multiplicador = inicio; multiplicador >= 2; multiplicador--) {

            const indice = inicio - multiplicador
            const digito: string = sequenciaNumerica[indice]

            soma += parseInt(digito) * multiplicador

            // console.log('Digito: ', digito, 'multiplicador', multiplicador)
            // const digito: string = sequenciaNumerica.substring(indice, indice + 1)

        }

        const restoDivisao: number = soma % 11

        let digito: number = 0

        if (restoDivisao >= 2) {
            digito = 11 - restoDivisao
        }

        return digito.toString()

    }

}
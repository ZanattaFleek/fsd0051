export default class ClsFormatacao {
    /**
     * Devolve somente os números de uma string recebida
     * @param oque String a ter os números recebidos
     * @returns String somente com os números
     */
    public somenteNumeros(oque: string): string {
        return oque.replace(/\D/g, '');
    }

    /**
     * Verifica se uma sequencia possui o formato válido de CPF ou somente números
     * @param cpf Sequencia a ser validada
     * @returns true se for um CPF válido ou somente números
     */
    public validarFormatoCPF(cpf: string): boolean {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;
        return regex.test(cpf);
    }   

}
import ClsLerCSV from "./ClsLerCSV";

const clsLerArquivo: ClsLerCSV = new ClsLerCSV('src\\leituraArquivo\\Dados.csv')

clsLerArquivo.realizarLeitura().then(rsLeitura => {

    if (rsLeitura) {

        const registros = clsLerArquivo.registros()

        console.log('Registros Lidos: ', registros, registros.length)

    } else {
        console.log('Erro na Leitura do Arquivo....')
    }

})
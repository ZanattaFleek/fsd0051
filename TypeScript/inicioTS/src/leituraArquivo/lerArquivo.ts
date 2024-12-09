import ClsLerCSV from "./ClsLerCSV";
import ClsProcessarRegistros from "./ClsProcessarRegistros";

const clsLerArquivo: ClsLerCSV = new ClsLerCSV('src\\leituraArquivo\\Dados.csv')

const clsProcessarRegistros: ClsProcessarRegistros = new ClsProcessarRegistros()

clsLerArquivo.realizarLeitura().then(rsLeitura => {

    if (rsLeitura) {

        const registros = clsLerArquivo.registros()

        clsProcessarRegistros.setarRegistros(registros)

    } else {
        console.log('Erro na Leitura do Arquivo....')
    }

})
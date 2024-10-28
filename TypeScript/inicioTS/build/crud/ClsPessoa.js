"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClsPessoa {
    constructor(nomePadrao) {
        //Propriedade
        this.sobreNome = 'de Paula';
        //Propriedade
        this.idade = 30;
        this.nome = nomePadrao;
    }
    atribuirNomeESobrenome(nome, sobreNome) {
        this.nome = nome.toUpperCase();
        this.sobreNome = sobreNome.toUpperCase();
    }
    // Método
    getNomeCompleto() {
        return this.nome.concat(' ', this.sobreNome);
    }
    transformarNomeEmMaiusculo() {
        this.nome = this.nome.toUpperCase();
        this.sobreNome = this.sobreNome.toUpperCase();
    }
}
exports.default = ClsPessoa;
//# sourceMappingURL=ClsPessoa.js.map
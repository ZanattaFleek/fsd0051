"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClsPessoa {
    constructor() {
        this.nome = '';
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getNome() {
        return this.nome;
    }
    transformarEmMaiusculo() {
        this.nome = this.nome.toUpperCase();
    }
    validacao() {
        if (this.nome.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = ClsPessoa;

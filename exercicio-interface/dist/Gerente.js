"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    gerenciar() {
        console.log(`o ${this.nome} está gerenciando.`);
    }
    trabalhar() {
        console.log(`o ${this.nome} está trabalhando.`);
    }
}
exports.Gerente = Gerente;

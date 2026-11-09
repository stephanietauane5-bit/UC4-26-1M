"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiderTecnico = void 0;
class LiderTecnico {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`o ${this.nome} está trabalhando.`);
    }
    programar() {
        console.log(`o ${this.nome} está programando.`);
    }
    gerenciar() {
        console.log(`o ${this.nome} está gerenciando.`);
    }
}
exports.LiderTecnico = LiderTecnico;

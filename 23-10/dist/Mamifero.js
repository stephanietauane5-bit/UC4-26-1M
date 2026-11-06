"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
// Esta classe será nossa "classe pai", também chamada de "super classe"
class Mamifero {
    nome;
    patas;
    pelo;
    constructor(nome, patas, pelo) {
        this.nome = nome;
        this.patas = patas;
        this.pelo = pelo;
    }
    fazerSom() {
        console.log(`${this.nome} está fazendo um barulho.`);
    }
}
exports.Mamifero = Mamifero;

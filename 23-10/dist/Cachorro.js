"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Mamifero_1 = require("./Mamifero");
// Usando a palavra "extends", informamos que a classe "Cachorro"
// herda da classe "Mamífero"
class Cachorro extends Mamifero_1.Mamifero {
    raca;
    constructor(raca, nome, patas, pelo) {
        // "Super" vem de "Super class", que é a classe pai
        // super() nada mais é do que o constructor da classe pai
        super(nome, patas, pelo);
        this.raca = raca;
    }
}
exports.Cachorro = Cachorro;

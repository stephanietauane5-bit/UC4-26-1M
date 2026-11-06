"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo) {
        this.titulo = titulo;
    }
    exibirTitulo() {
        console.log(`O título do livro é ${this.titulo}.`);
    }
}
exports.Livro = Livro;

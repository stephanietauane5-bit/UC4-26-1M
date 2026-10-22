"use strict";
/*
Crie a classe Carro
Siga as instruções para criá-la
usando de exemplo a classe Cachorro.

O carro deve ter:
marca, tipo, ano

O que o carro faz:
- ele anda
- ele buzina

Depois de criar a classe, crie 3 carros diferentes no "index.ts", chame seus
atributos em console.log e chmae seus métodos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    tipo;
    ano;
    constructor(minhaMarca, meuTipo, meuAno) {
        this.marca = minhaMarca;
        this.tipo = meuTipo;
        this.ano = meuAno;
    }
    andar() {
        console.log(`O ${this.marca}: está andando!`);
    }
    buzinar() {
        console.log(`${this.marca}: bi bi bi!`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map
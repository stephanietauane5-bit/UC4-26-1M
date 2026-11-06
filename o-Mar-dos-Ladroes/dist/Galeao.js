"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeao = void 0;
const Navio_1 = require("./Navio");
class Galeao extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao, vida = 100, velocidade = 80, canhoes = 50) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes);
    }
    navegar() {
        return `O galeão ${this.nome} avança lentamente pelo mar.`;
    }
    atacar() {
        return `O galeão ${this.nome} dispara uma poderosa salva de canhões.`;
    }
    repararNavio() {
        this.vida += 10;
        if (this.vida > 200)
            this.vida = 200;
    }
}
exports.Galeao = Galeao;

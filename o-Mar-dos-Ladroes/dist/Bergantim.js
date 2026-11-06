"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergantim = void 0;
const Navio_1 = require("./Navio");
class Bergantim extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao, vida = 50, velocidade = 100, canhoes = 20) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes);
    }
    navegar() {
        return `O bergantim ${this.nome} aproveita seus ventos favoráveis para navegar rapidamente.`;
    }
    atacar() {
        return `O bergantim ${this.nome} realiza uma sequência rápida de disparos.`;
    }
    verificarTripulacao() {
        if (this.capacidadeTripulacao > 20)
            this.capacidadeTripulacao = 20;
        if (this.capacidadeTripulacao < 0)
            this.capacidadeTripulacao = 0;
    }
}
exports.Bergantim = Bergantim;

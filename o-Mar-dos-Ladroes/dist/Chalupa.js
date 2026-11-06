"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupa = void 0;
const Navio_1 = require("./Navio");
class Chalupa extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao, vida = 25, velocidade = 150, canhoes = 10) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes);
    }
    navegar() {
        return `A chalupa ${this.nome} utiliza sua agilidade para realizar manobras rápidas.`;
    }
    atacando() {
        console.log `A chalupa ${this.nome} dispara seus ${this.canhoes} canhões e tenta escapar rapidamente.`;
    }
    explorarIlha() {
        return `A tripulação da chalupa ${this.nome} está explorando uma ilha em busca de tesouros.`;
    }
    verificarTripulacao() {
        if (this.capacidadeTripulacao > 20)
            this.capacidadeTripulacao = 10;
        if (this.capacidadeTripulacao < 0)
            this.capacidadeTripulacao = 0;
    }
}
exports.Chalupa = Chalupa;

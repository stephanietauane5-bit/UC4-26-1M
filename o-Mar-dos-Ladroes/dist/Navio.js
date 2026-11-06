"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navio = void 0;
class Navio {
    constructor(nome, capacidadeTripulacao, vida, velocidade, canhoes) {
        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vida = vida;
        this.velocidade = velocidade;
        this.canhoes = canhoes;
    }
    navegar() {
        return `O navio ${this.nome} está navegando.`;
    }
    atacar() {
        return `O navio ${this.nome} está atacando com seus ${this.canhoes} canhões.`;
    }
    receberDano(dano) {
        let danoPositivo = Math.abs(dano);
        this.vida -= danoPositivo;
        if (this.vida < 0)
            this.vida = 0;
    }
    exibirInformacoes() {
        return `Nome: ${this.nome}
        Tripulação: ${this.capacidadeTripulacao}
        Vida: ${this.vida}
        Velocidade: ${this.velocidade}
        Canhões: ${this.canhoes}`;
    }
}
exports.Navio = Navio;

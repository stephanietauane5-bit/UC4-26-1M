import { Navio } from "./Navio";

export class Chalupa extends Navio {
    constructor(nome: string, capacidadeTripulacao: number, vida: number = 25, velocidade: number = 150, canhoes: number = 10) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes); 
    }

    navegar(): string {
        return `A chalupa ${this.nome} utiliza sua agilidade para realizar manobras rápidas.`
    }

    atacando(): void {
        console.log`A chalupa ${this.nome} dispara seus ${this.canhoes} canhões e tenta escapar rapidamente.`
    }

    explorarIlha(): string {
        return `A tripulação da chalupa ${this.nome} está explorando uma ilha em busca de tesouros.`
    }

    private verificarTripulacao(): void {
        if (this.capacidadeTripulacao > 20) this.capacidadeTripulacao = 10
        if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0
    }
}
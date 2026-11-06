import { Navio } from "./Navio";

export class Bergantim extends Navio {
    constructor(nome: string, capacidadeTripulacao: number, vida: number = 50, velocidade: number = 100, canhoes: number = 20) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes); 
    }

    navegar(): string {
        return `O bergantim ${this.nome} aproveita seus ventos favoráveis para navegar rapidamente.`
    }

   atacar(): string {
        return `O bergantim ${this.nome} realiza uma sequência rápida de disparos.`
    }

    private verificarTripulacao(): void {
        if (this.capacidadeTripulacao > 20) this.capacidadeTripulacao = 20
        if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0
    }
}
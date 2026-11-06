 import { Navio } from "./Navio";

export class Galeao extends Navio {
       constructor(nome: string, capacidadeTripulacao: number, vida: number = 100, velocidade: number = 80, canhoes: number = 50) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes); 
    }

    navegar(): string {
        return `O galeão ${this.nome} avança lentamente pelo mar.`
    }

    atacar(): string {
        return `O galeão ${this.nome} dispara uma poderosa salva de canhões.`
    }

    repararNavio(): void {
        this.vida += 10 
        if (this.vida > 200) this.vida = 200
    }
}
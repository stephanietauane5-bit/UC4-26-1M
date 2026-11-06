import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {

    public acelerar(): void {
        this.velocidade += 25;
    }

    exibirVelocidade(): void {
        console.log(`A velocidade atual é ${this.velocidade}km/h`)
    }
}
import { Veiculo } from "./Veiculo";

export class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A Bicicleta se move.")
    }
}
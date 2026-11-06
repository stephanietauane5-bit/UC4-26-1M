import { Reptil } from "./Reptil";

export class Crocodilo extends Reptil {
    constructor(nome: string, idade: number, tipoEscama: string) {
        super(nome, idade, tipoEscama)
    }

    nadar(): void {
        console.log(`O ${this.nome} está nadando.`)
    }
}
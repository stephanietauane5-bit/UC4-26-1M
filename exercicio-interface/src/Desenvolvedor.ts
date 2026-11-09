import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Desenvolvedor implements ITrabalhador, IProgramador {
    private nome: string

    constructor(nome:string) {
    this.nome = nome
  }

   trabalhar(): void {
    console.log(`o ${this.nome} está trabalhando.`)
   }

   programar(): void {
    console.log(`o ${this.nome} está programando.`)
   }
}


import { IGerenciar } from "./interfaces/IGerente";
import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class LiderTecnico implements ITrabalhador, IProgramador, IGerenciar {
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

    gerenciar(): void {
    console.log(`o ${this.nome} está gerenciando.`)
   }
}
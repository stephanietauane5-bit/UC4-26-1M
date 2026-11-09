import { IGerenciar } from "./interfaces/IGerente";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Gerente implements IGerenciar, ITrabalhador {
    private nome: string

    constructor(nome:string) {
    this.nome = nome
  }

  gerenciar(): void {
    console.log(`o ${this.nome} está gerenciando.`)
   }

  trabalhar(): void {
    console.log(`o ${this.nome} está trabalhando.`)
   }
}
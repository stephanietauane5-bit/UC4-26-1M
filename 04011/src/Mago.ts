import { IAtacante } from "./IAtacante";

export class Mago implements IAtacante{

  public nome: string;

  constructor(nome:string) {
    this.nome = nome
  }

  lancarMagia(): void {
    console.log(`${this.nome} lança uma bola de fogo!`);
  }

  atacar():void {
    console.log(`O ${this.nome} ataca com o seu cajado.`)
  }

  curar (valorCura:number):void {
    console.log(`${this.nome} cura ${valorCura} pontos de vida.`)
  }
}
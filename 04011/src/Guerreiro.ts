import { IAtacante } from "./IAtacante";

// Eu estou dizendo que qualquer Guerreiro deve seguir as regras que a 
// interface IAtacante criar 
export class Guerreiro implements IAtacante{

  public nome: string;

  constructor(nome:string) {
    this.nome = nome
  }

  atacar(): void {
    console.log(`${this.nome} ataca com a espada!`);
  }
}
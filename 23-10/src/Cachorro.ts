import { Mamifero } from "./Mamifero";

// Usando a palavra "extends", informamos que a classe "Cachorro"
// herda da classe "Mamífero"
export class Cachorro extends Mamifero{
    raca:string

    constructor(raca:string, nome:string, patas:number, pelo:string){
        // "Super" vem de "Super class", que é a classe pai
        // super() nada mais é do que o constructor da classe pai
        super(nome, patas, pelo );
        this.raca = raca
    }

    correr():void {
        console.log(`O ${this.getNome()} está correndo com suas ${this.patas}!`)
    }
}



// private -> só a própria classe pode acessar diretamente usando "this.atributo".
// O restante precisa usar "getAtributo" ou "setAtributo"

// public -> qualquer um acessa e modifica diretamente. Não precisa de "get" ou "set"

// protected -> tanto a classe pai quanto as classes filhas podem acessar diretamente.
// O restante precisa usar "getAtributo" ou "setAtributo"
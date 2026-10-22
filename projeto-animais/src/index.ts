// import { Personagem } from "./Personagem";

import { Arma } from "./Arma"
import { Personagem } from "./Personagem"


// const personagem:Personagem = new Personagem("Xablau", 25)

// console.log(personagem.vida) // 50

// personagem.curar()

// console.log(personagem.vida) // 60

// personagem.perderVida(15)

// console.log(personagem.vida) // 45

// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()

// console.log(personagem.vida)

// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()

// console.log(personagem.vida)



const arma:Arma = new Arma("Espada", 50)
const arma2:Arma = new Arma("Machado", 49)
const arma3:Arma = new Arma("Lança", 51)

const per:Personagem = new Personagem("Percy", 7, arma)
const per1:Personagem = new Personagem("Annabeth", 6, arma3)
const per2:Personagem = new Personagem("Groover", 8, arma2)

// string é um tipo. Logo, podemos criar um array deste tipo
const nomes:string [] = ["Harry", "Rony", "Hermione"]
// number é um tipo. Logo, também podemos criar um array deste tipo
const numeros:number [] = [99, 108, 59]
// Se "Personagem" também é um tipo, não podemos criar um array de Personagem?
const personagens:Personagem[] = [per, per1, per2]


per.curarOutroPersonagem(per2)
per.atacarAquelePersonagem(per1)
// Criem uma classe Personagem que tenha:
// nome
// vida
// dinheiro

import { Cachorro } from "./Cachorro";
import { Personagem } from "./Personagem";

// Coloque todos os atributos como "private"
// Crie um método que mostra a vida (exemplo: mostraVida())
// Criem um método que modifica a vida (exemplo: mudarVida(vida:number))

//  const personagem:Personagem = new Personagem("Hannah", 100, 10)

// console.log(personagem.getVida()) // 100
// personagem.setVida(50)
// console.log(personagem.getVida()) // 0

// personagem.setNome("Joe")
// console.log(personagem.getNome())

// Crie uma classe chamada "Cachorro"
// Coloque os atributos no cachorro
// Coloque os atributos "private"
// Crie o constructor
// Crie os métodos "get" e "set"
// Crie 3 cachorros no index e chmae seus métodos



const cachorro:Cachorro = new Cachorro("Pastor Alemão", 10, 33)
const cachorro2:Cachorro = new Cachorro("Golden Retriever", 11, 27)
const cachorro3:Cachorro = new Cachorro("Caramelo", 13, 19)

cachorro.setNome("Cacau")
console.log(cachorro.getNome())

cachorro.setVida(8)
console.log(cachorro3.getVida())

cachorro.setPeso(2134)
console.log(cachorro2.getPeso())
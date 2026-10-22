"use strict";
// import { Personagem } from "./Personagem";
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = require("./Arma");
const Personagem_1 = require("./Personagem");
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
const arma = new Arma_1.Arma("Espada", 50);
const arma2 = new Arma_1.Arma("Machado", 49);
const arma3 = new Arma_1.Arma("Lança", 51);
const per = new Personagem_1.Personagem("Percy", 7, arma);
const per1 = new Personagem_1.Personagem("Annabeth", 6, arma3);
const per2 = new Personagem_1.Personagem("Groover", 8, arma2);
// string é um tipo. Logo, podemos criar um array deste tipo
const nomes = ["Harry", "Rony", "Hermione"];
// number é um tipo. Logo, também podemos criar um array deste tipo
const numeros = [99, 108, 59];
// Se "Personagem" também é um tipo, não podemos criar um array de Personagem?
const personagens = [per, per1, per2];
per.curarOutroPersonagem(per2);
per.atacarAquelePersonagem(per1);

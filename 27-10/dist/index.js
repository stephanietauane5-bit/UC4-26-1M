"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coruja_1 = require("./Coruja");
const Crocodilo_1 = require("./Crocodilo");
const Mamifero_1 = require("./Mamifero");
const Reptil_1 = require("./Reptil");
// Criando objetos
const cachorro = new Mamifero_1.Mamifero("Rex", 5, true);
const cobra = new Reptil_1.Reptil("Naja", 2, "escamas lisas");
const crocodilo = new Crocodilo_1.Crocodilo("Crocodilo-do-Nilo", 67, "escamas rugosas");
const coruja = new Coruja_1.Coruja("Edwiges", 6);
cachorro.mover(); // herdado da classe Animal
cachorro.amamentar(); // método da classe Mamifero
cobra.mover(); // herdado da classe Animal
cobra.botarOvo(); // método da classe Reptil
crocodilo.mover(); // herdado da classe Animal
crocodilo.botarOvo(); // herdado da classe Reptil
crocodilo.nadar(); // método da classe Crocodilo
const meuArray = [cachorro, coruja, crocodilo];
for (let i = 0; i < meuArray.length; i++) {
    meuArray[i].comer();
}

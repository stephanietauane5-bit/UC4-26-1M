"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodilo = void 0;
const Reptil_1 = require("./Reptil");
class Crocodilo extends Reptil_1.Reptil {
    constructor(nome, idade, tipoEscama) {
        super(nome, idade, tipoEscama);
    }
    nadar() {
        console.log(`O ${this.nome} está nadando.`);
    }
}
exports.Crocodilo = Crocodilo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Mamifero_1 = require("./Mamifero");
class Cachorro extends Mamifero_1.Mamifero {
    constructor(nome, idade, temPelos) {
        super(nome, idade, temPelos);
    }
}
exports.Cachorro = Cachorro;

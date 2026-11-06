"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    acelerar() {
        this.velocidade += 25;
    }
    exibirVelocidade() {
        console.log(`A velocidade atual é ${this.velocidade}km/h`);
    }
}
exports.Carro = Carro;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    atualizarSaldo(valor) {
        this.saldo += valor;
    }
}
exports.Conta = Conta;

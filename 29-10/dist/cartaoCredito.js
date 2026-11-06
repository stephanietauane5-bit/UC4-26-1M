"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartaoCredito = void 0;
const Pagamento_1 = require("./Pagamento");
class cartaoCredito extends Pagamento_1.Pagamento {
    processar() {
        console.log("Processando pagamento via cartão de crédito.");
    }
}
exports.cartaoCredito = cartaoCredito;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bicicleta_1 = require("./Bicicleta");
const Boleto_1 = require("./Boleto");
const Carro_1 = require("./Carro");
const cartaoCredito_1 = require("./cartaoCredito");
const Pagamento_1 = require("./Pagamento");
const Veiculo_1 = require("./Veiculo");
const veiculo = new Veiculo_1.Veiculo();
const carro = new Carro_1.Carro();
const bicicleta = new Bicicleta_1.Bicicleta();
veiculo.mover();
carro.mover();
bicicleta.mover();
const pagamentos = [
    new Pagamento_1.Pagamento(),
    new cartaoCredito_1.cartaoCredito(),
    new Boleto_1.Boleto()
];
pagamentos.forEach(pagamento => {
    pagamento.processar();
});

import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Carro } from "./Carro";
import { cartaoCredito } from "./cartaoCredito";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";

const veiculo = new Veiculo()
const carro = new Carro()
const bicicleta = new Bicicleta()

veiculo.mover()
carro.mover()
bicicleta.mover()


const pagamentos: Pagamento[] = [
    new Pagamento(),
    new cartaoCredito(),
    new Boleto()
]

pagamentos.forEach(pagamento => {
    pagamento.processar()
})

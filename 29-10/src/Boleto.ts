import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento {
    processar(): void {
        console.log("Gerando boleto bancário. Aguardando compensação.")
    }
}
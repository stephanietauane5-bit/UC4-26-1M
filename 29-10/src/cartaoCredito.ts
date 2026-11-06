import { Pagamento } from "./Pagamento";

export class cartaoCredito extends Pagamento {
    processar(): void {
         console.log("Processando pagamento via cartão de crédito.")
    }
}
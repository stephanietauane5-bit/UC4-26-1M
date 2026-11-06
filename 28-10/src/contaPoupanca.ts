import { Conta } from "./Conta";

export class contaPoupanca extends Conta {
    constructor(saldo:number){
        super(saldo)
    }

    public aplicarJuros(valor: number): void {
        this.atualizarSaldo(this.saldo * (valor/100))
    }
}
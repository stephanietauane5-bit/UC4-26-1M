export class contaBancaria {
    private saldo:number

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public consultarSaldo(): void {
        console.log(`Saldo: R$ ${this.saldo}`);
    }

     public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    
}
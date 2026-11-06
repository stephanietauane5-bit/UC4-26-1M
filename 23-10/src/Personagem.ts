export class Personagem {
    protected nome:string
    protected vida:number = 100

    constructor(nome:string, vida:number){
        this.nome = nome
        this.vida = vida
    }

    curar():void {
        this.vida += 10
        if(this.vida > 200){
            this.vida = 200
        }
    }

    mostrarDados():void {
        console.log(`Nome do Personagem: ${this.nome} `)
        console.log(`Vida Atual: ${this.vida} `)
    }
}
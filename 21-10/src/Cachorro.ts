export class Cachorro {
    private nome: string
    private vida: number
    private peso: number

     constructor(nome:string, vida:number, peso:number){
        this.nome = nome
        this.vida = vida
        this.peso = peso
    }

     public getNome():string {
        return this.nome
    }

    public setNome(novoNome:string):void {
        this.nome = novoNome
    }

    public getVida():number {
        return this.vida
    }

    public setVida(novaVida:number):void {
        this.vida = novaVida
    }

    public getPeso():number {
        return this.peso
    }

    public setPeso(novoPeso:number):void {
        this.peso = novoPeso
    }
}
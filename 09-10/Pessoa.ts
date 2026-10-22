// Classes sempre começam com letra maíuscula
// export significa "exportar". Ou seja, outros arquivos podem "importar" esta classe e usar ela
// depois, usamos a palavra "class" para indicar que estamos criando uma classe
// e depois, colocamos o exato mesmo nome que demos para o arquivo
export class Pessoa {
    // Atributos
    // O que uma pessoa tem
    nome:string
    email:string
    senha:string


    // Método construtor (quanod uma função está dentro de uma classe, chamamos de método)
    // ele serve para criar o objeto Pessoa
    constructor(meuNome:string, meuEmail:string, minhaSenha:string) {
    this.nome = meuNome
    this.email = meuEmail
    this.senha = minhaSenha
    }

    andar():void{
        console.log(`${this.nome} está andando!`)
    }
}



import {Pessoa} from "./Pessoa";



let usuario:Pessoa = new Pessoa("Leo", "leo@gmail", "123")
let usuario2:Pessoa = new Pessoa("Xablau", "xablau@gmail", "123")
let usuario3:Pessoa = new Pessoa("Jonas", "jonas@gmail", "123")

console.log(usuario.nome)

usuario.andar()
usuario2.andar()
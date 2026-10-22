// Importações em Typescript são parecidas com este comando
// Estamops dizendo:
// importe TUDO (por isso o asterisco) com o nome de 'readline'
// (ele já cria um objeto com esse nome)
// da biblioteca 'readline-sync'
import * as readline from 'readline-sync'

let nome: string = readline.question("Qual é o seu nome? ")
let idade: number = readline.questionInt("Qual a sua idade? ")

console.log(`Olá ${nome}! Voce tem ${idade} anos.`)



function saudacao(meuNome: string, minhaIdade:number):string {
    return `Olá ${meuNome}! Voce tem ${minhaIdade} anos!`
}
console.log(saudacao (nome, idade))



// Esta função tem return
// Ela retorna um string
function frase():string{
    return `Olá pessoal!`
}
// Esta função também tem return
// Ela retorna um number
function somar():number{
    return 1+2
}
// Esta função NÃO TEM return
// Ela retorna void
function saudacoes():void{
    console.log("Olá galera!")
}



const pessoa: {nome:string, email:string, senha:string} = {
    nome: "Leo",
    email: "leo@gmail",
    senha: "senhaSecreta123"
}


const pessoa2: {nome:string, email:string, senha:string} = {
    nome: "Leo2",
    email: "leo2@gmail",
    senha: "senhaSecreta123"
}


const pessoa3: {nome:string, email:string, senha:string} = {
    nome: "Leo3",
    email: "leo3@gmail",
    senha: "senhaSecreta123"
}




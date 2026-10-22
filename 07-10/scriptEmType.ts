// Em typerscript, as variáveis e constantes são tipadas , ou seja, informados de que tipo são.
let meuNome:string = "Stephanie"
let minhaIdade:number = 17
let desligado:boolean = true


function somando(a:number, b:number):number {
    return a + b
}

console.log(somando(10, 90))


// Arrays em Type 
let compras:string[] = ["Pão", "Leite", "Manteiga"]
let numeros:Array<number> = [1, 2, 3]


// Crie um array que contém X notas 
// depois, calcule a média destas notas e mostre no terminal

// Lembrando, a média se calcula mostrando todos os números e dividindo
// o resultado pela quantidade de números

// Dica: para somar o array, use um for
for (let i:number = 0; i < 5; i++) {

}



const notas:number[] = [10, 5, 9, 8, 7]
let soma:number = 0

for (let i:number = 0; i < notas.length; i++) {
    soma += notas[i]
}

console.log("Soma das notas" + soma)
const media = soma / notas.length
console.log("Média das notas: " + media)


// Objeto em typescript
// Atributos com "?" são opcionais, ou seja, eu posso ou não colocar valor para eles
let person: {nome:string, idade:number, peso?:number} = {
    nome: "Stephanie",
    idade: 17
}


console.log(person.nome)
person.peso = 50



// Crie dois objetos representando pessoas (coloque nomes diferentes para os objetos)
// Estes objetos devem ter: nome, cidade, emprego sendo que emprego deve ser um atributo opcional.
// Depois, fça um if que mostre duas frases diferentes:
// Se a pessoa tem um emprego, mostra "Fulano da cidade tal está trabalhando".
// Se não, mostra "Fulano da cidade tal está desempregado"



let protagonista: {nome:string, cidade:string, emprego?:boolean} = {
    nome: "Carrie",
    cidade: "Mississipi",
    emprego: true
}

let codjuvante: {nome:string, cidade:string, emprego?:boolean} = {
    nome: "Beverly",
    cidade: "Derry"
}

if (codjuvante.emprego){
    console.log(`${codjuvante.nome} da cidade ${codjuvante.cidade} está trabalhando.`)
} else {
    console.log(`${protagonista.emprego} da cidade ${protagonista.cidade} está desempregado.`)
}
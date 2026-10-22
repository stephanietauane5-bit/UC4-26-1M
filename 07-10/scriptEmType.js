"use strict";
// Em typerscript, as variáveis e constantes são tipadas , ou seja, informados de que tipo são.
let meuNome = "Stephanie";
let minhaIdade = 17;
let desligado = true;
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 90));
// Arrays em Type 
let compras = ["Pão", "Leite", "Manteiga"];
let numeros = [1, 2, 3];
// Crie um array que contém X notas 
// depois, calcule a média destas notas e mostre no terminal
// Lembrando, a média se calcula mostrando todos os números e dividindo
// o resultado pela quantidade de números
// Dica: para somar o array, use um for
for (let i = 0; i < 5; i++) {
}
const notas = [10, 5, 9, 8, 7];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log("Soma das notas" + soma);
const media = soma / notas.length;
console.log("Média das notas: " + media);
// Objeto em typescript
// Atributos com "?" são opcionais, ou seja, eu posso ou não colocar valor para eles
let person = {
    nome: "Stephanie",
    idade: 17
};
console.log(person.nome);
person.peso = 50;
// Crie dois objetos representando pessoas (coloque nomes diferentes para os objetos)
// Estes objetos devem ter: nome, cidade, emprego sendo que emprego deve ser um atributo opcional.
// Depois, fça um if que mostre duas frases diferentes:
// Se a pessoa tem um emprego, mostra "Fulano da cidade tal está trabalhando".
// Se não, mostra "Fulano da cidade tal está desempregado"
let protagonista = {
    nome: "Carrie",
    cidade: "Mississipi",
    emprego: true
};
let codjuvante = {
    nome: "Beverly",
    cidade: "Derry"
};
if (codjuvante.emprego) {
    console.log(`${codjuvante.nome} da cidade ${codjuvante.cidade} está trabalhando.`);
}
else {
    console.log(`${protagonista.emprego} da cidade ${protagonista.cidade} está desempregado.`);
}

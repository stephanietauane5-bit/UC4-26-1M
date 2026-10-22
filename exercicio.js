const entrada = require("readline-sync")

//// Exercicio 1 ////

// let nome = entrada.question("Digite o seu nome: ")
// let idade = entrada.question("Digite a sua idade: ")
//     console.log(`Olá ${nome}, seja bem-vinda!`)



//// Exercicio 2 ////



// let a = entrada.questionFloat("Primeiro número: ");
// let b = entrada.questionFloat("Segundo número: ");
// console.log(`Resultado: ${a + b}`)
// console.log(`Resultado: ${a - b}`)
// console.log(`Resultado: ${a * b}`)
// console.log(`Resultado: ${a / b}`)



//// Exercicio 3 ////

// let nota = entrada.questionInt("Digite um numero: ");

// if (nota > 6) {
//    console.log("Aprovado");
// }
// else if (nota < 6) {
//    console.log("Reprovado");
// }



//// Exercicio 4 ////

// let n = entrada.questionInt("Digite um numero: ")

// if (n % 2 == 0) {
//    console.log("Este numero é par!")

// } else if (n % 2 != 0) {
//    console.log("Este numero é ímpar!")
// }



//// Exercicio 5 ////

// let semana = entrada.questionInt("Digite um número de 1 a 7: ");

// switch (semana) {

//     case 1:
//         console.log("Domingo");
//         break;

//     case 2:
//         console.log("Segunda");
//         break;

//     case 3:
//         console.log("Terça");
//         break;

//     case 4:
//         console.log("Quarta");
//         break;

//     case 5:
//         console.log("Quinta");
//         break;

//     case 6:
//         console.log("Sexta");
//         break;

//     case 7:
//         console.log("Sábado");
//         break;

//     default:
//         console.log("Semana inválida.");

// }



//// Exercicio 6 ////

// console.log("1- Hambúrguer")
// console.log("2- Pizza")
// console.log("3- Cachorro-quente")
// console.log("4- Refrigerante")
// console.log("5- Sorvete")

// let menu = entrada.questionInt("Solicite uma opção do seguinte menu: ")

// switch (menu) {

//     case 1:
//         console.log("Hambúrguer");
//         break;

//     case 2:
//         console.log("Pizza");
//         break;

//     case 3:
//         console.log("Cachorro-quente");
//         break;

//     case 4:
//         console.log("Refrigerante");
//         break;

//     case 5:
//         console.log("Sorvete");
//         break;

//     default:
//          console.log("Opção inválida.");
// }



//// Exercicio 7 ////

// let numeros = [4, 6, 8, 9, 7]

// let soma = 0

// for (let numero of numeros) {
//     soma = soma + numero
// }

// console.log(`O valor da soma ficou em ${soma}`)



//// Exercicio 8 ////

// let numero = 1;

// while(numero <= 10) {
//     console.log(numero)
//     numero++;
// }



//// Exercicio 9 ////

// let frutas = ["Melancia", "Manga", "Morango", "Melão"]

// for (let fruta of frutas) {
//      console.log(frutas)
// }



//// Exercicio 10 ////

// let cores = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo", "Rosa"]

// cores.forEach((cor) => {
//     console.log(cor);
// });



//// Exercicio 11 ////

// let pessoa = {

//     nome: "João",

//     idade: 25
// };

// for (let i in pessoa) {
//     console.log(`${i} - ${pessoa[i]}`)
// }



//// Exercicio 12 ////

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }



//// Exercicio 13 ////

// function maiorNumero(n1, n2) {
//     if (n1 > n2) {
//         return n1
//     } else if (n2 > n1) {
//     return n2
//     } else { 
//     return 'iguais'
//     }
// }


// console.log(maiorNumero(726376, 813798713))



//// Exercicio 14 ////

// const somarElementos = (array) => array.reduce((total, num) => total + num, 0);

// console.log(somarElementos([1, 2, 3, 4, 5])); 



//// Exercicio 15 ////

// const readline = require('readline');

// function saudarUsuario() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question('Qual o seu nome? ', (nome) => {
//     rl.question('Qual a sua idade? ', (idade) => {
//       console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
//       rl.close();
//     });
//   });
// }

// saudarUsuario();
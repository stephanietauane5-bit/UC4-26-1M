/*
Primeiro, crie o package.json (npm init -y)
Depois, crie o script do npm start
"start": npx tsc index.ts && node index.js
Aí, instale a biblioteca com readline-sync e também os tipos
npm i readline-sync
npm i @types/readline-sync
Verifique se os dois aparecem no package.json. Se não aparecem, não foram instalados.
*/

/*
Exercício 1:
Crie uma função chamada "somar" que pede dois números. Estes números devem ser passados
pelo usuário através do readline-sync.
Mostre a soma destes dois números. Não esqueça de tipar o retorno corretamente.
*/

/*
Exercício 2:
Seu Zé (sim, ele de novo) também está no ramo do Jogo do Bicho no mercadinho dele. Ele 
precisa agora de um sistema que identifique os números e os animais a partir dos números
que os clientes escolhem.

Para isso, voce deve:
- Solicitar nome do cliente;
- Solicitar um número de 1 a 20;
- Criar uma função chamada 'descobrirBicho' que recebe esse número
- Utilizando if, else if, e else, essa função identifica que animal a pessoa escolheu.
- A função retorna o nome do cliente, o número escolhido e o nome do animal escolhido,
tudo numa frase só!

// Animais:
Avestruz: 01 a 04 | Águia: 05 a 08 | Burro: 09 a 12 | Borboleta: 13 a 16 | Cachorro 17 a 
20.
*/



// import * as readline from 'readline-sync'

// let n1: number = readline.questionInt("Digite um número: ")
// let n2: number = readline.questionInt("Digite um número: ")

// function somar(a: number, b: number): number {
//     return a + b
// }

// console.log(somar (n1, n2))



import * as readline from 'readline-sync'

let nome: string = readline.question("Digite o nome do cliente: ")
let numero: number = readline.questionInt("Digite um número de  1 a 20: ")

function descobrirBicho(numero:number): string {
    if(numero >= 1 && numero <= 4) {
        return "Avestruz"
    } else if (numero >= 5 && numero <= 8) {
        return "Águia"
    } else if (numero >= 9 && numero <= 12) {
        return "Burro"
    } else if (numero >= 13 && numero <= 16) {
        return "Borboleta"
    } else if (numero >= 17 && numero <= 20) {
        return "Cachorro"
    } else {
        return "Número inválido"
    }
}

let bicho: string = descobrirBicho(numero)

console.log(`O cliente ${nome} escolheu o númnero ${numero} e o seu animal é ${bicho}.`)
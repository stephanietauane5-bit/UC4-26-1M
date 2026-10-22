// Como exportamos a classe, nós agora podemos importá-la
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";


// Para criar um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro)
// Depois, usamos a palavra "new" para criar um novo Cachorro
// Dentro dos parenteses, precisamos colocar todas as informações que o constructor pede
const meuCachorro:Cachorro = new Cachorro("Tobby", 10.50, "Vira-lata")
const outroCachorro:Cachorro = new Cachorro("Rex", 20.00, "Pitbull")

// Agora, podemos acessar as informações do cachorro. Por exemplo, para ver o nome:
console.log(meuCachorro.nome)
console.log(outroCachorro.nome)
console.log(meuCachorro.raca)
console.log(outroCachorro.raca)

// Posso também chamar os métodos para ver o que o cachorro faz:
meuCachorro.latir()



const meuCarro:Carro = new Carro("Volkswagen", "Sedan", 1959)
const outroCarro:Carro = new Carro("Ford", "Cupe", 1964)
const aqueleCarro:Carro = new Carro("Chevrolet", "Sedan", 1968)

console.log(meuCarro.marca)
console.log(outroCarro.marca)
console.log(aqueleCarro.marca)
console.log(meuCarro.tipo)
console.log(outroCarro.tipo)
console.log(aqueleCarro.tipo)
console.log(meuCarro.ano)
console.log(outroCarro.ano)
console.log(aqueleCarro.ano)

meuCarro.andar()
meuCarro.buzinar()
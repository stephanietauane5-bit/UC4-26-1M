"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Como exportamos a classe, nós agora podemos importá-la
const Cachorro_1 = require("./Cachorro");
const Carro_1 = require("./Carro");
// Para criar um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro)
// Depois, usamos a palavra "new" para criar um novo Cachorro
// Dentro dos parenteses, precisamos colocar todas as informações que o constructor pede
const meuCachorro = new Cachorro_1.Cachorro("Tobby", 10.50, "Vira-lata");
const outroCachorro = new Cachorro_1.Cachorro("Rex", 20.00, "Pitbull");
// Agora, podemos acessar as informações do cachorro. Por exemplo, para ver o nome:
console.log(meuCachorro.nome);
console.log(outroCachorro.nome);
console.log(meuCachorro.raca);
console.log(outroCachorro.raca);
// Posso também chamar os métodos para ver o que o cachorro faz:
meuCachorro.latir();
const meuCarro = new Carro_1.Carro("Volkswagen", "Sedan", 1959);
const outroCarro = new Carro_1.Carro("Ford", "Cupe", 1964);
const aqueleCarro = new Carro_1.Carro("Chevrolet", "Sedan", 1968);
console.log(meuCarro.marca);
console.log(outroCarro.marca);
console.log(aqueleCarro.marca);
console.log(meuCarro.tipo);
console.log(outroCarro.tipo);
console.log(aqueleCarro.tipo);
console.log(meuCarro.ano);
console.log(outroCarro.ano);
console.log(aqueleCarro.ano);
meuCarro.andar();
meuCarro.buzinar();
//# sourceMappingURL=index.js.map
import { Carro } from "./Carro";
import { contaBancaria } from "./contaBancaria";
import { Livro } from "./Livro";

const livro = new Livro("Carrie, a estranha")

livro.exibirTitulo();


const conta = new contaBancaria(100)

conta.depositar(150)
conta.consultarSaldo()


const carro = new Carro()

carro.acelerar()
carro.exibirVelocidade()

import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";
import { Navio } from "./Navio";

const chalupa:Chalupa = new Chalupa("Krackenzinho", 9)
const bergantim:Bergantim = new Bergantim("Santa Maria", 99)
const galeao:Galeao = new Galeao("El Barco", 50)

console.log(chalupa.exibirInformacoes())
console.log(bergantim.exibirInformacoes())
console.log(galeao.exibirInformacoes())

console.log(chalupa.navegar())
console.log(chalupa.atacar())

console.log(bergantim.navegar())
console.log(bergantim.atacar())

console.log(galeao.navegar())
console.log(galeao.atacar())

chalupa.receberDano(5)
bergantim.receberDano(5)
galeao.receberDano(5)

console.log(chalupa.explorarIlha())

galeao.repararNavio()
console.log(galeao.exibirInformacoes())

const armada: Navio[] = [bergantim, chalupa, galeao]

armada.forEach((navio) => {
    console.log(navio.navegar())
    console.log(navio.atacar())
    console.log(navio.exibirInformacoes())
    navio.receberDano(10)
    console.log(navio.exibirInformacoes())
})
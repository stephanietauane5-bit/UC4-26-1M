/*
    1) Crie uma classe chamada "Pokémon".
    O Pokémon deve ter um nome(string), vida(number, um ataque(number), e um poder.
    O poder é uma classe que vamos criar também.

    Métodos do Pokémon:
    falar -> um método que repete o nome do Pokémon algumas vezes

    atacar -> um método que recebe outro Pokémon e ataca ele, tirando vida dele.

    atacarComPoder -> um método que recebe outro Pokémon e ataca ele também, porém diz
    o nome do poder e usa o ataque do poder.

    2) Crie a classe chamada "Poder". Ela deve ter um nome(string) e ataque(number). Não
    precisa de nenhum método, exceto o constructor.

    3) Crie dois poderes e dois pokémons no index e simule uma pequena batalha entre eles.
*/

import { Poder } from "./Poder";
import { Pokemon } from "./Pokemon";

const poder:Poder = new Poder("Bola de Fogo", 50)
const poder2:Poder = new Poder("Raio", 30)

const poke:Pokemon = new Pokemon("Charizard", 100, 200, poder)
const poke2:Pokemon = new Pokemon("Pikachu", 80, 150, poder2)

poke.falar()

poke.atacar(poke2)

poke.atacarComPoder(poke2)

console.log(poke2.vida)

poke2.vida = -999

console.log(poke2.vida)



// ENCAPSULAMENTO

/* 
Encapsulamento é o ato de proteger os dados dos nossos objetos (tanto os atributos quanto os 
métodos) e controlar como podem ser acessados ou modificados.

Exemplo: usando encapsulamento, podemos impedir que alguém deixe a vida do pokémon 
negativa.

Para utilizar encapsulamento nas nossas classes, precisamos colocar certas palavras
antes dos atributos e antes dos métodos. São elas:

      - public (que significa "público")
      - private (que significa "privado")
      - protected (que significa "protegido")

Chamamos estes tres de modificadores de acesso. O "public" permite que o atributo ou método seja acessado
ou modificado em qualquer arquivo do meu progama DIRETAMENTE.
Exemplo:

Na classe: -> public vida:number
No index: -> pokemon.vida = -999

O "private" não permite que o atributo ou método seja acessado ou modificado de qualquer jeito. Para poder fazer
isso, precisamos chamar os métodos da classe. 
*/
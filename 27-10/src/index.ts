import { Animal } from "./Animal";
import { Cachorro } from "./Cachorro";
import { Coruja } from "./Coruja";
import { Crocodilo } from "./Crocodilo";
import { Mamifero } from "./Mamifero";
import { Reptil } from "./Reptil";

// Criando objetos
const cachorro = new Mamifero("Rex", 5, true);
const cobra = new Reptil("Naja", 2, "escamas lisas");
const crocodilo = new Crocodilo("Crocodilo-do-Nilo", 67, "escamas rugosas");
const coruja = new Coruja("Edwiges", 6);

cachorro.mover();      // herdado da classe Animal
cachorro.amamentar();  // método da classe Mamifero

cobra.mover();         // herdado da classe Animal
cobra.botarOvo();      // método da classe Reptil

crocodilo.mover();     // herdado da classe Animal
crocodilo.botarOvo();  // herdado da classe Reptil
crocodilo.nadar();     // método da classe Crocodilo

const meuArray: Animal[] = [cachorro, coruja, crocodilo]

for(let i = 0; i < meuArray.length; i++){
    meuArray[i].comer()
}
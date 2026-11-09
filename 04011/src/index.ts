import { Guerreiro } from "./Guerreiro";
import { IAtacante } from "./IAtacante";
import { Mago } from "./Mago";

const guerreiro = new Guerreiro("Xablau")
const mago = new Mago("Xonas")

guerreiro.atacar()
mago.lancarMagia()

function luta(personagem:IAtacante, inimigo:IAtacante):void {
    personagem.atacar()
    inimigo.atacar()
}

luta(guerreiro, mago)

mago.curar(20)
import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";
import { LiderTecnico } from "./LiderTecnico";

const desenvolvedor:Desenvolvedor = new Desenvolvedor("Percy")
const gerente:Gerente = new Gerente("Annabeth")
const liderTecnico:LiderTecnico = new LiderTecnico("Groover")

desenvolvedor.programar()
desenvolvedor.trabalhar()
gerente.gerenciar()
gerente.trabalhar()
liderTecnico.gerenciar()
liderTecnico.programar()
liderTecnico.trabalhar()
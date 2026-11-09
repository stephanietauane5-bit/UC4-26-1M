/*
   A interface define uma regra.
   Como assim?
   Ela diz que, todos os que seguirem ela precisam
   implementar TODOS os atributos e/ou métodos que
   criamos nessa interface
*/
export interface IAtacante {
    atacar(): void; // Sem a lógica, apenas o nome e o tipo de retorno
}
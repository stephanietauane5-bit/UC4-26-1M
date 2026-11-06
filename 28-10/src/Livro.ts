export class Livro {
    titulo:string

    constructor(titulo:string) {
    this.titulo = titulo
  }

  exibirTitulo(): void {
    console.log(`O título do livro é ${this.titulo}.`);
  }
}
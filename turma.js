const NOTA_MINIMA = 6;

export class Turma {
  #codigo;
  #nota;

  constructor(codigo, nota) {
    this.#codigo = codigo;
    this.#nota = nota;
  }

  aprovado() {
    return this.#nota >= NOTA_MINIMA;
  }
}

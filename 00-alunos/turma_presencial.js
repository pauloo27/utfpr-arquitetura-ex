import { Turma } from './turma.js';

const FREQUENCIA_MINIMA = 0.75;

export class TurmaPresencial extends Turma {
  #frequencia;

  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.#frequencia = frequencia;
  }

  aprovado() {
    return super.aprovado() && this.#frequencia >= FREQUENCIA_MINIMA;
  }
}

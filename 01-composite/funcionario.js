export class Funcionario {
  #salario;

  constructor(salario) {
    this.#salario = salario;
  }

  getSalario() {
    return this.#salario;
  }
}

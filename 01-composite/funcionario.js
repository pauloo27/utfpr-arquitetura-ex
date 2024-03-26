export class Funcionario {
  #salario;

  constructor(nome, salario) {
    this.nome = nome;
    this.#salario = salario;
  }

  calcularSalarioTotal() {
    return this.#salario;
  }
}

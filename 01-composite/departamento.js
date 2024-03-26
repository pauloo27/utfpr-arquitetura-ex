export class Departamento {
  nome;
  #children;

  constructor(nome) {
    this.nome = nome;
    this.#children = [];
  }

  adicionar(componente) {
    this.#children.push(componente);
  }

  remover(componente) {
    const index = this.#children.indexOf(componente);
    if (index > -1) {
      this.#children.splice(index, 1);
    }
  }

  calcularSalarioTotal() {
    return this.#children.reduce(
      (total, child) => total + child.calcularSalarioTotal(),
      0,
    );
  }
}

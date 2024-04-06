/**
  Classe Contato, com os atributos nome, email e telefone.

  Também possui um atributo id, que é usado para identificar o contato.
*/
export class Contato {
  id;
  nome;
  email;
  telefone;

  /**
    Construtor da classe Contato, que recebe os valores de nome, email e telefone.
  */
  constructor(id, nome, email, telefone) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  /**
    Método toString(), usado para formatar os dados do contato de forma mais legível.
  */
  toString() {
    return `==== ${this.nome} ====\nID: ${this.id}\nEmail: ${this.email}\nTelefone: ${this.telefone}\n`;
  }
}

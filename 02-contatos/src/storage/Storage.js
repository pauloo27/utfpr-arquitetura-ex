/**
  "Interface" Store, as implementações serão responsável por armazenar os dados da aplicação.
*/
export class Storage {
  async salvar(contato) {
    throw new Error("Not implemented");
  }

  async carregarTodos() {
    throw new Error("Not implemented");
  }

  async remover(contato) {
    throw new Error("Not implemented");
  }
}

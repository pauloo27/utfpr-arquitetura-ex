import { Contato } from "./entity/Contato.js";
import { SQLiteStorageAdapter } from "./storage/SQLiteStorageAdapter.js";
import { LinearSearchStrategy } from "./search/LinearSearchStrategy.js";
import { BinarySearchStrategy } from "./search/BinarySearchStrategy.js";

/**
  GerenciaContatos é uma classe que tem como responsabilidade gerenciar os 
  contatos. Ela é uma Fachada para a classe de armazenamento e de busca.
*/
export class GerenciaContatos {
  storage;

  constructor() {
    this.storage = new SQLiteStorageAdapter();
  }

  async adicionarContato(nome, email, telefone) {
    await this.storage.salvar(new Contato(null, nome, email, telefone));
  }

  async listarContatos() {
    return await this.storage.carregarTodos();
  }

  async removerContatoPorId(id) {
    await this.storage.remover(id);
  }

  async buscarContatosPorNome(nome) {
    const contatos = await this.storage.carregarTodos();

    // caso seja mais de 10.000 contatos, será usado busca binária
    const searchStrategy =
      contatos.length > 10000
        ? new BinarySearchStrategy()
        : new LinearSearchStrategy();

    return searchStrategy.searchByName(
      await this.storage.carregarTodos(),
      nome,
    );
  }
}

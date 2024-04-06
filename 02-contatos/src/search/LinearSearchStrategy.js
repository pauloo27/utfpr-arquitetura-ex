import { SearchStrategy } from "./SearchStrategy.js";

/**
  Classe que implementa a busca linear de contatos pelo nome.
 */
export class LinearSearchStrategy extends SearchStrategy {
  async searchByName(list, nome) {
    return list.filter((contato) =>
      contato.nome.toLowerCase().includes(nome.toLowerCase()),
    );
  }
}

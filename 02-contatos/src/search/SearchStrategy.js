/**
  Classe abstrata que define a interface para as estratégias de busca.
 */
export class SearchStrategy {
  async searchByName(list, nome) {
    throw new Error("Not implemented");
  }
}

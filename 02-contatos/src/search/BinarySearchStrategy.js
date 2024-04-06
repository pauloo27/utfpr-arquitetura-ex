import { SearchStrategy } from "./SearchStrategy.js";

export class BinarySearchStrategy extends SearchStrategy {
  async searchByName(list, nome) {
    let start = 0;
    let end = list.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      const contato = list[middle];

      if (contato.nome.toLowerCase().includes(nome.toLowerCase())) {
        return [contato];
      }

      if (contato.nome.toLowerCase() < nome.toLowerCase()) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    return [];
  }
}

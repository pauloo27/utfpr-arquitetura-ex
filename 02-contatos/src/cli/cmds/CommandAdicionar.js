import { AbstractCommand } from "../AbstractCommand.js";

export class CommandAdicionar extends AbstractCommand {
  constructor(gerenciadorContatos) {
    super("adicionar", gerenciadorContatos);
  }

  async handle() {
    if (process.argv.length < 6) {
      return false;
    }

    const nome = process.argv[3];
    const email = process.argv[4];
    const telefone = process.argv[5];

    await this.gerenciadorContatos.adicionarContato(nome, email, telefone);

    return true;
  }

  usage() {
    return "<nome> <email> <telefone>";
  }
}

import { AbstractCommand } from "../AbstractCommand.js";

export class CommandRemover extends AbstractCommand {
  constructor(gerenciadorContatos) {
    super("remover", gerenciadorContatos);
  }

  async handle() {
    if (process.argv.length < 4) {
      return false;
    }
    const id = process.argv[3];
    await this.gerenciadorContatos.removerContatoPorId(id);

    return true;
  }

  usage() {
    return "<id>";
  }
}

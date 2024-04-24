import { AbstractCommand } from "../AbstractCommand.js";

export class CommandListar extends AbstractCommand {
  constructor(gerenciadorContatos) {
    super("listar", gerenciadorContatos);
  }

  async handle() {
    const contatos = await this.gerenciadorContatos.listarContatos();
    if (contatos.length === 0) {
      console.log("Nenhum contato encontrado");
      return;
    }

    contatos.forEach((contato) => {
      console.log(contato.toString());
    });

    return true;
  }

  usage() {
    return "";
  }
}

import { AbstractCommand } from "../AbstractCommand.js";

export class CommandBuscar extends AbstractCommand {
  constructor(gerenciadorContatos) {
    super("buscar", gerenciadorContatos);
  }

  async handle() {
    if (process.argv.length < 4) {
      return false;
    }

    const nome = process.argv[3];
    const contatos = await this.gerenciadorContatos.buscarContatosPorNome(nome);
    if (contatos.length === 0) {
      console.log("Nenhum contato encontrado");
      return true;
    }

    contatos.forEach((contato) => {
      console.log(contato.toString());
    });

    return true;
  }

  usage() {
    return "<nome>";
  }
}

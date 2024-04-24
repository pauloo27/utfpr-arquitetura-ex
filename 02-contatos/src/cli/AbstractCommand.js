export class AbstractCommand {
  constructor(name, gerenciadorContatos) {
    this.name = name;
    this.gerenciadorContatos = gerenciadorContatos;
  }

  async handle() {
    throw new Error("Not implemented");
  }

  usage() {
    throw new Error("Not implemented");
  }
}

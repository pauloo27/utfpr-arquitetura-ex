import { GerenciadorContatos } from "./GerenciadorContatos.js";
import { CLIHandler } from "./cli/CLIHandler.js";
import { CommandAdicionar } from "./cli/cmds/CommandAdicionar.js";
import { CommandBuscar } from "./cli/cmds/CommandBuscar.js";
import { CommandListar } from "./cli/cmds/CommandListar.js";
import { CommandRemover } from "./cli/cmds/CommandRemover.js";

async function main() {
  const gerenciadorContatos = new GerenciadorContatos();
  const commands = [
    new CommandAdicionar(gerenciadorContatos),
    new CommandListar(gerenciadorContatos),
    new CommandBuscar(gerenciadorContatos),
    new CommandRemover(gerenciadorContatos),
  ];
  const cliHandler = new CLIHandler(commands);
  await cliHandler.handle();
}

main();

import { GerenciaContatos } from "./GerenciadorContatos.js";

const gerenciadorContatos = new GerenciaContatos();

function showUsage() {
  console.log("Uso: node src/index.js [comando]");
  console.log("Comandos:");
  console.log("  adicionar <nome> <email> <telefone>");
  console.log("  listar");
  console.log("  remover <id>");
  console.log("  buscar <nome>");
  process.exit(1);
}

async function adicionarContato() {
  if (process.argv.length < 6) {
    showUsage();
  }

  const nome = process.argv[3];
  const email = process.argv[4];
  const telefone = process.argv[5];

  await gerenciadorContatos.adicionarContato(nome, email, telefone);
}

async function listarContatos() {
  const contatos = await gerenciadorContatos.listarContatos();
  if (contatos.length === 0) {
    console.log("Nenhum contato encontrado");
    return;
  }

  contatos.forEach((contato) => {
    console.log(contato.toString());
  });
}

async function removerContato() {
  const id = process.argv[3];
  await gerenciadorContatos.removerContatoPorId(id);
}

async function buscarContatos() {
  if (process.argv.length < 4) {
    showUsage();
  }

  const nome = process.argv[3];
  const contatos = await gerenciadorContatos.buscarContatosPorNome(nome);
  if (contatos.length === 0) {
    console.log("Nenhum contato encontrado");
    return;
  }

  contatos.forEach((contato) => {
    console.log(contato.toString());
  });
}

async function main() {
  if (process.argv.length < 3) {
    showUsage();
  }

  const comando = process.argv[2];
  switch (comando) {
    case "adicionar":
      adicionarContato();
      break;
    case "listar":
      listarContatos();
      break;
    case "remover":
      removerContato();
      break;
    case "buscar":
      buscarContatos();
      break;
    default:
      showUsage();
      break;
  }
}

main();

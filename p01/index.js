import CidadesHTMLReport from "./src/CidadesHTMLReporter.js";
import CidadesTXTReport from "./src/CidadesTXTReporter.js";
import Parser from "./src/Parser.js";
import Reader from "./src/Reader.js";

const [cmd, filename, format] = process.argv;

const reader = new Reader("./data/cidades-2.json");
const parser = new Parser(reader.read());
const cidades = parser.parse();

// TODO: abstract factory
// TODO: strategy
if (format === "html") {
  let reporter = new CidadesHTMLReport(cidades);
  let html = reporter.reportar();
  console.log(html);
}
if (format === "txt") {
  let reporter = new CidadesTXTReport(cidades);
  let html = reporter.reportar();
  console.log(html);
}

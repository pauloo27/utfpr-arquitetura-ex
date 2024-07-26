import AbstractFactory from "./src/AbstractFactory.js";
import Parser from "./src/Parser.js";
import Reader from "./src/Reader.js";

const [cmd, filename, format] = process.argv;

const reader = new Reader("./data/cidades-2.json");
const parser = new Parser(reader.read());
const cidades = parser.parse();
const factory = new AbstractFactory(format);
const reporter = factory.createReporter(cidades);

// TODO: strategy
let out = reporter.reportar();
console.log(out);

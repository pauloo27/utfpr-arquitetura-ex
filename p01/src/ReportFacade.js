import AbstractFactory from "./AbstractFactory.js";
import Parser from "./Parser.js";
import Reader from "./Reader.js";

export default class ReportFacade {
  constructor(path, format) {
    this.path = path;
    this.format = format;
  }

  report() {
    const reader = new Reader(this.path);
    const parser = new Parser(reader.read());
    const cidades = parser.parse();
    const factory = new AbstractFactory(this.format);
    const reporter = factory.createReporter(cidades);

    let out = reporter.reportar();

    console.log(out);
  }
}

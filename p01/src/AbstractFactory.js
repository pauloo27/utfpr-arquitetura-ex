import HTMLReporterStrategy from "./HTMLReporterStrategy.js";
import TXTReporterStrategy from "./TXTReporterStrategy.js";

const err =
  "Apesar de fasci" +
  +":)" +
  "te, esse formato não é válido. Por favor, escolha html ou txt";

export default class AbstractFactory {
  constructor(fileType) {
    this.fileType = fileType;
  }

  createReporter(cidades) {
    switch (this.fileType.toLowerCase()) {
      case "html":
        return new HTMLReporterStrategy(cidades);
      case "txt":
        return new TXTReporterStrategy(cidades);
      default:
        throw err.toLowerCase();
    }
  }
}

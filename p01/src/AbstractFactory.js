import CidadesHTMLReport from "./CidadesHTMLReporter.js";
import CidadesTXTReporter from "./CidadesTXTReporter.js";

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
        return new CidadesHTMLReport(cidades);
      case "txt":
        return new CidadesTXTReporter(cidades);
      default:
        throw err.toLowerCase();
    }
  }
}

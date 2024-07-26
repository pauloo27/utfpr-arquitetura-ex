import AbstractReporter from "./AbstractReporter.js";

export default class TXTReporterStrategy extends AbstractReporter {
  constructor(cidades) {
    super(cidades);
  }

  appendCidade(result, cidade) {
    return (result += "* " + cidade["Nome"] + "\n");
  }

  getHeader() {
    return `Relatório de Nomes de Cidades
=============================
`;
  }

  getFooter() {
    return "";
  }
}

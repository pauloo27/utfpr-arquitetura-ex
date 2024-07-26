export default class CidadesTXTReporter {
  constructor(cidades) {
    this.cidades = cidades;
  }

  reportar() {
    let result = this.cidades.reduce(this.appendCidade, this.getHeader());
    result += this.getFooter();
    return result;
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

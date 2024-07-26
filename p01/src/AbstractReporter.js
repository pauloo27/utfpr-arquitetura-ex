export default class AbstractReporter {
  constructor(cidades) {
    this.cidades = cidades;
  }

  reportar() {
    let result = this.cidades.reduce(this.appendCidade, this.getHeader());
    result += this.getFooter();
    return result;
  }
}

export default class Parser {
  constructor(strData) {
    this.strData = strData;
  }

  parse() {
    return JSON.parse(this.strData);
  }
}

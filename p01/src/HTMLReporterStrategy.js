import AbstractReporter from "./AbstractReporter.js";

export default class HTMLReporterStrategy extends AbstractReporter {
  constructor(cidades) {
    super(cidades);
  }

  appendCidade(result, cidade) {
    return (result += "     <li>" + cidade["Nome"] + "</li>\n");
  }

  getHeader() {
    return `<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
`;
  }

  getFooter() {
    return `
    </ul>
  </body>
</html>`;
  }
}

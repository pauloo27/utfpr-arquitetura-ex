import CidadesHTMLReport from "../CidadesHTMLReporter";

test("html reporter", () => {
  const reporter = new CidadesHTMLReport();
  reporter.ler("./data/cidades-test.json");
  reporter.parse();
  const text = reporter.reportar();

  expect(text).toBe(`<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
     <li>Afonso Cláudio</li>
     <li>Água Doce do Norte</li>
     <li>Águia Branca</li>
     <li>Alegre</li>
     <li>Alfredo Chaves</li>

    </ul>
  </body>
</html>`);
});

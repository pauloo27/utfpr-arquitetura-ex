import CidadesTXTReporter from "../CidadesTXTReporter";
import Parser from "../Parser";
import Reader from "../Reader";

test("text reporter", () => {
  const reader = new Reader("./data/cidades-test.json");
  const cidades = new Parser(reader.read()).parse();

  const reporter = new CidadesTXTReporter(cidades);
  const text = reporter.reportar();

  expect(text).toBe(`Relatório de Nomes de Cidades
=============================
* Afonso Cláudio
* Água Doce do Norte
* Águia Branca
* Alegre
* Alfredo Chaves
`);
});

import CidadesTXTReporter from "../CidadesTXTReporter";

test("text reporter", () => {
  const reporter = new CidadesTXTReporter();
  reporter.ler("./data/cidades-test.json");
  reporter.parse();
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

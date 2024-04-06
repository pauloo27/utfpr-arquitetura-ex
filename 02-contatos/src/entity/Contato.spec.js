import { Contato } from "./Contato";
import { expect, test } from "@jest/globals";

describe("Classe Contato", () => {
  test("Construtor implementado", () => {
    const contato = new Contato(1, "Fulano", "email@example.com", "40028922");

    expect(contato).toBeInstanceOf(Contato);
    expect(contato.nome).toBe("Fulano");
    expect(contato.email).toBe("email@example.com");
    expect(contato.telefone).toBe("40028922");
  });

  test("Método toString() implementado", () => {
    const contato = new Contato(1, "Fulano", "email@example.com", "40028922");
    const contatoToString = contato.toString();

    const expected = `==== Fulano ====
ID: 1
Email: email@example.com
Telefone: 40028922
`;

    expect(contatoToString).toBe(expected);
  });
});

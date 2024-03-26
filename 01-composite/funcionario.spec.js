import { Funcionario } from "./funcionario";

describe("Funcionario", () => {
  test("Hello?", () => {
    const f1 = new Funcionario(1000);
    expect(f1).toBeDefined();
  });
});

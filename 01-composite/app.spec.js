import { Funcionario } from "./funcionario";
import { Departamento } from "./departamento";

describe("Testes de estrutura organizacional", () => {
  test("Calcula salário total de um funcionário", () => {
    const funcionario = new Funcionario("Carlos", 5000);
    expect(funcionario.calcularSalarioTotal()).toBe(5000);
  });

  test("Calcula salário total de um departamento", () => {
    const departamento = new Departamento("TI");
    const funcionario1 = new Funcionario("Carlos", 5000);
    const funcionario2 = new Funcionario("Ana", 7000);

    departamento.adicionar(funcionario1);
    departamento.adicionar(funcionario2);

    expect(departamento.calcularSalarioTotal()).toBe(12000);
  });

  test("Calcula salário total da organização", () => {
    const desenvolvimento = new Departamento("Desenvolvimento");
    const rh = new Departamento("RH");

    desenvolvimento.adicionar(new Funcionario("Ana", 7000));
    desenvolvimento.adicionar(new Funcionario("João", 6500));

    rh.adicionar(new Funcionario("Maria", 3000));

    const empresa = new Departamento("Empresa");
    empresa.adicionar(desenvolvimento);
    empresa.adicionar(rh);

    expect(empresa.calcularSalarioTotal()).toBe(16500);
  });

  test("Adiciona e remove funcionários e departamentos", () => {
    const departamento = new Departamento("TI");
    const funcionario = new Funcionario("Carlos", 5000);

    departamento.adicionar(funcionario);
    expect(departamento.calcularSalarioTotal()).toBe(5000);

    departamento.remover(funcionario);
    expect(departamento.calcularSalarioTotal()).toBe(0);
  });
});

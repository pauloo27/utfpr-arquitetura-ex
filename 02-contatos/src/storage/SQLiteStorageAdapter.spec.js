import { expect, test } from "@jest/globals";
import { Contato } from "../entity/Contato.js";
import { SQLiteStorageAdapter } from "./SQLiteStorageAdapter.js";

describe("Adapter de Storage para SQLite", () => {
  test("Construtor implementado", () => {
    SQLiteStorageAdapter.storageName = ":memory:";

    const adapter = new SQLiteStorageAdapter();
    expect(adapter).toBeInstanceOf(SQLiteStorageAdapter);
  });

  test("Deve salvar um item", async () => {
    SQLiteStorageAdapter.storageName = ":memory:";

    const adapter = new SQLiteStorageAdapter();
    const contato = new Contato(1, "Fulano", "test@example.com", "40028922");

    await adapter.salvar(contato);
    const contatos = await adapter.carregarTodos();
    expect(contatos).toHaveLength(1);
    expect(contatos[0].toString()).toEqual(contato.toString());
  });

  test("Deve listar os itens ordenado pelo nome", async () => {
    SQLiteStorageAdapter.storageName = ":memory:";

    const adapter = new SQLiteStorageAdapter();
    const contato0 = new Contato(1, "Fulano", "test@example.com", "40028922");
    const contato1 = new Contato(2, "Ciclano", "test2@example.com", "40028923");

    await adapter.salvar(contato0);
    await adapter.salvar(contato1);

    const contatos = await adapter.carregarTodos();

    expect(contatos).toHaveLength(2);
    expect(contatos[0].toString()).toEqual(contato1.toString());
    expect(contatos[1].toString()).toEqual(contato0.toString());
  });

  test("Deve apagar um item", async () => {
    SQLiteStorageAdapter.storageName = ":memory:";

    const adapter = new SQLiteStorageAdapter();
    const contato = new Contato(1, "Fulano", "test@example.com", "40028922");

    await adapter.salvar(contato);
    await adapter.remover(contato.id);

    const contatos = await adapter.carregarTodos();
    expect(contatos).toHaveLength(0);
  });
});

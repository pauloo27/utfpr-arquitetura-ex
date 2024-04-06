import { Storage } from "./Storage.js";
import { Contato } from "../entity/Contato.js";
import sqlite3 from "sqlite3";

/**
  Adaptador de Storage para SQLite.
  Como a biblioteca sqlite3 não suporta promises, é necessário adaptar
  os callbacks para promises.
*/
export class SQLiteStorageAdapter extends Storage {
  /**
    Nome do arquivo de banco de dados.
  */
  static storageName = "storage.sqlite";
  db;

  constructor() {
    super();
    this.db = new sqlite3.Database(SQLiteStorageAdapter.storageName);
  }

  /**
    Cria a tabela de contatos, caso não exista.
  */
  async ensureTable() {
    return new Promise((resolve, reject) => {
      this.db.run(
        "CREATE TABLE IF NOT EXISTS contato (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT)",
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        },
      );
    });
  }

  async salvar(contato) {
    await this.ensureTable();
    const stmt = this.db.prepare(
      "INSERT INTO contato (nome, email, telefone) VALUES (?, ?, ?)",
    );
    stmt.run(contato.nome, contato.email, contato.telefone);
    return new Promise((resolve, reject) => {
      stmt.finalize((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async carregarTodos() {
    await this.ensureTable();

    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM contato ORDER BY nome ASC", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const contatos = rows.map((row) => {
            return new Contato(row.id, row.nome, row.email, row.telefone);
          });
          resolve(contatos);
        }
      });
    });
  }

  async remover(id) {
    await this.ensureTable();

    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM contato WHERE id = ?", id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

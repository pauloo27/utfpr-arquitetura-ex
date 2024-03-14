export class Aluno {
  nome;
  login;
  ra;
  turmas;

  constructor(
    nome,
    login,
    ra,
    turmas,
  ) {
    this.nome = nome;
    this.login = login;
    this.ra = ra;
    this.turmas = turmas;
  }
}

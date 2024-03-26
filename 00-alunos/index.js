import { Aluno } from './aluno.js';
import { Turma } from './turma.js';
import { TurmaPresencial } from './turma_presencial.js';

const turma0 = new Turma('UTF888', 7.77);
const turma1 = new TurmaPresencial('UTF123', 6.66, 0.69);
const turma2 = new TurmaPresencial('UTF321', 4.20, 1);
const turma3 = new TurmaPresencial('UTF999', 9.8, 6.2);

console.log(turma0.aprovado()); // true
console.log(turma1.aprovado()); // false
console.log(turma2.aprovado()); // false
console.log(turma3.aprovado()); // true

const aluno0 = new Aluno(
  'John',
  'john@login.example.com',
  123,
  [turma0, turma1, turma2,  turma3],
);

console.log(aluno0);

const { Aluno } = require("./classes/aluno");
const { classificarNotaMedia } = require("./funcoes/notas");

const aluno1 = new Aluno();
const aluno2 = new Aluno();

aluno1.setNome = "Maria";
aluno1.setNotas = [8.5, 9.5, 6, 2];

aluno2.setNome = "João";
aluno2.setNotas = [7.2, 10, 4.3, 7.5];

classificarNotaMedia(aluno1);
classificarNotaMedia(aluno2);
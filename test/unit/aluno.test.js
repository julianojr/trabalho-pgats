const { Aluno } = require("../../src/classes/aluno");
const assert = require("node:assert");

describe("Aluno", () => {

    it("Validar o cálculo da média das notas", () => {
        const aluno = new Aluno();

        aluno.setNome = "Pedro";
        aluno.setNotas = [10, 9, 8, 7];

        const media = aluno.calcularMedia(aluno.getNotas);

        assert.equal(media, 8.5);
    });
});
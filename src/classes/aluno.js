class Aluno {
    static nome;

    static notas;

    get getNome() {
        return this.nome;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    get getNotas() {
        return this.notas;
    }

    set setNotas(notas) {
        this.notas = notas;
    }

    calcularMedia(notas) {
        let soma = 0;
        for (let indice = 0; indice < notas.length; indice++) {
            soma += notas[indice];
        }
        return soma / notas.length;
    }
}

module.exports = {
    Aluno
}
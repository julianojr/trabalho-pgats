const classificarNotaMedia = (aluno) => {
    if(aluno.calcularMedia(aluno.getNotas) >= 7){
        console.log(`${aluno.getNome} foi aprovado(a) com uma nota média igual a ${aluno.calcularMedia(aluno.getNotas)}`);
    } else {
        console.log(`${aluno.getNome} foi reprovado(a) com uma nota média igual a ${aluno.calcularMedia(aluno.getNotas)}`);
    }
}

module.exports = {
    classificarNotaMedia
}
class Instudo{
    constructor(){
        this.turma = [];
    }
    adicionarAluno(aluno){
        this.turma.push(aluno)
    }
    removerAluno(index){
      
     if (index >= 0 && index < this.turma.length) {
      this.turma.splice(index, 1);
      return true;
    }
    return false;
    }
    verAluno(i){
        return this.turma[i];
    }
    atualizarTurma(i, atualizar){
        if (i >= 0 && i < this.turma.length) {
        this.turma[i] = atualizar
        return true
        }
        return false
    }
}



class Aluno{
    constructor(nome, matricula, login){
        this.nome = nome;
        this.matricula = matricula;
        this.login = login;
    }
}

class Professor{
    constructor(nome, especializacao){
        this.nome = nome;
        this.especializacao = especializacao;
    }
}
module.exports = {Instudo, Aluno, Professor}
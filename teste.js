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
        this.turma[i] = atualizar
        return true
    }
}



class Aluno{
    constructor(nome, matricula, login){
        this.nome = nome;
        this.matricula = matricula;
        this.login = login;
    }
}
class Turma{
    constructor(materia){
        this.materia = materia;
        this.alunos = [];
    }
    adicionarAluno(aluno){
        this.alunos.push(aluno)
    }
}

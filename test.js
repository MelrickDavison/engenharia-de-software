const assert = require('assert');

const {
    CRUD
  } = require('../src/crud');

describe("Instudo", function(){
    describe("createItem()", function(){
    it("Adicionar um aluno na turma", function(){
        let a = new Instudo;
        let aluno = new Aluno("Fabricio", 112, "Fabricio1313"
        a.adicionarAluno(aluno);
        assert.strictEqual(a.turma.length, 3);
    })
    } 
})

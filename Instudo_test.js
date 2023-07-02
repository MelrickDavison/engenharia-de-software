const assert = require('assert');

const {
    Instudo, Aluno, Professor
  } = require('../src/teste.js');

describe("Instudo", function(){
    describe("createItem()", function(){
    it("Adicionar um aluno na turma", function(){
        let a = new Instudo;
        let aluno = new Aluno("Fabricio", 112, "Fabricio1313");
        a.adicionarAluno(aluno);
        assert.strictEqual(a.turma.length, 1);
        
    })

    it("Adicionar dois aluno na turma", function(){
        let a = new Instudo;
        let aluno = new Aluno("Fabricio", 112, "Fabricio1313");
        let aluno1 = new Aluno("Melrick", '123', "Melqui");
        a.adicionarAluno(aluno);
        a.adicionarAluno(aluno1);
        assert.strictEqual(a.turma.length, 2);
        
    })
    })

    describe("verAluno()", function(){
        it("Ler um item pelo index", function(){
            let a = new Instudo;
            a.adicionarAluno("Melrick");
            assert.strictEqual(a.verAluno(0), "Melrick")
        });
        
        it("Ler dois itens pelo index", function(){
        let a = new Instudo;
        a.adicionarAluno("Melrick");
        a.adicionarAluno("Kemylly");
        assert.strictEqual(a.verAluno(0), "Melrick")
        assert.strictEqual(a.verAluno(1), "Kemylly")
    });
    });
   
    describe("removerAluno", function(){
        it("Remover um aluno", function(){
        let a = new Instudo;
        a.adicionarAluno("Gabriel");
        
        a.removerAluno(0)
        assert.strictEqual(a.verAluno(0), undefined)
        })
    
        it("Remover dois aluno", function(){
            let a = new Instudo;
            a.adicionarAluno("Gabriel");
            a.adicionarAluno("Melrick");
            a.adicionarAluno("Kemylly");
            
            a.removerAluno(0)
            a.removerAluno(1)
            assert.strictEqual(a.verAluno(0), "Melrick")
            })
    })

    describe("atualizaraluno()", function(){
        it("Atualiza um item", function(){
            let a = new Instudo;
            a.adicionarAluno("Gabriel");

            assert.strictEqual(a.atualizarTurma(0, "Melrick"), true)
        });

        describe("atualizaraluno()", function(){
            it("Atualiza dois itens", function(){
                let a = new Instudo;
                a.adicionarAluno("Gabriel");
                a.adicionarAluno("Kemylly");
    
                assert.strictEqual(a.atualizarTurma(0, "Melrick"), true)
                assert.strictEqual(a.atualizarTurma(1, "Fabricio"), true)
            });
    });

});

        describe("Aluno", function(){
            it("Cria um objeto da classe aluno", function(){
                let a = new Aluno("Fabricio", 112, "Fabricio1313");
                assert.strictEqual(a.nome, "Fabricio")
            })
            it("Cria dois objetos da classe aluno", function(){
                let a = new Aluno("Fabricio", 112, "Fabricio1313");
                let aluno1 = new Aluno("Melrick", '123', "Melqui");
                assert.strictEqual(a.nome, "Fabricio")
                assert.strictEqual(aluno1.nome, "Melrick")
            })
        })
        describe("Professor", function(){
            it("Cria um objeto da classe professor", function(){
                let prof = new Professor("David", "Ser galã");
                assert.strictEqual(prof.nome, "David")
            })
            it("Cria dois objetos da classe professor", function(){
                let prof = new Professor("David", "Ser galã");
                let prof1 = new Professor("Nenelson", "Doutorado");
                assert.strictEqual(prof.nome, "David")
                assert.strictEqual(prof1.nome, "Nenelson")
            })
        })
});






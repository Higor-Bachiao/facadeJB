// PADRÃO FACADE
// Oferece uma interface simples para o empréstimo completo,
// escondendo todos os subsistemas do bibliotecário.
const SistemaAlunos = require("./sistemaAlunos");
const ScannerAdapter = require("./scannerAdapter");
const SistemaAcervo = require("./sistemaAcervo");

class BibliotecaFacade {
    constructor() {
        this._sistemaAlunos = new SistemaAlunos();
        this._scanner = new ScannerAdapter();
        this._sistemaAcervo = new SistemaAcervo();
    }

    realizarEmprestimo(alunoId, isbn) {
        console.log("--- Iniciando Empréstimo ---");

        const alunoAtivo = this._sistemaAlunos.verificarAluno(alunoId);
        if (!alunoAtivo) {
            console.log("Empréstimo cancelado: aluno inativo.");
            return;
        }

        this._scanner.lerCartao(isbn);

        this._sistemaAcervo.registrarSaida(alunoId, isbn);

        console.log("--- Empréstimo realizado com sucesso! ---");
    }
}

module.exports = BibliotecaFacade;

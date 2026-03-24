// Subsistema responsável pelo acervo de livros
class SistemaAcervo {
    registrarSaida(alunoId, isbn) {
        const data = new Date().toLocaleDateString("pt-BR");
        console.log(`SistemaAcervo: Livro "${isbn}" emprestado ao aluno #${alunoId} em ${data}.`);
    }
}

module.exports = SistemaAcervo;

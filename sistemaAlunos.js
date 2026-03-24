// Subsistema responsável pelos alunos
class SistemaAlunos {
    verificarAluno(alunoId) {
        console.log(`SistemaAlunos: Verificando aluno #${alunoId}...`);
        // Simulação: aluno está ativo
        console.log(`SistemaAlunos: Aluno #${alunoId} está ativo.`);
        return true;
    }
}

module.exports = SistemaAlunos;

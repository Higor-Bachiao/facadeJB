// Classe externa com interface incompatível (não pode ser modificada)
class ScannerLegado {
    detectarCodigoBarra() {
        console.log("Scanner: Laser acionado, lendo código...");
    }

    validarFisicamente() {
        console.log("Scanner: Validação física do item concluída.");
    }
}

module.exports = ScannerLegado;

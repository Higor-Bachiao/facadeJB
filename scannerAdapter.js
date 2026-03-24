// PADRÃO ADAPTER
// Adapta ScannerLegado para a interface que o sistema espera (lerCartao)
const ScannerLegado = require("./scannerLegado");

class ScannerAdapter {
    constructor() {
        this._scanner = new ScannerLegado();
    }

    // Método esperado pelo sistema — internamente chama os métodos legados
    lerCartao() {
        this._scanner.detectarCodigoBarra();
        this._scanner.validarFisicamente();
    }
}

module.exports = ScannerAdapter;

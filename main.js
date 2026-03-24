const BibliotecaFacade = require("./bibliotecaFacade");

// O bibliotecário só precisa saber disso:
const biblioteca = new BibliotecaFacade();
biblioteca.realizarEmprestimo(123, "ISBN-999");

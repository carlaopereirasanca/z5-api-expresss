
// Aqui no controller vamos centralizar toda a lógica
// que está relacionada com as ações que podem ser
// feitas com um livro.

// O controller precisa acessar o modelo Livro:

import livro from "../models/Livro.js";

// Nosso controller vai ser uma classe:

class LivroController {

    // Método static (da classe) para listar todos os livros:

    static async listarLivros (req, res) {

        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

};

export default LivroController;


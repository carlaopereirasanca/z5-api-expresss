
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

    
    // Método (static) para criar um livro no BD (post):

    static async cadastrarLivro (req, res) {

        try {

            const novoLivro = await livro.create(req.body);
            res.status(201).json( { message: "Criado com sucesso.", livro: novoLivro } );

        } catch (erro) {

            // 500 é erro interno do servidor:
            res.status(500).json( { message: `${erro.message} - Falha ao cadastrar livro.` } );
        }
    }

};

export default LivroController;


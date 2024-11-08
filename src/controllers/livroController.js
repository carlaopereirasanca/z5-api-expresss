
// Aqui no controller vamos centralizar toda a lógica
// que está relacionada com as ações que podem ser
// feitas com um livro.

// O controller precisa acessar o modelo Livro:
import livro from "../models/Livro.js";

// Nosso controller vai ser uma classe:

class LivroController {

    // Método static (da classe) para listar todos os livros:
    static async listarLivros (req, res) {

        try {

            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (erro) {

            res.status(500).json( { message: `${erro.message} - Falha na requisição.` } );
        } 

    };

    // Método static para recuperar um livro pelo id:
    static async listarLivroPorId (req, res) {

        try {

            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro.` } );
        }

    };

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

    // Método static para atualizar os dados de um livro:
    static async atualizarLivro (req, res) {

        try {

            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json( { message: "Livro atualizado!" } );

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na atualização.` } );
        
        };

    };

    // Método static para apagar os dados de um livro:
    static async excluirLivro (req, res) {

        try {

            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json( { message: "Livro excluído com sucesso!" } );

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na exclusão.` } );
        
        };

    };
};

export default LivroController;


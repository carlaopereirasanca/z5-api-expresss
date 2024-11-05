
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
app.use( express.json() );

app.get("/", (req, res) => {

    res.status(200).send("Hello World!");

} );




///////////////////////////




// Tratando a requisição POST:
app.post("/livros", (req, res) => {

    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");

} );

// Função que recebe um id (String),
// e retorna o livro correspondente
// na nossa "base de dados" 
// (por enquanto, um array):

function buscaLivro(id) {

    return livros.findIndex( livro => {
        return livro.id === Number(id);
    });
}

// Recuperando apenas um livro:

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index === -1) {
        return res.status(404).json( { message: "Livro não encontrado" } );
    }
    res.status(200).json(livros[index]);
});

// Alterando dados:

app.put("/livros/:id", (req, res) => {

    const index = buscaLivro(req.params.id);

    livros[index].titulo = req.body.titulo;
    res.status(200).json( livros[index] );
});

// Apagando dados:

app.delete("/livros/:id", (req, res) => {

    const index = buscaLivro(req.params.id);
    livros.splice( index, 1 );

    res.status(200).json( { message: "Livro removido!" } );

    console.log(livros);
})

export default app;


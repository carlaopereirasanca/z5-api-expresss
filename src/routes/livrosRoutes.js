
import express from "express";

// Vamos atender as rotas usando o código escrito lá no controler:
import LivroController from "../controllers/livroController.js";

// Criando objeto Router, que gerencia as rotas de forma centralizada:
const routes = express.Router();

// Tratamento das rotas:

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/:id", LivroController.listarLivroPorId);

routes.post("/livros", LivroController.cadastrarLivro);

routes.put("/livros/:id", LivroController.atualizarLivro);

routes.delete("/livros/:id", LivroController.excluirLivro);


export default routes;


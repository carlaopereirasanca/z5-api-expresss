
import express from "express";

// Vamos atender as rotas usando o código escrito lá no controler:

import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.post("/livros", LivroController.cadastrarLivro);

export default routes;

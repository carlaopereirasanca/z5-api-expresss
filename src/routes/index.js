
// Este arquivo vai ser o ponto de entrada das rotas.

import express from "express";

// Vamos importar as rotas de livros,
// que está no arquivo livrosRoutes.js:

import rotasLivros from "./livrosRoutes.js";

const routes = (app) => {

    app.route("/").get( (req, res) => {

        res.status(200).send("Hello World!")

    } );

    app.use( express.json(), rotasLivros );

};

export default routes;


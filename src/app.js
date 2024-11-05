
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

// Retirado o import do model, pq isso foi lá para o controller.

// Mas precisamos das nossas rotas, definidas lá no index.js (barril).
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();

// Aqui chamamos a função routes que criamos lá em index.js,
// passando a instância do express que criamos aqui, em app:
routes(app);

// Podemos retirar o middleware abaixo, pq ele foi lá
// para o index.js em routes:
//      app.use(express.json());

// Removidas o tratamento antigo das outras rotas.

export default app;


import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Hello World!",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

const server = http.createServer(

    (req, res) => {
        res.writeHead(200, {"Content-Type": "text/plain" } );
        console.log(req.url)
        res.end( rotas[req.url] );
    }
);

server.listen( PORT,

    () => {
        console.log("Servidor ativo e aguardando requisições...");
    }
);

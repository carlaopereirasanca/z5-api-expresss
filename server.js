
import "dotenv/config";
import app from "./src/app.js";

// Definindo a porta:
const PORT = 3000;

app.listen( PORT,

    () => {
        console.log("Servidor ativo e aguardando requisições...");
    }

);

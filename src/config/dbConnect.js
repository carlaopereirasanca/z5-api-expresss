
import mongoose from "mongoose";

async function conectaNaDatabase() {

    // String de conexão, que você pegou lá no site do mongodb.
    // Precisa adicionar o nome da coleção que criamos (livraria)
    // logo antes do ?retryWrites...
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    // ATENÇÃO!! Não é o ideal, enviar para o github senhas, etc.
    // Lembre-se que o objetivo aqui é ver como funciona, isto é uma aula!!

    return mongoose.connection;

}

export default conectaNaDatabase;


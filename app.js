// inclui a dependência do express no projeto
const express =  require('express');

// criar uma instância do express
const app = express();

// definir a porta do servidor
const port = 3000;

// permitir a manipulaçãp de dados via json
app.use(express.json());

// criar uma rota raiz
app.get('/',(req, res)=> {
    res.send('Hello World');
});

// Rodando o projeto   
app.listen(port,()=> {
    console.log(`Servidor rondando na porta ${port}`)
});
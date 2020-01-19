const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-wghrk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE
// Tipos de parâmetros: 

// Query Params (GET): request.query (Filtros, ordenação, paginação) => (http://google.com/users?search=Allan)
// Route Params: request.params (Identificar um recurso de alteração (PUT), ou remoção (DELETE)) => http://google.com/users/1
// Body: request.body (Dados para criação ou alteração de um registro) => via POST // PUT

//MongoDB => (Não-relacional) => user: root


app.listen(3000);
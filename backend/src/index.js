const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();



app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE
// Tipos de parâmetros: 

// Query Params (GET): request.query (Filtros, ordenação, paginação) => (http://google.com/users?search=Allan)
// Route Params: request.params (Identificar um recurso de alteração (PUT), ou remoção (DELETE)) => http://google.com/users/1
// Body: request.body (Dados para criação ou alteração de um registro) => via POST // PUT

//MongoDB => (Não-relacional) => user: root


app.listen(3000);
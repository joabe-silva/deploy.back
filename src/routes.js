const express = require('express');
const routes = express.Router();

const ItemController = require('../src/controller/ItemController');

routes.get('/itens', ItemController.itens);
routes.post('/cadastro', ItemController.cadastro);
routes.put('/edita/:id', ItemController.edita);
routes.delete('/exclui/:id', ItemController.exclui)

module.exports = routes;


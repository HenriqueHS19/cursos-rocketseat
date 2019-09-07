const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.listAll);
routes.post('/products', ProductController.create);
routes.get('/products/:id', ProductController.listById);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
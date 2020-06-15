const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

// First route
// message on screen
// app.get('route', (req, res))
// '/' = root; req = requisition details to the server; res = response to the requisition
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);


module.exports = routes;
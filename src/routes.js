const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

// First route
// message on screen
// app.get('route', (req, res))
// '/' = root; req = requisition details to the server; res = response to the requisition
routes.get('/products', ProductController.index);

module.exports = routes;
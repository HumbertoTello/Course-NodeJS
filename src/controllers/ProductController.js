// Lida com as operações dos models: listagem, criação, remoção

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },
}
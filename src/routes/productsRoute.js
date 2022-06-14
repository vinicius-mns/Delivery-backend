const express = require('express');
 const productController = require('../controllers/productController');

const productsRouter = express.Router();

productsRouter.get('/', productController.getAll);

module.exports = { productsRouter };

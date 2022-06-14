const express = require('express');
const saleController = require('../controllers/saleController');
const { authMiddleware } = require('../middleware/authMiddleware');

const salesRouter = express.Router();

salesRouter.post('/', authMiddleware, saleController.createSale);
salesRouter.get('/', authMiddleware, saleController.getByUser);
salesRouter.get('/:id', authMiddleware, saleController.getBySaleId);
salesRouter.put('/:id', authMiddleware, saleController.editStatus);

module.exports = { salesRouter };

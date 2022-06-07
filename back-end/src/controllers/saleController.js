const saleService = require('../services/saleService');

const createSale = async (req, res, next) => {
    try {
      const { cart, totalPrice, deliveryAddress, deliveryNumber, sellerId } = req.body;

      const { id } = req.user;
  
      const data = await saleService.createSale({ 
        cart, totalPrice, deliveryAddress, deliveryNumber, sellerId, userId: id });
  
      if (!data) return res.status(409).json({ message: 'Invalid fields' });
  
      return res.status(201).json(data);
    } catch (error) {
      return next(error);
    }
  };

const getBySaleId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await saleService.getBySaleId(id);
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

const getByUser = async (req, res, next) => {
  try {
    const { role, id } = req.user;
    if (role === 'customer') {
      const sales = await saleService.getByUserId(id);
      return res.status(200).json(sales);
    }
    if (role === 'seller') {
      const sales = await saleService.getBySellerId(id);
      return res.status(200).json(sales);
    }
  } catch (error) {
    return next(error);
  }
};
  
module.exports = { getByUser, createSale, getBySaleId };

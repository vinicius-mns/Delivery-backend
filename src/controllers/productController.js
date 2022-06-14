 const productService = require('../services/productService');

const getAll = async (req, res, next) => {
  try {
    const data = await productService.getAll();

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAll };

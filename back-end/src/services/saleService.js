const { Sales, SalesProducts } = require('../database/models');

const createSale = async (dataSale) => {
    const { cart, totalPrice, deliveryAddress, deliveryNumber, sellerId, userId } = dataSale;
    const status = 'Pendente';
    const saleDate = new Date();
    const sale = await Sales
      .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, saleDate });
    cart.forEach((element) => {
      const { id, quantity } = element;
      SalesProducts.create({ productId: id, quantity, saleId: sale.dataValues.id });
    });
    return sale.dataValues.id;
};

const getBySaleId = async (id) => {
  const sale = await Sales.findOne({
    where: { id },
    include: { model: SalesProducts }, 
  });
  return sale;
};

const getByUserId = async (userId) => {
  const sales = await Sales.findAll({
    where: { userId },
    include: { model: SalesProducts }, 
  });
  return sales;
};

const getBySellerId = async (sellerId) => {
  const sales = await Sales.findAll({
    where: { sellerId },
    include: { model: SalesProducts }, 
  });
  return sales;
};

module.exports = { getBySellerId, getByUserId, createSale, getBySaleId };

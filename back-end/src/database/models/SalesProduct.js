const createSalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProducts",
    {
      saleId: DataTypes.NUMBER,
      prductId: DataTypes.NUMBER,
      quantity: DataTypes.NUMBER,
    },
    {
      timestamps: false,
      tableName: 'sales_products',
      underscored: true,
    }
  );

  return SalesProduct;
};

module.exports = createSalesProduct;

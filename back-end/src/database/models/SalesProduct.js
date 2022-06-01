const createSalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      sale_id: DataTypes.NUMBER,
      prduct_id: DataTypes.NUMBER,
      quantity: DataTypes.NUMBER,
    },
    {
      timestamps: false,
    }
  );

  return SalesProduct;
};

module.exports = createSalesProduct;

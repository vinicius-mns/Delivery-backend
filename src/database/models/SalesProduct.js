const createSalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProducts",
    {
      quantity: DataTypes.NUMBER,
      productId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      saleId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      }
    },
    {
      timestamps: false,
      tableName: 'sales_products',
      underscored: true,
    }
  );

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Product, { 
      foreignKey: 'saleId',
      through: SalesProduct,
      otherKey: 'productId', 
    });
  };
  
  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sales, { 
      foreignKey: 'productId', 
      through: SalesProduct,
      otherKey: 'saleId',  
    });
  };
  
  return SalesProduct;
};



module.exports = createSalesProduct;

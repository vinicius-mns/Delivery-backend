const createProducts = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName:'products',
      underscored: true,
    }
  );

  Products.associate = (models) => {
    models.Products.hasMany(models.SalesProducts, { foreignKey: 'productId', as: 'sales' });
  };

  return Products;
};


module.exports = createProducts;

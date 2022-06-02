const createSales = (sequelize, DataTypes) => {
    const Sales = sequelize.define(
      "Sales",
      {
        userId: DataTypes.NUMBER,
        sellerId: DataTypes.NUMBER,
        totalPrice: DataTypes.NUMBER,
        deliveryAddress: DataTypes.STRING,
        deliveryNumber: DataTypes.STRING,
        saleDate: DataTypes.DATE,
        status: DataTypes.STRING,
      },
      {
        timestamps: false,
        tableName: 'sales',
        underscored: true,
      }
    );
  
    return Sales;
  };
  
module.exports = createSales;

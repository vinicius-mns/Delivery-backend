const createSales = (sequelize, DataTypes) => {
    const Sales = sequelize.define(
      "Sales",
      {
        user_id: DataTypes.NUMBER,
        seller_id: DataTypes.NUMBER,
        total_price: DataTypes.NUMBER,
        delivery_address: DataTypes.STRING,
        delivery_number: DataTypes.STRING,
        sale_date: DataTypes.DATE,
        status: DataTypes.STRING,
      },
      {
        timestamps: false,
      }
    );
  
    return Sales;
  };
  
module.exports = createSales;

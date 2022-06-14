"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const Products = queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
      },
      url_image: { 
        type: Sequelize.STRING, 
        allowNull: false
      },
    });
    return Products;
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable("products");
  },
};

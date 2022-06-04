"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const SalesProducts = queryInterface.createTable("sales_products", {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "sales",
          key: "id",
        },
        primaryKey: true,
      },
      products_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "products",
          key: "id",
        },
        primaryKey: true,
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false },
    });
    return SalesProducts;
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable("sales_products");
  },
};

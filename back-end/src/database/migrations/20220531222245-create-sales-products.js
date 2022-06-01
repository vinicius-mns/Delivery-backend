"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const SalesProducts = queryInterface.createTable("SalesProducts", {
      sale_id: {
        type: Sequelize.NUMBER,
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
        type: Sequelize.NUMBER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "products",
          key: "id",
        },
        primaryKey: true,
      },
      quantity: { type: Sequelize.NUMBER, allowNull: false },
    });
    return SalesProducts;
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable("SalesProducts");
  },
};

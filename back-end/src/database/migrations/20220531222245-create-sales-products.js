"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const SalesProducts = queryInterface.createTable("SalesProducts", {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Sales",
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
          model: "Products",
          key: "id",
        },
        primaryKey: true,
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false },
    });
    return SalesProducts;
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable("SalesProducts");
  },
};

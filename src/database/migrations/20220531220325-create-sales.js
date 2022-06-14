"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const Sales = queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      total_price: { 
        type: Sequelize.DECIMAL(9,2), 
        allowNull: false 
      },
      delivery_address: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      delivery_number: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      sale_date: { 
        type: Sequelize.DATE, 
        allowNull: false 
      },
      status: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
    });
    return Sales;
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable("sales");
  },
};

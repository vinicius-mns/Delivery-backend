"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const Users = queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      role: { type: Sequelize.STRING, allowNull: false },
    });
    return Users;
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable("users");
  },
};

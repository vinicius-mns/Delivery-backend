const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
  );

  return User
};

module.exports = createUser;

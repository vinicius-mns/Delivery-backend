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

  User.associate= (models) => {
    User.hasMany(models.Sales, { foreignKey: 'userId', as: 'orders' });
  }
  
  User.associate = (models) => {
    User.hasMany(models.Sales, { foreignKey: 'sellerId', as: 'orders' });
  }

  return User
};


module.exports = createUser;

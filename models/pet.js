module.exports = (sequelize, DataTypes) => {

  const pets = sequelize.define('pets', {

    pets_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },

    pets_breed: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    pets_age: {
      type: DataTypes.INTEGER(25),
      allowNull: false,
    },
    pets_temerament: {
      type: DataTypes.STRING(25),
      allowNull: false,
    }

  });

  pets.associate = function(models) {
    pets.belongsTo(models.User)
  };
  console.log('pets model has been called');

  return pets;

}
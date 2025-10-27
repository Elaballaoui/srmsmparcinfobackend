'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Departement.belongsTo(models.Direction, { foreignKey: 'IDDirection' });
      Departement.hasMany(models.Division, { foreignKey: 'IDDepartement' });
    }
  }
  Departement.init({
    NomDepartement: DataTypes.STRING,
    IDDirection: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Departement',
  });
  return Departement;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListeMateriel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListeMateriel.init({
    NumeroInventaire: DataTypes.STRING,
    NumeroSerie: DataTypes.STRING,
    EtatMateriels: DataTypes.STRING,
    IDLivraisonStock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListeMateriel',
  });
  return ListeMateriel;
};
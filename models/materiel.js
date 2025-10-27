'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materiel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materiel.init({
    MaterielDescription: DataTypes.STRING,
    MaterielQuantite: DataTypes.INTEGER,
    MaterielGarantie: DataTypes.INTEGER,
    PrixUnitaire: DataTypes.DECIMAL,
    IDMaterielCategorie: DataTypes.INTEGER,
    IDMarcheAppelOffre: DataTypes.INTEGER,
    IDMaterielModele: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materiel',
  });
  return Materiel;
};
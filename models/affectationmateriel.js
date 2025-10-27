'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AffectationMateriel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AffectationMateriel.init({
    IDAffectationMateriel: DataTypes.INTEGER,
    DateDebut: DataTypes.DATE,
    DateFin: DataTypes.DATE,
    IDInformationPersonnelle: DataTypes.INTEGER,
    IDListeMateriel: DataTypes.INTEGER,
    IDDirection: DataTypes.INTEGER,
    IDDepartement: DataTypes.INTEGER,
    IDDivision: DataTypes.INTEGER,
    IDService: DataTypes.INTEGER,
    IDSiteLocal: DataTypes.INTEGER,
    IDNumeroBureau: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AffectationMateriel',
  });
  return AffectationMateriel;
};
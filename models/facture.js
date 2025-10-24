'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Facture.init({
    NumeroFacture: DataTypes.STRING,
    DateFacture: DataTypes.DATE,
    MontantHT: DataTypes.DECIMAL,
    TauxTVA: DataTypes.INTEGER,
    MontantTTC: DataTypes.DECIMAL,
    IDMarcheAppelOffre: DataTypes.INTEGER,
    IDFournisseur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Facture',
  });
  return Facture;
};
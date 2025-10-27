'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InformationPersonnelle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InformationPersonnelle.init({
    // IDInformationPersonnelle: DataTypes.INTEGER,
    Matricule: DataTypes.INTEGER,
    Email: DataTypes.STRING,
    Prenom: DataTypes.STRING,
    Nom: DataTypes.STRING,
    EtatPersonnelle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InformationPersonnelle',
  });
  return InformationPersonnelle;
};
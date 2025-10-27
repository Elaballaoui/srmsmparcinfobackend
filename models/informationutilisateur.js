'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InformationUtilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InformationUtilisateur.init({
    MotDePasse: DataTypes.STRING,
    EtatUtilisateur: DataTypes.STRING,
    IDInformationPersonnelle: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InformationUtilisateur',
  });
  return InformationUtilisateur;
};
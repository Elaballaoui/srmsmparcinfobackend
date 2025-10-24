'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarcheAppelOffre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MarcheAppelOffre.init({
    TitreMarche: DataTypes.STRING,
    NumeroMarche: DataTypes.STRING,
    DescriptionMarche: DataTypes.STRING,
    DateMarche: DataTypes.DATE,
    IDFournisseur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MarcheAppelOffre',
  });
  return MarcheAppelOffre;
};
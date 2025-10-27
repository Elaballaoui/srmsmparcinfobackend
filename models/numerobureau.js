'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NumeroBureau extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NumeroBureau.belongsTo(models.SiteLocal, { foreignKey: 'IDSiteLocal' });
    }
  }
  NumeroBureau.init({
    NumeroBureau: DataTypes.STRING,
    NumeroEtage: DataTypes.STRING,
    IDSiteLocal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NumeroBureau',
  });
  return NumeroBureau;
};
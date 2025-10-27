'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteLocal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SiteLocal.hasMany(models.NumeroBureau, { foreignKey: 'IDSiteLocal' });
      SiteLocal.hasMany(models.Direction, { foreignKey: 'IDSiteLocal' });
    }
  }
  SiteLocal.init({
    NomSiteLocal: DataTypes.STRING,
    CodeSite: DataTypes.STRING,
    NomProvince: DataTypes.STRING,
    TypeSite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SiteLocal',
  });
  return SiteLocal;
};
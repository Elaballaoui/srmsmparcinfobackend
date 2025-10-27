'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AffectationMateriels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IDAffectationMateriel: {
        type: Sequelize.INTEGER
      },
      DateDebut: {
        type: Sequelize.DATE
      },
      DateFin: {
        type: Sequelize.DATE
      },
      IDInformationPersonnelle: {
        type: Sequelize.INTEGER
      },
      IDListeMateriel: {
        type: Sequelize.INTEGER
      },
      IDDirection: {
        type: Sequelize.INTEGER
      },
      IDDepartement: {
        type: Sequelize.INTEGER
      },
      IDDivision: {
        type: Sequelize.INTEGER
      },
      IDService: {
        type: Sequelize.INTEGER
      },
      IDSiteLocal: {
        type: Sequelize.INTEGER
      },
      IDNumeroBureau: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AffectationMateriels');
  }
};
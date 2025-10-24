'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Factures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NumeroFacture: {
        type: Sequelize.STRING
      },
      DateFacture: {
        type: Sequelize.DATE
      },
      MontantHT: {
        type: Sequelize.DECIMAL
      },
      TauxTVA: {
        type: Sequelize.INTEGER
      },
      MontantTTC: {
        type: Sequelize.DECIMAL
      },
      IDMarcheAppelOffre: {
        type: Sequelize.INTEGER
      },
      IDFournisseur: {
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
    await queryInterface.dropTable('Factures');
  }
};